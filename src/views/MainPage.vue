<template>
  <div class="layout-wrapper layout-2">
    <div class="layout-inner">
      <app-layout-sidenav />

      <div class="layout-container">

        <div class="layout-content">
          <div class="router-transitions container-fluid flex-grow-1 container-p-y">
            <router-view />
          </div>

          <app-layout-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutSidenav from './LayoutSidenav'
import LayoutFooter from './LayoutFooter'

export default {
  name: 'app-layout-2',
  components: {
    'app-layout-sidenav': LayoutSidenav,
    'app-layout-footer': LayoutFooter
  },

}
</script>
