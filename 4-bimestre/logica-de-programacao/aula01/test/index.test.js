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

test("Deve produzir 6 caixas usando while quando a meta digitada é 6", () => {
  expect(executar(["6"])).toBe(6)
})

test("Deve produzir 9 caixas quando a meta digitada é 9", () => {
  expect(executar(["9"])).toBe(9)
})
