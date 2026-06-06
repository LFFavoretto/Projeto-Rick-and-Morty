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
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card h-100 bg-dark text-light border-success border-3">
            <img :src="personagem.image" :alt="personagem.name" class="card-img-top">
            <div class="card-body">
                <h5 class=" cor-texto card-title fw-bold ">{{ personagem.name }}</h5>
                <p class="card-text mb-1"><strong>Status:</strong> {{ personagem.status }}</p>
                <p class="card-text"><strong>Espécie:</strong> {{ personagem.species }}</p>
            </div>
            <div class="card-footer bg-transparent border-0">        
                <router-link :to="`/character/${personagem. id}`"class="btn btn-success w-100">
                    Ver Detalhes
                </router-link>
            </div>
        </div>        
    </div>    
</template>

<style scoped>
.cor-texto{
    color: #1AA605;
}
</style>