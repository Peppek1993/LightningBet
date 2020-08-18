<template>
	<div class="home">
		<app-header></app-header>
		<app-left-panel></app-left-panel>
		<app-content></app-content>
		<app-bet-panel></app-bet-panel>
	</div>
</template>

<script>
	import Header from './Header.vue';
	import BetPanel from './BetPanel.vue';
	import Content from './Content.vue';
	import LeftPanel from './LeftPanel.vue';
	export default {
		components: {
			appHeader: Header,
			appBetPanel: BetPanel,
			appContent: Content,
			appLeftPanel: LeftPanel,
		},
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	html {
		box-sizing: border-box;
		background-color: rgb(36, 42, 50);
		color: rgb(191, 203, 223);
		font-family: Roboto, sans-serif;
		font-size: 14px;
		font-weight: 500;
	}

	.home {
		display: grid;
		grid-template-columns: 1fr 4fr 1fr;
		grid-template-rows: 60px 1fr;
		height: 100vh;
	}
</style>
