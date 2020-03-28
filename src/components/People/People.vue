<template>
    <div class="People">
        <h2>{{people.name}}</h2>
        <p>Height: <span>{{people.height}}</span></p>
        <p>Mass: <span>{{people.mass}}</span></p>
        <p>Hair color: <span>{{people.hair_color}}</span></p>
        <p>Skin color: <span>{{people.skin_color}}</span></p>
        <p>Eye color: <span>{{people.eye_color}}</span></p>
        <p>Birth year: <span>{{people.birth_year}}</span></p>
        <p>Gender: <span>{{people.gender}}</span></p>
    </div>
</template>

<script>
    import './People.scss'

    export default {
        name: "People",
        props: ['people']
    }
</script>

<style scoped>

</style>