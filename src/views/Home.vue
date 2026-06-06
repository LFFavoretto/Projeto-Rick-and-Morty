<script>
import Pesquisa from '@/components/Pesquisa.vue';
import { buscarPersonagem, listarPersonagens } from '@/services/api';
import PersonagemCard from '@/components/PersonagemCard.vue';

export default {
    name: 'HomeView',

    data() {
        return {
            personagens: [],
            paginaAtual: 1,
            totalPaginas: 0,
            carregando: false,
            erro: '',
            termoBusca: ''
        }
    },

    methods: {
        async carregarPagina() {
            try {
                this.carregando = true;
                this.erro = '';

                let dados;
                if (this.termoBusca){
                    dados =  await buscarPersonagem(this.termoBusca, this.paginaAtual); 
                } else {
                    dados = await listarPersonagens(this.paginaAtual);
                }
                

                this.personagens = dados.results;
                this.totalPaginas = dados.info.pages;
            }
            catch (error) {
                this.erro = error.message;
            }
            finally {
                this.carregando = false
            }
        },

        async proximaPagina() {
            if (this.paginaAtual < this.totalPaginas) {

                this.paginaAtual++;

                await this.carregarPagina();
            }
        },

        async paginaAnterior() {
            if (this.paginaAtual > 1){

                this.paginaAtual--;

                await this.carregarPagina();
            }
        },
        async pesquisarPersonagem(nome) {
            try {
                this.erro = '';

                if (!nome.trim()) {
                    this.termoBusca = nome;
                    this.paginaAtual = 1;
                    await this.carregarPagina();
                    return;
                }

                const dados = await buscarPersonagem(nome);

                this.personagens = dados.results;
                this.termoBusca = nome;

            } catch (error) {
                console.error(error);
                this.erro = error.message;
            }
            
        }
    },

    async mounted() {
        await this.carregarPagina();
    },

    components: {
        Pesquisa,
        PersonagemCard
    }
}
</script>

<template>

    <div class="card-apresentacao">
        <div class="conteudo-banner">
            <p class="text-white font-weight-bold h2">Bem-vindo ao universo</p>
            <p class="cor-texto font-weight-bold h2">Rick and Morty</p>
            <p class="text-white font-weigth-normal">Pesquise e descubra personagens  incríveis</p>
        </div>        
    </div>
    <div class="container">
        <Pesquisa @buscar="pesquisarPersonagem"/>
    </div>

    <h3>Personagens</h3>
    

    <div v-if="carregando">
        Carregando...
    </div>

    <div v-else-if="erro">  
        {{ erro }}
    </div>    

    <div v-else>
        <div class="container mt-4">
            <div class="row">
                <PersonagemCard v-for="personagem in personagens" :key="personagem.id" :personagem="personagem"/>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-3 mt-4">
            <button class="btn btn-dark" @click="paginaAnterior" :disabled="carregando || paginaAtual === 1"> Anterior </button>
            <span class="badge bg-success fs-6"> Página {{ paginaAtual }} </span>
            <button class="btn btn-dark" @click="proximaPagina" :disabled="carregando || paginaAtual === totalPaginas"> Próxima </button>
        </div>        
    </div>    
</template>

<style scoped>
.card-apresentacao{
    height: 350px;
    background-image: url('/src/assets/banner.jpg');
    background-size: 100% 100%;
    background-position: center;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 80px;
    margin-top: 20px;
    margin-bottom: 25px;;
}

.conteudo-banner{
    max-width: 500px;
}

h3{
    color: white;
    margin-left: 110px;
    padding-top: 20px;
}

.cor-texto{
    color:#1AA605;
}

@media (min-width: 1920px) {
    .card-apresentacao{
        height: 400px;
        background-size: cover;
        background-position: center;
    }

    h3{
        margin-left: 300px;
        font-size: 2rem;
    }

    .conteudo-banner{
        margin-left: 250px;
    }
}

@media (max-width: 992px){
    .card-apresentacao{
        height: 280px;
        padding-left: 40px;
    }

    .conteudo-banner{
        margin-left: 40px;
    }

    .conteudo-banner .h2{
        font-size: 2rem;
    }

    h3{
        margin-left: 40px;
        font-size: 1.8rem;
    }
}

@media (max-width: 576px){

    .card-apresentacao{
        height: 220px;
        padding: 20px;
        background-position: 75% center;
    }

    .conteudo-banner{
        max-width: 220px;
        margin-left: 0;
    }

    .conteudo-banner .h2{
        font-size: 1.5rem;
        margin-bottom: 8px;
    }

    .conteudo-banner p{
        font-size: 0.9rem;
        margin-bottom: 0;
    }

    h3{
        margin-left: 0;
        text-align: center;
        font-size: 1.5rem;
    }
}


</style>