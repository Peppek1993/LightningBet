import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import {
    routes
} from './router/index.js';
import '@/assets/css/style.css';
import VueTailwind from 'vue-tailwind';

const theme = {
    TModal: {
        fixedClasses: {
            overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
            wrapper: 'z-50 relative mx-auto my-0 max-w-lg mt-12 shadow-xl',
            modal: 'bg-gray-700 text-white shadow overflow-hidden relative rounded-md',
            body: 'p-4',
            header: 'p-4 border-b text-sm font-semibold uppercase',
            footer: 'p-2 border-t',
            close: 'absolute right-0 top-0 m-3',
            closeIcon: 'h-5 w-5 fill-current'
        },
        classes: {
            overlay: 'bg-black ',
            wrapper: '',
            modal: '',
            header: 'text-white',
            footer: '',
            close: 'text-white hover:text-teal-600',
            closeIcon: ''
        },
    },
};

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueTailwind, theme);



export const router = new VueRouter({
    routes,
    mode: 'history',
});
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');