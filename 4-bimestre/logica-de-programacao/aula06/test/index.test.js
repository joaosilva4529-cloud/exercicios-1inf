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

test("Deve contar 2 turnos com mais de 15 peças", () => {
  expect(executar(["5", "12", "25", "8", "30", "15"])).toBe(2)
})

test("Deve contar 3 turnos quando todos passam de 15 peças", () => {
  expect(executar(["3", "16", "17", "18"])).toBe(3)
})
