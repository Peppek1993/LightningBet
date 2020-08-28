<template>
    <div
        class="col-end-6 bg-gray-800 shadow-layoutright"
        :class="{'col-start-4':!items.rightPanelHidden, 'col-start-5':items.rightPanelHidden}"
    >
        <div v-show="!items.rightPanelHidden">
            <i
                class="fas fa-angle-double-right p-6 bg-red-500"
                @click="items.rightPanelHidden = !items.rightPanelHidden"
            ></i>
        </div>
        <div v-show="items.rightPanelHidden">
            <i
                class="fas fa-angle-double-left p-4 bg-red-500"
                @click="items.rightPanelHidden = !items.rightPanelHidden"
            ></i>
        </div>
    </div>
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