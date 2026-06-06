<script></script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div class="container-fluid px-4">
            <div class="d-flex align-items-center">           
                <img class="logo me-4" src="/src/assets/logo.png" alt="">
                <ul class="navbar-nav d-flex flex-row gap-3">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link text-white">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link text-white">Sobre Nós</router-link>
                    </li>
                    <li>
                        <router-link to="/pathMatch(.*)*" class="nav-link text-light">Mundos</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.logo{
    width: 125px;
    height: auto;
}

</style>