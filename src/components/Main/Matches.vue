<template>
    <div class="col-start-3 col-end-11 row-start-2 row-end-3 overflow-auto pt-24 pl-24">
        <transition-group name="fadeLeftBig">
            <div v-for="match in items.filterMatches" :key="match">
                <ul class="grid my-4 w-11/12 border-2 grid-cols-12 py-8">
                    <img
                        :src="require(`../../assets/games/${match.game}_logo_32.svg`)"
                        class="col-start-1 col-end-2"
                    />
                    <li class="col-start-3 col-end-4">
                        <img :src="require(`../../assets/clg.png`)" class="w-10 h-10" />
                    </li>
                    <li class="col-start-5 col-end-6">{{ match.oddsA }}</li>
                    <li class="col-start-6 col-end-8">Tournament</li>
                    <li class="col-start-8 col-end-9">{{ match.oddsB }}</li>
                    <li class="col-start-9 col-end-12">
                        <img :src="require(`../../assets/clg.png`)" class="w-10 h-10" />
                    </li>
                    <div class="col-start-12 col-end-13">></div>
                </ul>
            </div>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters(["items"]),
    },
    methods: {
        ...mapActions(["filterByType"]),
    },
    beforeMount() {
        this.filterByType("esport");
    },
};
</script>
