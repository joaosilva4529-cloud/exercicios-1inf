const prompt = require("prompt-sync")()

const limiteEstoqueBaixo = Number(prompt("Limite de estoque baixo: "))
const quantidadeDeProdutos = Number(prompt("Quantidade de produtos: "))
const catalogo = []

for (let i = 1; i <= quantidadeDeProdutos; i++) {
  const produto = {
    nome: prompt(`Produto ${i} - nome: `),
    preco: Number(prompt(`Produto ${i} - preço: `)),
    estoque: Number(prompt(`Produto ${i} - estoque: `))
  }

  catalogo.push(produto)
}

let produtoMaisCaro = catalogo[0].nome
let maiorPreco = catalogo[0].preco

❓ (let i = 0; i < catalogo.length; i++) {
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
  ❓ (catalogo[i].estoque <= limiteEstoqueBaixo) {
    produtosComEstoqueBaixo = produtosComEstoqueBaixo + 1
  }
}

const nomeReajuste = prompt("Nome do produto a reajustar: ")
const aumento = Number(prompt("Aumento: "))

for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].nome === nomeReajuste) {
    catalogo[i].❓ = catalogo[i].preco + aumento
  }
}

const resumo = `Produto mais caro: ${produtoMaisCaro}`

// NÃO FAZER NADA ABAIXO DESSA LINHA
module.exports = {
  catalogo,
  limiteEstoqueBaixo,
  produtoMaisCaro,
  estoqueTotal,
  produtosComEstoqueBaixo,
  resumo
}
