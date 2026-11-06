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

test("Pedido de R$ 50 deve pagar R$ 10 de frete", () => {
  expect(executar(["50"])).toBe(10)
})

test("Pedido de R$ 120 deve ter frete grátis", () => {
  expect(executar(["120"])).toBe(0)
})

test("Pedido de R$ 80 deve ter frete grátis", () => {
  expect(executar(["80"])).toBe(0)
})
