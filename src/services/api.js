const urlBase = 'https://rickandmortyapi.com/api';

export async function listarPersonagens(pagina = 1) {
    const res = await fetch(`${urlBase}/character?page=${pagina}`);

    if (!res.ok) {
        throw new Error('Erro: ' + res.status)
    }

    return await res.json();
}

export async function  buscarPersonagem(nome) {
    const res = await fetch(`${urlBase}/character?name=${nome}`);

    if (!res.ok) {
        throw new Error('Erro: ' + res.status);
    }

    return await res.json();
}

export async function detalharPersonagem(id) {
    const res = await fetch (`${urlBase}/character/${id}`);

    if (!res.ok) {
        throw new Error('Erro: ' + res.status);
    }

    return await res.json();    
}