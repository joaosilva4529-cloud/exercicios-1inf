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

    expect(cliente).toBe("Fernanda Rocha")
    expect(opcaoMenu).toBe(3)
    expect(quantidade).toBe(5)
    expect(formaPagamento).toBe("dinheiro")
    expect(statusPedido).toBe("pendente")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Sundae")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(16)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(80)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(frete).toBe(0)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento em dinheiro")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(15)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(12, 2)
    expect(total).toBeCloseTo(68, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Aguardando pagamento")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Fernanda Rocha")
    expect(resumo).toContain("Sundae")
    expect(resumo).toContain("5")
    expect(resumo).toContain("80")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento em dinheiro")
    expect(resumo).toContain("12")
    expect(resumo).toContain("68")
    expect(resumo).toContain("Aguardando pagamento")

})
