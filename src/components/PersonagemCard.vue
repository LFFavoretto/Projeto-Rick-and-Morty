<script>
export default{
    name: 'PersonagemCard',
    props: {

        personagem: {
            type: Object,
            required: true
        }        
    },    
}
</script>

<template>
    <div class="card">
        <img :src="personagem.image" :alt="personagem.name">
        <h3>{{ personagem.name }}</h3>
        <p>Status: {{ personagem.status }}</p>
        <p>Espécie: {{ personagem.species }}</p>
        <router-link :to="`/character/${personagem.id}`"class="btn btn-success">
            Ver Detalhes
        </router-link>

    </div>
</template>