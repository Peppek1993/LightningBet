import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import {
    routes
} from './router/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter);

export const router = new VueRouter({
    routes,
    mode: 'history'
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')