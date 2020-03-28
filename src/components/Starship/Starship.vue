<template>
    <div class="People">
        <h2>{{starship.name}}</h2>
        <p>Model: <span>{{starship.model}}</span></p>
        <p>Manufacturer: <span>{{starship.manufacturer}}</span></p>
        <p>Cost in credits: <span>{{starship.cost_in_credits}}</span></p>
        <p>Length: <span>{{starship.length}}</span></p>
        <p>Max atmosphering speed: <span>{{starship.max_atmosphering_speed}}</span></p>
        <p>Starship class: <span>{{starship.starship_class}}</span></p>
        <p>Hyperdrive rating: <span>{{starship.hyperdrive_rating}}</span></p>
    </div>
</template>

<script>
    import './Starship.scss'

    export default {
        name: "Starship",
        props: ['starship']
    }
</script>

<style scoped>

</style>