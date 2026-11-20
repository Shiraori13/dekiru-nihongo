"""Multi-select vocabulary type filters, favorites workflow, and study shortcuts."""
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

    # 1. Verify 15 vocab types cover all 921 entries.
    assert page.evaluate("VOCAB_TYPE_LIST.length") == 15
    assert page.evaluate("VOCAB_TYPE_CODES.length") == 921
    assert page.evaluate("RAW_VOCAB.every((_, i) => VOCAB_TYPE_MAP.has(VOCAB_TYPE_CODES[i]))")
    assert page.locator("#fcTypeFront").is_visible()
    assert page.locator("#fcTypeFront").inner_text().strip() != ""

    # 2. Multi-select type filter panel, counts, Escape close, Select All / Clear.
    page.locator("#typeFilterToggle").click()
    assert page.locator("#typeFilterPanel").is_visible()
    assert page.locator("#typeFilterChecks input[type=checkbox]").count() == 15
    verb_count = int(page.locator('#typeFilterChecks [data-type-code="v"] .type-check-count').inner_text())
    adj_i_count = int(page.locator('#typeFilterChecks [data-type-code="i"] .type-check-count').inner_text())
    page.locator('#typeFilterChecks [data-type-code="v"] input').check()
    assert page.evaluate("currentFiltered.length") == verb_count
    page.locator('#typeFilterChecks [data-type-code="i"] input').check()
    assert page.evaluate("currentFiltered.length") == verb_count + adj_i_count
    assert "Tính chất (2)" in page.locator("#topicDetail").inner_text()

    # Quiz setup description reflects active vocab types and filters quiz questions.
    page.locator("[data-mode=quiz]").click()
    setup_desc = page.locator("#setupDesc").inner_text()
    assert "Tính chất (2)" in setup_desc and f"Tổng: {verb_count + adj_i_count}" in setup_desc, setup_desc
    page.locator('input[name="quizCount"][value="5"]').check()
    page.locator(".quiz-start-btn").click()
    assert page.evaluate('quizQuestions.every(q => ["v", "i"].includes(getVocabTypeCode(q)))')

    # Finish quiz to test starring directly from Quiz Review.
    for idx in range(5):
        page.locator(".quiz-opt-btn").first.click()
        if idx < 4:
            page.locator("#quizNextQuestion").click()
    page.locator("#quizSubmit").click()
    page.wait_for_function('document.getElementById("quizResult").style.display === "block"')
    first_quiz_fav = page.locator("[data-quiz-fav]").first
    first_quiz_fav.click()
    assert first_quiz_fav.get_attribute("aria-pressed") == "true"
    assert "Đã lưu" in first_quiz_fav.inner_text()
    assert "Yêu thích (1)" in page.locator("#favOnlyLabel").inner_text()

    # Clear type filters & test Escape key on panel.
    page.locator("[data-mode=flashcard]").click()
    page.locator("#typeFilterClear").click()
    assert page.evaluate("currentFiltered.length") == 921
    page.locator("#typeFilterChecks input").first.focus()
    page.keyboard.press("Escape")
    assert not page.locator("#typeFilterPanel").is_visible()

    # 3. Duplicate item.k disambiguation: starring 料理 in Lesson 1 must not star Lesson 2.
    page.select_option("#lessonSelect", "1")
    page.fill("#searchBox", "料理")
    assert page.evaluate("currentFiltered.length") == 1
    page.locator("#fcFavBtn").click()
    assert page.locator("#fcFavBtn").get_attribute("aria-pressed") == "true"
    # Flip card and check back-face star stays synced and toggles without unflipping.
    page.locator(".flashcard-container").click()
    assert page.locator("#flashcardInner").evaluate("el => el.classList.contains('is-flipped')")
    assert page.locator("[data-fc-fav]").get_attribute("aria-pressed") == "true"
    page.locator("[data-fc-fav]").click()
    assert page.locator("#flashcardInner").evaluate("el => el.classList.contains('is-flipped')")
    assert page.locator("[data-fc-fav]").get_attribute("aria-pressed") == "false"
    page.locator("[data-fc-fav]").click()
    assert page.locator("[data-fc-fav]").get_attribute("aria-pressed") == "true"
    page.select_option("#lessonSelect", "2")
    assert page.evaluate("currentFiltered.length") == 1
    assert page.locator("#fcFavBtn").get_attribute("aria-pressed") == "false"

    # 4. List view starring & Favorites-only toggle.
    page.locator("[data-mode=list]").click()
    assert page.locator(".vocab-type-badge").count() == 1
    list_fav = page.locator("[data-vocab-fav]").first
    list_fav.click()
    assert list_fav.get_attribute("aria-pressed") == "true"
    page.select_option("#lessonSelect", "all")
    page.fill("#searchBox", "")
    fav_total = page.evaluate("getFavoriteVocabCount()")
    assert fav_total >= 2
    page.locator("#favOnlyToggle").click()
    assert page.locator("#favOnlyToggle").get_attribute("aria-pressed") == "true"
    assert page.evaluate("currentFiltered.length") == fav_total
    assert "Chỉ từ yêu thích" in page.locator("#topicDetail").inner_text()

    # Unstarring inside favOnly updates filtered list without error.
    page.locator("[data-vocab-fav]").first.click()
    assert page.evaluate("currentFiltered.length") == fav_total - 1

    # 5. Notification deep-link opens Favorites directly in Flashcard mode.
    page.locator("#favOnlyToggle").click()  # turn off favOnly first
    assert page.locator("#favOnlyToggle").get_attribute("aria-pressed") == "false"
    page.locator("#notificationBtn").click()
    page.wait_for_selector('#notificationDialog[open]')
    fav_action = page.locator('[data-notif-action="favorites"]')
    assert fav_action.count() == 1
    fav_action.click()
    assert page.evaluate("currentMode") == "flashcard"
    assert page.locator("#favOnlyToggle").get_attribute("aria-pressed") == "true"
    assert page.evaluate("currentFiltered.length") == page.evaluate("getFavoriteVocabCount()")

    # 6. Legacy plain-k localStorage format still works and unstarring one duplicate keeps the other.
    page.evaluate('localStorage.setItem("dekiru_favs_v2", JSON.stringify(["料理"]))')
    page.reload()
    page.locator("#favOnlyToggle").click()
    assert page.evaluate("currentFiltered.length") == 2
    page.locator("#fcFavBtn").click()
    assert page.evaluate("currentFiltered.length") == 1
    page.locator("#favOnlyToggle").click()

    # 7. Study shortcuts expose all 5 non-vocab modes with reading first.
    shortcuts = page.locator("#studyShortcuts .study-shortcut")
    assert shortcuts.count() == 5
    shortcuts.nth(1).click()
    page.wait_for_function('currentMode === "speaking"')
    page.wait_for_selector("#speakingList")
    page.locator("[data-mode=flashcard]").click()
    shortcuts.nth(2).click()
    page.wait_for_function('currentMode === "kanji"')
    page.wait_for_selector("#kanjiWordList")

    # 8. Responsive overflow checks at 320px and 390px for filters + list actions.
    page.locator("[data-mode=list]").click()
    for width in [390, 320]:
        page.set_viewport_size({"width": width, "height": 844})
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), f"List overflow at {width}"
        fold = page.locator('[data-mobile-key="vocab-filters"] > summary')
        if fold.is_visible():
            if not page.locator('[data-mobile-key="vocab-filters"]').evaluate("d => d.open"):
                fold.click()
            page.locator("#typeFilterToggle").click()
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), f"Filter panel overflow at {width}"
            page.locator("#typeFilterToggle").click()

    assert not errors, errors
    browser.close()

print("PASS: 15 vocab types, multi-select, favorites disambiguation/filter/deep-link, 5 study shortcuts, responsive layouts.")
