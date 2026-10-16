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
  nomeTurno,
  meta,
  producaoInicial,
  pecasPorCaixa,
  producaoFinal,
  caixasNecessarias,
  situacaoMeta,
  resumo
} = executar(["Turno 1", "10", "2", "4"])

test("RF01 - deve registrar os dados do turno", () => {
  expect(nomeTurno).toBe("Turno 1")
  expect(meta).toBe(10)
  expect(producaoInicial).toBe(2)
  expect(pecasPorCaixa).toBe(4)
})

test("RF02 - deve produzir itens com while até atingir a meta", () => {
  expect(producaoFinal).toBe(10)
})

test("RF03 - deve calcular as caixas necessárias com do...while", () => {
  expect(caixasNecessarias).toBe(3)
})

test("RF04 - deve informar a situação da meta com ternário", () => {
  expect(situacaoMeta).toBe("Meta atingida")
})

test("RF05 - deve gerar um resumo com os dados do turno", () => {
  expect(typeof resumo).toBe("string")
  expect(resumo).toContain("Turno 1")
  expect(resumo).toContain("Meta atingida")
})

test("Cenário extra - deve funcionar com outros valores digitados", () => {
  const extra = executar(["Turno Noite", "6", "6", "4"])

  expect(extra.nomeTurno).toBe("Turno Noite")
  expect(extra.meta).toBe(6)
  expect(extra.producaoInicial).toBe(6)
  expect(extra.pecasPorCaixa).toBe(4)
  expect(extra.producaoFinal).toBe(6)
  expect(extra.caixasNecessarias).toBe(2)
  expect(extra.situacaoMeta).toBe("Meta atingida")
  expect(extra.resumo).toContain("Turno Noite")
})
