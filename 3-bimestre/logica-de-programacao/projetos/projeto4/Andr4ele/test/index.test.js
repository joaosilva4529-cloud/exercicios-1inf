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

    expect(cliente).toBe("Carlos Menezes")
    expect(opcaoMenu).toBe(1)
    expect(quantidade).toBe(4)
    expect(formaPagamento).toBe("pix")
    expect(statusPedido).toBe("enviado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Pão Francês")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(4)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(16)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete pago")
    expect(frete).toBe(12)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via PIX")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(15)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(2.4, 2)
    expect(total).toBeCloseTo(25.6, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido a caminho")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Carlos Menezes")
    expect(resumo).toContain("Pão Francês")
    expect(resumo).toContain("4")
    expect(resumo).toContain("16")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento via PIX")
    expect(resumo).toContain("2.4")
    expect(resumo).toContain("25.6")
    expect(resumo).toContain("Pedido a caminho")

})
