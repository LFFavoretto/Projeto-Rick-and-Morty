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
            erro: ''
        }
    },

    methods: {
        async carregarPagina() {
            try {
                this.carregando = true;
                this.erro = '';

                const dados = await listarPersonagens(this.paginaAtual);
                console.log(dados);

                this.personagens = dados.results;
                console.log(this.personagens);
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
            if (!nome.trim()){
                await this.carregarPagina()
                return
            }

            const dados = await buscarPersonagem(nome)

            this.personagens = dados.results
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
    <div v-if="carregando">
        Carregando...
    </div>

    <div v-else-if="erro">  
        {{ erro }}
    </div>

    <div v-else>
        <PersonagemCard v-for="personagem in personagens", :key="personagem.id" :personagem="personagem"/>

        <button @click="paginaAnterior" :disabled="paginaAtual === 1"> Anterior </button>

        <span> Página {{ paginaAtual }} </span>

        <button @click="proximaPagina", :disabled="paginaAtual === totalPaginas"> Próxima </button>
    </div>

    <Pesquisa @buscar="pesquisarPersonagem"/>
    
</template>

<style scoped></style>