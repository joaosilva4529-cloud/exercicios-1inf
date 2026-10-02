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

    expect(cliente).toBe("Larissa Duarte")
    expect(opcaoMenu).toBe(4)
    expect(quantidade).toBe(2)
    expect(formaPagamento).toBe("cartao")
    expect(statusPedido).toBe("pendente")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Guaraná")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(8)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(16)

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

    expect(desconto).toBeCloseTo(0.8, 2)
    expect(total).toBeCloseTo(23.2, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Aguardando pagamento")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Larissa Duarte")
    expect(resumo).toContain("Guaraná")
    expect(resumo).toContain("2")
    expect(resumo).toContain("16")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento via cartão")
    expect(resumo).toContain("0.8")
    expect(resumo).toContain("23.2")
    expect(resumo).toContain("Aguardando pagamento")

})
