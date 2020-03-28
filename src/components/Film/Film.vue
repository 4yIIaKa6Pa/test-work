<template>
    <div class="Film">
        <h2>{{film.title}}</h2>
        <p>Episode: <span>{{film.episode_id}}</span></p>
        <p>Director: <span>{{film.director}}</span></p>
        <p>Producer: <span>{{film.producer}}</span></p>
        <p>Release Date: <span>{{film.release_date}}</span></p>
    </div>
</template>

<script>
    import './Film.scss'

    export default {
        name: "Film",
        props: ['film']
    }
</script>

<style scoped>

</style>