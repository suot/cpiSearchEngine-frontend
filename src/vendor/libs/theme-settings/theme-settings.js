export default {
  get _themeSettings () {
    return window.themeSettings
  },

  _exec (fn) {
    return this._themeSettings && fn()
  },

  get options () {
    return (this._themeSettings && this._themeSettings.settings) || {}
  },

  getOption (name) {
    return this.options[name] || null
  },

  setRtl (rtl) {
    this._exec(() => this._themeSettings.setRtl(rtl))
  },

  setMaterial (rtl) {
    this._exec(() => this._themeSettings.setMaterial(rtl))
  },

  setTheme (themeName, updateStorage = true, cb = null) {
    this._exec(() => this._themeSettings.setTheme(themeName, updateStorage, cb))
  },

  setLayoutPosition (pos, updateStorage = true) {
    this._exec(() => this._themeSettings.setLayoutPosition(pos, updateStorage))
  },

  setLayoutNavbarFixed (fixed, updateStorage = true) {
    this._exec(() => this._themeSettings.setLayoutNavbarFixed(fixed, updateStorage))
  },

  setLayoutFooterFixed (fixed, updateStorage = true) {
    this._exec(() => this._themeSettings.setLayoutFooterFixed(fixed, updateStorage))
  },

  setLayoutReversed (reversed, updateStorage = true) {
    this._exec(() => this._themeSettings.setLayoutReversed(reversed, updateStorage))
  },

  setNavbarBg (bg, updateStorage = true) {
    this._exec(() => this._themeSettings.setNavbarBg(bg, updateStorage))
  },

  setSidenavBg (bg, updateStorage = true) {
    this._exec(() => this._themeSettings.setSidenavBg(bg, updateStorage))
  },

  setFooterBg (bg, updateStorage = true) {
    this._exec(() => this._themeSettings.setFooterBg(bg, updateStorage))
  },

  update () {
    this._exec(() => this._themeSettings.update())
  },

  updateNavbarBg () {
    this._exec(() => this._themeSettings.updateNavbarBg())
  },

  updateSidenavBg () {
    this._exec(() => this._themeSettings.updateSidenavBg())
  },

  updateFooterBg () {
    this._exec(() => this._themeSettings.updateFooterBg())
  },

  clearLocalStorage () {
    this._exec(() => this._themeSettings.clearLocalStorage())
  },

  destroy () {
    this._exec(() => this._themeSettings.destroy())
  }
}
