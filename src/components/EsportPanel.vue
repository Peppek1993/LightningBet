<template>
	<div class="col-start-1 col-end-3 flex flex-col shadow-layoutleft">
		<div class="flex flex-col flex-flex10 bg-gray-800">
			<div
				@click="filterByGame('cs')"
				class="hover:border-l-8 border-yellow-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/cs_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>CS:GO
			</div>
			<div
				@click="filterByGame('dota')"
				class="hover:border-l-8 border-yellow-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/dota_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>
				DOTA 2
			</div>
			<div
				@click="filterByGame('lol')"
				class="hover:border-l-8 border-yellow-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/lol_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>
				League of Legends
			</div>
			<div
				@click="filterByGame('overwatch')"
				class="hover:border-l-8 border-yellow-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/overwatch_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>
				Overwatch
			</div>
			<div
				@click="filterByGame('r6')"
				class="hover:border-l-8 border-yellow-400 hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer px-4 flex duration-300 h-12 items-center"
			>
				<img
					src="../assets/games/r6_logo_32.svg"
					class="w-8 h-8 pr-2"
				/>
				Rainbow Six
			</div>
		</div>
		<div class="menu">
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
	import { mapActions } from 'vuex';
	export default {
		methods: {
			...mapActions(['filterByGame']),
		},
	};
</script>

<style></style>
