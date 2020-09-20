<template>
    <div
        class="col-start-5 col-end-6 lg:col-start-4 hidden sm:block overflow-auto shadow-layoutright h-bets"
        :key="betsKey"
    >
        <div v-for="bet in items.bets" class="p-3 flex-col w-full">
            <div
                class="border-teal-400 bg-gray-800 border rounded-md flex-col px-3 py-1 text-center text-sm font-light"
                :class="bet.result"
            >
                <h1 class="text-xs font-hairline">
                    {{ bet.teamA }}
                    vs
                    {{ bet.teamB }}
                </h1>
                <p>Winner: {{bet.winner}}</p>
                <p>Stake: {{bet.possibleReturn / bet.odds}}$</p>
                <p>Odds: {{ bet.odds }}</p>
                <p>Potential win: {{ bet.possibleReturn }}$</p>
            </div>
        </div>
        <div class="bg-gray-800 rounded-md p-3 absolute bottom-0 w-56 px-4 font-light">
            <h1>Bet slip summary</h1>
            <p>Total stake: {{totalStake()}}$</p>
            <p>Expected win: {{totalReturn()}}$</p>
            <button
                class="p-1 border border-teal-300 rounded-md h-10 hover:bg-teal-700 duration-500 font-light"
                @click="simulateBet()"
                v-if="simulateButton"
            >
                <i class="fas fa-dice"></i>
                Simulate outcome
                <i class="fas fa-dice"></i>
            </button>
            <button
                class="p-1 border border-teal-300 rounded-md h-10 hover:bg-teal-700 duration-500 font-light"
                @click="clearBets()"
                v-if="items.clearButton"
            >
                <i class="fas fa-dice"></i>
                Clear bets
                <i class="fas fa-dice"></i>
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            betsKey: 0,
            simulateButton: true,
        };
    },
    computed: {
        ...mapGetters(["items"]),
    },
    methods: {
        totalStake() {
            let bets = this.items.bets;
            let amount = 0;
            for (let i = 0; i < bets.length; i++) {
                amount += bets[i].possibleReturn / bets[i].odds;
            }
            return amount.toFixed(2);
        },
        totalReturn() {
            let bets = this.items.bets;
            let amount = 0;
            for (let i = 0; i < bets.length; i++) {
                amount += bets[i].possibleReturn;
            }
            return amount.toFixed(2);
        },
        simulateBet() {
            this.items.lostBets = [];
            this.items.wonBets = [];
            let bets = this.items.bets;
            if (bets.length < 1) {
                alert("Place some bets first.");
            } else {
                for (let i = 0; i < bets.length; i++) {
                    let x = Math.random();
                    if (x > bets[i].chance) {
                        this.items.lostBets.push(bets[i]);
                        bets[i].result = "bg-red-700";
                        this.betsKey += 1;
                    } else {
                        this.items.wonBets.push(bets[i]);
                        bets[i].result = "bg-green-700";
                        this.betsKey += 1;
                        this.items.funds += Number(
                            bets[i].possibleReturn.toFixed(2)
                        );
                    }
                }
                this.simulateButton = false;
                this.items.clearButton = true;
            }
        },
        clearBets() {
            this.items.bets = [];
            this.simulateButton = true;
            this.items.clearButton = false;
        },
    },
};
</script>
