const cliente= "lucasAlmeida"
const produto= "notebookGamer"
const preco=4500
const quantidade=2
const estoque=10
const valorPago=9000
const subtotal=(preco*quantidade) 
const descontoPercentual= 10
const estoqueDisponivel=10
let valorDesconto
const valorFinal=(subtotal-valorDesconto)
let statusPedido
if(subtotal>1000) {
    valorDesconto=subtotal*0.10
} else {
valorDesconto=0
}
if (estoqueDisponivel<=10) {
    console.log("Pedido disponível para finalização") 
} else {
  console.log("Pedido não pode ser finalizado por falta de estoque")
}

if (valorPago>=valorFinal) {
    console.log("Pagamento aprovado")
} else{
    console.log("PagamentoInsuficiente")
}
if(valorPago>=valorFinal){
    troco=valorPago-valorFinal
} else {
    troco=0
}
let =statusPedido
if (quantidade<= estoque) {
    statusPedido=
}







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