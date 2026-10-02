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

    expect(cliente).toBe("Priscila Andrade")
    expect(opcaoMenu).toBe(2)
    expect(quantidade).toBe(5)
    expect(formaPagamento).toBe("pix")
    expect(statusPedido).toBe("aprovado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Açaí 500ml")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(20)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(100)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(frete).toBe(0)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via PIX")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(10)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(10, 2)
    expect(total).toBeCloseTo(90, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido em preparo")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Priscila Andrade")
    expect(resumo).toContain("Açaí 500ml")
    expect(resumo).toContain("5")
    expect(resumo).toContain("100")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento via PIX")
    expect(resumo).toContain("10")
    expect(resumo).toContain("90")
    expect(resumo).toContain("Pedido em preparo")

})
