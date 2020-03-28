<template>
    <div class="Starships">
        <Loading :active.sync="isLoading"
                 :is-full-page="true"
        >
        </Loading>
        <h1 class="Starships__name">Starships</h1>
        <Search v-bind:search-data="'starships'"/>
        <div class="Starships__data">
            <Starship v-for="starship in starships" :key="starship.id" v-bind:starship="starship"/>
        </div>
    </div>
</template>

<script>
    import './Starships.scss'
    import Starship from "../../Starship/Starship";
    import Search from "../../Search/Search";
    import Loading from 'vue-loading-overlay';

    export default {
        name: "Starships",
        components: {
            Search,
            Starship,
            Loading
        },

        computed: {
            starships() {
                if(this.$store.getters.filteredData.length !== 0) {
                    return this.$store.getters.filteredData;
                }
                return this.$store.getters.starships
            },
            isLoading() {
                return this.starships.length === 0;
            }
        },

        mounted() {
            this.$store.dispatch('getStarships');
            this.$store.commit('setFilteredData', []);
        }
    }
</script>

<style scoped>

</style>