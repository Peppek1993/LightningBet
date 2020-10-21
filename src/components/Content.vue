<template>
  <div
    class="col-start-1 col-end-6 sm:col-start-2 sm:col-end-6 lg:col-start-3 lg:col-end-4 h-100 overflow-auto patternBackground"
  >
    <app-mobile-menu></app-mobile-menu>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./Footer.vue"
import MobileMenu from "./MobileMenu.vue"
export default {
  components: {
    appFooter: Footer,
    appMobileMenu: MobileMenu,
  },
}
</script>

<style>
.patternBackground {
  background: url("../assets/bg1.png");
}
</style>
