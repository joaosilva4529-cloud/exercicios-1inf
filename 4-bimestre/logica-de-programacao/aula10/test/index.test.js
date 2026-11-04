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

test("O preço do produto deve ser atualizado para 90", () => {
  const produto = executar(["Mochila", "80", "12", "10"])

  expect(produto.nome).toBe("Mochila")
  expect(produto.preco).toBe(90)
  expect(produto.estoque).toBe(12)
})

test("O preço de outro produto também deve ser atualizado", () => {
  const produto = executar(["Caderno", "15", "40", "5"])

  expect(produto.nome).toBe("Caderno")
  expect(produto.preco).toBe(20)
  expect(produto.estoque).toBe(40)
})
