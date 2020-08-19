<template>
	<div
		class="col-start-3 col-end-11 row-start-2 row-end-3 overflow-auto pt-24 pl-24"
	>
		<transition-group name="fadeLeftBig">
			<div v-for="(value, key) in this.items.filterMatches" :key="value">
				<ul
					class="matchCard grid my-4 w-11/12 border-2 grid-cols-12 py-8"
					:class="value.game + 'Card'"
				>
					<img
						:src="
							require(`../assets/games/${value.game}_logo_32.svg`)
						"
						class="col-start-1 col-end-2"
					/>
					<li class="col-start-2 col-end-5">{{ value.teamA }}</li>
					<li class="col-start-5 col-end-6">{{ value.oddsA }}</li>
					<li class="col-start-6 col-end-8">Tournament</li>
					<li class="col-start-8 col-end-9">{{ value.oddsB }}</li>
					<li class="col-start-9 col-end-12">{{ value.teamB }}</li>
					<div class="col-start-12 col-end-13">></div>
				</ul>
			</div>
		</transition-group>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		computed: {
			...mapGetters(['items']),
		},
		methods: {
			...mapActions(['filterByType']),
		},
		beforeMount() {
			this.filterByType('esport');
		},
	};
</script>
