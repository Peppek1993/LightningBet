<template>
	<div
		class="col-start-1 col-end-13 row-start-1 row-end-2 grid grid-cols-12 z-50 shadow-layout"
	>
		<div class="col-start-1 col-end-3">
			<router-link to="/">
				<img
					src="../assets/main_logo.svg"
					alt="Lightning Bet Logo"
					@click="filterByType('esport')"
					class="h-16 w-full duration-500 hover:bg-gray-800"
				/>
			</router-link>
		</div>
		<ul class="flex text-xl">
			<li class="mx-32 text-center">
				<router-link to="/">
					<a href="#" @click="filterByType('esport')"
						><i class="fas fa-gamepad"></i><br />Esports</a
					>
				</router-link>
			</li>
			<li class="mx-32 text-center">
				<router-link to="/sport">
					<a href="#" @click="filterByType('sport')"
						><i class="fas fa-futbol"></i><br />Sport</a
					>
				</router-link>
			</li>
			<li class="mx-32 text-center">
				<router-link to="#">
					<a href="#"><i class="fas fa-dice"></i><br />Games</a>
				</router-link>
			</li>
		</ul>
		<div class="col-start-11 col-end-13 pt-1 text-xl text-center">
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
