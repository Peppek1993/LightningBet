<template>
    <router-view
        :class="{'col-start-2': !items.leftPanelHidden, 'col-start-3': items.leftPanelHidden, 'col-end-4': !items.rightPanelHidden, 'col-end-5': items.rightPanelHidden}"
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
