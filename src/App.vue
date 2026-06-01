<script setup>
import Nav from './components/Nav.vue'
import PersonagemCard from './components/PersonagemCard.vue';
import router from './router/index.js';
</script>

<template>
    <router-view/>
    <PersonagemCard/>
</template>
<style scoped></style>
