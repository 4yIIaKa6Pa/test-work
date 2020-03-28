<template>
    <div class="Films">
        <Loading :active.sync="isLoading"
                 :is-full-page="true"
        >
        </Loading>
        <h1 class="Films__name">Films</h1>
        <Search v-bind:search-data="'films'"/>
        <div class="Films__data">
            <Film v-for="film in films" :key="film.id" v-bind:film="film"/>
        </div>
    </div>
</template>

<script>
    import './Films.scss'
    import Film from "../../Film/Film";
    import Search from "../../Search/Search";
    import Loading from 'vue-loading-overlay';

    export default {
        name: "Films",

        components: {
            Film,
            Search,
            Loading
        },

        computed: {
            films() {
                if(this.$store.getters.filteredData.length !== 0) {
                    return this.$store.getters.filteredData;
                }
                return this.$store.getters.films
            },

            isLoading() {
                return this.films.length === 0;
            }
        },

        mounted() {
            this.$store.dispatch('getFilms');
            this.$store.commit('setFilteredData', []);
        }

    }
</script>

<style scoped>

</style>