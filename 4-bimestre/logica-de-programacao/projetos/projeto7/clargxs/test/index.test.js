function executar(respostas) {
  jest.resetModules()

  jest.doMock("prompt-sync", () => () => () => {
    if (respostas.length === 0) {
      throw new Error("O programa fez mais perguntas do que o esperado")
    }

    return respostas.shift()
  })

  return require("../index.js")
}

const {
  catalogo,
  limiteEstoqueBaixo,
  produtoMaisCaro,
  estoqueTotal,
  produtosComEstoqueBaixo,
  resumo
} = executar(["4", "4", "Ração", "65", "12", "Coleira", "25", "5", "Brinquedo", "20", "4", "Shampoo", "35", "9", "Shampoo", "10"])

test("RF01 - deve registrar o catálogo como array de objetos", () => {
  expect(Array.isArray(catalogo)).toBe(true)
  expect(catalogo).toHaveLength(4)
  expect(limiteEstoqueBaixo).toBe(4)
})

test("RF02 - deve encontrar o produto mais caro percorrendo o array com for", () => {
  expect(produtoMaisCaro).toBe("Ração")
})

test("RF03 - deve somar o estoque total do catálogo", () => {
  expect(estoqueTotal).toBe(30)
})

test("RF04 - deve contar os produtos com estoque baixo", () => {
  expect(produtosComEstoqueBaixo).toBe(1)
})

test("RF05 - deve reajustar o preço de Shampoo para 45", () => {
  const alvo = catalogo.find((produto) => produto.nome === "Shampoo")
  expect(alvo.preco).toBe(45)
})

test("RF06 - deve gerar um resumo do catálogo", () => {
  expect(typeof resumo).toBe("string")
})

test("Cenário extra - deve funcionar com outros valores digitados", () => {
  const extra = executar([
    "4", "3",
    "Caneta", "5", "30",
    "Caderno", "20", "4",
    "Pasta", "12", "2",
    "Caneta", "5"
  ])

  expect(extra.catalogo).toHaveLength(3)
  expect(extra.limiteEstoqueBaixo).toBe(4)
  expect(extra.produtoMaisCaro).toBe("Caderno")
  expect(extra.estoqueTotal).toBe(36)
  expect(extra.produtosComEstoqueBaixo).toBe(2)

  const caneta = extra.catalogo.find((produto) => produto.nome === "Caneta")
  expect(caneta.preco).toBe(10)
})
