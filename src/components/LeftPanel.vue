<template>
    <div>
        <div
            v-show="items.leftPanelHidden"
            class="col-start-1 col-end-3 flex flex-col shadow-layoutleft w-56 h-full"
        >
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
                    <a class="menuItem">
                        <i class="fas fa-trophy pr-2"></i> Leaderboard
                    </a>
                </router-link>
                <router-link to="rewards">
                    <a class="menuItem">
                        <i class="fas fa-gift pr-2"></i> Rewards
                    </a>
                </router-link>
                <router-link to="referral">
                    <a class="menuItem">
                        <i class="fas fa-user-plus pr-2"></i> Referral
                    </a>
                </router-link>
                <router-link to="faq">
                    <a class="menuItem">
                        <i class="far fa-question-circle pr-2"></i> Faq
                    </a>
                </router-link>
                <router-link to="blog">
                    <a class="menuItem">
                        <i class="fas fa-newspaper pr-2"></i> Blog
                    </a>
                </router-link>
            </div>
            <div class="bg-gray-800 flex justify-around">
                <i class="fab fa-github py-4"></i>
                <i class="fab fa-facebook py-4"></i>
                <i class="fab fa-linkedin py-4"></i>
                <i class="fab fa-instagram py-4"></i>
                <i
                    class="fas fa-angle-double-left py-4"
                    @click="items.leftPanelHidden = !items.leftPanelHidden"
                ></i>
            </div>
        </div>
        <div
            v-show="!items.leftPanelHidden"
            class="col-start-1 col-end-2 flex flex-col shadow-layoutleft w-16 h-full"
        >
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
                                class="w-10 h-10"
                            />
                        </div>
                    </router-link>
                </div>
            </div>
            <div>
                <router-link to="leaderboard">
                    <a class="menuItem">
                        <i class="fas fa-trophy px-2"></i>
                    </a>
                </router-link>
                <router-link to="rewards">
                    <a class="menuItem">
                        <i class="fas fa-gift px-2"></i>
                    </a>
                </router-link>
                <router-link to="referral">
                    <a class="menuItem">
                        <i class="fas fa-user-plus px-2"></i>
                    </a>
                </router-link>
                <router-link to="faq">
                    <a class="menuItem">
                        <i class="far fa-question-circle px-2"></i>
                    </a>
                </router-link>
                <router-link to="blog">
                    <a class="menuItem">
                        <i class="fas fa-newspaper px-2"></i>
                    </a>
                </router-link>
            </div>
            <div class="bg-gray-800 flex justify-around">
                <i
                    class="fas fa-angle-double-right py-4"
                    @click="items.leftPanelHidden = !items.leftPanelHidden"
                ></i>
            </div>
        </div>
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
