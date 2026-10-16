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

test("Deve produzir 5 lotes e ignorar metas inválidas (0 e -2)", () => {
  expect(executar(["0", "-2", "5"])).toBe(5)
})

test("Deve produzir 3 lotes quando a meta digitada já é válida", () => {
  expect(executar(["3"])).toBe(3)
})
