<script setup>
import Nav from './components/Nav.vue'
import PersonagemCard from './components/PersonagemCard.vue';
// import router from './router/index.js';
</script>

<template>
    <Nav />
    <router-view/>
</template>
<style>
#app{
    min-height: 100vh;
    margin: 0;
    background-color: #303641;
}
</style>
