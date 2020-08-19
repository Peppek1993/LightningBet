<template>
	<div class="col-start-1 col-end-3 flex flex-col shadow-layoutleft">
		<div class="flex flex-col flex-flex10 bg-gray-800">
			<div
				@click="filterByGame('quidditch')"
				class="hover:border-l-8 border-yellow-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/quidditch_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>Quidditch
			</div>
			<div
				@click="filterByGame('basketball')"
				class="hover:border-l-8 border-orange-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/basketball_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>
				Basketball
			</div>
			<div
				@click="filterByGame('ice_hockey')"
				class="hover:border-l-8 border-blue-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/ice_hockey_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>
				Ice Hockey
			</div>
			<div
				@click="filterByGame('volleyball')"
				class="hover:border-l-8 border-green-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/volleyball_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>
				Volleyball
			</div>
			<div
				@click="filterByGame('table_tennis')"
				class="hover:border-l-8 border-purple-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/table_tennis_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>
				Table tennis
			</div>
			<div
				@click="filterByGame('american_football')"
				class="hover:border-l-8 border-orange-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/american_football_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>
				American Football
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
		<div class="flex-1 bg-gray-800 pr-2"></div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		methods: {
			...mapActions(['filterByGame']),
		},
	};
</script>

<style></style>
