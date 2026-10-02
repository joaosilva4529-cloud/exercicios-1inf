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

    expect(cliente).toBe("Marina Alves")
    expect(opcaoMenu).toBe(4)
    expect(quantidade).toBe(4)
    expect(formaPagamento).toBe("dinheiro")
    expect(statusPedido).toBe("pendente")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Tapioca")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(10)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(40)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete pago")
    expect(frete).toBe(15)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento em dinheiro")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(0)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(0, 2)
    expect(total).toBeCloseTo(55, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Aguardando pagamento")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Marina Alves")
    expect(resumo).toContain("Tapioca")
    expect(resumo).toContain("4")
    expect(resumo).toContain("40")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento em dinheiro")
    expect(resumo).toContain("0")
    expect(resumo).toContain("55")
    expect(resumo).toContain("Aguardando pagamento")

})
