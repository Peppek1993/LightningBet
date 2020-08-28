<template>
    <div class="row-start-2 row-end-3 overflow-auto pt-24">
        <transition-group name="fadeLeftBig">
            <div v-for="match in items.filterMatches" :key="match">
                <div class="matchesWrapper my-4 rounded-lg px-12">
                    <div class="py-8 px-6 border-2 rounded-lg bg-gray-500">
                        <img
                            :src="require(`../../assets/games/${match.game}_logo_32.svg`)"
                            class="w-8 h-8"
                        />
                    </div>
                    <ul class="matchWrapper bg-gray-700">
                        <li class="col-start-1 col-end-2">{{match.nameA}}</li>
                        <li class="col-start-2 col-end-3 w-16 h-16 py-4 pl-2">
                            <img
                                :src="require(`../../assets/teams/${match.game}/${match.teamA}.webp`)"
                            />
                        </li>
                        <li class="col-start-3 col-end-4">{{ match.oddsA }}</li>
                        <li class="col-start-4 col-end-5">Tournament</li>
                        <li class="col-start-5 col-end-6">{{ match.oddsB }}</li>
                        <li class="col-start-6 col-end-7 w-16 h-16">
                            <img
                                :src="require(`../../assets/teams/${match.game}/${match.teamB}.webp`)"
                            />
                        </li>
                        <li class="col-start-7 col-end-8">{{match.nameB}}</li>
                    </ul>
                    <div class="py-8 px-6 border-2 rounded-lg bg-gray-500">
                        <img
                            :src="require(`../../assets/games/${match.game}_logo_32.svg`)"
                            class="w-8 h-8"
                        />
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
            test: true,
        };
    },
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


<style>
.matchesWrapper {
    display: grid;
    grid-template-columns: 5rem 1fr 5rem;
}
.matchWrapper {
    display: grid;
    grid-template-columns: 1fr 5rem 1fr 5rem 1fr 1fr 5rem;
    min-width: 100%;
}
</style>