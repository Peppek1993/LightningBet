<template>
    <div class="col-start-1 col-end-3 flex flex-col shadow-layoutleft">
        <div class="flex flex-col flex-flex10 bg-gray-800">
            <div v-for="discipline in decideCategory()">
                <router-link :to="discipline.type">
                    <div
                        @click="filterByGame(discipline.tag)"
                        class="hover:border-l-8 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
                        :class="discipline.color"
                    >
                        <img
                            :src="
							require(`../assets/games/${discipline.tag}_logo_32.svg`)
						"
                            class="w-8 h-8 pr-2"
                        />
                        {{ discipline.name }}
                    </div>
                </router-link>
            </div>
        </div>
        <div>
            <router-link to="leaderboard">
                <div class="menuItem">
                    <i class="fas fa-trophy pr-2"></i> Leaderboard
                </div>
            </router-link>
            <router-link to="rewards">
                <div class="menuItem">
                    <i class="fas fa-gift pr-2"></i> Rewards
                </div>
            </router-link>
            <router-link to="referral">
                <div class="menuItem">
                    <i class="fas fa-user-plus pr-2"></i> Referral
                </div>
            </router-link>
            <router-link to="faq">
                <div class="menuItem">
                    <i class="far fa-question-circle pr-2"></i> Faq
                </div>
            </router-link>
            <router-link to="blog">
                <div class="menuItem">
                    <i class="fas fa-newspaper pr-2"></i> Blog
                </div>
            </router-link>
        </div>
        <div class="legal flex-1 bg-gray-800 pr-2"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    methods: {
        ...mapActions(["filterByGame"]),
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
    computed: {
        ...mapGetters(["items"]),
    },
};
</script>

<style>
</style>
