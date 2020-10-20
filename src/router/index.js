import DisplayMatches from '../components/Main/Matches.vue'
import Leaderboard from '../components/Main/Leaderboard.vue'
import Rewards from '../components/Main/Rewards.vue'
import Referral from '../components/Main/Referral.vue'
import Faq from '../components/Main/Faq.vue'

export const routes = [{
        path: '*',
        component: DisplayMatches
    },
    {
        path: '/leaderboard',
        component: Leaderboard
    },
    {
        path: '/rewards',
        component: Rewards
    },
    {
        path: '/referral',
        component: Referral
    },
    {
        path: '/faq',
        component: Faq
    },
];