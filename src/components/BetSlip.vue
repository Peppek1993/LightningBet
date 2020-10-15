<template>
	<div class="col-start-1">
		<div
			v-show="!expanded"
			class="bg-teal-900 flex lg:hidden rounded-md border-2 border-teal-700 fixed bottom-0 w-full sm:w-11/12 h-16 justify-around items-center font-thin sm:ml-16"
		>
			<div>Active bets: {{ items.bets.length }}</div>
			<div>Total stake: {{ items.totalStake }}$</div>
			<div>Possible return: {{ items.totalReturn }}$</div>
			<div
				class="border rounded-full p-2 w-24 text-center cursor-pointer hover:bg-teal-700 duration-500"
				@click="expanded = !expanded"
			>
				Details
				<i class="fas fa-expand-alt"></i>
			</div>
		</div>
        <div
			v-show="expanded"
			class="fixed top-0 z-50 h-full w-full bg-gray-900 py-10 pb-20 overflow-auto inline-block lg:hidden"
		>
			<div class="px-4 sm:px-32"></div>
			<div
				class="bg-teal-900 flex lg:hidden rounded-md border-2 border-teal-700 fixed bottom-0 w-full h-16 justify-around items-center font-thin"
			>
				<div>Active bets: {{ items.bets.length }}</div>
				<div>Total stake: {{ items.totalStake }}$</div>
				<div>Possible return: {{ items.totalReturn }}$</div>
                <div
					class="border rounded-full p-2 cursor-pointer hover:bg-teal-700 duration-500 w-24 text-center"
					@click="expanded = !expanded"
				>
					Hide
					<i class="fas fa-compress-alt"></i>
				</div>
			</div>
			<div
				class="w-64 mx-auto flex justify-center border border-teal-300 rounded-md h-10 hover:bg-teal-700 duration-500 font-light"
			>
				<button @click="simulateBet()" v-if="simulateButton">
					<i class="fas fa-dice"></i>
					Simulate outcome
					<i class="fas fa-dice"></i>
				</button>
				<button @click="clearBets()" v-if="items.clearButton">
					<i class="fas fa-dice"></i>
					Clear bets
					<i class="fas fa-dice"></i>
				</button>
			</div>
			<div
				v-for="bet in items.bets"
				class="p-3 flex-col items-center px-4 sm:px-32"
			>
				<div
					class="border-teal-400 bg-gray-800 border rounded-md flex-col py-2 text-center text-sm font-light w-auto m-auto"
					:class="bet.result"
				>
					<h1 class="text-xs font-hairline">
						{{ bet.teamA }}
						vs
						{{ bet.teamB }}
					</h1>
					<p>Winner: {{ bet.winner }}</p>
					<p>
						Stake: {{ (bet.possibleReturn / bet.odds).toFixed(2) }}$
					</p>
					<p>Odds: {{ bet.odds }}</p>
					<p>Potential win: {{ bet.possibleReturn.toFixed(2) }}$</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		computed: {
			...mapGetters(['items']),
		},
		data() {
			return {
				expanded: false,
				simulateButton: true,
			};
		},
		methods: {
			simulateBet() {
				this.items.wonAmount = 0;
				this.items.lostBets = [];
				this.items.wonBets = [];
				let bets = this.items.bets;
				if (bets.length < 1) {
					alert('Place some bets first.');
				} else {
					for (let i = 0; i < bets.length; i++) {
						let x = Math.random();
						if (x > bets[i].chance) {
							this.items.lostBets.push(bets[i]);
							bets[i].result = 'bg-red-700';
							this.betsKey += 1;
						} else {
							this.items.wonBets.push(bets[i]);
							bets[i].result = 'bg-green-700';
							this.betsKey += 1;
							this.items.funds += Number(
								bets[i].possibleReturn.toFixed(2)
							);
							this.items.wonAmount += Number(
								bets[i].possibleReturn.toFixed(2)
							);
						}
					}
					this.simulateButton = false;
					this.items.clearButton = true;
				}
			},
			clearBets() {
				this.items.totalStake = 0;
				this.items.totalReturn = 0;
				this.items.bets = [];
				this.simulateButton = true;
				this.items.clearButton = false;
			},
		},
	};
</script>
