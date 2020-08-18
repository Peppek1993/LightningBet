import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        upcomingEsportMatches: [{
                game: 'lol',
                teamA: 'Fnatic',
                teamB: 'CLG',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            },
            {
                game: 'cs',
                teamA: 'Furia',
                teamB: 'LDLC',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            },
            {
                game: 'dota',
                teamA: 'Virtus.Pro',
                teamB: 'Natus Vincere',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            },
            {
                game: 'overwatch',
                teamA: 'Florida Mayhem',
                teamB: 'Los Angeles Valiant',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            },
            {
                game: 'r6',
                teamA: 'G2',
                teamB: 'Movistar Riders',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            },
            {
                game: 'lol',
                teamA: 'TSM',
                teamB: 'Team Liquid',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            },
            {
                game: 'lol',
                teamA: 'Movistar Riders',
                teamB: 'FunPlus Phoenix',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            },
            {
                game: 'cs',
                teamA: 'Furia',
                teamB: 'LDLC',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            },
            {
                game: 'dota',
                teamA: 'Virtus.Pro',
                teamB: 'Natus Vincere',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            },
            {
                game: 'overwatch',
                teamA: 'Florida Mayhem',
                teamB: 'Los Angeles Valiant',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            },
            {
                game: 'r6',
                teamA: 'G2',
                teamB: 'Movistar Riders',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'esport'
            }, {
                game: 'quidditch',
                teamA: 'Gryffindor',
                teamB: 'Hufflepuff',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
            {
                game: 'basketball',
                teamA: 'Chicago Bulls',
                teamB: 'LA Lakers',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
            {
                game: 'ice_hockey',
                teamA: 'Boston Bruins',
                teamB: 'Montreal Canadiens',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
            {
                game: 'volleyball',
                teamA: 'Volley Treviso',
                teamB: 'Piemonte Volley',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
            {
                game: 'quidditch',
                teamA: 'Slytherin',
                teamB: 'Ravenclaw',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
            {
                game: 'table_tennis',
                teamA: 'Ma Long',
                teamB: 'Timo Boll',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
            {
                game: 'lol',
                teamA: 'Movistar Riders',
                teamB: 'FunPlus Phoenix',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
            {
                game: 'american_football',
                teamA: 'Dallas Cowboys',
                teamB: 'Philadelphia Eagles',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
            {
                game: 'american_football',
                teamA: 'Las Vegas Raiders',
                teamB: 'Seatle Seahawks',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
            {
                game: 'american_football',
                teamA: 'Green Bay Packers',
                teamB: 'New York Giants',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
            {
                game: 'table_tennis',
                teamA: 'Xu Xin',
                teamB: 'Ma Lin',
                oddsA: 1.80,
                oddsB: 1.80,
                type: 'sport'
            },
        ],
        filterMatches: [],

    },
    getters: {
        items: (state) => {
            return state;
        }
    },
    mutations: {
        filterByGame(state, payload) {
            let allMatches = this.state.upcomingEsportMatches;
            let filteredMatches = allMatches.filter(function (match) {
                return match.game == payload;
            })
            this.state.filterMatches = filteredMatches;
        },
        filterByType(state, payload) {
            let allMatches = this.state.upcomingEsportMatches;
            let filteredMatches = allMatches.filter(function (match) {
                return match.type == payload;
            })
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
    modules: {}
})