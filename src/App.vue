<template>
  <app-home></app-home>
</template>

<script>
import Home from "./components/Home.vue"
export default {
  components: {
    appHome: Home,
  },
}
</script>

<style>
html,
body {
  max-width: 100%;
  overflow-x: hidden;
}
</style>
