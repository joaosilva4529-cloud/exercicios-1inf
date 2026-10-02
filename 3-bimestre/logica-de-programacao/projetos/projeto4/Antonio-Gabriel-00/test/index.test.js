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

    expect(cliente).toBe("Rafael Torres")
    expect(opcaoMenu).toBe(2)
    expect(quantidade).toBe(3)
    expect(formaPagamento).toBe("pix")
    expect(statusPedido).toBe("pendente")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Marmita Grande")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(22)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(66)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete pago")
    expect(frete).toBe(15)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via PIX")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(15)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(9.9, 2)
    expect(total).toBeCloseTo(71.1, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Aguardando pagamento")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Rafael Torres")
    expect(resumo).toContain("Marmita Grande")
    expect(resumo).toContain("3")
    expect(resumo).toContain("66")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento via PIX")
    expect(resumo).toContain("9.9")
    expect(resumo).toContain("71.1")
    expect(resumo).toContain("Aguardando pagamento")

})
