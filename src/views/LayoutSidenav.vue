<template>
  <sidenav :orientation="orientation" :class="curClasses">
    <div class="app-brand demo" v-if="orientation !== 'horizontal'">
      <div class="d-flex justify-content-center align-items-center pb-2 mb-2">
          <img src="@/assets/cpiLogo.png" alt class="d-block ui-w-40 rounded-circle">
      </div>
      <span class="app-brand-text demo sidenav-text font-weight-normal ml-2">CPI Search Engine</span>
    </div>

    <!-- Links -->
    <div class="sidenav-inner" :class="{ 'py-1': orientation !== 'horizontal' }">
      <sidenav-divider class="mb-1"/>
      <!--<sidenav-header class="small font-weight-semibold">654-CPI Search Engine</sidenav-header>-->
      <sidenav-router-link icon="ion ion-md-search" to="/search" :exact="true">Search</sidenav-router-link>
      <sidenav-router-link icon="ion ion-ios-aperture" to="/searchWithSuggestions" :exact="true">Dropdown suggestions</sidenav-router-link>
      <sidenav-router-link icon="ion ion-ios-globe" to="/domain_settings" :exact="true">Domain settings</sidenav-router-link>
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
  }
}
</script>
