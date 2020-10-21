<template>
  <div
    class="row-start-2 row-end-3 overflow-auto py-4 sm:py-16 pb-20 font-thin"
  >
    <notifications group="bet" position="top center" />
    <app-new-match></app-new-match>
    <div
      v-for="(match, index) in items.filterMatches"
      :key="match.id"
      class="px-6"
    >
      <div
        class="matchesWrapper my-4 shadow-2xl border rounded-lg border-teal-800"
      >
        <div class="py-8 px-2  rounded-l-lg" :class="match.color">
          <img
            :src="require(`../../assets/games/${match.game}_logo_32.svg`)"
            class="w-8 h-8"
          />
        </div>
        <ul class="min-w-full grid grid-cols-4 bg-gray-800">
          <li
            class="col-start-1 col-end-2 text-center flex flex-col justify-center items-center"
          >
            <div>{{ match.nameA }}</div>
            <button
              class="font-thin bg-gray-900 w-12 sm:w-16 py-1 rounded-md border border-yellow-300 duration-500 hover:bg-yellow-300 hover:text-black  focus:outline-none"
              @click="showMatchModal(index, 'A', match.game)"
            >
              {{ match.oddsA }}
            </button>
          </li>
          <li class="col-start-2 col-end-3 flex justify-center items-center">
            <img
              :src="
                require(`../../assets/teams/${match.game}/${match.teamA}.png`)
              "
              class="w-16 h-16"
            />
          </li>
          <li class="col-start-3 col-end-4 flex justify-center items-center">
            <img
              :src="
                require(`../../assets/teams/${match.game}/${match.teamB}.png`)
              "
              class="w-16 h-16"
            />
          </li>
          <li
            class="col-start-4 col-end-5 text-center flex flex-col justify-center items-center"
          >
            <div>{{ match.nameB }}</div>
            <button
              class="font-thin bg-gray-900 w-12 sm:w-16 py-1 rounded-md border border-red-300 duration-500 hover:bg-red-300 hover:text-black focus:outline-none"
              @click="showMatchModal(index, 'B')"
            >
              {{ match.oddsB }}
            </button>
          </li>
        </ul>
        <div class="py-8 px-2 rounded-r-lg" :class="match.color">
          <img
            :src="require(`../../assets/games/${match.game}_logo_32.svg`)"
            class="w-8 h-8"
          />
        </div>
      </div>
    </div>
    <t-modal header="Place your bet" v-model="matchModal" class="p-10">
      <div class="flex-col justify-around text-center">
        <p>
          Team name:
          {{ items.filterMatches[this.matchNumber][`name${activeTeam}`] }}
        </p>
        <div>
          Bet odds:
          {{ items.filterMatches[this.matchNumber][`odds${activeTeam}`] }}
        </div>
        <div class="flex justify-center">
          <p class="pr-2">Enter bet amount</p>
          <input
            type="number"
            placeholder="$"
            class="text-black w-16 h-6 rounded-md outline-none"
            v-model="betAmount"
          />
        </div>
        <div>
          Possible return:
          {{
            (
              items.filterMatches[this.matchNumber][`odds${activeTeam}`] *
              betAmount
            ).toFixed(2)
          }}$
        </div>
      </div>
      <template v-slot:footer>
        <div class="flex justify-between">
          <button @click="matchModal = !matchModal" class="font-hairline">
            Cancel
          </button>
          <button @click="placeABet" class="font-hairline">Place a bet</button>
        </div>
      </template>
    </t-modal>
    <div
      v-if="matchModal"
      class="absolute z-30 inset-0 opacity-50 bg-black"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import NewMatch from "./../NewMatch.vue"
export default {
  data() {
    return {
      test: true,
      matchModal: false,
      matchNumber: 0,
      betAmount: null,
      activeTeam: "A",
    }
  },
  computed: {
    ...mapGetters(["items"]),
  },
  methods: {
    showMatchModal(x, y, z) {
      if (this.items.clearButton == false) {
        this.matchNumber = x
        this.activeTeam = y
        this.activeGame = z
        this.matchModal = !this.matchModal
      } else {
        this.$notify({
          group: "bet",
          text: "Please clear your bets first.",
          type: "error",
        })
      }
    },
    placeABet() {
      if (this.items.funds < this.betAmount) {
        this.$notify({
          group: "bet",
          text:
            "Please make sure you have enough funds. Try depositing some money first.",
        })
      } else if (this.items.bets.length >= 10) {
        this.$notify({
          group: "bet",
          text: "You can only have a maximum of 10 bets active!",
          type: "warn",
        })
      } else if (this.betAmount < 0) {
        this.$notify({
          group: "bet",
          text: "Please enter a correct amount.",
        })
      } else if (this.betAmount > 100) {
        this.$notify({
          group: "bet",
          text: "Maximum bet is 100$.",
        })
      } else if (this.betAmount == null) {
        this.$notify({
          group: "bet",
          text: "Enter a bet amount first",
        })
      } else {
        this.items.funds -= this.betAmount
        this.matchModal = false
        let match = this.items.filterMatches[this.matchNumber]
        let newBet = {}
        let possibleReturn = this.betAmount * match[`odds${this.activeTeam}`]
        newBet["teamA"] = match.nameA
        newBet["teamB"] = match.nameB
        newBet["winner"] = match[`name${this.activeTeam}`]
        newBet["chance"] = match[`chance${this.activeTeam}`]
        newBet["odds"] = match[`odds${this.activeTeam}`]
        newBet["possibleReturn"] = possibleReturn
        this.items.bets.push(newBet)
        this.betAmount = null
        let bets = this.items.bets
        let amount = 0
        for (let i = 0; i < bets.length; i++) {
          amount += bets[i].possibleReturn / bets[i].odds
        }
        this.items.totalStake = amount.toFixed(2)
        let returnAmount = 0
        for (let i = 0; i < bets.length; i++) {
          returnAmount += bets[i].possibleReturn
        }
        this.items.totalReturn = returnAmount.toFixed(2)
      }
    },
  },
  components: {
    appNewMatch: NewMatch,
  },
}
</script>

<style>
.matchesWrapper {
  display: grid;
  grid-template-columns: 3rem 1fr 3rem;
}
</style>
