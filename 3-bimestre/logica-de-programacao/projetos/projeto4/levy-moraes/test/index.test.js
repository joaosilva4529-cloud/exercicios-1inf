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

    expect(cliente).toBe("Renata Campos")
    expect(opcaoMenu).toBe(3)
    expect(quantidade).toBe(2)
    expect(formaPagamento).toBe("cartao")
    expect(statusPedido).toBe("enviado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Yakisoba")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(28)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(56)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete pago")
    expect(frete).toBe(8)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via cartão")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(5)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(2.8, 2)
    expect(total).toBeCloseTo(61.2, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido a caminho")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Renata Campos")
    expect(resumo).toContain("Yakisoba")
    expect(resumo).toContain("2")
    expect(resumo).toContain("56")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento via cartão")
    expect(resumo).toContain("2.8")
    expect(resumo).toContain("61.2")
    expect(resumo).toContain("Pedido a caminho")

})
