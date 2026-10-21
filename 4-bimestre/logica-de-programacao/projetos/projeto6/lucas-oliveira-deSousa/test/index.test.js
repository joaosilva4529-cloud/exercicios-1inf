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

const {
  quantidadeDeDias,
  metaDiaria,
  metaSemanal,
  totalVendido,
  mediaVendas,
  diasAcimaDaMeta,
  melhorDia,
  situacaoSemana,
  resumo
} = executar(["5", "140", "830", "170", "180", "160", "190", "150"])

test("RF01 - deve ler a quantidade de dias e as metas", () => {
  expect(quantidadeDeDias).toBe(5)
  expect(metaDiaria).toBe(140)
  expect(metaSemanal).toBe(830)
})

test("RF02 - deve somar o total vendido na semana com for", () => {
  expect(totalVendido).toBe(850)
})

test("RF03 - deve calcular a média de vendas por dia", () => {
  expect(mediaVendas).toBe(170)
})

test("RF04 - deve contar os dias acima da meta diária", () => {
  expect(diasAcimaDaMeta).toBe(5)
})

test("RF05 - deve encontrar o melhor dia de vendas", () => {
  expect(melhorDia).toBe(190)
})

test("RF06 - deve informar a situação da semana e o resumo", () => {
  expect(situacaoSemana).toBe("Meta semanal atingida")
  expect(typeof resumo).toBe("string")
  expect(resumo).toContain("850")
  expect(resumo).toContain("170")
  expect(resumo).toContain("Meta semanal atingida")
})

test("Cenário extra - deve funcionar com outros valores digitados", () => {
  const extra = executar(["5", "200", "800", "150", "200", "250", "100", "50"])

  expect(extra.quantidadeDeDias).toBe(5)
  expect(extra.metaDiaria).toBe(200)
  expect(extra.metaSemanal).toBe(800)
  expect(extra.totalVendido).toBe(750)
  expect(extra.mediaVendas).toBe(150)
  expect(extra.diasAcimaDaMeta).toBe(2)
  expect(extra.melhorDia).toBe(250)
  expect(extra.situacaoSemana).toBe("Meta semanal não atingida")
  expect(extra.resumo).toContain("750")
})
