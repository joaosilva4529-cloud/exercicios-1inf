const cliente= "lucasAlmeida"
const produto= "notebookGamer"
const preco=4500
const quantidade=2
const estoque=10
const valorPago=9000
const subtotal=(preco*quantidade) 
let estoqueDisponivel
if (quantidade<=estoque) {
    estoqueDisponivel="Estoque disponivel"
} else {
    estoqueDisponivel="Estoque indisponível"
}
let descontoPercentual
let valorDesconto
if(subtotal>=1000) {
    descontoPercentual=10
    valorDesconto=subtotal*0.10
} else {
    descontoPercentual=0
    valorDesconto=0
}
const valorFinal=(subtotal-valorDesconto)
let pagamentoStatus
if (valorPago>=valorFinal) {
    pagamentoStatus= "pagamento aprovado"
} else {
    pagamentoStatus="pagamento insuficiente"
}
let troco
if(valorPago>=valorFinal) {
    troco=(valorPago-valorFinal)
} else {
    troco=0
} 
let statusPedido
if(quantidade<=estoque) {
    statusPedido="pedido disponível para a finalização"
} else {
    statusPedido="Pedido não pode ser finalizado por falta de estoque"
}
let resumo = `
Cliente = ${cliente}
Produto = ${produto}
Preço = R$ ${preco}
Quantidade = ${quantidade}
Subtotal = R$ ${subtotal}
Desconto = ${descontoPercentual}%
Valor do desconto = R$ ${valorDesconto}
Valor final = R$ ${valorFinal}
Estoque = ${estoque}
Valor pago = R$ ${valorPago}
Situação do pagamento = ${pagamentoStatus}
Troco = R$ ${troco}
Situação do pedido = ${statusPedido}
`
console.log(resumo)

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}