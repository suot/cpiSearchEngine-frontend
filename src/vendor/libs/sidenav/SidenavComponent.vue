<template>
  <nav class="sidenav" :class="'sidenav-' + orientation">
    <slot></slot>
  </nav>
</template>

<style src="@/vendor/libs/perfect-scrollbar/perfect-scrollbar.scss" lang="scss"></style>

<script>
import PerfectScrollbar from 'perfect-scrollbar'
const SideNav = require('./sidenav.js').SideNav

export default {
  name: 'sidenav',
  props: {
    orientation: {
      type: String,
      default: 'vertical'
    },
    animate: {
      type: Boolean,
      default: true
    },
    accordion: {
      type: Boolean,
      default: true
    },
    closeChildren: {
      type: Boolean,
      default: false
    },
    showDropdownOnHover: {
      type: Boolean,
      default: false
    },
    onOpen: Function,
    onOpened: Function,
    onClose: Function,
    onClosed: Function
  },
  mounted () {
    this.orientation = this.orientation === 'horizontal' ? 'horizontal' : 'vertical'

    this.sidenav = new SideNav(this.$el, {
      orientation: this.orientation,
      animate: this.animate,
      accordion: this.accordion,
      closeChildren: this.closeChildren,
      showDropdownOnHover: this.showDropdownOnHover,

      onOpen: this.onOpen,
      onOpened: this.onOpened,
      onClose: this.onClose,
      onClosed: this.onClosed
    }, PerfectScrollbar)
  },
  beforeDestroy () {
    if (this.sidenav) this.sidenav.destroy()
    this.sidenav = null
  }
}
</script>
