<template>
	<div class="col-start-1 col-end-6 sm:col-start-2 sm:col-end-6 lg:col-start-3 lg:col-end-4 h-100 overflow-auto">
        <app-mobile-menu></app-mobile-menu>
        <transition name="test">
        <router-view></router-view>
        </transition>
        <app-footer></app-footer>
	</div>
</template>

<script>
    import Footer from './Footer.vue';
    import MobileMenu from './MobileMenu.vue'
	export default {
		components: {
            appFooter: Footer,
            appMobileMenu: MobileMenu
		},
	};
</script>

<style>

.test-enter-active, .test-leave-active {
  animation: test;
}
.test-enter, .test-leave-to {
  opacity: 0;
}

@keyframes test {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
