const {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
} = require("../index")


test("Deve armazenar corretamente os dados do pedido", () => {

    expect(cliente).toBe("André Cardoso")
    expect(opcaoMenu).toBe(1)
    expect(quantidade).toBe(5)
    expect(formaPagamento).toBe("cartao")
    expect(statusPedido).toBe("aprovado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Sushi")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(32)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(160)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(frete).toBe(0)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via cartão")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(10)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(16, 2)
    expect(total).toBeCloseTo(144, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido em preparo")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("André Cardoso")
    expect(resumo).toContain("Sushi")
    expect(resumo).toContain("5")
    expect(resumo).toContain("160")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento via cartão")
    expect(resumo).toContain("16")
    expect(resumo).toContain("144")
    expect(resumo).toContain("Pedido em preparo")

})
