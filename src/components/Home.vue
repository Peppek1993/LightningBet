<template>
    <div class="h-screen grid grid-cols-12 grid-rows-layout wrapper">
        <app-header></app-header>
        <app-left-panel></app-left-panel>
        <app-content></app-content>
        <app-bet-panel></app-bet-panel>
    </div>
</template>

<script>
import Header from "./Header.vue";
import BetPanel from "./BetPanel.vue";
import Content from "./Content.vue";
import LeftPanel from "./LeftPanel.vue";
export default {
    components: {
        appHeader: Header,
        appBetPanel: BetPanel,
        appContent: Content,
        appLeftPanel: LeftPanel,
    },
};
</script>

<style>
.wrapper {
    max-width: 100vw;
}
</style>
