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

const { subtotal, frete, desconto, total, calcularSubtotal, calcularFrete, calcularDesconto, calcularTotal } = executar(["53", "3", "cartao"])

test("subtotal deve estar correto", () => {
  expect(typeof calcularSubtotal).toBe("function")
  expect(subtotal).toBe(159)
})

test("frete deve estar correto", () => {
  expect(typeof calcularFrete).toBe("function")
  expect(frete).toBe(0)
})

test("desconto deve estar correto", () => {
  expect(typeof calcularDesconto).toBe("function")
  expect(desconto).toBe(0)
})

test("total deve estar correto", () => {
  expect(typeof calcularTotal).toBe("function")
  expect(total).toBe(159)
})
