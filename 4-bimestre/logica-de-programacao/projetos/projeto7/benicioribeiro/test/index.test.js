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

const { catalogo, produtoMaisCaro, estoqueTotal, produtosComEstoqueBaixo } = executar(["4", "4", "Mouse", "45", "10", "Teclado", "90", "3", "Cabo USB", "15", "2", "Headset", "150", "6", "Headset", "10"])

test("produto mais caro deve estar correto", () => {
  expect(produtoMaisCaro).toBe("Headset")
})

test("estoque total deve estar correto", () => {
  expect(estoqueTotal).toBe(21)
})

test("produtos com estoque baixo deve estar correto", () => {
  expect(produtosComEstoqueBaixo).toBe(2)
})

test("preco do produto reajustado deve estar correto", () => {
  const alvo = catalogo.find((produto) => produto.nome === "Headset")
  expect(alvo.preco).toBe(160)
})
