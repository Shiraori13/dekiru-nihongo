"""Reproducible browser selection and lazy feature readiness for existing checks."""
import os

def launch(playwright, **kwargs):
    engine=os.environ.get('DEKIRU_BROWSER','chromium')
    channel=os.environ.get('DEKIRU_CHANNEL','msedge' if os.name=='nt' and 'DEKIRU_BROWSER' not in os.environ else '')
    if engine=='edge':channel='msedge'
    executable=os.environ.get('DEKIRU_EXECUTABLE_PATH')
    if executable:kwargs['executable_path']=executable
    if engine=='firefox': return playwright.firefox.launch(headless=True,**kwargs)
    return playwright.chromium.launch(headless=True,**({'channel':channel} if channel else {}),**kwargs)

def all_features(page):
    """Content-wide legacy checks opt into all banks; launch still loads on demand."""
    page.evaluate("async()=>{for(const m of ['reading','kanji','grammar','exam'])await FeatureLoader.ensure(m);}")
    page.wait_for_selector('#examMode[data-ready=true]',state='attached')

def install_legacy_readiness(interactions=True):
    """Preserve legacy coverage after lazy loading and mobile disclosures.

    Content-wide suites explicitly request banks after navigation. Interactions
    open the same summary/menu/writing tab a person must use on a small screen;
    hidden/visible assertions themselves are never modified. On-demand loading
    and disclosure behavior have their own unpatched suites.
    """
    from playwright.sync_api import Page, Locator
    for name in ['goto','reload']:
        original=getattr(Page,name)
        def navigate(self,*args,_original=original,**kwargs):
            result=_original(self,*args,**kwargs)
            if 'index.html' in self.url: all_features(self)
            return result
        setattr(Page,name,navigate)
    if not interactions:return
    def reveal(locator):
        if not locator.count():return
        locator.first.evaluate('''el=>{
          if(el.matches('[data-mode]')&&el.closest('#mobileMenu')&&!el.closest('#mobileMenu').open)document.querySelector('#mobileMore').click();
          const closed=[];for(let p=el.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS'&&!p.open&&!p.querySelector(':scope>summary')?.contains(el))closed.unshift(p);
          for(const d of closed)d.querySelector(':scope>summary').click();
          if(el.id==='kanjiCanvas'&&!el.getClientRects().length)document.querySelector('[data-mobile-writing="1"]')?.click();
        }''')
    for name in ['click','fill','check','uncheck','select_option','scroll_into_view_if_needed']:
        original=getattr(Locator,name)
        def interact(self,*args,_original=original,**kwargs):
            reveal(self)
            result=_original(self,*args,**kwargs)
            self.page.wait_for_function("document.querySelector('#examMode')?.dataset.saving!=='true'")
            return result
        setattr(Locator,name,interact)
    for name in ['fill','select_option','click','check']:
        original=getattr(Page,name)
        def interact_page(self,selector,*args,_original=original,**kwargs):
            reveal(self.locator(selector))
            return _original(self,selector,*args,**kwargs)
        setattr(Page,name,interact_page)

def reset_attempt_store(page):
    """Tests that intentionally install a pre-v2 localStorage fixture reset authority."""
    page.evaluate('''()=>new Promise((resolve,reject)=>{
      const r=indexedDB.open('dekiru_attempts_v2',1);
      r.onupgradeneeded=()=>r.result.createObjectStore('state');
      r.onsuccess=()=>{const db=r.result,tx=db.transaction('state','readwrite');tx.objectStore('state').clear();tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>reject(tx.error);};r.onerror=()=>reject(r.error);
    })''')

def continue_exam(page):
    """Single-page legacy suites explicitly reclaim an unexpired reload lease."""
    if page.locator('#exOwnership').is_visible():
        page.locator('[data-ex-takeover]').click()
        page.locator('#exConfirmAccept').click()
        page.wait_for_function('document.querySelector("#exOwnership").hidden && !!document.querySelector("[data-ex-answer]") && !document.querySelector("[data-ex-answer]").disabled')
