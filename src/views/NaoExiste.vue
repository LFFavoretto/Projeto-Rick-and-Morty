<template>
    <div class="container py-5 pagina-erro">
        <div class="border rounded-3 p-5 bg-light bg-dark card-erro">
            <div class="texto-erro">
                <h1 class="display-6 fw-bold cor-texto">404 - Página Não Encontrada</h1>
                <p class="lead text-light mb-0">Parece que essa dimensão não existe.</p>
            </div>                      
        </div>
    </div>
</template>

<style scoped>
.cor-texto{
    color: #1AA605;
}

.card-erro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 600px;
    background-image: url('/src/assets/img-not-found.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center center;
}

.texto-erro{
    margin-top: -80px;
    padding-left: 110px;
}


</style>