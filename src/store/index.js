import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        upcomingMatches: [{
                game: 'lol',
                teamA: 'Fnatic',
                teamB: 'CLG',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'cs',
                teamA: 'Furia',
                teamB: 'LDLC',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'dota',
                teamA: 'Virtus.Pro',
                teamB: 'Natus Vincere',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'overwatch',
                teamA: 'Florida Mayhem',
                teamB: 'Los Angeles Valiant',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'r6',
                teamA: 'G2',
                teamB: 'Movistar Riders',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'lol',
                teamA: 'TSM',
                teamB: 'Team Liquid',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'lol',
                teamA: 'Movistar Riders',
                teamB: 'FunPlus Phoenix',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'cs',
                teamA: 'Furia',
                teamB: 'LDLC',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'dota',
                teamA: 'Virtus.Pro',
                teamB: 'Natus Vincere',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'overwatch',
                teamA: 'Florida Mayhem',
                teamB: 'Los Angeles Valiant',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'r6',
                teamA: 'G2',
                teamB: 'Movistar Riders',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'esport',
            },
            {
                game: 'quidditch',
                teamA: 'Gryffindor',
                teamB: 'Hufflepuff',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'basketball',
                teamA: 'Chicago Bulls',
                teamB: 'LA Lakers',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'ice_hockey',
                teamA: 'Boston Bruins',
                teamB: 'Montreal Canadiens',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'volleyball',
                teamA: 'Volley Treviso',
                teamB: 'Piemonte Volley',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'quidditch',
                teamA: 'Slytherin',
                teamB: 'Ravenclaw',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'table_tennis',
                teamA: 'Ma Long',
                teamB: 'Timo Boll',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'lol',
                teamA: 'Movistar Riders',
                teamB: 'FunPlus Phoenix',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'american_football',
                teamA: 'Dallas Cowboys',
                teamB: 'Philadelphia Eagles',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'american_football',
                teamA: 'Las Vegas Raiders',
                teamB: 'Seatle Seahawks',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'american_football',
                teamA: 'Green Bay Packers',
                teamB: 'New York Giants',
                oddsA: 1.8,
                oddsB: 1.8,
                type: 'sport',
            },
            {
                game: 'table_tennis',
                teamA: 'Xu Xin',
                teamB: 'Ma Lin',
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