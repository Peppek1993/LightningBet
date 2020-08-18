import sportPanel from '../components/SportPanel.vue'
import esportPanel from '../components/EsportPanel.vue'


export const routes = [{
        path: '',
        component: esportPanel,
    },
    {
        path: '/sport',
        component: sportPanel,
    },
];