<template>
    <div class="Peoples">
        <Loading :active.sync="isLoading"
                 :is-full-page="true"
        >
        </Loading>
        <h1 class="Peoples__name">Peoples</h1>
        <Search v-bind:search-data="'people'"/>
        <div class="Peoples__data">
            <People v-for="people in peoples" :key="people.id" v-bind:people="people"/>
        </div>
    </div>
</template>

<script>
    import './Peoples.scss'
    import People from "../../People/People";
    import Search from "../../Search/Search";
    import Loading from 'vue-loading-overlay';

    export default {
        name: "Peoples",
        components: {
            People,
            Search,
            Loading
        },

        computed: {
            peoples() {
                if(this.$store.getters.filteredData.length !== 0) {
                    return this.$store.getters.filteredData;
                }
                return this.$store.getters.peoples
            },

            isLoading() {
                return this.peoples.length === 0;
            }
        },

        mounted() {
            this.$store.dispatch('getPeoples');
            this.$store.commit('setFilteredData', []);
        }
    }
</script>

<style scoped>

</style>