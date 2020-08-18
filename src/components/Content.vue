<template>
	<div class="main">
		<div v-for="(value, key) in this.items.filterMatches">
			<ul class="matchCard">
				<img
					:src="require(`../assets/games/${value.game}_logo_32.svg`)"
				/>
				<li>{{ value.oddsA }} | {{ value.teamA }}</li>
				<li>Tournament</li>
				<li>{{ value.teamB }} | {{ value.oddsB }}</li>
				<div class="details">></div>
			</ul>
		</div>
		<footer>Lorem ipsum</footer>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		computed: {
			...mapGetters(['items']),
		},
		methods: {
			...mapActions(['displayAllMatches']),
		},
		beforeMount() {
			this.displayAllMatches();
		},
	};
</script>

<style>
	.main {
		grid-area: 2 / 2 / 3 / 3;
		overflow: auto;
		padding-top: 10%;
		padding-left: 10%;
	}

	.matchCard {
		display: flex;
		margin: 10px 0;
		width: 100vh;
		min-height: 100px;
		background-color: rgb(43, 51, 61);
		border-radius: 10px;
		box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
	}

	.matchCard img {
		align-self: center;
		flex: 1;
	}

	.matchCard li {
		flex: 2;
		list-style: none;
		max-height: 100%;
		padding: 40px 0;
	}

	.details {
		flex: 1;
		align-self: center;
	}
</style>
