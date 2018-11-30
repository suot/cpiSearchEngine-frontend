import Vue from 'vue'

const TIMEOUT = 150

Vue.directive('hover-dropdown', {
  bind (el, binding, vnode) {
    const dropdown = vnode.componentInstance
    const toggle = el.querySelector('.dropdown-toggle')
    const menu = el.querySelector('.dropdown-menu')
    let timeout = null
    let hovered = false

    // Patch hideMenu method
    const _hideMenu = dropdown.hideMenu
    dropdown.hideMenu = function () {
      // Prevent dropdown close
      if (!hovered) _hideMenu.call(this)
      else dropdown.visible = true
    }

    function isStatic () {
      return window.getComputedStyle(menu, null).getPropertyValue('position') === 'static'
    }

    function clearCloseTimeout () {
      if (!timeout) return
      clearTimeout(timeout)
      timeout = null
    }

    function show () {
      clearCloseTimeout()
      if (isStatic() || dropdown.visible) return
      dropdown.$nextTick(() => dropdown.show())
    }

    function hide () {
      clearCloseTimeout()
      if (isStatic()) return

      timeout = setTimeout(() => {
        clearCloseTimeout()
        dropdown.hide()
      }, TIMEOUT)
    }

    const listeners = {
      toggleMouseenter: () => {
        if (!isStatic()) hovered = true
        show()
      },
      toggleMouseleave:  () => {
        hovered = false
        hide()
      },
      menuMouseenter: show,
      menuMouseleave:  hide
    }

    toggle.addEventListener('mouseenter', listeners.toggleMouseenter)
    toggle.addEventListener('mouseleave', listeners.toggleMouseleave)
    menu.addEventListener('mouseenter', listeners.menuMouseenter)
    menu.addEventListener('mouseleave', listeners.menuMouseleave)

    // Save data
    el.hoverDropdownDirectiveData = {
      toggle,
      menu,
      clearCloseTimeout,
      listeners
    }
  },
  unbind (el) {
    const i = el.hoverDropdownDirectiveData

    if (!i) return

    i.clearCloseTimeout()

    i.toggle.removeEventListener('mouseenter', i.listeners.toggleMouseenter)
    i.toggle.removeEventListener('mouseleave', i.listeners.toggleMouseleave)
    i.menu.removeEventListener('mouseenter', i.listeners.menuMouseenter)
    i.menu.removeEventListener('mouseleave', i.listeners.menuMouseleave)

    el.hoverDropdownDirectiveData = null
  }
})
