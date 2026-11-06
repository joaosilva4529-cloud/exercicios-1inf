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
  precoUnitario,
  quantidade,
  formaPagamento,
  calcularSubtotal,
  calcularFrete,
  calcularDesconto,
  calcularTotal,
  subtotal,
  frete,
  desconto,
  total,
  resumo
} = executar(["14", "5", "dinheiro"])

test("RF01 - deve registrar os dados do pedido", () => {
  expect(precoUnitario).toBe(14)
  expect(quantidade).toBe(5)
  expect(formaPagamento).toBe("dinheiro")
})

test("RF02 - calcularSubtotal deve multiplicar preço por quantidade", () => {
  expect(typeof calcularSubtotal).toBe("function")
  expect(calcularSubtotal(14, 5)).toBe(70)
  expect(subtotal).toBe(70)
})

test("RF03 - calcularFrete deve usar retorno condicional", () => {
  expect(typeof calcularFrete).toBe("function")
  expect(calcularFrete(70)).toBe(10)
  expect(frete).toBe(10)
})

test("RF04 - calcularDesconto deve usar switch para o percentual", () => {
  expect(typeof calcularDesconto).toBe("function")
  expect(calcularDesconto(70, "dinheiro")).toBe(3.5)
  expect(desconto).toBe(3.5)
})

test("RF05 - calcularTotal deve chamar as outras funções internamente", () => {
  expect(typeof calcularTotal).toBe("function")
  expect(calcularTotal(14, 5, "dinheiro")).toBe(76.5)
  expect(total).toBe(76.5)
})

test("RF06 - deve gerar um resumo do pedido", () => {
  expect(typeof resumo).toBe("string")
})

test("Cenário extra - deve funcionar com outros valores digitados", () => {
  const dinheiro = executar(["30", "2", "dinheiro"])

  expect(dinheiro.precoUnitario).toBe(30)
  expect(dinheiro.quantidade).toBe(2)
  expect(dinheiro.formaPagamento).toBe("dinheiro")
  expect(dinheiro.subtotal).toBe(60)
  expect(dinheiro.frete).toBe(10)
  expect(dinheiro.desconto).toBe(3)
  expect(dinheiro.total).toBe(67)

  const cartao = executar(["50", "4", "cartao"])

  expect(cartao.subtotal).toBe(200)
  expect(cartao.frete).toBe(0)
  expect(cartao.desconto).toBe(0)
  expect(cartao.total).toBe(200)
})
