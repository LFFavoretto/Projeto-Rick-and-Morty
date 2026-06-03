<script>
import { buscarPersonagem } from '@/services/api';
    export default{
        data() {
            return {nome: ''}
        },

        methods: {
            buscar() {
                this.$emit('buscar', this.nome)
            }
        }
    }
</script>

<template>
    <input v-model="nome" placeholder="Buscar personagem">
    <button @click="buscar""> Buscar </button>
</template>