<template>
  <sidenav :orientation="orientation" :class="curClasses">

    <!-- Brand demo (see src/demo.css) -->
    <!-- <div class="app-brand demo" v-if="orientation !== 'horizontal'">
      <div class="d-flex justify-content-center align-items-center pb-2 mb-2">
          <img src="@/assets/ac.jpg" alt class="d-block ui-w-40 rounded-circle">
      </div>
      <span class="app-brand-text demo sidenav-text font-weight-normal ml-2">Alumni Carpool</span>
    </div> -->

    <div class="app-brand demo" v-if="orientation !== 'horizontal'">
      <div class="d-flex justify-content-center align-items-center pb-2 mb-2">
          <img src="@/assets/cpiLogo.png" alt class="d-block ui-w-40 rounded-circle">
      </div>
      <span class="app-brand-text demo sidenav-text font-weight-normal ml-2">CPI Search</span>
    </div>

    <!-- Links -->
    <div class="sidenav-inner" :class="{ 'py-1': orientation !== 'horizontal' }">

      <!-- <sidenav-divider class="mb-1"/>
      <sidenav-header class="small font-weight-semibold">611-Alumni Carpool</sidenav-header>
      <sidenav-router-link icon="ion ion-md-car" to="/tickets/list" :exact="true">Tickets</sidenav-router-link>
      <sidenav-router-link icon="ion ion-md-megaphone" to="/postings/list" :exact="true">Postings</sidenav-router-link> -->

      <sidenav-divider class="mb-1"/>
      <sidenav-header class="small font-weight-semibold">654-CPI Search Engine</sidenav-header>
      <sidenav-router-link icon="ion ion-md-search" to="/cpi/search" :exact="true">Search</sidenav-router-link>
      <sidenav-router-link icon="ion ion-ios-globe" to="/cpi/domain_settings" :exact="true">Domain settings</sidenav-router-link>

    </div>
  </sidenav>
</template>

<script>
import { Sidenav, SidenavLink, SidenavRouterLink, SidenavMenu, SidenavHeader, SidenavBlock, SidenavDivider } from '@/vendor/libs/sidenav'

export default {
  name: 'app-layout-sidenav',
  components: {
    Sidenav,
    SidenavLink,
    SidenavRouterLink,
    SidenavMenu,
    SidenavHeader,
    SidenavBlock,
    SidenavDivider
  },

  props: {
    orientation: {
      type: String,
      default: 'vertical'
    }
  },

  computed: {
    curClasses () {
      let bg = this.layoutSidenavBg

      if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
        bg = bg
          .replace(' sidenav-dark', '')
          .replace(' sidenav-light', '')
          .replace('-darker', '')
          .replace('-dark', '')
      }

      return `bg-${bg} ` + (
        this.orientation !== 'horizontal'
          ? 'layout-sidenav'
          : 'layout-sidenav-horizontal container-p-x flex-grow-0'
      )
    }
  },

  methods: {
    isMenuActive (url) {
      return this.$route.path.indexOf(url) === 0
    },

    isMenuOpen (url) {
      return this.$route.path.indexOf(url) === 0 && this.orientation !== 'horizontal'
    },

    // toggleSidenav () {
    //   this.layoutHelpers.toggleCollapsed()
    // }
  }
}
</script>
