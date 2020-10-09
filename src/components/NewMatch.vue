<template>
	<div>
		<div
			class="text-center hover:bg-gray-800 duration-500 mx-6 mb-4 sm:px-4 rounded-md md:text-md sm:text-sm hover:text-teal-400 cursor-pointer w-24 border border-teal-300"
			@click="items.newMatchModal = !items.newMatchModal"
		>
			<i class="fas fa-plus hidden sm:inline-block"></i>
			New Match
		</div>
		<transition name="fadeLeft" mode="in-out">
			<form v-show="items.newMatchModal">
				<p>
					<label for="newMatchType">
						<span>Bet type:</span>
					</label>
					<select v-model="newMatchType" id="newMatchType">
						<option value="esport">Esport</option>
						<option value="sport">Sport</option>
					</select>
				</p>
				<transition name="fadeLeft" mode="in-out">
					<p v-if="newMatchType !== ''">
						<label for="newMatchTeamA">
							<span>Select a game:</span>
						</label>
						<select v-model="newMatchGame" id="newMatchGame">
							<option
								v-for="game in decideGames(newMatchType)"
								:value="`${game.tag}`"
								>{{ game.name }}</option
							>
						</select>
					</p>
				</transition>
				<transition name="fadeLeft" mode="in-out">
					<p v-if="newMatchGame !== ''">
						<label for="newMatchNameA">
							<span>Select a team:</span>
						</label>
						<select v-model="newMatchNameA" id="newMatchNameA">
							<option v-for="team in decideTeams(newMatchGame)">{{
								team
							}}</option>
						</select>
					</p>
				</transition>
				<transition name="fadeLeft" mode="in-out">
					<p v-if="newMatchGame !== ''">
						<label for="newMatchNameB">
							<span>Select a team:</span>
						</label>
						<select v-model="newMatchNameB" id="newMatchNameB">
							<option v-for="team in decideTeams(newMatchGame)">{{
								team
							}}</option>
						</select>
					</p>
				</transition>
				<transition name="fadeLeft" mode="in-out">
					<p v-if="newMatchNameA !== '' && newMatchNameB !== ''">
						<label for="newMatchChanceA">
							<span
								>Enter {{ newMatchNameA }} chance of win:</span
							>
						</label>
						<input
							v-model.number="newMatchChanceA"
							type="number"
							min="0"
							max="100"
						/>
					</p>
				</transition>
				<transition name="fadeLeft" mode="in-out">
					<p v-if="newMatchChanceA !== null">
						{{ newMatchChanceB }}
					</p>
				</transition>
				<transition name="fadeLeft" mode="in-out">
					<button
						class="p-2 bg-red-500 border"
						@click.prevent="addNewMatch()"
					>
						Add
					</button>
				</transition>
			</form>
		</transition>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		computed: {
			...mapGetters(['items']),
			newMatchChanceB() {
				return 100 - this.newMatchChanceA;
			},
		},
		methods: {
			...mapActions(['filterByType', 'toSnake']),
			decideGames(type) {
				let filteredGames = this.items.disciplinesInfo.filter(function(
					discipline
				) {
					return discipline.type == type;
				});
				return filteredGames;
			},
			decideTeams(type) {
				return this.items.teams[0][`${type}`];
			},
			addNewMatch() {
				let newMatch = {};
				newMatch['type'] = this.newMatchType;
				newMatch['game'] = this.newMatchGame;
				newMatch['nameA'] = this.newMatchNameA;
				newMatch['nameB'] = this.newMatchNameB;
				newMatch['chanceA'] = this.newMatchChanceA / 100;
				newMatch['chanceB'] = this.newMatchChanceB / 100;
				newMatch['oddsA'] = (100 / this.newMatchChanceA).toFixed(2);
				newMatch['oddsB'] = (100 / this.newMatchChanceB).toFixed(2);
				newMatch['teamA'] = this.toSnake(this.newMatchNameA);
				newMatch['teamB'] = this.toSnake(this.newMatchNameB);
				newMatch['color'] = this.decideColor(this.newMatchGame);
				newMatch['id'] = this.items.upcomingMatches.length + 1;

				if (this.newMatchNameA == this.newMatchNameB) {
					alert('Make sure to select two different teams');
				} else if (
					this.newMatchChanceA < 0 ||
					this.newMatchChanceA > 100
				) {
					alert('Please enter correct amount (1-100)');
				} else {
					this.items.upcomingMatches.push(newMatch);
				}
			},
			toSnake(payload) {
				return payload
					.split(' ')
					.map((word) => word.toLowerCase())
					.join('_');
			},
			decideColor(type) {
				let filteredGames = this.items.disciplinesInfo.filter(function(
					discipline
				) {
					return discipline.tag == type;
				});
				return filteredGames[0].backgroundColor;
			},
		},
		data() {
			return {
				newMatchType: '',
				newMatchGame: 'cs',
				newMatchNameA: '',
				newMatchNameB: '',
				newMatchChanceA: null,
			};
		},
	};
</script>

<style></style>
