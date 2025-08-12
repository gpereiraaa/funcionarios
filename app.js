'use strict'

import funcionarios from './funcionarios.json' with {type: 'json'} 


function criarBlocos(dados){
    const bloco = document.getElementById('pessoa')
    const img = document.createElement('img')
    img.src = dados.imagem

    const div = document.createElement('div')
    div.appendChild(img)
    

    const nome = document.createElement('h6')
    nome.textContent = dados.nome
    div.appendChild(nome)

    const cargo = document.createElement('p')
    cargo.textContent = dados.cargo
    div.appendChild(cargo)

    bloco.appendChild(div)
}

funcionarios.forEach(criarBlocos)