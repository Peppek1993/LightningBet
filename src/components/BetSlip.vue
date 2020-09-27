<template>
    <div class="col-start-1">
        <div
            v-show="!expanded"
            class="bg-teal-900 flex lg:hidden rounded-md border-2 border-teal-700 fixed bottom-0 w-full sm:w-11/12 h-16 justify-around items-center font-thin sm:ml-16"
        >
            <div>Active bets: {{items.bets.length}}</div>
            <div>Total stake: {{items.totalStake}}$</div>
            <div>Possible return: {{items.totalReturn}}$</div>
            <div
                class="border rounded-full p-2 cursor-pointer hover:bg-teal-700 duration-500"
                @click="expanded = !expanded"
            >
                Details
                <i class="fas fa-expand-alt"></i>
            </div>
        </div>

        <div
            v-show="expanded"
            class="fixed top-0 z-50 h-full w-full bg-gray-900 py-16 overflow-auto"
        >
            <div
                class="bg-teal-900 flex lg:hidden rounded-md border-2 border-teal-700 fixed bottom-0 w-full h-16 justify-around items-center font-thin"
            >
                <div>Active bets: {{items.bets.length}}</div>
                <div>Total stake: {{items.totalStake}}$</div>
                <div>Possible return: {{items.totalReturn}}$</div>
                <div
                    class="border rounded-full p-2 cursor-pointer hover:bg-teal-700 duration-500"
                    @click="expanded = !expanded"
                >
                    Hide
                    <i class="fas fa-compress-alt"></i>
                </div>
            </div>
            <div v-for="bet in items.bets" class="p-3 flex-col items-center px-4 sm:px-32">
                <div
                    class="border-teal-400 bg-gray-800 border rounded-md flex-col py-2 text-center text-sm font-light w-auto m-auto"
                    :class="bet.result"
                >
                    <h1 class="text-xs font-hairline">
                        {{ bet.teamA }}
                        vs
                        {{ bet.teamB }}
                    </h1>
                    <p>Winner: {{bet.winner}}</p>
                    <p>Stake: {{(bet.possibleReturn / bet.odds).toFixed(2)}}$</p>
                    <p>Odds: {{ bet.odds }}</p>
                    <p>Potential win: {{ bet.possibleReturn.toFixed(2) }}$</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["items"]),
    },
    data() {
        return {
            expanded: false,
        };
    },
};
</script>
