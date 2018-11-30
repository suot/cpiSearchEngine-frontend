<template>
  <router-link class="sidenav-item" tag="div" active-class="active" :class="{active: active, disabled: disabled}"
    :to="to"
    :replace="replace"
    :append="append"
    :exact="exact"
    :event="event">
    <a class="sidenav-link" :class="linkClass">
      <i class="sidenav-icon" v-if="icon" :class="icon"></i>
      <div><slot></slot></div>
      <div v-if="badge" class="pl-1 ml-auto"><div class="badge" :class="badgeClass">{{badge}}</div></div>
    </a>
  </router-link>
</template>

<script>
export default {
  name: 'sidenav-router-link',
  props: {
    to: null,
    replace: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    },
    event: null,
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
    }
  }
}
</script>
