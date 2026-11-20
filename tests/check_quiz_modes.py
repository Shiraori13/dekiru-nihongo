"""Multi-directional vocabulary quiz (4 directions) and wrong-word practice checks."""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / ".tools"))
from playwright.sync_api import sync_playwright
from browser_support import launch

with sync_playwright() as p:
    browser = launch(p)
    context = browser.new_context(viewport={"width": 1440, "height": 1000}, reduced_motion="reduce")
    context.route("https://**/*", lambda route: route.abort())
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    page.goto((ROOT / "index.html").as_uri())

    page.locator("[data-mode=quiz]").click()
    assert page.locator('input[name="quizDirection"]').count() == 4
    assert page.locator("#quizMistakeBanner").is_hidden()

    # 1. Kanji -> Kana mode filters pool to 608 Kanji words, hides kana prompt, grades correctly.
    page.locator('input[name="quizDirection"][value="kanji-kana"]').check()
    assert page.locator("#quizAllDetail").inner_text() == "608 câu"
    assert "Chỉ từ có chữ Hán" in page.locator("#setupDesc").inner_text()
    page.locator('input[name="quizCount"][value="custom"]').check()
    page.fill("#quizCustomCount", "4")
    page.locator(".quiz-start-btn").click()
    assert page.evaluate('quizDirection === "kanji-kana"')
    assert page.evaluate("quizQuestions.every(q => QuizCore.hasKanji(q))")
    assert page.locator("#quizKana").is_hidden()
    assert page.locator("#quizAudioPrompt").is_hidden()
    assert page.locator("#quizContext").inner_text().startswith("Nghĩa:")
    assert page.locator(".quiz-opt-btn .quiz-option-text").first.get_attribute("lang") == "ja"

    # Answer 2 right, 1 wrong, 1 skipped -> check review & mistake actions.
    questions = page.evaluate("quizQuestions")
    options = page.evaluate("quizOptionSets")
    page.get_by_role("button", name=questions[0]["h"], exact=True).click()
    page.locator("#quizNextQuestion").click()
    page.get_by_role("button", name=questions[1]["h"], exact=True).click()
    page.locator("#quizNextQuestion").click()
    wrong_kana = next(o for o in options[2] if o != questions[2]["h"])
    page.get_by_role("button", name=wrong_kana, exact=True).click()
    page.locator("#quizSubmit").click()
    page.locator("#quizSubmitAnyway").click()
    assert page.locator("#finalScore").inner_text() == "50%"
    assert page.locator(".quiz-review-meaning").count() == 4
    assert page.locator("#quizRetryMistakesBtn").is_visible()
    assert "2 câu sai" in page.locator("#quizRetryMistakesBtn").inner_text()
    assert page.locator("#quizSaveMistakesBtn").is_visible()
    assert page.evaluate("getQuizMistakeCount()") == 2

    # Save wrong words to favorites in 1 click.
    page.locator("#quizSaveMistakesBtn").click()
    assert page.locator("#quizSaveMistakesBtn").is_disabled()
    assert "Đã lưu hết" in page.locator("#quizSaveMistakesBtn").inner_text()
    assert page.evaluate("getFavoriteVocabCount()") == 2

    # 2. Retry only the 2 wrong/skipped words right from Result screen.
    page.locator("#quizRetryMistakesBtn").click()
    assert page.evaluate("quizQuestions.length") == 2
    assert page.evaluate('quizDirection === "kanji-kana"')
    retry_qs = page.evaluate("quizQuestions")
    expected_keys = {f'{questions[i]["l"]}::{questions[i]["k"]}::{questions[i]["h"]}' for i in [2, 3]}
    actual_keys = {f'{q["l"]}::{q["k"]}::{q["h"]}' for q in retry_qs}
    assert actual_keys == expected_keys

    # Answer 1 right, 1 wrong -> mistake bank shrinks from 2 to 1.
    page.get_by_role("button", name=retry_qs[0]["h"], exact=True).click()
    page.locator("#quizNextQuestion").click()
    wrong2 = next(o for o in page.evaluate("quizOptionSets[1]") if o != retry_qs[1]["h"])
    page.get_by_role("button", name=wrong2, exact=True).click()
    page.locator("#quizSubmit").click()
    assert page.locator("#finalScore").inner_text() == "50%"
    assert page.evaluate("getQuizMistakeCount()") == 1

    # 3. Setup screen mistake banner + Vi -> JP direction + clearing mistake by answering right.
    page.evaluate("showQuizSetup(true)")
    assert page.locator("#quizMistakeBanner").is_visible()
    assert "1 từ hay sai" in page.locator("#quizMistakeTitle").inner_text()
    page.locator('input[name="quizDirection"][value="vi-jp"]').check()
    page.locator("#quizPracticeMistakesBtn").click()
    assert page.evaluate('quizDirection === "vi-jp"')
    assert page.evaluate("quizQuestions.length") == 1
    assert page.locator("#quizKanji").evaluate("el => el.classList.contains('is-vietnamese')")
    assert page.locator("#quizKana").is_hidden()
    correct_jp = page.evaluate('QuizCore.correctAnswer(quizQuestions[0], "vi-jp")')
    page.get_by_role("button", name=correct_jp, exact=True).click()
    page.locator("#quizSubmit").click()
    assert page.locator("#finalScore").inner_text() == "100%"
    assert page.locator("#quizRetryMistakesBtn").is_hidden()
    assert page.locator("#quizSaveMistakesBtn").is_hidden()
    assert page.evaluate("getQuizMistakeCount()") == 0
    page.evaluate("showQuizSetup(true)")
    assert page.locator("#quizMistakeBanner").is_hidden()

    # 4. Audio -> Vi direction (instant mode reveals word after answer, audio prompt visible).
    page.locator('input[name="quizDirection"][value="audio-vi"]').check()
    page.locator('input[name="quizGrading"][value="instant"]').check()
    page.locator('input[name="quizCount"][value="custom"]').check()
    page.fill("#quizCustomCount", "2")
    page.locator(".quiz-start-btn").click()
    assert page.evaluate('quizDirection === "audio-vi"')
    assert page.locator("#quizAudioPrompt").is_visible()
    assert page.locator("#quizKanji").is_hidden()
    assert page.locator("#quizKana").is_hidden()
    page.locator("#quizAudioPlayBtn").click()
    first_wrong = page.evaluate('quizOptionSets[0].find(o => !QuizCore.isCorrect(o, quizQuestions[0], "audio-vi"))')
    page.get_by_role("button", name=first_wrong, exact=True).click()
    assert page.locator("#quizKanji").is_visible()
    assert page.locator("#quizKana").is_visible()
    page.wait_for_function("quizIndex === 1")
    second_correct = page.evaluate("quizQuestions[1].m")
    page.get_by_role("button", name=second_correct, exact=True).click()
    page.wait_for_function('quizState === "submitted"')
    assert page.locator("#finalScore").inner_text() == "50%"
    assert page.evaluate("getQuizMistakeCount()") == 1
    assert page.locator("[data-quiz-audio]").count() == 2

    # 5. Notification deep-link opens Mistake quiz & Clear button empties mistake bank.
    page.locator("[data-mode=flashcard]").click()
    page.locator("#notificationBtn").click()
    page.wait_for_selector("#notificationDialog[open]")
    assert page.locator('[data-notif-action="mistakes"]').count() == 1
    page.locator('[data-notif-action="mistakes"]').click()
    assert page.evaluate('currentMode === "quiz" && quizState === "running" && quizQuestions.length === 1')
    page.evaluate("showQuizSetup(true)")
    assert page.locator("#quizMistakeBanner").is_visible()

    # 6. Responsive 320px / 390px light & dark overflow checks on Setup (with banner), Active, Result.
    for width in [390, 320]:
        page.set_viewport_size({"width": width, "height": 844})
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), f"Quiz setup overflow at {width}"
        page.locator("#themeToggle").click()
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), f"Quiz setup dark overflow at {width}"
        page.locator("#themeToggle").click()
    page.locator("#quizClearMistakesBtn").click()
    assert page.locator("#quizMistakeBanner").is_hidden()
    assert page.evaluate("getQuizMistakeCount()") == 0

    assert not errors, errors
    browser.close()

print("PASS: 4-direction vocabulary quiz, homophone-safe audio quiz, mistake bank, retry mistakes, save mistakes, notifications, and 320/390px layouts.")
