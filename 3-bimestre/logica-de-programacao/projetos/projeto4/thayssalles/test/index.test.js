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

    expect(cliente).toBe("Amanda Veloso")
    expect(opcaoMenu).toBe(2)
    expect(quantidade).toBe(4)
    expect(formaPagamento).toBe("cartao")
    expect(statusPedido).toBe("pendente")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Bolo de Cenoura")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(22)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(88)

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
    expect(total).toBeCloseTo(88, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Aguardando pagamento")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Amanda Veloso")
    expect(resumo).toContain("Bolo de Cenoura")
    expect(resumo).toContain("4")
    expect(resumo).toContain("88")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento via cartão")
    expect(resumo).toContain("0")
    expect(resumo).toContain("88")
    expect(resumo).toContain("Aguardando pagamento")

})
