import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        upcomingMatches: [{
                game: 'lol',
                color: 'bg-green-400',
                teamA: 'top_esports',
                nameA: 'Top Esports',
                teamB: 'jd_gaming',
                nameB: 'JD Gaming',
                oddsA: 1.53,
                oddsB: 2.86,
                type: 'esport',
                id: 1
            },
            {
                game: 'cs',
                color: 'bg-blue-400',
                teamA: 'avez',
                nameA: 'Avez Esports',
                teamB: 'evil_geniuses',
                nameB: 'Evil Geniuses',
                oddsA: 5,
                oddsB: 1.25,
                type: 'esport',
                id: 2
            },
            {
                game: 'dota',
                color: 'bg-blue-400',
                teamA: 'sparking_arrow_gaming',
                nameA: 'Sparking Arrow Gaming',
                teamB: 'natus_vincere',
                nameB: 'Natus Vincere',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
                id: 3
            },
            {
                game: 'overwatch',
                color: 'bg-blue-400',
                teamA: 'angry_titans',
                nameA: 'Angry Titans',
                teamB: 'ldlc_ol',
                nameB: 'LDLC OL',
                oddsA: 1.2,
                oddsB: 5.88,
                type: 'esport',
                id: 4
            },
            {
                game: 'r6',
                color: 'bg-blue-400',
                teamA: 'liquid',
                nameA: 'Team Liquid',
                teamB: 'gamerlegion',
                nameB: 'GamerLegion',
                oddsA: 1.82,
                oddsB: 2.22,
                type: 'esport',
                id: 5
            },
            {
                game: 'lol',
                color: 'bg-green-400',
                teamA: 'afreeca_freecs',
                nameA: 'Afreeca Freecs',
                teamB: 'gen_g',
                nameB: 'GenG',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
                id: 6
            },
            {
                game: 'lol',
                color: 'bg-green-400',
                teamA: 'sprout',
                nameA: 'Team Sprout',
                teamB: 't1',
                nameB: 'T1',
                oddsA: 2.7,
                oddsB: 1.58,
                type: 'esport',
                id: 7
            },
            {
                game: 'cs',
                color: 'bg-blue-400',
                teamA: 'forze',
                nameA: 'ForZe',
                teamB: 'hellraisers',
                nameB: 'HellRaisers',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
                id: 8
            },
            {
                game: 'dota',
                color: 'bg-blue-400',
                teamA: 'alliance',
                nameA: 'Team Alliance',
                teamB: 'aster_aries',
                nameB: 'Aster Aries',
                oddsA: 2.56,
                oddsB: 1.64,
                type: 'esport',
                id: 9
            },
            {
                game: 'overwatch',
                color: 'bg-blue-400',
                teamA: 'mibr',
                nameA: 'MIBR',
                teamB: 'young_and_beautiful',
                nameB: 'Young And Beautiful',
                oddsA: 2.08,
                oddsB: 1.92,
                type: 'esport',
                id: 10
            },
            {
                game: 'r6',
                color: 'bg-blue-400',
                teamA: 'heroic',
                nameA: 'Team Heroic',
                teamB: 'k1ck_neosurf',
                nameB: 'K1ck Neosurf',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
                id: 11
            },
            {
                game: 'quidditch',
                color: 'bg-blue-400',
                teamA: 'gryffindor',
                nameA: 'Gryffindor',
                teamB: 'hufflepuff',
                nameB: 'Hufflepuff',
                oddsA: 1.49,
                oddsB: 3.03,
                type: 'sport',
                id: 12
            },
            {
                game: 'basketball',
                color: 'bg-blue-400',
                teamA: 'boston_celtics',
                nameA: 'Boston Celtics',
                teamB: 'dallas_mavericks',
                nameB: 'Dallas Mavericks',
                oddsA: 1.69,
                oddsB: 2.43,
                type: 'sport',
                id: 13
            },
            {
                game: 'ice_hockey',
                color: 'bg-blue-400',
                teamA: 'boston_bruins',
                nameA: 'Boston Bruins',
                teamB: 'colorado_avalanche',
                nameB: 'Colorado Avalanche',
                oddsA: 3.57,
                oddsB: 1.39,
                type: 'sport',
                id: 14
            },
            {
                game: 'quidditch',
                color: 'bg-blue-400',
                teamA: 'slytherin',
                nameA: 'Slytherin',
                teamB: 'ravenclaw',
                nameB: 'Ravenclaw',
                oddsA: 1.47,
                oddsB: 3.13,
                type: 'sport',
                id: 15
            },
            {
                game: 'lol',
                color: 'bg-green-400',
                teamA: 'misfits_premier',
                nameA: 'Misfits Premier',
                teamB: 'schalke_04_evolution',
                nameB: 'Schalke 04 Evolution',
                oddsA: 1.11,
                oddsB: 10,
                type: 'esport',
                id: 16
            },
            {
                game: 'ice_hockey',
                color: 'bg-blue-400',
                teamA: 'dallas_stars',
                nameA: 'Dallas Stars',
                teamB: 'new_york_islanders',
                nameB: 'New York Islanders',
                oddsA: 2.12,
                oddsB: 1.88,
                type: 'sport',
                id: 17
            },
            {
                game: 'ice_hockey',
                color: 'bg-blue-400',
                teamA: 'philadelphia_flyers',
                nameA: 'Philadelphia Flyers',
                teamB: 'tampa_bay_lightning',
                nameB: 'Tampa Bay Lightning',
                oddsA: 2.63,
                oddsB: 1.61,
                type: 'sport',
                id: 18
            },
        ],
        filterMatches: [],
        esportDisciplines: [{
                name: 'League of Legends',
                tag: 'lol',
                color: 'border-green-400',
                type: '/esport'
            },
            {
                name: 'CS:GO',
                tag: 'cs',
                color: 'border-blue-400',
                type: '/esport'
            },
            {
                name: 'Overwatch',
                tag: 'overwatch',
                color: 'border-yellow-300',
                type: '/esport'
            },
            {
                name: 'Dota 2',
                tag: 'dota',
                color: 'border-red-500',
                type: '/esport'
            },
            {
                name: 'Rainbow Six',
                tag: 'r6',
                color: 'border-orange-400',
                type: '/esport'
            },
        ],
        sportDisciplines: [{
                name: 'Quidditch',
                tag: 'quidditch',
                color: 'border-yellow-400',
                type: '/sport'
            },
            {
                name: 'Ice Hockey',
                tag: 'ice_hockey',
                color: 'border-teal-400',
                type: '/sport'
            },
            {
                name: 'Volleyball',
                tag: 'volleyball',
                color: 'border-pink-400',
                type: '/sport'
            },
            {
                name: 'Basketball',
                tag: 'basketball',
                color: 'border-orange-400',
                type: '/sport'
            },
            {
                name: 'Table Tennis',
                tag: 'table_tennis',
                color: 'border-purple-600',
                type: '/sport'
            },
            {
                name: 'American Football',
                tag: 'american_football',
                color: 'border-orange-900',
                type: '/sport'
            },
        ],
        funds: 0,
        paymentMethods: ['fa-bitcoin', 'fa-cc-paypal', 'fa-cc-visa', 'fa-cc-apple-pay'],
        bets: [{
                teamA: 'Top Esports',
                teamB: 'JD Gaming',
                odds: 1.53,
                possibleReturn: 3.06
            },
            {
                teamA: 'Top Esports',
                teamB: 'JD Gaming',
                odds: 1.53,
                possibleReturn: 3.06
            },
            {
                teamA: 'Top Esports',
                teamB: 'JD Gaming',
                odds: 1.53,
                possibleReturn: 3.06
            },
            {
                teamA: 'Top Esports',
                teamB: 'JD Gaming',
                odds: 1.53,
                possibleReturn: 3.06
            },
            {
                teamA: 'Top Esports',
                teamB: 'JD Gaming',
                odds: 1.53,
                possibleReturn: 3.06
            },
            {
                teamA: 'Top Esports',
                teamB: 'JD Gaming',
                odds: 1.53,
                possibleReturn: 3.06
            }
        ]
    },
    getters: {
        items: (state) => {
            return state;
        },
    },
    mutations: {
        filterByGame(state, payload) {
            let filteredMatches = this.state.upcomingMatches.filter(function (
                match
            ) {
                return match.game == payload;
            });
            this.state.filterMatches = filteredMatches;
        },
        filterByType(state, payload) {
            let filteredMatches = this.state.upcomingMatches.filter(function (
                match
            ) {
                return match.type == payload;
            });
            this.state.filterMatches = filteredMatches;
        },
    },
    actions: {
        filterByGame({
            commit
        }, payload) {
            commit('filterByGame', payload);
        },
        filterByType({
            commit
        }, payload) {
            commit('filterByType', payload);
        },
    },
    modules: {},
});