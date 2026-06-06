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
  <main v-if="personagem" class="container py-4">
    <button class="btn btn-outline-light btn-sm mb-4" @click="$router.back()"><i class="bi bi-arrow-left"></i> Voltar </button>
    <div class="row g-5">
        <div class="col-lg-4">
          <img :src="personagem.image" :alt="personagem.name">
          <div class="text-light">
            <p><strong>Status:</strong> <span class="badge bg-success">{{ personagem.status }}</span></p>
            <p><strong>Espécie: </strong> {{ personagem.species }}</p>
            <p><strong>Gênero:</strong> {{ personagem.gender }}</p>
            <p><strong>Origem: </strong>Origem: {{ personagem.origin.name }}</p>
            <p><strong>Última localização: </strong> {{ personagem.location.name }}</p>
          </div>       
          
        </div>
        <div class="col-lg-8">
          <h1 class="fw-bold text-light">{{ personagem.name }}</h1>
          <div class="linha-verde mb-4"></div>
          <h5 class="text-light">Sobre</h5>
          <p class="text-light descricao">{{ descricao }}</p>
          <h4 class="text-light mt-5 mb-3">Episódios em que apareceu: ({{ episodios.length }})</h4>
          <div class="episodio-scroll">
              <div v-for="episodio in episodios" :key="episodio.id" class="episodio-item">            
                <span class="episodio-codigo">{{ episodio.episode }}</span>
                <span class="text-light">{{ episodio.name }}</span>
              </div>                   
          </div>
        </div>
    </div>    
  </main>
  <div v-else>
    Carregando...
  </div>
    
</template>

<style>
main{
  min-height: 100vh;
}
.linha-verde {
    width: 60px;
    height: 4px;
    background-color: #1AA605;
    border-radius: 10px;
}

.descricao {
    max-width: 600px;
    line-height: 1.8;
}

.episodio-scroll {
    height: 350px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding-right: 5px;
}

.episodio-item {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #20252d;
    padding: 14px ;
    margin-bottom: 10px;
    border-radius: 8px;
}

.episodio-codigo {
    color: #1AA605;
    font-weight: bold;
    min-width: 80px;
}

img {
    max-width: 300px;
}
</style>