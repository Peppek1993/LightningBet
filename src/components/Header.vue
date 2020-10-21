<template>
	<div class="col-start-1 col-end-6 z-50 shadow-layout grid grid-cols-6 sm:flex items-center justify-between px-6 sm:px-0">
		<div class="col-start-1 col-end-3">
			<router-link to="/esport">
				<img
					src="../assets/main_logo.svg"
					alt="Lightning Bet Logo"
					@click="filterByType('esport')"
					class=" sm:w-full h-12 sm:px-3 duration-500 hover:bg-gray-800 rounded-lg"
				/>
			</router-link>
		</div>
		<div class="flex col-start-3 col-end-5 justify-center font-hairline text-center">
			<router-link to="/esport">
				<div
					@click="filterByType('esport')"
					class=" hover:bg-gray-800 duration-500 px-2 sm:px-4 py-2 rounded-md md:text-lg sm:text-sm tracking-wide hover:text-teal-400 cursor-pointer"
				>
					<i class="fas fa-gamepad hidden sm:inline-block"></i>
					Esport
				</div>
			</router-link>
			<router-link to="/sport">
				<div
					@click="filterByType('sport')"
					class="hover:bg-gray-800 duration-500 px-2 sm:px-4 py-2 rounded-md md:text-lg sm:text-sm tracking-wide hover:text-teal-400 cursor-pointer"
				>
					<i class="fas fa-futbol hidden sm:inline-block"></i>
					Sport
				</div>
			</router-link>
			<div
				class="hidden sm:block hover:bg-gray-800 duration-500 px-2 sm:px-4 sm:py-2 rounded-md md:text-lg sm:text-sm tracking-wide hover:text-teal-400 cursor-pointer"
				@click="gamesAlert()"
			>
				<i class="fas fa-dice hidden sm:inline-block"></i>
				Games
			</div>
		</div>
		<div class="flex col-start-5 col-end-7 items-center justify-end font-hairline">
			<div class="text-center text-xl px-2">{{ displayFunds() }}$</div>
			<div
				class="text-sm py-5 sm:py-5 md:py-4 pr-2 md:text-xl sm:text-sm"
				@click="depositModal = !depositModal"
			>
				<a
					href="#"
					class="hover:bg-gray-800 duration-500 p-2 rounded-lg border border-teal-500 hover:text-blue-500 cursor-pointer"
				>
					<i class="fas fa-coins hidden sm:inline-block"></i>
					Deposit
				</a>
			</div>
		</div>
		<t-modal header="Deposit funds" v-model="depositModal" class="p-10">
			<div class="flex justify-between text-center items-center">
				<div class="flex">
					<p>Payment method:</p>
					<i
						v-for="method in items.paymentMethods"
						class="fab py-2 px-1 text-4xl cursor-pointer paymentMethod"
						:class="method"
						@click="makeActive"
					/>
				</div>
				<div>
					<label for="amount">Deposit amount:</label>
					<select
						id="amount"
						name="amount"
						class="text-black p-1 text-lg rounded-md focus:outline-none"
						v-model="depositAmount"
					>
						<option value="5">5$</option>
						<option value="10">10$</option>
						<option value="25">25$</option>
						<option value="50">50$</option>
						<option value="75">75$</option>
						<option value="100">100$</option>
					</select>
				</div>
			</div>
			<template v-slot:footer>
				<div class="flex justify-between">
					<button class="font-hairline">Cancel</button>
					<button @click="depositCommit" class="font-hairline">Deposit</button>
				</div>
			</template>
		</t-modal>
		<div
			v-if="depositModal"
			class="absolute z-30 inset-0 opacity-50 bg-black"
		></div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	export default {
		methods: {
			...mapActions(['filterByType']),
			makeActive() {
				let icons = document.getElementsByClassName('paymentMethod');
				for (let i = 0; i < icons.length; i++) {
					icons[i].addEventListener('click', function() {
						let current = document.getElementsByClassName(
							' text-teal-500'
						);
						if (current.length > 0) {
							current[0].className = current[0].className.replace(
								' text-teal-500',
								''
							);
						} else this.className += ' text-teal-500';
					});
				}
			},
			depositCommit() {
				if (
					document.getElementsByClassName('text-teal-500').length > 0
				) {
					this.items.funds += parseInt(this.depositAmount);
					this.depositModal = false;
				} else {
					alert('Please choose a payment method.');
				}
			},
			displayFunds() {
				let funds = this.items.funds.toFixed(2);
				return funds;
			},
			gamesAlert() {
				alert(
					'Sorry, Games are currently unavailable. Please check back later!'
				);
            },
		},
		computed: {
			...mapGetters(['items']),
		},
		data() {
			return {
				depositModal: true,
				depositAmount: 5,
			};
        },
	};
</script>

<style></style>
