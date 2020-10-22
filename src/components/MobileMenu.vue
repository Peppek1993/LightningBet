<template>
  <div class="text-2xl block sm:hidden">
    <div
      class="flex justify-between items-center px-6 py-2 bg-gray-800"
      v-show="firstMenu"
    >
      <router-link to="leaderboard">
        <div class="text-center font-hairline">
          <i class="fas fa-trophy cursor-pointer"></i>
          <p class="text-xs">Leaderboard</p>
        </div>
      </router-link>
      <router-link to="rewards">
        <div class="text-center font-hairline">
          <i class="fas fa-gift cursor-pointer"></i>
          <p class="text-xs">Rewards</p>
        </div>
      </router-link>
      <router-link to="referral">
        <div class="text-center font-hairline">
          <i class="fas fa-user-plus cursor-pointer"></i>
          <p class="text-xs">Referral</p>
        </div>
      </router-link>
      <router-link to="faq">
        <div class="text-center font-hairline">
          <i class="far fa-question-circle cursor-pointer"></i>
          <p class="text-xs">FAQ</p>
        </div>
      </router-link>
      <div class="text-center font-hairline" v-show="socialMenu === false">
        <i
          class="fas fa-chevron-down cursor-pointer"
          @click="socialMenu = !socialMenu"
        ></i>
        <p class="text-xs">More</p>
      </div>
      <div class="text-center font-hairline" v-show="socialMenu === true">
        <i
          class="fas fa-chevron-up cursor-pointer"
          @click="socialMenu = !socialMenu"
        ></i>
        <p class="text-xs">Hide</p>
      </div>
    </div>
    <div
      class="flex justify-around px-6 pb-2 bg-gray-800 font-hairline text-center"
      v-show="socialMenu"
    >
      <a href="https://github.com/Peppek1993" target="_blank">
        <div>
          <i class="fab fa-github"></i>
          <p class="text-xs">Github</p>
        </div>
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <div>
          <i class="fab fa-facebook"></i>
          <p class="text-xs">Facebook</p>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/adam-partyka-0659a5177/"
        target="_blank"
      >
        <div>
          <i class="fab fa-linkedin"></i>
          <p class="text-xs">LinkedIn</p>
        </div>
      </a>
      <a href="https://instagram.com" target="_blank">
        <div>
          <i class="fab fa-instagram"></i>
          <p class="text-xs">Instagram</p>
        </div>
      </a>
      <a href="https://github.com/Peppek1993" target="_blank">
        <div class="text-center font-hairline">
          <i class="fas fa-newspaper cursor-pointer"></i>
          <p class="text-xs">Blog</p>
        </div>
      </a>
    </div>
    <hr class="border-gray-700" />
    <div class="flex sm:hidden justify-between px-6 pt-4">
      <div v-for="discipline in decideCategory()">
        <router-link :to="discipline.type">
          <div
            @click="filterByGame(discipline.tag)"
            class="hover:bg-gray-600 hover:bg-opacity-25 border rounded-lg px-4 cursor-pointer duration-300"
            :class="discipline.borderColor"
          >
            <img
              :src="require(`../assets/games/${discipline.tag}_logo_32.svg`)"
              class="w-12 h-12 p-2"
            />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  data() {
    return {
      socialMenu: false,
      firstMenu: true,
    }
  },
  methods: {
    ...mapActions(["filterByGame"]),
    decideCategory() {
      if (this.$route.path === "/" || this.$route.path === "/esport") {
        let filteredCategory = this.items.disciplinesInfo.filter(function(
          match
        ) {
          return match.type == "esport"
        })
        return filteredCategory
      } else if (this.$route.path === "/sport") {
        let filteredCategory = this.items.disciplinesInfo.filter(function(
          match
        ) {
          return match.type == "sport"
        })
        return filteredCategory
      }
    },
  },
  computed: {
    ...mapGetters(["items"]),
  },
}
</script>

<style></style>
