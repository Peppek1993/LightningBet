<template>
	<div>
		<app-description></app-description>
		<div
			class="px-4 mt-16 h-auto bg-gray-700 flex justify-around items-center font-thin"
		>
			<img src="../assets/main_logo.svg" alt="Lightning Bet Logo" />
			<p class="w-auto">
				Lightning bet is a non-profit portfolio project made by Adam
				Partyka.
				<a
					href="mailto:adampartyka1993@gmail.com"
					class="text-teal-300 font-thin"
					>adampartyka1993@gmail.com</a
				>
			</p>
			<p class="w-auto">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
				voluptates ipsam aspernatur non natus sint.
			</p>
		</div>
		<div class="flex justify-between p-4">
			<div v-for="currency in crypto">
				<img :src="require(`../assets/crypto/${currency}.png`)" />
			</div>
		</div>
		<div class="flex justify-between p-4 flex-auto items-center">
			<p class="font-hairline text-xs sm:w-1/2 w-full">
				Copyright @ 2020 All lightningbet.com products are jointly
				operated by Lightning bet and Lightning eSports Limited
				registered address Placeholder address lorem lorem, a company
				licensed and regulated by the laws of Curacao under the Gaming
				Services Provider N.V. license number 111/111. Payments are
				processed by Lightning Processing Services Limited, Cyprus, as
				per agreement between the two companies.
			</p>
			<div class="hidden sm:flex">
				<div v-for="rule in cryptorules" class="p-2">
					<img
						:src="require(`../assets/footer_bet_rules/${rule}.png`)"
						class="h-10 mx-auto"
					/>
				</div>
			</div>
		</div>
		<div class="flex sm:hidden">
			<div v-for="rule in cryptorules" class="p-2">
				<img
					:src="require(`../assets/footer_bet_rules/${rule}.png`)"
					class="h-10"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import Description from './Description.vue';
	export default {
		data() {
			return {
				crypto: ['btc', 'btcash', 'eth', 'lite', 'tether', 'xrp'],
				cryptorules: ['18', 'gamcare', 'gc', 'techlabs'],
			};
		},
		components: {
			appDescription: Description,
		},
	};
</script>

<style></style>
