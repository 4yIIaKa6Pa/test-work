import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const baseUrl = "https://swapi.co/api/";

const store = new Vuex.Store({
    state: {
        films: [],
        peoples: [],
        starships: [],
        filteredData: [],
    },
    mutations: {
        setFilms (state, payload) {
            state.films = payload;
        },
        setPeoples (state, payload) {
            state.peoples = payload;
        },
        setStarships (state, payload) {
            state.starships = payload;
        },
        setFilteredData (state, payload) {
            state.filteredData = payload;
        }
    },
    getters: {
        films(state) {
            return state.films;
        },
        peoples(state) {
            return state.peoples;
        },
        starships(state) {
            return state.starships;
        },
        filteredData(state) {
            return state.filteredData
        }
    },

    actions: {
        getFilms({commit}) {
            axios.get(`${baseUrl}films/`)
                .then(response => {
                    commit('setFilms', response.data.results);
                })
        },
        getPeoples({commit}) {
            axios.get(`${baseUrl}people/`)
                .then(response => {
                    commit('setPeoples', response.data.results);
                })
        },
        getStarships({commit}) {
            axios.get(`${baseUrl}starships/`)
                .then(response => {
                    commit('setStarships', response.data.results);
                })
        },
        getFilteredData({commit}, payload) {
            axios.get(`${baseUrl}${payload.type}/?search=${payload.value}`)
                .then(response => {
                    commit('setFilteredData', response.data.results);
                })
                .catch(err => console.log(err));
        }
    }
});

export default store;