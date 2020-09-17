<template>
	<div
		class="col-start-5 col-end-6 lg:col-start-4 hidden sm:block overflow-auto shadow-layoutright h-full"
	>
		<div v-for="bet in items.bets" class="p-3 flex-col w-full">
			<div class="border-teal-400 bg-teal-800 border rounded-md flex-col">
				<h1>{{ bet.teamA }} vs {{ bet.teamB }}</h1>
				<p>Odds: {{ bet.odds }}</p>
				<p>Possible return: {{ bet.possibleReturn }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		computed: {
			...mapGetters(['items']),
		},
	};
</script>

<style></style>
