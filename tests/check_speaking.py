"""Speaking 57-question JPD123 interview module functional and layout checks."""
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

    page.locator("[data-mode=speaking]").click()
    page.wait_for_selector("#speakingList .speaking-item")
    assert page.locator("#speakingMode").is_visible()
    assert page.locator("#speakingList .speaking-item").count() == 57
    assert page.evaluate("SPEAKING_DATA.questions.length") == 57
    assert page.evaluate("Object.keys(SPEAKING_DATA.audio).length") == 166
    assert page.evaluate("Object.keys(SPEAKING_DATA.audio).every(k => Boolean(DEKIRU_AUDIO.files[k]))")

    # Lesson filter (lessons 4..7), topic filter, diacritic-insensitive Vietnamese search, clear.
    total_by_lesson = 0
    for lesson in ["4", "5", "6", "7"]:
        page.select_option("#speakingLesson", lesson)
        count = page.locator("#speakingList .speaking-item").count()
        assert count > 0, lesson
        total_by_lesson += count
    assert total_by_lesson == 57
    page.locator("#clearSpeakingFilters").click()
    assert page.locator("#speakingList .speaking-item").count() == 57

    first_topic = page.locator("#speakingTopic option").nth(1).get_attribute("value")
    page.select_option("#speakingTopic", first_topic)
    assert 0 < page.locator("#speakingList .speaking-item").count() < 57
    page.locator("#clearSpeakingFilters").click()

    page.fill("#speakingSearch", "mon an")
    assert page.locator("#speakingList .speaking-item").count() > 0
    page.fill("#speakingSearch", "khong-co-cau-hoi-nao")
    assert page.locator("#speakingEmpty").is_visible()
    page.locator("#resetSpeakingEmpty").click()
    assert not page.locator("#speakingEmpty").is_visible()
    assert page.locator("#speakingList .speaking-item").count() == 57

    # Card controls: hints, samples toggle, navigation, random, list view switch.
    page.locator("#speakingHintFurigana").uncheck()
    assert page.locator("#speakingQuestionJp").evaluate("el => el.classList.contains('hide-furigana')")
    page.locator("#speakingHintKana").uncheck()
    assert page.locator("#speakingQuestionKana").is_hidden()
    page.locator("#speakingHintVi").uncheck()
    assert page.locator("#speakingQuestionVi").is_hidden()
    page.locator("#speakingToggleSamples").click()
    assert page.locator("#speakingSamplesSection").is_hidden()
    page.locator("#speakingToggleSamples").click()
    assert page.locator("#speakingSamplesSection").is_visible()

    page.locator("#nextSpeaking").click()
    assert page.locator("#speakingPosition").inner_text() == "2 / 57"
    page.locator("#previousSpeaking").click()
    assert page.locator("#speakingPosition").inner_text() == "1 / 57"
    page.locator("#speakingRandomBtn").click()
    assert page.locator("#speakingCardPanel").is_visible()

    page.locator("#speakingViewList").click()
    assert page.locator("#speakingListPanel").is_visible()
    assert page.locator("#speakingListPanel .speaking-list-card").count() == 57
    page.locator("#speakingViewCard").click()
    assert page.locator("#speakingCardPanel").is_visible()

    # Mark done, filter done/todo, verify persistence across reload.
    page.locator("#completeSpeaking").click()
    assert page.locator("#speakingProgressCount").inner_text() == "1 / 57"
    page.select_option("#speakingStatusFilter", "done")
    assert page.locator("#speakingList .speaking-item").count() == 1
    page.select_option("#speakingStatusFilter", "todo")
    assert page.locator("#speakingList .speaking-item").count() == 56
    page.locator("#clearSpeakingFilters").click()

    page.reload()
    page.locator("[data-mode=speaking]").click()
    page.wait_for_selector("#speakingList .speaking-item")
    assert page.locator("#speakingProgressCount").inner_text() == "1 / 57"
    assert not page.locator("#speakingHintFurigana").is_checked()

    # Responsive check across narrow and wide viewports.
    for width in [320, 390, 768, 1440]:
        page.set_viewport_size({"width": width, "height": 900})
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), f"Speaking overflow at {width}"

    # Corrupt and blocked localStorage resilience.
    for init in [
        'localStorage.setItem("dekiru_speaking_v1", "{broken")',
        'Object.defineProperty(window, "localStorage", { get() { throw new Error("blocked"); } })',
    ]:
        ctx = browser.new_context()
        ctx.route("https://**/*", lambda route: route.abort())
        ctx.add_init_script(init)
        tab = ctx.new_page()
        tab.on("pageerror", lambda e: errors.append(str(e)))
        tab.goto((ROOT / "index.html").as_uri())
        tab.locator("[data-mode=speaking]").click()
        tab.wait_for_selector("#speakingList .speaking-item")
        assert tab.locator("#speakingList .speaking-item").count() == 57
        tab.locator("#completeSpeaking").click()
        assert tab.locator("#speakingProgressCount").inner_text() == "1 / 57"
        ctx.close()

    assert not errors, errors
    browser.close()

print("PASS: 57 speaking questions, 166 audio refs, filters, card/list views, persistence, responsive layouts, storage resilience.")
