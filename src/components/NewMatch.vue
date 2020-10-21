<template>
  <div>
    <notifications group="bet" position="top center" />
    <div
      class="text-center hover:bg-gray-800 duration-500 ml-6 sm:px-4 py-2 rounded-md md:text-md sm:text-sm hover:text-teal-400 cursor-pointer w-24 border border-teal-300"
      @click="items.newMatchModal = !items.newMatchModal"
    >
      <i class="fas fa-plus hidden sm:inline-block"></i>
      New Match
    </div>
    <form v-show="items.newMatchModal" class="px-6">
      <div class="flex">
        <p class="pr-2 py-2 flex-col">
          <label for="newMatchType">
            <p class="font-thin text-teal-600">Bet type:</p>
          </label>
          <select
            v-model="newMatchType"
            id="newMatchType"
            class="h-auto  font-thin bg-teal-500 text-black  rounded-md p-2 w-auto focus:outline-none"
          >
            <option value="esport">Esport</option>
            <option value="sport">Sport</option>
          </select>
        </p>
        <p v-if="newMatchType !== ''" class="p-2">
          <label for="newMatchTeamA">
            <p class="font-thin text-teal-600">
              Game:
            </p>
          </label>
          <select
            v-model="newMatchGame"
            id="newMatchGame"
            class="h-auto  font-thin bg-teal-500 text-black  rounded-md p-2 w-auto focus:outline-none"
          >
            <option v-for="game in decideGames" :value="`${game.tag}`">
              {{ game.name }}
            </option>
          </select>
        </p>
      </div>
      <div class="flex">
        <p v-if="newMatchGame !== ''" class="pr-2 py-2">
          <label for="newMatchNameA">
            <p class="font-thin text-teal-600">
              Team A
            </p>
          </label>
          <select
            v-model="newMatchNameA"
            id="newMatchNameA"
            class="h-auto  font-thin bg-teal-500 text-black  rounded-md p-2 w-auto focus:outline-none"
          >
            <option v-for="team in decideTeams">{{ team }}</option>
          </select>
        </p>
        <p v-if="newMatchGame !== ''" class="p-2">
          <label for="newMatchNameB">
            <p class="font-thin text-teal-600">
              Team B
            </p>
          </label>
          <select
            v-model="newMatchNameB"
            id="newMatchNameB"
            class="h-auto  font-thin bg-teal-500 text-black  rounded-md p-2 w-auto focus:outline-none"
          >
            <option v-for="team in decideTeams">{{ team }}</option>
          </select>
        </p>
      </div>
      <p v-if="newMatchNameA !== '' && newMatchNameB !== ''" class="py-2">
        <label for="newMatchChanceA">
          <span class="font-thin text-teal-600">
            Enter {{ newMatchNameA }} chance of winning (1-100%):
          </span>
        </label>
        <input
          v-model.number="newMatchChanceA"
          type="number"
          min="0"
          max="100"
          class="h-auto  font-thin bg-teal-500 text-black  rounded-md p-2 w-auto focus:outline-none"
        />
      </p>
      <button
        class="p-2 border-teal-600 border focus:outline-none rounded-md hover:bg-teal-700 duration-500 w-24"
        @click.prevent="addNewMatch()"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  computed: {
    ...mapGetters(["items"]),
    newMatchChanceB() {
      return 100 - this.newMatchChanceA
    },
    decideGames() {
      return this.items.disciplinesInfo.filter((discipline) => {
        return discipline.type == this.newMatchType
      })
    },
    decideTeams() {
      return this.items.teams[0][`${this.newMatchGame}`]
    },
    decideColor() {
      return this.items.disciplinesInfo.filter((discipline) => {
        return discipline.tag == this.newMatchGame
      })
    },
  },
  methods: {
    ...mapActions(["filterByType", "toSnake"]),
    addNewMatch() {
      let newMatch = {}
      newMatch["type"] = this.newMatchType
      newMatch["game"] = this.newMatchGame
      newMatch["nameA"] = this.newMatchNameA
      newMatch["nameB"] = this.newMatchNameB
      newMatch["chanceA"] = this.newMatchChanceA / 100
      newMatch["chanceB"] = this.newMatchChanceB / 100
      newMatch["oddsA"] = (100 / this.newMatchChanceA).toFixed(2)
      newMatch["oddsB"] = (100 / this.newMatchChanceB).toFixed(2)
      newMatch["teamA"] = this.toSnake(this.newMatchNameA)
      newMatch["teamB"] = this.toSnake(this.newMatchNameB)
      newMatch["color"] = this.decideColor[0].backgroundColor
      newMatch["id"] = this.items.upcomingMatches.length + 1
      if (this.newMatchNameA == this.newMatchNameB) {
        this.$notify({
          group: "bet",
          text: "Please make sure the teams facing eachother are different.",
          type: "warn",
        })
      } else if (this.newMatchChanceA < 0 || this.newMatchChanceA > 100) {
        this.$notify({
          group: "bet",
          text: "Please enter a correct amount (1-100)",
          type: "warn",
        })
      } else {
        this.items.upcomingMatches.unshift(newMatch)
        this.filterByType(this.newMatchType)
        this.$notify({
          group: "bet",
          text: `Match ${this.newMatchNameA} vs ${this.newMatchNameB} has been added.`,
        })
        this.newMatchType = this.newMatchGame = this.newMatchNameA = this.newMatchNameB =
          ""
        this.newMatchChanceA = null
        this.items.newMatchModal = !this.items.newMatchModal
      }
    },
    toSnake(payload) {
      return payload
        .split(" ")
        .map((word) => word.toLowerCase())
        .join("_")
    },
  },
  data() {
    return {
      newMatchType: "",
      newMatchGame: "",
      newMatchNameA: "",
      newMatchNameB: "",
      newMatchChanceA: null,
    }
  },
}
</script>
