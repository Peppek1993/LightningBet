<template>
    <div class="h-screen grid wrapper">
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
import { mapGetters } from "vuex";
export default {
    components: {
        appHeader: Header,
        appBetPanel: BetPanel,
        appContent: Content,
        appLeftPanel: LeftPanel,
    },
    computed: {
        ...mapGetters(["items"]),
    },
    mounted() {
        this.$nextTick(function () {
            window.addEventListener("resize", this.getWindowWidth);
            this.getWindowWidth();
        });
    },
    methods: {
        getWindowWidth(event) {
            if (document.documentElement.clientWidth < 1024) {
                this.items.leftPanelHidden = false;
                this.items.rightPanelHidden = true;
            }
        },
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.getWindowWidth);
    },
};
</script>

<style>
.wrapper {
    grid-template-rows: 60px 1fr;
    grid-template-columns: 4rem 10rem 1fr 10rem 4rem;
}

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
</style>
