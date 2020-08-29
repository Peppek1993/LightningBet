<template>
    <div class="col-start-1 col-end-6 row-start-1 row-end-2 z-50 shadow-layout headerWrapper">
        <div class="col-start-1 col-end-2">
            <router-link to="/esport">
                <img
                    src="../assets/main_logo.svg"
                    alt="Lightning Bet Logo"
                    @click="filterByType('esport')"
                    class="h-16 w-full duration-500 hover:bg-gray-800"
                />
            </router-link>
        </div>
        <div
            class="flex col-start-2 col-end-3 items-center justify-start sm:justify-center md:justify-start"
        >
            <router-link to="/esport">
                <div
                    @click="filterByType('esport')"
                    class="text-center hover:bg-gray-800 duration-500 px-4 py-3 rounded-md md:text-xl sm:text-sm tracking-wide hover:text-blue-500 cursor-pointer"
                >
                    <i class="fas fa-gamepad"></i>
                    Esports
                </div>
            </router-link>
            <router-link to="/sport">
                <div
                    @click="filterByType('sport')"
                    class="text-center hover:bg-gray-800 duration-500 px-4 py-3 rounded-md md:text-xl sm:text-sm tracking-wide hover:text-blue-500 cursor-pointer"
                >
                    <i class="fas fa-futbol"></i>
                    Sport
                </div>
            </router-link>
            <div
                class="text-center hover:bg-gray-800 duration-500 px-4 py-3 rounded-md md:text-xl sm:text-sm tracking-wide hover:text-blue-500 cursor-pointer"
            >
                <i class="fas fa-dice"></i>
                Games
            </div>
        </div>
        <div
            class="text-sm col-start-3 col-end-4 fixed right-0 py-5 sm:py-5 md:py-4 pr-2 justify-center items-center md:text-xl sm:text-sm"
        >
            <a
                href="#"
                class="hover:bg-gray-800 duration-500 p-2 rounded-lg border border-teal-500 hover:text-blue-500 cursor-pointer"
            >
                <i class="fas fa-coins"></i>
                Deposit
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["filterByType"]),
    },
};
</script>

<style>
.headerWrapper {
    display: grid;
    grid-template-columns: 14rem 1fr 5rem;
}
</style>