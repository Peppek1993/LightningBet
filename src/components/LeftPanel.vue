<template>
	<div class="col-start-1 col-end-3 flex flex-col shadow-layoutleft">
		<div class="flex flex-col flex-flex10 bg-gray-800">
			<div v-for="discipline in decideCategory()">
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
			</div>
		</div>
		<div>
			<div
				class="hover:border-l-8 hover:border-white hover:bg-gray-600 hover:bg-opacity-25 h-12 duration-300 cursor-pointer items-center px-4 flex"
			>
				<i class="fas fa-trophy pr-2"></i> Leaderboard
			</div>
			<div
				class="hover:border-l-8 hover:border-white hover:bg-gray-600 hover:bg-opacity-25 h-12 duration-300 cursor-pointer items-center px-4 flex"
			>
				<i class="fas fa-gift pr-2"></i> Rewards
			</div>
			<div
				class="hover:border-l-8 hover:border-white hover:bg-gray-600 hover:bg-opacity-25 h-12 duration-300 cursor-pointer items-center px-4 flex"
			>
				<i class="fas fa-user-plus pr-2"></i> Referral
			</div>
			<div
				class="hover:border-l-8 hover:border-white hover:bg-gray-600 hover:bg-opacity-25 h-12 duration-300 cursor-pointer items-center px-4 flex"
			>
				<i class="far fa-question-circle pr-2"></i> Faq
			</div>
			<div
				class="hover:border-l-8 hover:border-white hover:bg-gray-600 hover:bg-opacity-25 h-12 duration-300 cursor-pointer items-center px-4 flex"
			>
				<i class="fas fa-newspaper pr-2"></i> Blog
			</div>
		</div>
		<div class="legal flex-1 bg-gray-800 pr-2"></div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	export default {
		methods: {
			...mapActions(['filterByGame']),
			decideCategory() {
				if (this.$route.path === '/') {
					return this.items.esportDisciplines;
				} else if (this.$route.path === '/sport') {
					return this.items.sportDisciplines;
				}
			},
		},
		computed: {
			...mapGetters(['items']),
		},
	};
</script>

<style></style>
