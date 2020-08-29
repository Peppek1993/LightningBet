<template>
    <div class="row-start-2 row-end-3 overflow-auto py-4 sm:py-24 px-6">
        <div class="flex sm:hidden justify-between">
            <div v-for="discipline in decideCategory()">
                <router-link :to="discipline.type">
                    <div
                        @click="filterByGame(discipline.tag)"
                        class="hover:bg-gray-600 hover:bg-opacity-25 border rounded-lg px-4 cursor-pointer duration-300"
                        :class="discipline.color"
                    >
                        <img
                            :src="
							require(`../../assets/games/${discipline.tag}_logo_32.svg`)
						"
                            class="w-12 h-12 p-2"
                        />
                    </div>
                </router-link>
            </div>
        </div>
        <transition-group name="fadeLeftBig">
            <div v-for="match in items.filterMatches" :key="match">
                <div class="matchesWrapper my-4 rounded-lg border border-teal-200">
                    <div class="py-8 px-6 rounded-sm bg-gray-500" :class="match.color">
                        <img
                            :src="require(`../../assets/games/${match.game}_logo_32.svg`)"
                            class="w-8 h-8"
                        />
                    </div>
                    <ul class="min-w-full grid grid-cols-4 bg-gray-700">
                        <li
                            class="col-start-1 col-end-2 text-center flex flex-col justify-center items-center"
                        >
                            <div>{{match.nameA}}</div>
                            <button
                                class="bg-gray-900 w-16 py-1 rounded-md border border-yellow-200 duration-500 hover:bg-yellow-300 hover:text-black"
                            >{{match.oddsA}}</button>
                        </li>
                        <li class="col-start-2 col-end-3 flex justify-center items-center">
                            <img
                                :src="require(`../../assets/teams/${match.game}/${match.teamA}.webp`)"
                                class="w-16 h-16"
                            />
                        </li>
                        <li class="col-start-3 col-end-4 flex justify-center items-center">
                            <img
                                :src="require(`../../assets/teams/${match.game}/${match.teamB}.webp`)"
                                class="w-16 h-16"
                            />
                        </li>
                        <li
                            class="col-start-4 col-end-5 text-center flex flex-col justify-center items-center"
                        >
                            <div>{{match.nameB}}</div>
                            <button
                                class="bg-gray-900 w-16 py-1 rounded-md border border-red-200 duration-500 hover:bg-red-300 hover:text-black"
                            >{{match.oddsB}}</button>
                        </li>
                    </ul>
                    <div class="py-8 px-6 rounded-sm bg-gray-500" :class="match.color">
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
        ...mapActions(["filterByType", "filterByGame"]),
        decideCategory() {
            if (this.$route.path === "/") {
                return this.items.esportDisciplines;
            } else if (this.$route.path === "/sport") {
                return this.items.sportDisciplines;
            } else {
                return this.items.esportDisciplines;
            }
        },
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
</style>