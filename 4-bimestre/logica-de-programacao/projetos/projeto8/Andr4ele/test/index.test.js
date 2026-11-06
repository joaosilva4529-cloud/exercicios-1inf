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
} = executar(["22", "3", "cartao"])

test("RF01 - deve registrar os dados do pedido", () => {
  expect(precoUnitario).toBe(22)
  expect(quantidade).toBe(3)
  expect(formaPagamento).toBe("cartao")
})

test("RF02 - calcularSubtotal deve multiplicar preço por quantidade", () => {
  expect(typeof calcularSubtotal).toBe("function")
  expect(calcularSubtotal(22, 3)).toBe(66)
  expect(subtotal).toBe(66)
})

test("RF03 - calcularFrete deve usar retorno condicional", () => {
  expect(typeof calcularFrete).toBe("function")
  expect(calcularFrete(66)).toBe(10)
  expect(frete).toBe(10)
})

test("RF04 - calcularDesconto deve usar switch para o percentual", () => {
  expect(typeof calcularDesconto).toBe("function")
  expect(calcularDesconto(66, "cartao")).toBe(0)
  expect(desconto).toBe(0)
})

test("RF05 - calcularTotal deve chamar as outras funções internamente", () => {
  expect(typeof calcularTotal).toBe("function")
  expect(calcularTotal(22, 3, "cartao")).toBe(76)
  expect(total).toBe(76)
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
