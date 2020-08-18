<template>
	<div class="header">
		<div class="logo">
			<router-link to="/">
				<img
					src="../assets/main_logo.svg"
					alt="Lightning Bet Logo"
					@click="filterByType('esport')"
				/>
			</router-link>
		</div>
		<ul class="nav-area">
			<li>
				<router-link to="/">
					<a href="#" @click="filterByType('esport')"
						><i class="fas fa-gamepad"></i><br />Esports</a
					>
				</router-link>
			</li>
			<li>
				<router-link to="/sport">
					<a href="#" @click="filterByType('sport')"
						><i class="fas fa-futbol"></i><br />Sport</a
					>
				</router-link>
			</li>
			<li>
				<router-link to="#">
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
			...mapActions(['filterByType']),
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

	.logo img {
		background-size: cover;
		background-position: center;
		height: 60px;
		width: 100%;
	}

	.logo img:hover {
		background-color: rgba(255, 255, 255, 0.1);
		transition: 0.5s;
		border-radius: 4px;
	}

	.nav-area {
		padding-top: 7px;
		list-style: none;
		display: flex;
	}

	.nav-area li {
		flex: 1;
		font-size: 20px;
		color: white;
		margin: 0px 10vh;
		user-select: none;
	}

	.nav-area a:hover {
		background-color: rgba(255, 255, 255, 0.1);
		color: rgb(0, 225, 255);
	}

	a {
		color: white;
		font-weight: 100;
		letter-spacing: 2px;
		text-decoration: none;
		display: inline-block;
		width: 100%;
		text-align: center;
		border-radius: 20px;
		transition: 0.7s;
	}

	.deposit {
		border-radius: 20px;
		padding-top: 7px;
		font-size: 20px;
		text-align: center;
		margin: 0px 5vh;
	}

	.deposit a:hover {
		background-color: rgba(255, 255, 255, 0.1);
		color: rgb(0, 225, 255);
	}
</style>
