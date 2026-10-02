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

    expect(cliente).toBe("Diego Araújo")
    expect(opcaoMenu).toBe(4)
    expect(quantidade).toBe(5)
    expect(formaPagamento).toBe("dinheiro")
    expect(statusPedido).toBe("aprovado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Pudim")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(9)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(45)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete pago")
    expect(frete).toBe(12)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento em dinheiro")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(0)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(0, 2)
    expect(total).toBeCloseTo(57, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido em preparo")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Diego Araújo")
    expect(resumo).toContain("Pudim")
    expect(resumo).toContain("5")
    expect(resumo).toContain("45")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento em dinheiro")
    expect(resumo).toContain("0")
    expect(resumo).toContain("57")
    expect(resumo).toContain("Pedido em preparo")

})
