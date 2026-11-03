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

test("Deve encontrar o menor valor de venda digitado", () => {
  expect(executar(["5", "320", "150", "480", "90", "260"])).toBe(90)
})

test("Deve encontrar o menor valor com outra lista de vendas", () => {
  expect(executar(["3", "50", "20", "70"])).toBe(20)
})
