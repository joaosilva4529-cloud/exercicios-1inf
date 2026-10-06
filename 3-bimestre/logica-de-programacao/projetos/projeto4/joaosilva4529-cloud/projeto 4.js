const cliente = "Vanessa Teixeira"
const opcaoMenu = 4
const quantidade = 3
const formaPagamento = "pix"
const statusPedido = "cancelado"

let prato

switch (opcaoMenu) {
case 1:
prato = "Casquinha"
break
case 2:
prato = "Milkshake"
break
case 3:
prato = "Sundae"
break
case 4:
prato = "Picolé"
break
default:
prato = "Opção inválida"
break
}

let precoUnitario

switch (opcaoMenu) {
case 1:
precoUnitario = 7
break
case 2:
precoUnitario = 18
break
case 3:
precoUnitario = 16
break
case 4:
precoUnitario = 5
break
default:
precoUnitario = 0
break
}

const subtotal = precoUnitario * quantidade

const freteStatus = subtotal >= 60 ? "Frete grátis" : "Frete pago"
const frete = subtotal >= 60 ? 0 : 8

let pagamentoMensagem

switch (formaPagamento) {
case "pix":
pagamentoMensagem = "Pagamento via PIX"
break
case "cartao":
pagamentoMensagem = "Pagamento via cartão"
break
case "dinheiro":
pagamentoMensagem = "Pagamento em dinheiro"
break
default:
pagamentoMensagem = "Forma de pagamento inválida"
break
}

let descontoPercentual

switch (formaPagamento) {
case "pix":
case "dinheiro":
descontoPercentual = 5
break
case "cartao":
descontoPercentual = 0
break
default:
descontoPercentual = 0
break
}

const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + frete

let statusMensagem

switch (statusPedido) {
case "pendente":
statusMensagem = "Aguardando pagamento"
break
case "aprovado":
statusMensagem = "Pedido em preparo"
break
case "enviado":
statusMensagem = "Pedido a caminho"
break
case "cancelado":
statusMensagem = "Pedido cancelado"
break
default:
statusMensagem = "Status desconhecido"
break
}

const resumo = Cliente: ${cliente} Item: ${prato} Quantidade: ${quantidade} Subtotal: R$ ${subtotal} Frete: ${freteStatus} Pagamento: ${pagamentoMensagem} Desconto: R$ ${desconto} Total: R$ ${total} Status: ${statusMensagem}

console.log(resumo)

module.exports = {
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
}
