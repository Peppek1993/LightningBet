<template>
    <div class="col-start-3 col-end-11 row-start-2 row-end-3 overflow-auto pt-24 pl-24">
        <transition-group name="fadeLeftBig">
            <div v-for="match in items.filterMatches" :key="match">
                <ul class="flex my-4 w-11/12 border-2">
                    <li class>
                        <img
                            :src="require(`../../assets/games/${match.game}_logo_32.svg`)"
                            class="w-8 h-8"
                        />
                    </li>
                    <li class>
                        <img
                            :src="require(`../../assets/teams/${match.game}/${match.teamA}.webp`)"
                            class="w-16 h-16"
                        />
                        {{match.nameA}}
                    </li>
                    <li class>{{ match.oddsA }}</li>
                    <li class>Tournament</li>
                    <li class>{{ match.oddsB }}</li>
                    <li class>
                        <img
                            :src="require(`../../assets/teams/${match.game}/${match.teamB}.webp`)"
                            class="w-16 h-16"
                        />
                        {{match.nameB}}
                    </li>
                    <div class>></div>
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
