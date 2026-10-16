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

const { producaoFinal, caixasNecessarias, situacaoMeta } = executar(["Turno B", "7", "1", "3"])

test("producao deve chegar na meta", () => {
  expect(producaoFinal).toBe(7)
})

test("caixas necessarias deve estar correto", () => {
  expect(caixasNecessarias).toBe(3)
})

test("situacao da meta deve estar correta", () => {
  expect(situacaoMeta).toBe("Meta atingida")
})
