<template>
  <div
    class="h-screen grid sm:grid-rows-wrapperRows sm:grid-cols-wrapperColumns cursor-default"
  >
    <app-header></app-header>
    <app-left-panel></app-left-panel>
    <app-content></app-content>
    <app-bet-panel></app-bet-panel>
    <app-bet-slip></app-bet-slip>
  </div>
</template>

<script>
import Header from "./Header.vue"
import BetPanel from "./BetPanel.vue"
import Content from "./Content.vue"
import LeftPanel from "./LeftPanel.vue"
import BetSlip from "./BetSlip.vue"
import { mapGetters } from "vuex"
export default {
  components: {
    appHeader: Header,
    appBetPanel: BetPanel,
    appContent: Content,
    appLeftPanel: LeftPanel,
    appBetSlip: BetSlip,
  },
  computed: {
    ...mapGetters(["items"]),
  },
}
</script>

<style>
::-webkit-scrollbar {
  width: 3px;
} /* Track */
::-webkit-scrollbar-track {
  background: rgb(27, 32, 43);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

select {
  -webkit-appearance: none;
}
</style>
