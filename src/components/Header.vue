<template>
	<div class="header">
		<div class="logo">
			<img
				src="../assets/main_logo.svg"
				alt="Lightning Bet Logo"
				@click="displayAllMatches"
			/>
		</div>
		<ul class="nav-area">
			<li>
				<router-link to="/">
					<a href="#"><i class="fas fa-gamepad"></i><br />Esports</a>
				</router-link>
			</li>
			<li>
				<router-link to="/sport">
					<a href="#"><i class="fas fa-futbol"></i><br />Sport</a>
				</router-link>
			</li>
			<li>
				<router-link to="/games">
					<a href="#"><i class="fas fa-dice"></i><br />Games</a>
				</router-link>
			</li>
		</ul>
		<div class="deposit">
			<a href="#"><i class="fas fa-coins"></i><br />Deposit</a>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		methods: {
			...mapActions(['displayAllMatches']),
		},
	};
</script>

<style>
	.header {
		grid-area: 1 / 1 / 2 / 4;
		box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
		display: grid;
		grid-template-columns: 1fr 4fr 1fr;
	}

	a {
		color: white;
		font-weight: 100;
		letter-spacing: 2px;
		text-decoration: none;
		padding-top: 5px;
		display: inline-block;
		width: 100%;
		text-align: center;
	}
	.header ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	.header li {
		flex: 1;
		font-size: 20px;
	}

	.header li:hover,
	.deposit:hover {
		background-color: rgba(75, 234, 255, 0.281);
		border-radius: 20px;
		transition: 0.5s;
	}

	.logo img {
		background-size: cover;
		background-position: center;
		height: 60px;
		width: 100%;
	}

	.logo img:hover {
		background-color: rgba(75, 234, 255, 0.281);
		border-radius: 20px;
		transition: 0.5s;
	}

	.deposit {
		font-size: 20px;
		text-align: center;
	}
</style>
