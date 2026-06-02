<script>
  import { detalharPersonagem, episodios } from '@/services/api';
  import { descricoes, gerarDescricao } from '@/data/descricoes';

  export default {
    name: 'PersonagemDetalhes',

    data() {
      return{
        personagem: null,
        episodios: []
      }
    },

    async mounted() {
      const id = this.$route.params.id

      this.personagem = await detalharPersonagem(id)
      console.log(this.personagem)

      const ids = this.personagem.episode.map(url => url.split('/').pop())

      this.episodios = await episodios(ids)
      console.log(this.episodios)
    },

    computed: {
      descricao(){
        
        if (!this.personagem){
          return ''
        }

        return (descricoes[this.personagem.id] || gerarDescricao(this.personagem, this.episodios)
        )
      }
    }


  }
</script>

<template>
  <main v-if="personagem">
    <div class="personagem">
        <img :src="personagem.image" :alt="personagem.name">        
        <p>Status: {{ personagem.status }}</p>
        <p>Espécie: {{ personagem.species }}</p>
        <p>Gênero: {{ personagem.gender }}</p>
        <p>Origem: {{ personagem.origin.name }}</p>
        <p>Última localização: {{ personagem.location.name }}</p>
    </div>
    <div class="info">
      <h2>{{ personagem.name }}</h2>
      <h3> Sobre </h3>
      <p>{{ descricao }}</p>
      <h3>Episódios: ({{ episodios.length }})</h3>
      <div v-for="episodio in episodios" :key="episodio.id" class="episodio-item">
        <span class="episodio-codigo">{{ episodio.episode }}</span>
        <span class="episodio-nome">{{ episodio.name }}</span>
      </div>
    </div>
  </main>
  <div v-else>
    Carregando...
  </div>
    
</template>