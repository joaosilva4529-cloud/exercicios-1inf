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

    expect(cliente).toBe("Vanessa Teixeira")
    expect(opcaoMenu).toBe(4)
    expect(quantidade).toBe(3)
    expect(formaPagamento).toBe("pix")
    expect(statusPedido).toBe("cancelado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Picolé")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(5)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(15)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete pago")
    expect(frete).toBe(8)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via PIX")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(5)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(0.75, 2)
    expect(total).toBeCloseTo(22.25, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido cancelado")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Vanessa Teixeira")
    expect(resumo).toContain("Picolé")
    expect(resumo).toContain("3")
    expect(resumo).toContain("15")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento via PIX")
    expect(resumo).toContain("0.75")
    expect(resumo).toContain("22.25")
    expect(resumo).toContain("Pedido cancelado")

})
