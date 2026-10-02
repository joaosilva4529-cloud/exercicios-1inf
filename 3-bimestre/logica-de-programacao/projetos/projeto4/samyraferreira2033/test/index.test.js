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

    expect(cliente).toBe("Sabrina Neves")
    expect(opcaoMenu).toBe(4)
    expect(quantidade).toBe(4)
    expect(formaPagamento).toBe("pix")
    expect(statusPedido).toBe("aprovado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Coxinha")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(7)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(28)

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

    expect(desconto).toBeCloseTo(1.4, 2)
    expect(total).toBeCloseTo(34.6, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido em preparo")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Sabrina Neves")
    expect(resumo).toContain("Coxinha")
    expect(resumo).toContain("4")
    expect(resumo).toContain("28")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento via PIX")
    expect(resumo).toContain("1.4")
    expect(resumo).toContain("34.6")
    expect(resumo).toContain("Pedido em preparo")

})
