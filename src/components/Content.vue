<template>
    <router-view
        class="col-start-1 col-end-6 sm:col-start-2 sm:col-end-6 lg:col-start-3 lg:col-end-4"
    ></router-view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["items"]),
    },
};
</script>
