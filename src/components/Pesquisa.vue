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
    <div class="input-group busca-container">
        <input v-model="nome" class="form-control bg-dark text-light border-0" placeholder="Buscar personagem" @keyup.enter="buscar">
        <button class="btn btn-dark border-0" @click="buscar"> <i class="bi bi-search"></i> </button>
    </div>
    
</template>

<style scoped>
.busca-container{
    border-radius: 10px;
    overflow: hidden;
}
</style>