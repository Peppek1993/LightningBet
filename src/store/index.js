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
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'cs',
                color: 'bg-blue-400',
                teamA: 'avez',
                nameA: 'Avez Esports',
                teamB: 'evil_geniuses',
                nameB: 'Evil Geniuses',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
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
            },
            {
                game: 'overwatch',
                color: 'bg-blue-400',
                teamA: 'angry_titans',
                nameA: 'Angry Titans',
                teamB: 'ldlc_ol',
                nameB: 'LDLC OL',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'r6',
                color: 'bg-blue-400',
                teamA: 'liquid',
                nameA: 'Team Liquid',
                teamB: 'gamerlegion',
                nameB: 'GamerLegion',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
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
            },
            {
                game: 'lol',
                color: 'bg-green-400',
                teamA: 'sprout',
                nameA: 'Team Sprout',
                teamB: 't1',
                nameB: 'T1',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
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
            },
            {
                game: 'dota',
                color: 'bg-blue-400',
                teamA: 'alliance',
                nameA: 'Team Alliance',
                teamB: 'aster_aries',
                nameB: 'Aster Aries',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'overwatch',
                color: 'bg-blue-400',
                teamA: 'mibr',
                nameA: 'MIBR',
                teamB: 'young_and_beautiful',
                nameB: 'Young And Beautiful',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
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
            },
            {
                game: 'quidditch',
                color: 'bg-blue-400',
                teamA: 'gryffindor',
                nameA: 'Gryffindor',
                teamB: 'hufflepuff',
                nameB: 'Hufflepuff',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'basketball',
                color: 'bg-blue-400',
                teamA: 'boston_celtics',
                nameA: 'Boston Celtics',
                teamB: 'dallas_mavericks',
                nameB: 'Dallas Mavericks',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'ice_hockey',
                color: 'bg-blue-400',
                teamA: 'boston_bruins',
                nameA: 'Boston Bruins',
                teamB: 'colorado_avalanche',
                nameB: 'Colorado Avalanche',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'quidditch',
                color: 'bg-blue-400',
                teamA: 'slytherin',
                nameA: 'Slytherin',
                teamB: 'ravenclaw',
                nameB: 'Ravenclaw',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'lol',
                color: 'bg-green-400',
                teamA: 'misfits_premier',
                nameA: 'Misfits Premier',
                teamB: 'schalke_04_evolution',
                nameB: 'Schalke 04 Evolution',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'ice_hockey',
                color: 'bg-blue-400',
                teamA: 'dallas_stars',
                nameA: 'Dallas Stars',
                teamB: 'new_york_islanders',
                nameB: 'New York Islanders',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'ice_hockey',
                color: 'bg-blue-400',
                teamA: 'philadelphia_flyers',
                nameA: 'Philadelphia Flyers',
                teamB: 'tampa_bay_lightning',
                nameB: 'Tampa Bay Lightning',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
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