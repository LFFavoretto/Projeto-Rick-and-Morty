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

@media (min-width: 1920px){

    .card-erro{
        height: 650px;
        background-size: cover;
    }

    .texto-erro{
        padding-left: 150px;
    }
}

@media (max-width: 992px){

    .card-erro{
        height: 450px;
        background-size: cover;
        background-position: 70% center;
    }

    .texto-erro{
        padding-left: 40px;
        margin-top: 0;
        max-width: 350px;
    }

    .texto-erro h1{
        font-size: 2rem;
    }

    .texto-erro p{
        font-size: 1rem;
    }
}

@media (max-width: 576px){

    .card-erro{
        height: 300px;
        padding: 20px;
        background-size: cover;
        background-position: 80% center;
    }

    .texto-erro{
        padding-left: 0;
        margin-top: 0;
        max-width: 220px;
    }

    .texto-erro h1{
        font-size: 1.2rem;
        line-height: 1.2;
    }

    .texto-erro p{
        font-size: 0.7rem;
    }
}
</style>