<template>
    <div class="Search">
        <input class="Search__input" type="text" v-model="searchValue">
        <button @click="search" class="Search__button">Search</button>
    </div>
</template>

<script>
    import './Search.scss';

    export default {
        name: "Search",
        props: ['searchData'],

        data() {
            return {
                searchValue: ""
            }
        },

        methods: {
            search() {
                this.$store.dispatch('getFilteredData', {type: this.searchData, value: this.searchValue})
            }
        }
    }
</script>

<style scoped>

</style>