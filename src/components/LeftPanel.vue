<template>
	<div>
		<div class="col-start-1 col-end-3 hidden lg:flex flex-col shadow-layoutleft w-56 h-full">
			<div class="flex flex-col flex-flex10 bg-gray-800">
				<div v-for="discipline in decideCategory()">
					<div
						@click="filterByGame(discipline.tag)"
						class="hover:border-l-8 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex justify-between duration-300 h-12 items-center"
						:class="discipline.borderColor"
					>
						<div class="flex items-center">
							<img :src="require(`../assets/games/${discipline.tag}_logo_32.svg`)"
								class="w-8 h-8 pr-2"
							/>
							{{ discipline.name }}
						</div>
						<p>{{ matchesAmount(discipline.tag) }}</p>
					</div>
				</div>
			</div>
			<div>
				<router-link to="/leaderboard">
					<a class="menuItem">
						<i class="fas fa-trophy pr-2"></i> Leaderboard
					</a>
				</router-link>
				<router-link to="/rewards">
					<a class="menuItem">
						<i class="fas fa-gift pr-2"></i> Rewards
					</a>
				</router-link>
				<router-link to="/referral">
					<a class="menuItem">
						<i class="fas fa-user-plus pr-2"></i> Referral
					</a>
				</router-link>
				<router-link to="/faq">
					<a class="menuItem">
						<i class="far fa-question-circle pr-2"></i> Faq
					</a>
				</router-link>
				<a
					href="https://github.com/Peppek1993/LightningBet"
					target="_blank"
				>
					<a class="menuItem">
						<i class="fas fa-newspaper pr-2"></i> Blog
					</a>
				</a>
			</div>
			<div class="bg-gray-800 flex justify-around">
				<a href="https://github.com/Peppek1993" target="_blank">
					<i class="fab fa-github py-4"></i>
				</a>
				<a href>
					<i class="fab fa-facebook py-4"></i>
				</a>
				<a href ="https://www.linkedin.com/in/adam-partyka-0659a5177/" target="_blank">
					<i class="fab fa-linkedin py-4"></i>
				</a>
				<a href>
					<i class="fab fa-instagram py-4"></i>
				</a>
			</div>
		</div>
		<div class="col-start-1 col-end-2 hidden sm:flex lg:hidden flex-col shadow-layoutleft w-16 h-full">
			<div class="flex flex-col flex-flex10 bg-gray-800">
				<div v-for="discipline in decideCategory()">
					<router-link :to="discipline.type">
						<div
							@click="filterByGame(discipline.tag)"
							class="hover:border-l-8 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
							:class="discipline.borderColor"
						>
							<img :src="require(`../assets/games/${discipline.tag}_logo_32.svg`)"
								class="w-10 h-10"
							/>
						</div>
					</router-link>
				</div>
			</div>
			<div>
				<router-link to="/leaderboard">
					<a class="menuItem">
						<i class="fas fa-trophy"></i>
					</a>
				</router-link>
				<router-link to="/rewards">
					<a class="menuItem">
						<i class="fas fa-gift"></i>
					</a>
				</router-link>
				<router-link to="/referral">
					<a class="menuItem">
						<i class="fas fa-user-plus"></i>
					</a>
				</router-link>
				<router-link to="/faq">
					<a class="menuItem">
						<i class="far fa-question-circle"></i>
					</a>
				</router-link>
				<router-link to="/blog">
					<a class="menuItem">
						<i class="fas fa-newspaper"></i>
					</a>
				</router-link>
			</div>
			<div class="bg-gray-800 flex justify-around py-4">
				<i class="fab fa-github"></i>
				<i class="fab fa-facebook"></i>
                <a href="https://www.linkedin.com/in/adam-partyka-0659a5177/" target="_blank">
				<i class="fab fa-linkedin"></i>
                </a>
				<i class="fab fa-instagram"></i>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	export default {
		methods: {
			...mapActions(['filterByGame']),
			decideCategory() {
				if (
					this.$route.path === '/' ||
					this.$route.path === '/esport'
				) {
					let filteredCategory = this.items.disciplinesInfo.filter(
						function(match) {
							return match.type == 'esport';
						}
					);
					return filteredCategory;
				} else if (this.$route.path === '/sport') {
					let filteredCategory = this.items.disciplinesInfo.filter(
						function(match) {
							return match.type == 'sport';
						}
					);
					return filteredCategory;
				}
			},
			matchesAmount(gameType) {
				let filteredMatches = this.items.upcomingMatches.filter(
					function(match) {
						return match.game == gameType;
					}
				);
				let amount = filteredMatches.length;
				return amount;
			},
		},
		computed: {
			...mapGetters(['items']),
		},
	};
</script>

<style></style>
