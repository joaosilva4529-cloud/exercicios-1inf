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

    expect(cliente).toBe("Bruno Siqueira")
    expect(opcaoMenu).toBe(1)
    expect(quantidade).toBe(4)
    expect(formaPagamento).toBe("pix")
    expect(statusPedido).toBe("cancelado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Sushi")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(32)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(128)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(frete).toBe(0)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via PIX")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(15)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(19.2, 2)
    expect(total).toBeCloseTo(108.8, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido cancelado")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Bruno Siqueira")
    expect(resumo).toContain("Sushi")
    expect(resumo).toContain("4")
    expect(resumo).toContain("128")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento via PIX")
    expect(resumo).toContain("19.2")
    expect(resumo).toContain("108.8")
    expect(resumo).toContain("Pedido cancelado")

})
