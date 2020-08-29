<template>
    <div
        class="col-start-5 col-end-6 lg:col-start-4 hidden sm:flex bg-teal-700 shadow-layoutright h-full"
    ></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["items"]),
    },
};
</script>

<style>
</style>