<template>
  <div class="sidenav-item" :class="{active: active, disabled: disabled, open: open}">
    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle" :class="linkClass">
      <i class="sidenav-icon" v-if="icon" :class="icon"></i>
      <div><slot name="link-text"></slot></div>
      <div v-if="badge" class="pl-1 ml-auto"><div class="badge" :class="badgeClass">{{badge}}</div></div>
    </a>
    <div class="sidenav-menu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidenav-menu',
  props: {
    icon: String,
    linkClass: {
      type: String,
      default: ''
    },
    badge: {
      default: null
    },
    badgeClass: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>
