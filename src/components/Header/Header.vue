<template>
    <div class="Header">
        <router-link class="Header__logo" to="/">Some Logo =)</router-link>
        <ul class="Header__list">
            <router-link class="Header__list-item" to="/films">
                <li>Films</li>
            </router-link>
            <router-link to="/peoples" class="Header__list-item">
                <li>Peoples</li>
            </router-link>
            <router-link  to="/starships" class="Header__list-item">
                <li>Starships</li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import './Header.scss';

    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>