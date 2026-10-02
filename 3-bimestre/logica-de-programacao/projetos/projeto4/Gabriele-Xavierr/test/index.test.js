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

    expect(cliente).toBe("Patrícia Gomes")
    expect(opcaoMenu).toBe(2)
    expect(quantidade).toBe(4)
    expect(formaPagamento).toBe("cartao")
    expect(statusPedido).toBe("aprovado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Açaí 500ml")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(20)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(80)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(frete).toBe(0)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via cartão")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(0)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(0, 2)
    expect(total).toBeCloseTo(80, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido em preparo")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Patrícia Gomes")
    expect(resumo).toContain("Açaí 500ml")
    expect(resumo).toContain("4")
    expect(resumo).toContain("80")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento via cartão")
    expect(resumo).toContain("0")
    expect(resumo).toContain("80")
    expect(resumo).toContain("Pedido em preparo")

})
