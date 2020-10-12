import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        upcomingMatches: [{
                game: 'lol',
                color: 'bg-teal-500',
                teamA: 'top_esports',
                nameA: 'Top Esports',
                teamB: 'jd_gaming',
                nameB: 'JD Gaming',
                oddsA: 1.53,
                chanceA: 0.65,
                oddsB: 2.86,
                chanceB: 0.35,
                type: 'esport',
                id: 1
            },
            {
                game: 'cs',
                color: 'bg-blue-700',
                teamA: 'avez',
                nameA: 'Avez Esports',
                teamB: 'evil_geniuses',
                nameB: 'Evil Geniuses',
                oddsA: 5,
                chanceA: 0.20,
                oddsB: 1.25,
                chanceB: 0.80,
                type: 'esport',
                id: 2
            },
            {
                game: 'dota',
                color: 'bg-red-700',
                teamA: 'sparking_arrow_gaming',
                nameA: 'Sparking Arrow Gaming',
                teamB: 'natus_vincere',
                nameB: 'Natus Vincere',
                oddsA: 1.8,
                chanceA: 0.50,
                oddsB: 1.8,
                chanceB: 0.50,
                type: 'esport',
                id: 3
            },
            {
                game: 'overwatch',
                color: 'bg-yellow-300',
                teamA: 'angry_titans',
                nameA: 'Angry Titans',
                teamB: 'ldlc_ol',
                nameB: 'LDLC OL',
                oddsA: 1.2,
                chanceA: 0.83,
                oddsB: 5.88,
                chanceB: 0.17,
                type: 'esport',
                id: 4
            },
            {
                game: 'r6',
                color: 'bg-orange-400',
                teamA: 'liquid',
                nameA: 'Team Liquid',
                teamB: 'gamerlegion',
                nameB: 'GamerLegion',
                oddsA: 1.82,
                chanceA: 0.55,
                oddsB: 2.22,
                chanceB: 0.45,
                type: 'esport',
                id: 5
            },
            {
                game: 'lol',
                color: 'bg-teal-500',
                teamA: 'afreeca_freecs',
                nameA: 'Afreeca Freecs',
                teamB: 'gen_g',
                nameB: 'GenG',
                oddsA: 1.8,
                chanceA: 0.50,
                oddsB: 1.8,
                chanceB: 0.50,
                type: 'esport',
                id: 6
            },
            {
                game: 'lol',
                color: 'bg-teal-500',
                teamA: 'sprout',
                nameA: 'Team Sprout',
                teamB: 't1',
                nameB: 'T1',
                oddsA: 2.7,
                chanceA: 0.37,
                oddsB: 1.58,
                chanceB: 0.63,
                type: 'esport',
                id: 7
            },
            {
                game: 'cs',
                color: 'bg-blue-700',
                teamA: 'forze',
                nameA: 'ForZe',
                teamB: 'hellraisers',
                nameB: 'HellRaisers',
                oddsA: 1.8,
                chanceA: 0.50,
                oddsB: 1.8,
                chanceB: 0.50,
                type: 'esport',
                id: 8
            },
            {
                game: 'dota',
                color: 'bg-red-700',
                teamA: 'alliance',
                nameA: 'Team Alliance',
                teamB: 'aster_aries',
                nameB: 'Aster Aries',
                oddsA: 2.56,
                chanceA: 0.39,
                oddsB: 1.64,
                chanceB: 0.61,
                type: 'esport',
                id: 9
            },
            {
                game: 'overwatch',
                color: 'bg-yellow-300',
                teamA: 'mibr',
                nameA: 'MIBR',
                teamB: 'young_and_beautiful',
                nameB: 'Young And Beautiful',
                oddsA: 2.08,
                chanceA: 0.48,
                oddsB: 1.92,
                chanceB: 0.52,
                type: 'esport',
                id: 10
            },
            {
                game: 'r6',
                color: 'bg-orange-400',
                teamA: 'heroic',
                nameA: 'Team Heroic',
                teamB: 'k1ck_neosurf',
                nameB: 'K1ck Neosurf',
                oddsA: 1.8,
                chanceA: 0.50,
                oddsB: 1.8,
                chanceB: 0.50,
                type: 'esport',
                id: 11
            },
            {
                game: 'quidditch',
                color: 'bg-yellow-600',
                teamA: 'gryffindor',
                nameA: 'Gryffindor',
                teamB: 'hufflepuff',
                nameB: 'Hufflepuff',
                oddsA: 1.49,
                chanceA: 0.67,
                oddsB: 3.03,
                chanceB: 0.33,
                type: 'sport',
                id: 12
            },
            {
                game: 'basketball',
                color: 'bg-orange-600',
                teamA: 'boston_celtics',
                nameA: 'Boston Celtics',
                teamB: 'dallas_mavericks',
                nameB: 'Dallas Mavericks',
                oddsA: 1.69,
                chanceA: 0.59,
                oddsB: 2.43,
                chanceB: 0.41,
                type: 'sport',
                id: 13
            },
            {
                game: 'ice_hockey',
                color: 'bg-teal-600',
                teamA: 'boston_bruins',
                nameA: 'Boston Bruins',
                teamB: 'colorado_avalanche',
                nameB: 'Colorado Avalanche',
                oddsA: 3.57,
                chanceA: 0.28,
                oddsB: 1.39,
                chanceB: 0.72,
                type: 'sport',
                id: 14
            },
            {
                game: 'quidditch',
                color: 'bg-yellow-600',
                teamA: 'slytherin',
                nameA: 'Slytherin',
                teamB: 'ravenclaw',
                nameB: 'Ravenclaw',
                oddsA: 1.47,
                chanceA: 0.68,
                oddsB: 3.13,
                chanceB: 0.32,
                type: 'sport',
                id: 15
            },
            {
                game: 'lol',
                color: 'bg-teal-500',
                teamA: 'misfits_premier',
                nameA: 'Misfits Premier',
                teamB: 'schalke_04_evolution',
                nameB: 'Schalke 04 Evolution',
                oddsA: 1.11,
                chanceA: 0.90,
                oddsB: 10,
                chanceB: 0.10,
                type: 'esport',
                id: 16
            },
            {
                game: 'ice_hockey',
                color: 'bg-teal-600',
                teamA: 'dallas_stars',
                nameA: 'Dallas Stars',
                teamB: 'new_york_islanders',
                nameB: 'New York Islanders',
                oddsA: 2.12,
                chanceA: 0.47,
                oddsB: 1.88,
                chanceB: 0.53,
                type: 'sport',
                id: 17
            },
            {
                game: 'ice_hockey',
                color: 'bg-teal-600',
                teamA: 'philadelphia_flyers',
                nameA: 'Philadelphia Flyers',
                teamB: 'tampa_bay_lightning',
                nameB: 'Tampa Bay Lightning',
                oddsA: 2.63,
                chanceA: 0.38,
                oddsB: 1.61,
                chanceB: 0.62,
                type: 'sport',
                id: 18
            },

        ],
        disciplinesInfo: [{
                name: 'League of Legends',
                tag: 'lol',
                borderColor: 'border-green-400',
                backgroundColor: 'bg-teal-500',
                type: 'esport'
            },
            {
                name: 'CS:GO',
                tag: 'cs',
                borderColor: 'border-blue-400',
                backgroundColor: 'bg-blue-700',
                type: 'esport'
            },
            {
                name: 'Overwatch',
                tag: 'overwatch',
                borderColor: 'border-yellow-300',
                backgroundColor: 'bg-yellow-300',
                type: 'esport'
            },
            {
                name: 'Dota 2',
                tag: 'dota',
                borderColor: 'border-red-500',
                backgroundColor: 'bg-red-700',
                type: 'esport'
            },
            {
                name: 'Rainbow Six',
                tag: 'r6',
                borderColor: 'border-orange-400',
                backgroundColor: 'bg-orange-600',
                type: 'esport'
            },
            {
                name: 'Quidditch',
                tag: 'quidditch',
                borderColor: 'border-yellow-400',
                backgroundColor: 'bg-yellow-600',
                type: 'sport'
            },
            {
                name: 'Ice Hockey',
                tag: 'ice_hockey',
                borderColor: 'border-teal-400',
                backgroundColor: 'bg-teal-600',
                type: 'sport'
            },
            {
                name: 'Volleyball',
                tag: 'volleyball',
                borderColor: 'border-pink-400',
                backgroundColor: 'bg-pink-600',
                type: 'sport'
            },
            {
                name: 'Basketball',
                tag: 'basketball',
                borderColor: 'border-orange-400',
                backgroundColor: 'bg-orange-600',
                type: 'sport'
            },
            {
                name: 'Table Tennis',
                tag: 'table_tennis',
                borderColor: 'border-purple-600',
                backgroundColor: 'bg-purple-800',
                type: 'sport'
            },
            {
                name: 'American Football',
                tag: 'american_football',
                borderColor: 'border-orange-900',
                backgroundColor: 'bg-orange-300',
                type: 'sport'
            }
        ],
        teams: [{
            cs: ['Avez', 'Evil Geniuses', 'Forze', 'Hellraisers', 'Tyloo', 'Vici'],
            lol: ['Afreeca Freecs', 'Gen G', 'JD Gaming', 'Misfits Premier', 'Samsung Morning Stars', 'Schalke 04 Evolution', 'Sprout', 'T1', 'Talon Esports', 'Top Esports'],
            dota: ['Alliance', 'Aster Aries', 'Dignitas', 'FlyToMoon', 'Geek Fam', 'Natus Vincere', 'Nigma', 'OG', 'Omega Gaming', 'Sparking Arrow Gaming', 'Team Secret', 'Virtus Pro'],
            overwatch: ['Angry Titans', 'LDLC OL', 'MIBR', 'Young and Beautiful'],
            r6: ['Furia', 'GamerLegion', 'Heroic', 'K1CK Neosurf', 'Liquid', 'Mad Lions'],
            quidditch: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'],
            ice_hockey: ['Boston Bruins', 'Colorado Avalanche', 'Dallas Stars', 'New York Islanders', 'Philadelphia Flyers', 'Tampa Bay Lightning', 'Vancouver Canucks', 'Vegas GK'],
            basketball: ['Boston Celtics', 'Dallas Mavericks', 'Denver Nuggets', 'Los Angeles Clippers', 'Toronto Raptors', 'Utah Jazz'],
            american_football: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Houston Texans', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Miamo Dolphins', 'Tampa Bay Buccaneers'],
            table_tennis: ['Austria', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Germany', 'Greece', 'Netherlands', 'Poland', 'Portugal'],
            volleyball: ['Colorado Rapids', 'Columbus Crew', 'Houston Dynamo', 'Montreal Impact', 'New England Revolution', 'Philadelphia Union', 'Portland Timbers', 'Toronto FC', 'Vancouver Whitecaps']
        }],
        filterMatches: [],
        funds: 0,
        paymentMethods: ['fa-bitcoin', 'fa-cc-paypal', 'fa-cc-visa', 'fa-cc-apple-pay'],
        bets: [],
        wonBets: [],
        lostBets: [],
        clearButton: false,
        users: [{
                name: 'Biofrost',
                score: null,
            },
            {
                name: 'Doublelift',
                score: null,
            },
            {
                name: 'Kramer',
                score: null,
            },
            {
                name: 'Ruler',
                score: null,
            },
            {
                name: 'CoreJJ',
                score: null,
            },
            {
                name: 'Aphromoo',
                score: null,
            },
            {
                name: 'Jenkins',
                score: null,
            },
            {
                name: 'Faker',
                score: null,
            },
            {
                name: 'Jankos',
                score: null,
            },
            {
                name: 'Perkz',
                score: null,
            },
            {
                name: 'Caps',
                score: null,
            },
            {
                name: 'PowerOfEvil',
                score: null,
            },
            {
                name: 'Wunder',
                score: null,
            },
            {
                name: 'Uzi',
                score: null,
            },
            {
                name: 'Captain Jack',
                score: null,
            },
            {
                name: 'Harry Potter',
                score: null,
            },
            {
                name: 'Hermione Granger',
                score: null,
            },
            {
                name: 'Ron Weasley',
                score: null,
            },
            {
                name: 'Severus Snape',
                score: null,
            },
            {
                name: 'Donald Trump',
                score: null,
            },
            {
                name: 'monkaS',
                score: null,
            },
            {
                name: 'Guardsman Bob',
                score: null,
            },
            {
                name: 'Yo mama',
                score: null,
            },
            {
                name: 'Monster',
                score: null,
            },
            {
                name: 'Marilyn Monroe',
                score: null,
            },
        ],
        sortedUsers: [],
        totalStake: 0,
        totalReturn: 0,
        wonAmount: 0,
        newMatchModal: false,
        selectedGame: '',
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
            this.state.selectedGame = payload;
        },
        filterByType(state, payload) {
            let filteredMatches = this.state.upcomingMatches.filter(function (
                match
            ) {
                return match.type == payload;
            });
            this.state.selectedGame = payload
            this.state.filterMatches = filteredMatches;
        },
        matchesAmount(payload) {
            let filteredMatches = this.items.upcomingMatches.filter(function (
                match
            ) {
                return match.game == payload;
            });
            let amount = filteredMatches.length;
            return amount;
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
        matchesAmountTest({
            commit
        }, payload) {
            commit('matchesAmountTest', payload);
        },
    },
    modules: {},
});