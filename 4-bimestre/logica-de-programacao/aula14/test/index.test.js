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

test("Preço 20, quantidade 2 e frete 5 deve resultar em 45", () => {
  expect(executar(["20", "2", "5"])).toBe(45)
})

test("Preço 10, quantidade 3 e frete 5 deve resultar em 35", () => {
  expect(executar(["10", "3", "5"])).toBe(35)
})

test("Preço 15, quantidade 4 e frete 0 deve resultar em 60", () => {
  expect(executar(["15", "4", "0"])).toBe(60)
})
