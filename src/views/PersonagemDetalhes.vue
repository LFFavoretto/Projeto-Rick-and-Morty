<script>
  import { detalharPersonagem } from '@/services/api';

  export default {
    name: 'PersonagemDetalhes',

    data() {
      return{
        personagem: null
      }
    },

    async mounted() {
      const id = this.$route.params.id
      this.personagem = await detalharPersonagem(id)
    }
  }
</script>

<template>
  <main>
    <div class="personagem">
        <img :src="personagem.image" :alt="personagem.name">        
        <p>Status: {{ personagem.status }}</p>
        <p>Espécie: {{ personagem.species }}</p>
        <p>Gênero: {{ personagem.gender }}</p>
        <p>Origem: {{ personagem.origin[0] }}</p>
        <p>Última localização: {{ personagem.location[0] }}</p>
    </div>
    <div class="info">
      <h3>{{ personagem.name }}</h3>
    </div>
  </main>
    
</template>