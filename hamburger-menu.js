var HamburgerMenu = function(selector, callback) {
  this.selector = selector || '.hamburger-memu'
  this.container = document.querySelector(this.selector)
  this.callback = callback || null
  this.insertStyle()
  this.init()
}

HamburgerMenu.prototype.init = function() {
  var f = document.createDocumentFragment()
  for (var i = 0; i < 3; i++) {
    var s = document.createElement('span')
    s.classList.add('burger-menu-item')
    f.appendChild(s)
  }
  this.container.appendChild(f)
  this.bindEvent()
}

HamburgerMenu.prototype.bindEvent = function() {
  var self = this
  this.container.addEventListener('touchend', function toggleMenu() {
    self.container.classList.toggle('open')
    if (typeof self.callback === 'function') {
      self.callback.call(null)
    }
  })
}

HamburgerMenu.prototype.insertStyle = function() {
  var styleEl = document.createElement('style')
  styleEl.innerText =
    '.hamburger-memu { width: 30px; height: 30px;box-sizing: border-box;}' +
    '.hamburger-memu .burger-menu-item {display: block;width: 30px;height: 2px;background: #333333;margin-top: 8px;transition: all ease-in-out 0.3s;}.hamburger-memu.open .burger-menu-item:nth-child(2) {width: 0;opacity: 0;}.hamburger-memu.open .burger-menu-item:nth-child(1) {transform: translateY(10px) rotateZ(45deg);}.hamburger-memu.open .burger-menu-item:nth-child(3) {transform: translateY(-10px) rotateZ(-45deg);}'
  document.head.appendChild(styleEl)
}
