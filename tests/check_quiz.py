"""Exercise delayed grading, progress, review, retries and immediate-mode timers."""
import sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'.tools'))
from playwright.sync_api import sync_playwright
(ROOT/'.work').mkdir(exist_ok=True)

with sync_playwright() as p:
    browser=p.chromium.launch(channel='msedge',headless=True)
    context=browser.new_context(viewport={'width':1440,'height':1100},reduced_motion='reduce')
    context.route('https://**/*',lambda route:route.abort())
    page=context.new_page(); errors=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.goto((ROOT/'index.html').as_uri())
    page.locator('[data-mode=quiz]').click()
    page.select_option('#lessonSelect','4')
    page.locator('input[name="quizCount"][value="5"]').check()
    page.locator('.quiz-start-btn').click()
    assert page.evaluate('quizGrading')=='submit'
    assert page.locator('#quizProgressBar').get_attribute('value')=='0'
    assert page.locator('#quizProgressBar').get_attribute('max')=='5'
    assert page.locator('#quizScore').is_hidden()
    assert not page.locator('#vocabFilters').is_visible()
    # Visiting a question must never mark it answered; current and answered differ.
    for index in range(5):
        page.locator('#quizQuestionMap button').nth(index).click()
        assert page.locator('#quizMapCurrentStatus').inner_text()==f'Câu {index+1}: Chưa trả lời'
        assert page.locator('#quizQuestionMap .is-answered').count()==0
        assert page.locator('.quiz-opt-btn[aria-pressed=true]').count()==0
        assert page.locator('#quizProgressBar').get_attribute('value')=='0'
    assert page.locator('.quiz-map-answer-mark').all_inner_texts()==['○']*5
    for index in range(4):
        page.locator('#quizQuestionMap button').nth(index).click()
        page.locator('.quiz-opt-btn').first.click()
    page.locator('#quizQuestionMap button').nth(4).click()
    assert page.locator('#quizMapCurrentStatus').inner_text()=='Câu 5: Chưa trả lời'
    assert page.locator('#quizQuestionMap .is-answered').count()==4
    assert page.locator('.quiz-map-answer-mark').all_inner_texts()==['✓']*4+['○']
    assert page.locator('.quiz-opt-btn[aria-pressed=true]').count()==0
    assert page.locator('#quizPercent').inner_text()=='80%'
    page.locator('#themeToggle').click()
    page.locator('#quizQuestionNavigator').screenshot(path=str(ROOT/'.work/quiz-map-unanswered-dark.png'))
    page.set_viewport_size({'width':320,'height':1100})
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    page.locator('#quizQuestionNavigator').screenshot(path=str(ROOT/'.work/quiz-map-unanswered-mobile.png'))
    page.locator('#themeToggle').click()
    page.set_viewport_size({'width':1440,'height':1100})
    page.locator('.quiz-new-setup').click();page.locator('.quiz-start-btn').click()
    assert page.locator('#quizQuestionMap .is-answered').count()==0
    assert page.locator('.quiz-map-answer-mark').all_inner_texts()==['○']*5
    assert page.locator('#quizMapCurrentStatus').inner_text()=='Câu 1: Chưa trả lời'
    questions=page.evaluate('quizQuestions')
    options=page.evaluate('quizOptionSets')
    assert all(len(set(opts))==4 and q['m'] in opts for opts,q in zip(options,questions))
    # Change an answer; exactly one choice stays selected, no early grading.
    page.get_by_role('button',name=questions[0]['m'],exact=True).click()
    wrong=next(opt for opt in options[0] if opt!=questions[0]['m'])
    page.get_by_role('button',name=wrong,exact=True).click()
    assert page.locator('.quiz-opt-btn[aria-pressed=true]').count()==1
    assert page.locator('#quizMapCurrentStatus').inner_text()=='Câu 1: Đã trả lời'
    assert page.locator('#quizProgressBar').get_attribute('value')=='1'
    assert page.locator('#quizPercent').inner_text()=='20%'
    assert page.locator('.quiz-opt-btn.correct, .quiz-opt-btn.incorrect').count()==0
    assert page.evaluate('quizScore')==0
    assert page.evaluate('quizIndex')==0
    for index,correct in [(1,True),(3,True),(4,False)]:
        page.locator('#quizQuestionMap button').nth(index).click()
        selected=questions[index]['m'] if correct else next(opt for opt in options[index] if opt!=questions[index]['m'])
        page.get_by_role('button',name=selected,exact=True).click()
    assert page.locator('#quizProgressBar').get_attribute('value')=='4'
    assert page.locator('#quizPercent').inner_text()=='80%'
    assert page.locator('#quizQuestionMap .is-answered').count()==4
    page.locator('#quizQuestionMap button').nth(0).click()
    assert page.locator('.quiz-opt-btn[aria-pressed=true]').get_attribute('aria-label')==wrong
    assert page.evaluate('quizOptionSets')==options
    saved_answers=page.evaluate('quizAnswers')
    # Study other content/filter it, then return to the same quiz snapshot.
    page.locator('[data-mode=list]').click();page.select_option('#lessonSelect','7')
    page.locator('[data-mode=quiz]').click()
    assert page.evaluate('quizAnswers')==saved_answers
    assert page.evaluate('quizQuestions')==questions
    assert page.locator('#quizSessionInfo').inner_text().startswith('Bài 4')
    page.locator('#quizBox').screenshot(path=str(ROOT/'.work/quiz-progress-desktop.png'))
    for width in [320,390]:
        page.set_viewport_size({'width':width,'height':1100})
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
        assert page.locator('#quizBox').evaluate('(e) => e.scrollWidth <= e.clientWidth')
    page.locator('#quizBox').screenshot(path=str(ROOT/'.work/quiz-progress-mobile.png'))
    page.locator('#quizSubmit').click()
    assert page.locator('#quizSubmitNotice').is_visible()
    assert page.locator('#quizSubmitNoticeText').inner_text().startswith('Còn 1 câu')
    assert page.evaluate('quizState')=='running'
    page.get_by_role('button',name='Làm câu còn trống',exact=True).click()
    assert page.evaluate('quizIndex')==2
    assert page.locator('.quiz-opt-btn[aria-pressed=true]').count()==0
    page.locator('#quizSubmit').click();page.locator('#quizSubmitAnyway').click()
    assert page.locator('#finalScore').inner_text()=='40%'
    assert [page.locator('#'+id).inner_text() for id in ['quizCorrectCount','quizWrongCount','quizSkippedCount']]==['2','2','1']
    assert page.locator('.quiz-review-card').count()==5
    assert page.locator('.quiz-review-card.incorrect').count()==2
    assert page.locator('.quiz-review-card.skipped').count()==1
    assert page.locator('.quiz-review-option.is-correct').count()==5
    assert page.locator('.quiz-review-option.is-incorrect').count()==2
    assert 'Bạn chưa chọn' in page.locator('[data-review-index="2"]').inner_text()
    page.evaluate('submitQuiz(); handleQuizAnswer(quizQuestions[quizIndex].m, quizIndex)')
    assert page.evaluate('quizAnswers')==saved_answers
    page.locator('#quizReviewMistakes').click()
    assert page.locator('.quiz-review-card').evaluate_all('(els) => els.map(e => Number(e.dataset.reviewIndex))')==[0,2,4]
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    page.locator('#quizResult').screenshot(path=str(ROOT/'.work/quiz-review-mobile.png'))
    page.locator('#themeToggle').click()
    page.locator('#quizResult').screenshot(path=str(ROOT/'.work/quiz-review-dark.png'))
    page.locator('[data-mode=flashcard]').click();page.locator('[data-mode=quiz]').click()
    assert page.locator('#quizResult').is_visible()
    assert page.locator('#quizReviewMistakes').get_attribute('aria-pressed')=='true'
    page.get_by_role('button',name='↻ Làm lại đề này',exact=True).click()
    assert page.evaluate('quizQuestions')==questions
    assert page.evaluate('quizOptionSets')==options
    assert page.evaluate('quizAnswers.every(a => a === null)')
    assert page.locator('#quizProgressBar').get_attribute('value')=='0'
    assert page.locator('#quizQuestionMap .is-answered').count()==0
    assert page.locator('#quizMapCurrentStatus').inner_text()=='Câu 1: Chưa trả lời'
    assert page.locator('.quiz-review-card').count()==0
    for index,q in enumerate(questions):
        page.locator('#quizQuestionMap button').nth(index).click()
        page.get_by_role('button',name=q['m'],exact=True).click()
    assert page.locator('#quizProgressBar').get_attribute('value')=='5'
    assert page.locator('#quizPercent').inner_text()=='100%'
    page.locator('#quizSubmit').click()
    assert page.locator('#quizSubmitNotice').is_hidden()
    assert page.locator('#finalScore').inner_text()=='100%'
    page.locator('#quizReviewMistakes').click()
    assert page.locator('.quiz-review-card').count()==0
    assert 'đúng tất cả' in page.locator('#quizReviewList').inner_text()
    # Empty and single-question attempts have consistent scoring/progress.
    page.evaluate('showQuizSetup()')
    page.locator('input[name="quizCount"][value="custom"]').check()
    page.fill('#quizCustomCount','1');page.locator('.quiz-start-btn').click()
    page.locator('#quizSubmit').click();page.locator('#quizSubmitAnyway').click()
    assert page.locator('#finalScore').inner_text()=='0%'
    assert page.locator('#quizSkippedCount').inner_text()=='1'
    # Immediate grading still advances and safely resumes after a tab change.
    page.evaluate('showQuizSetup()')
    page.locator('input[name="quizGrading"][value="instant"]').check()
    page.fill('#quizCustomCount','2');page.locator('.quiz-start-btn').click()
    correct=page.evaluate('quizQuestions[0].m')
    page.get_by_role('button',name=correct,exact=True).click()
    assert page.locator('#quizProgressBar').get_attribute('value')=='1'
    page.locator('[data-mode=reading]').click();page.wait_for_timeout(1000)
    assert page.evaluate('quizIndex')==0
    page.locator('[data-mode=quiz]').click()
    assert page.evaluate('quizIndex')==1
    assert page.locator('#quizExamActions').is_hidden()
    wrong=page.evaluate('quizOptionSets[1].find(x => x !== quizQuestions[1].m)')
    page.get_by_role('button',name=wrong,exact=True).click()
    page.evaluate('handleQuizAnswer(quizQuestions[1].m, 1)')
    page.wait_for_function('quizState === "submitted"')
    assert page.locator('#finalScore').inner_text()=='50%'
    assert page.locator('.quiz-review-card.incorrect').count()==1
    # A delayed callback from an abandoned immediate attempt cannot alter a new one.
    page.evaluate('retryQuiz()')
    page.get_by_role('button',name=page.evaluate('quizQuestions[0].m'),exact=True).click()
    page.evaluate('showQuizSetup()')
    page.locator('input[name="quizGrading"][value="submit"]').check()
    page.locator('.quiz-start-btn').click();page.wait_for_timeout(1000)
    assert page.evaluate('quizIndex')==0
    assert page.evaluate('quizAnswers.every(a => a === null)')
    # Full vocabulary scope: navigation and review remain usable at 921 questions.
    page.evaluate('showQuizSetup()');page.select_option('#lessonSelect','all')
    page.locator('input[name="quizCount"][value="all"]').check()
    page.locator('.quiz-start-btn').click()
    assert page.locator('#quizQuestionMap button').count()==921
    page.evaluate('goToQuizQuestion(920)')
    assert page.locator('#quizQuestionMap').evaluate('(e) => e.scrollTop')>0
    assert page.locator('#quizQuestionMap button').nth(920).get_attribute('aria-current')=='step'
    page.get_by_role('button',name=page.evaluate('quizQuestions[920].m'),exact=True).click()
    assert page.locator('#quizProgressBar').get_attribute('value')=='1'
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    page.locator('#quizSubmit').click();page.locator('#quizSubmitAnyway').click()
    assert page.locator('.quiz-review-card').count()==921
    assert page.locator('#quizCorrectCount').inner_text()=='1'
    assert page.locator('#quizSkippedCount').inner_text()=='920'
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
    assert not errors,errors
    browser.close()
print('PASS: progress, editable single answers, deferred grading, skipped questions, marked review, retries, tab resumption, immediate grading and 921-question scope.')
