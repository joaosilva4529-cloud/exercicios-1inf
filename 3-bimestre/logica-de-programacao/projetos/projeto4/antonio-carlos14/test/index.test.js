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

    expect(cliente).toBe("Juliana Prado")
    expect(opcaoMenu).toBe(2)
    expect(quantidade).toBe(2)
    expect(formaPagamento).toBe("dinheiro")
    expect(statusPedido).toBe("enviado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Cappuccino")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(12)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(24)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete pago")
    expect(frete).toBe(8)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento em dinheiro")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(10)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(2.4, 2)
    expect(total).toBeCloseTo(29.6, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido a caminho")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Juliana Prado")
    expect(resumo).toContain("Cappuccino")
    expect(resumo).toContain("2")
    expect(resumo).toContain("24")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento em dinheiro")
    expect(resumo).toContain("2.4")
    expect(resumo).toContain("29.6")
    expect(resumo).toContain("Pedido a caminho")

})
