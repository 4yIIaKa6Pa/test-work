<template>
    <div class="Home-page">
        <h1>Home Page</h1>
        <Loading :active.sync="isLoading"
                 :is-full-page="true"
        >
        </Loading>
        <h2 class="Home-page__name">Films</h2>
        <div class="Home-page__data">
            <Film v-for="film in films" :key="film.id" v-bind:film="film"/>
        </div>
        <h2 class="Home-page__name">Peoples</h2>
        <div class="Home-page__data">
            <People v-for="people in peoples" :key="people.id" v-bind:people="people"/>
        </div>
        <h2 class="Home-page__name">Starships</h2>
        <div class="Home-page__data">
            <Starship v-for="starship in starships" :key="starship.id" v-bind:starship="starship"/>
        </div>
    </div>
</template>

<script>
    import './HomePage.scss'
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Film from "../../Film/Film";
    import People from "../../People/People";
    import Starship from "../../Starship/Starship";

    export default {
        name: "HomePage",
        components: {
            Loading,
            Film,
            People,
            Starship
        },

        mounted() {
            this.$store.dispatch('getFilms');
            this.$store.dispatch('getPeoples');
            this.$store.dispatch('getStarships');
        },

        computed: {
            films() {
                return this.$store.getters.films
            },

            peoples() {
                return this.$store.getters.peoples
            },

            starships() {
                return this.$store.getters.starships
            },

            isLoading() {
                return this.films.length === 0 && this.peoples.length === 0 && this.starships.length === 0;
            }
        },
    }
</script>

<style scoped>

</style>