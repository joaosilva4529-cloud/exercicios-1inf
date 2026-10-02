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

    expect(cliente).toBe("Márcio Ribeiro")
    expect(opcaoMenu).toBe(1)
    expect(quantidade).toBe(3)
    expect(formaPagamento).toBe("pix")
    expect(statusPedido).toBe("aprovado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("X-Burger")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(22)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(66)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete pago")
    expect(frete).toBe(10)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via PIX")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(15)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(9.9, 2)
    expect(total).toBeCloseTo(66.1, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido em preparo")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Márcio Ribeiro")
    expect(resumo).toContain("X-Burger")
    expect(resumo).toContain("3")
    expect(resumo).toContain("66")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento via PIX")
    expect(resumo).toContain("9.9")
    expect(resumo).toContain("66.1")
    expect(resumo).toContain("Pedido em preparo")

})
