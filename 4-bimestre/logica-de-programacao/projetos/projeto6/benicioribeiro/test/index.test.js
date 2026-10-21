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

const { totalVendido, mediaVendas, diasAcimaDaMeta, melhorDia, situacaoSemana } = executar(["5", "200", "1300", "340", "210", "180", "390", "260"])

test("total vendido deve estar correto", () => {
  expect(totalVendido).toBe(1380)
})

test("media de vendas deve estar correta", () => {
  expect(mediaVendas).toBe(276)
})

test("dias acima da meta deve estar correto", () => {
  expect(diasAcimaDaMeta).toBe(4)
})

test("melhor dia deve estar correto", () => {
  expect(melhorDia).toBe(390)
})

test("situacao da semana deve estar correta", () => {
  expect(situacaoSemana).toBe("Meta semanal atingida")
})
