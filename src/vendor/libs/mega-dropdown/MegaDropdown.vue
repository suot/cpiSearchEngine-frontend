<template>
  <li class="nav-item mega-dropdown">
    <slot></slot>
  </li>
</template>

<script>
const MegaDropdownPlugin = require('./mega-dropdown.js').MegaDropdown

export default {
  name: 'mega-dropdown',
  props: ['trigger'],
  mounted () {
    this.megaDropdown = new MegaDropdownPlugin(
      this.$el.querySelector('.dropdown-toggle'),
      { trigger: this.trigger || 'click' }
    )
  },
  beforeDestroy () {
    if (this.megaDropdown) this.megaDropdown.destroy()
    this.megaDropdown = null
  }
}
</script>
