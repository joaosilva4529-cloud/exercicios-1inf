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

    expect(cliente).toBe("Leandro Vieira")
    expect(opcaoMenu).toBe(2)
    expect(quantidade).toBe(3)
    expect(formaPagamento).toBe("dinheiro")
    expect(statusPedido).toBe("cancelado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Temaki")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(24)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(72)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete pago")
    expect(frete).toBe(8)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento em dinheiro")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(0)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(0, 2)
    expect(total).toBeCloseTo(80, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido cancelado")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Leandro Vieira")
    expect(resumo).toContain("Temaki")
    expect(resumo).toContain("3")
    expect(resumo).toContain("72")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento em dinheiro")
    expect(resumo).toContain("0")
    expect(resumo).toContain("80")
    expect(resumo).toContain("Pedido cancelado")

})
