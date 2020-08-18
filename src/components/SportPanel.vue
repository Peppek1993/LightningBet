<template>
	<div class="leftPanelSport">
		<div class="games">
			<div @click="filterByGame('quidditch')" class="quidditch">
				<img src="../assets/games/quidditch_logo_32.svg" />Quidditch
			</div>
			<div @click="filterByGame('basketball')" class="basketball">
				<img src="../assets/games/basketball_logo_32.svg" /> Basketball
			</div>
			<div @click="filterByGame('ice_hockey')" class="ice_hockey">
				<img src="../assets/games/ice_hockey_logo_32.svg" />
				Ice Hockey
			</div>
			<div @click="filterByGame('volleyball')" class="volleyball">
				<img src="../assets/games/volleyball_logo_32.svg" /> Volleyball
			</div>
			<div @click="filterByGame('table_tennis')" class="table_tennis">
				<img src="../assets/games/table_tennis_logo_32.svg" /> Table
				tennis
			</div>
			<div
				@click="filterByGame('american_football')"
				class="american_football"
			>
				<img src="../assets/games/american_football_logo_32.svg" />
				American Football
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
	import { mapActions } from 'vuex';
	export default {
		methods: {
			...mapActions(['filterByGame']),
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

	.quidditch:hover {
		border-left: 8px solid rgb(251, 237, 113);
	}

	.basketball:hover {
		border-left: 8px solid rgb(215, 145, 57);
	}

	.ice_hockey:hover {
		border-left: 8px solid rgb(79, 243, 255);
	}

	.volleyball:hover {
		border-left: 8px solid rgb(235, 248, 107);
	}

	.table_tennis:hover {
		border-left: 8px solid rgb(165, 74, 246);
	}

	.american_football:hover {
		border-left: 8px solid rgb(114, 74, 25);
	}
	.quidditch:hover,
	.basketball:hover,
	.ice_hockey:hover,
	.volleyball:hover,
	.table_tennis:hover,
	.american_football:hover {
		background-color: rgba(255, 255, 255, 0.1);
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

	.leftPanelSport .games div {
		justify-content: flex-start;
		padding: 0 25px;
		display: flex;
		align-items: center;
		flex-basis: 45px;
		transition: 0.4s;
		cursor: pointer;
		user-select: none;
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
</style>
