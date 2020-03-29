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
        <Slide class="Header__burger" right>
            <router-link class="Header__list-item" to="/films">
                <li>Films</li>
            </router-link>
            <router-link to="/peoples" class="Header__list-item">
                <li>Peoples</li>
            </router-link>
            <router-link  to="/starships" class="Header__list-item">
                <li>Starships</li>
            </router-link>
        </Slide>
    </div>
</template>

<script>
    import './Header.scss';
    import { Slide } from 'vue-burger-menu'

    export default {
        name: "Header",

        components: {
            Slide
        }
    }
</script>

<style scoped>

</style>