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

    expect(cliente).toBe("Caio Fontes")
    expect(opcaoMenu).toBe(1)
    expect(quantidade).toBe(3)
    expect(formaPagamento).toBe("pix")
    expect(statusPedido).toBe("enviado")

})


test("Deve identificar o item escolhido", () => {

    expect(prato).toBe("Pastel de Carne")

})


test("Deve identificar o preço unitário do item", () => {

    expect(precoUnitario).toBe(9)

})


test("Deve calcular o subtotal do pedido", () => {

    expect(subtotal).toBe(27)

})


test("Deve identificar a situação e o valor do frete", () => {

    expect(freteStatus).toBe("Frete pago")
    expect(frete).toBe(12)

})


test("Deve gerar a mensagem da forma de pagamento", () => {

    expect(pagamentoMensagem).toBe("Pagamento via PIX")

})


test("Deve identificar o percentual de desconto da forma de pagamento", () => {

    expect(descontoPercentual).toBe(5)

})


test("Deve calcular o desconto e o total do pedido", () => {

    expect(desconto).toBeCloseTo(1.35, 2)
    expect(total).toBeCloseTo(37.65, 2)

})


test("Deve gerar a mensagem da situação do pedido", () => {

    expect(statusMensagem).toBe("Pedido a caminho")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Caio Fontes")
    expect(resumo).toContain("Pastel de Carne")
    expect(resumo).toContain("3")
    expect(resumo).toContain("27")
    expect(resumo).toContain("Frete pago")
    expect(resumo).toContain("Pagamento via PIX")
    expect(resumo).toContain("1.35")
    expect(resumo).toContain("37.65")
    expect(resumo).toContain("Pedido a caminho")

})
