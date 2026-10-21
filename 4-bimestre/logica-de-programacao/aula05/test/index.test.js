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

test("Deve somar a produção de 3 dias digitada no terminal", () => {
  expect(executar(["3", "10", "20", "5"])).toBe(35)
})

test("Deve somar a produção de 2 dias digitada no terminal", () => {
  expect(executar(["2", "7", "8"])).toBe(15)
})
