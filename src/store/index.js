import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        upcomingMatches: [{
                game: 'lol',
                teamA: 'Fnatic',
                teamB: 'CLG',
                oddsA: 1.80,
                oddsB: 1.80
            },
            {
                game: 'cs',
                teamA: 'Furia',
                teamB: 'LDLC',
                oddsA: 1.80,
                oddsB: 1.80
            },
            {
                game: 'dota',
                teamA: 'Virtus.Pro',
                teamB: 'Natus Vincere',
                oddsA: 1.80,
                oddsB: 1.80
            },
            {
                game: 'overwatch',
                teamA: 'Florida Mayhem',
                teamB: 'Los Angeles Valiant',
                oddsA: 1.80,
                oddsB: 1.80
            },
            {
                game: 'r6',
                teamA: 'G2',
                teamB: 'Movistar Riders',
                oddsA: 1.80,
                oddsB: 1.80
            },
            {
                game: 'lol',
                teamA: 'TSM',
                teamB: 'Team Liquid',
                oddsA: 1.80,
                oddsB: 1.80
            },
            {
                game: 'lol',
                teamA: 'Movistar Riders',
                teamB: 'FunPlus Phoenix',
                oddsA: 1.80,
                oddsB: 1.80
            },
            {
                game: 'cs',
                teamA: 'Furia',
                teamB: 'LDLC',
                oddsA: 1.80,
                oddsB: 1.80
            },
            {
                game: 'dota',
                teamA: 'Virtus.Pro',
                teamB: 'Natus Vincere',
                oddsA: 1.80,
                oddsB: 1.80
            },
            {
                game: 'overwatch',
                teamA: 'Florida Mayhem',
                teamB: 'Los Angeles Valiant',
                oddsA: 1.80,
                oddsB: 1.80
            },
            {
                game: 'r6',
                teamA: 'G2',
                teamB: 'Movistar Riders',
                oddsA: 1.80,
                oddsB: 1.80
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
            let allMatches = this.state.upcomingMatches;
            let filteredMatches = allMatches.filter(function (game) {
                return game.game == payload;
            })
            this.state.filterMatches = filteredMatches;
        },
        displayAllMatches() {
            this.state.filterMatches = this.state.upcomingMatches;
        }
    },
    actions: {
        filterByGame({
            commit
        }, payload) {
            commit('filterByGame', payload);
        },
        displayAllMatches({
            commit
        }) {
            commit('displayAllMatches');
        },
    },
    modules: {}
})