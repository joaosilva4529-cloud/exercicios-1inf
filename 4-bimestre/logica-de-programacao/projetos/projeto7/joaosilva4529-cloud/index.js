
const prompt = require("prompt-sync")()

const limiteEstoqueBaixo = Number(prompt("Digite o limite de estoque baixo: "))

const quantidadeProdutos = Number(prompt("Digite a quantidade de produtos: "))

const catalogo = []

for (let i = 0; i < quantidadeProdutos; i++) {
    const nome = prompt(`Digite o nome do produto ${i + 1}: `)
    const preco = Number(prompt(`Digite o preço do produto ${i + 1}: `))
    const estoque = Number(prompt(`Digite o estoque do produto ${i + 1}: `))

    catalogo.push({
        nome: nome,
        preco: preco,
        estoque: estoque
    })
}

let produtoMaisCaro = catalogo[0].nome
let maiorPreco = catalogo[0].preco

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].preco > maiorPreco) {
        maiorPreco = catalogo[i].preco
        produtoMaisCaro = catalogo[i].nome
    }
}

let estoqueTotal = 0

for (let i = 0; i < catalogo.length; i++) {
    estoqueTotal = estoqueTotal + catalogo[i].estoque
}

let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++
    }
}

const nomeReajuste = prompt("Digite o nome do produto que deseja reajustar: ")
const aumento = Number(prompt("Digite o valor do aumento: "))

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === nomeReajuste) {
        catalogo[i].preco = catalogo[i].preco + aumento
    }
}

const resumo = `Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}`

console.log(resumo)

module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}

