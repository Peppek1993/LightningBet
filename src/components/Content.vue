<template>
	<div
		class="col-start-1 col-end-6 sm:col-start-2 sm:col-end-6 lg:col-start-3 lg:col-end-4 h-100 overflow-auto"
	>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import Footer from './Footer.vue';
	export default {
		components: {
			appFooter: Footer,
		},
	};
</script>
