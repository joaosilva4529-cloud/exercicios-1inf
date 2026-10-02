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

    expect(cliente).toBe("Elisa Tavares")
    expect(opcaoMenu).toBe(3)
    expect(quantidade).toBe(4)
    expect(formaPagamento).toBe("pix")
    expect(statusPedido).toBe("enviado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Sundae")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(16)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(64)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete grátis")
    expect(frete).toBe(0)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via PIX")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(0)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(0, 2)
    expect(total).toBeCloseTo(64, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido a caminho")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Elisa Tavares")
    expect(resumo).toContain("Sundae")
    expect(resumo).toContain("4")
    expect(resumo).toContain("64")
    expect(resumo).toContain("Frete grátis")
    expect(resumo).toContain("Pagamento via PIX")
    expect(resumo).toContain("0")
    expect(resumo).toContain("64")
    expect(resumo).toContain("Pedido a caminho")

})
