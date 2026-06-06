<template>
    <div class="container py-5">
        <div class="card bg-dark text-light border-success shadow">        
            <div class="row g-0">
                <div class="col-lg-4">
                    <img src="/src/assets/sobrebg.png" alt="Rick and Morty" class="img-sobre">
                </div>
                <div class="col-lg-6">
                    <div class="card-body ps-0 pe-4 py-4 conteudo-sobre">                                    
                        <h1 >Sobre o Projeto</h1>
                        <p>Este projeto acadêmico foi desenvolvido utilizando Vue.js 3 e a Rick and Morty API, com o objetivo de explorar conceitos modernos de desenvolvimento front-end.</p> 
                        <p>A aplicação permite pesquisar personagens, visuar detalhes, navegar entre páginas e consultar informações relacionadas ao universo de Rick and Morty.</p>
                        <p>Durante o desenvolvimento foram aplicados conceitos como:</p>
                        <ul class="info">
                            <li>Componentização com Vue.js</li>
                            <li>Gerenciamento de rotas com Vue Router</li>
                            <li>Consumo de APIs REST</li>
                            <li>Renderização dinâmica de dados</li>
                            <li>Estilização responsiva com Bootstrap 5</li>
                        </ul>
                        <p><strong>Equipe de desenvolvimento</strong></p>
                            <ul class="desenvolvedores">
                                <li>Lian Filipe</li>
                                <li>Lucas Ribeiro</li>
                                <li>Luiz Felipe</li>
                                <li>Wallison Veronez</li>
                            </ul>
                        <p><strong>Tecnologias Utilizadas</strong></p>
                        <div class="d-flex gap-2 flex-wrap">                        
                            <span class="badge bg-success">Vue.js 3</span> 
                            <span class="badge bg-info">Vue Router</span> 
                            <span class="badge bg-primary">Bootstrap 5</span>
                            <span class="badge bg-warning text-black">JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>           
        </div>            
    </div>
</template>

<style scoped>
.desenvolvedores, .info{
    list-style: none;
}

.img-sobre{
    width: 100%;
    height: 100%;
    min-height: 100%;
    object-fit: cover;
    border-radius: .25rem 0 0 .25rem;
}

.conteudo-sobre{
    font-size: 1rem;
    text-align: justify;
}

.conteudo-sobre h1{
    font-size: 1.5rem;
    font-weight: bold;
}

@media (min-width: 1920px) {

    .conteudo-sobre {
        font-size: 1.25rem;
    }

    .conteudo-sobre h1 {
        font-size: 3.5rem;
    }

    .img-sobre {
        min-height: 850px;
    }
}

@media (max-width: 992px) {

    .img-sobre {
        height: 350px;
        border-radius: .25rem .25rem 0 0;
    }

    .conteudo-sobre {
        padding: 2rem !important;
        font-size: 1rem;
    }

    .conteudo-sobre h1 {
        font-size: 2.2rem;
        text-align: center;
    }

    .desenvolvedores,
    .info {
        padding-left: 0;
    }
}

@media (max-width: 576px) {

    .img-sobre {
        height: 250px;
    }

    .conteudo-sobre {
        padding: 1.25rem !important;
        font-size: 0.95rem;
    }

    .conteudo-sobre h1 {
        font-size: 1.8rem;
        text-align: center;
    }

    .badge {
        font-size: 0.75rem;
    }
}

</style>