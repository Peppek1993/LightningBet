<template>
	<div class="leftPanelEsport">
		<div class="games">
			<div @click="filterByGame('cs')" class="cs">
				<img src="../assets/games/cs_logo_32.svg" />CS:GO
			</div>
			<div @click="filterByGame('dota')" class="dota">
				<img src="../assets/games/dota_logo_32.svg" /> DOTA 2
			</div>
			<div @click="filterByGame('lol')" class="lol">
				<img src="../assets/games/lol_logo_32.svg" /> League of Legends
			</div>
			<div @click="filterByGame('overwatch')" class="ow">
				<img src="../assets/games/overwatch_logo_32.svg" />
				Overwatch
			</div>
			<div @click="filterByGame('r6')" class="r6">
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
	import { mapActions } from 'vuex';
	export default {
		methods: {
			...mapActions(['filterByGame']),
		},
	};
</script>

<style>
	.leftPanelEsport {
		grid-area: 2 / 1 / 3 / 2;
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.3);
		list-style: none;
	}

	.menu div:hover {
		border-left: 8px solid whitesmoke;
		background-color: rgba(255, 255, 255, 0.1);
	}

	.cs:hover {
		border-left: 8px solid rgb(63, 169, 255);
	}

	.dota:hover {
		border-left: 8px solid rgb(221, 80, 65);
	}

	.lol:hover {
		border-left: 8px solid rgb(1, 255, 145);
	}

	.ow:hover {
		border-left: 8px solid rgb(252, 254, 113);
	}

	.r6:hover {
		border-left: 8px solid rgb(255, 169, 57);
	}
	.cs:hover,
	.dota:hover,
	.lol:hover,
	.ow:hover,
	.r6:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
	.leftPanelEsport .games {
		display: flex;
		flex-direction: column;
		flex: 10;
		width: 100%;
		justify-content: flex-start;
		height: 100%;
		background-color: rgb(40, 47, 56);
	}

	.leftPanelEsport .games div,
	.menu div {
		justify-content: flex-start;
		padding: 0 25px;
		display: flex;
		align-items: center;
		flex-basis: 45px;
		transition: 0.4s;
		cursor: pointer;
		user-select: none;
	}

	.menu {
		display: flex;
		flex-direction: column;
		flex: 5;
		width: 100%;
		background-color: rgb(34, 40, 48);
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
	}

	.leftPanelEsport .legal {
		flex: 1;
		text-align: center;
		background-color: rgb(40, 47, 56);
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
	}

	.leftPanelEsport .games img {
		width: 20px;
		height: 20px;
		padding-right: 15px;
	}

	.menu i {
		padding-right: 15px;
	}
</style>
