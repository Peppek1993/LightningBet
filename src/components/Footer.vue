<template>
  <div class="pb-32 sm:pb-4">
    <app-description></app-description>
    <div
      class="mt-10 bg-gray-700 flex justify-between items-center font-thin px-6 py-2"
    >
      <img
        src="../assets/main_logo.svg"
        alt="Lightning Bet Logo"
        class="w-32 sm:w-auto"
      />
      <p class="w-auto">
        Lightning bet is a non-profit portfolio project made by Adam Partyka.
        <a
          href="mailto:adampartyka1993@gmail.com"
          class="text-teal-300 font-thin"
        >
          adampartyka1993@gmail.com
        </a>
      </p>
    </div>
    <div class="flex justify-between p-6">
      <div v-for="currency in crypto" class="px-1">
        <img :src="require(`../assets/crypto/${currency}.png`)" />
      </div>
    </div>
    <section class="font-thin text-xs text-gray-700 py-2 px-6">
      Copyright @ 2020 All lightningbet.com products are jointly operated by
      Lightning bet and Lightning eSports Limited registered address Placeholder
      address lorem lorem, a company licensed and regulated by the laws of
      Curacao under the Gaming Services Provider N.V. license number 111/111.
      Payments are processed by Lightning Processing Services Limited, Cyprus,
      as per agreement between the two companies.
    </section>
    <div class="flex py-2 justify-between px-6">
      <div v-for="rule in cryptorules">
        <img
          :src="require(`../assets/footer_bet_rules/${rule}.png`)"
          class="h-10"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Description from "./Description.vue"
export default {
  data() {
    return {
      crypto: ["btc", "btcash", "eth", "lite", "tether"],
      cryptorules: ["18", "gamcare", "gc", "techlabs"],
    }
  },
  components: {
    appDescription: Description,
  },
}
</script>

<style></style>
