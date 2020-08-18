<template>
	<div class="leftPanelSport">
		<div class="games">
			<div @click="filterByGame('cs')">
				<img src="../assets/games/cs_logo_32.svg" />CS:GO
			</div>
			<div @click="filterByGame('dota')">
				<img src="../assets/games/dota_logo_32.svg" /> DOTA 2
			</div>
			<div @click="filterByGame('lol')">
				<img src="../assets/games/lol_logo_32.svg" /> League of Legends
			</div>
			<div @click="filterByGame('overwatch')">
				<img src="../assets/games/overwatch_logo_32.svg" />
				Overwatch
			</div>
			<div @click="filterByGame('r6')">
				<img src="../assets/games/r6_logo_32.svg" /> Rainbow Six
			</div>
		</div>
		<div class="menu">
			<div><i class="fas fa-trophy"></i> Leaderboard</div>
			<div><i class="fas fa-gift"></i> Rewards</div>
			<div><i class="fas fa-user-plus"></i> Referral</div>
			<div><i class="far fa-question-circle"></i> Faq</div>
			<div><i class="fas fa-newspaper"></i> Blog</div>
		</div>
		<div class="legal"></div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	export default {
		methods: {
			...mapActions(['filterByGame']),
		},
		computed: {
			...mapGetters(['items']),
		},
	};
</script>

<style>
	.leftPanelSport {
		grid-area: 2 / 1 / 3 / 2;
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.3);
		list-style: none;
	}

	.leftPanelSport .games div:hover,
	.leftPanelSport .menu div:hover {
		background-color: rgba(75, 234, 255, 0.281);
		border-radius: 20px;
		transition: 0.5s;
	}

	.leftPanelSport .games {
		display: flex;
		flex-direction: column;
		flex: 10;
		width: 100%;
		justify-content: flex-start;
		height: 100%;
		background-color: rgb(40, 47, 56);
	}

	.leftPanelSport .games div,
	.leftPanelSport .menu div {
		justify-content: flex-start;
		padding: 0 25px;
		display: flex;
		align-items: center;
		flex-basis: 45px;
	}

	.leftPanelSport .menu {
		display: flex;
		flex-direction: column;
		flex: 5;
		width: 100%;
		background-color: rgb(34, 40, 48);
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
	}

	.leftPanelSport .legal {
		flex: 1;
		text-align: center;
		background-color: rgb(40, 47, 56);
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
	}

	.leftPanelSport .games img {
		width: 20px;
		height: 20px;
		padding-right: 15px;
	}

	.leftPanelSport .menu i {
		padding-right: 15px;
	}
</style>
