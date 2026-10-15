"""Regression checks for card shortcuts after focused navigation/shuffle clicks."""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 900})
    page.route('https://**/*', lambda route: route.abort())
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto((ROOT / 'index.html').as_uri())
    page.evaluate('document.fonts.ready')
    for theme in ['light', 'dark']:
        page.evaluate('(theme) => document.body.dataset.theme = theme', theme)
        for control in ['#fcNext', '#fcPrev', '#fcShuffle']:
            page.evaluate('currentIndex = 2; updateCardUI()')
            page.locator(control).click()
            index = page.evaluate('currentIndex')
            order = page.evaluate('JSON.stringify(currentFiltered)')
            scroll = page.evaluate('scrollY')
            for key in ['Enter', 'ArrowUp', 'ArrowDown', 'Enter']:
                before = page.evaluate('isFlipped')
                page.keyboard.press(key)
                assert page.evaluate('isFlipped') != before
                assert page.evaluate('currentIndex') == index
                assert page.evaluate('JSON.stringify(currentFiltered)') == order
                assert page.evaluate('scrollY') == scroll
            page.keyboard.press('ArrowRight')
            assert page.evaluate('currentIndex') == index + 1
            page.keyboard.press('ArrowLeft')
            assert page.evaluate('currentIndex') == index
            assert page.evaluate('JSON.stringify(currentFiltered)') == order
            page.keyboard.down('Enter')
            flipped = page.evaluate('isFlipped')
            page.keyboard.down('Enter')  # Browser repeat must not flip again.
            assert page.evaluate('isFlipped') == flipped
            page.keyboard.up('Enter')

        page.evaluate('currentIndex = 2; updateCardUI()')
        page.locator('#fcNext').focus()
        page.keyboard.press('Space')
        assert page.evaluate('currentIndex') == 3
        page.locator('#fcFavBtn').focus()
        page.keyboard.press('Enter')
        assert page.evaluate('isFlipped')
        assert page.locator('.flashcard-container').evaluate('(el) => el === document.activeElement')
        assert page.locator('.flashcard-front').evaluate('(el) => el.inert && getComputedStyle(el).visibility === "hidden"')
        assert page.locator('.flashcard-back').is_visible()
        page.keyboard.press('Space')
        assert not page.evaluate('isFlipped')
        page.locator('.flashcard-container').click(position={'x': 200, 'y': 180})
        page.keyboard.press('Enter')
        assert not page.evaluate('isFlipped')
        assert page.locator('#flashcardInner').evaluate('(el) => getComputedStyle(el).transform === "none"')
        assert page.locator('.flashcard-container').evaluate('''(el) => {
            const style = getComputedStyle(el);
            return style.outlineStyle === 'solid' && style.outlineWidth === '3px'
                && style.outlineColor !== 'rgb(255, 255, 255)' && style.borderRadius !== '0px';
        }''')
        for _ in range(12):
            page.keyboard.press('Enter')
        page.evaluate('Promise.all(document.getAnimations().map(animation => animation.finished))')
        (ROOT / '.work').mkdir(exist_ok=True)
        page.screenshot(path=str(ROOT / f'.work/flashcard-keyboard-{theme}.png'), full_page=True)

    page.locator('#searchBox').focus()
    before = page.evaluate('[currentIndex, isFlipped]')
    for key in ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']:
        page.keyboard.press(key)
    assert page.evaluate('[currentIndex, isFlipped]') == before
    page.locator('.flashcard-container').focus()
    page.keyboard.press('Control+Enter')
    assert page.evaluate('[currentIndex, isFlipped]') == before
    page.locator('[data-mode="quiz"]').click()
    page.keyboard.press('Enter')
    assert page.evaluate('currentMode') == 'quiz'
    assert page.evaluate('[currentIndex, isFlipped]') == before
    assert not errors, errors
    browser.close()
    print('PASS: card shortcuts, focused controls, stable order, repeat protection, input isolation, light/dark rendering.')
