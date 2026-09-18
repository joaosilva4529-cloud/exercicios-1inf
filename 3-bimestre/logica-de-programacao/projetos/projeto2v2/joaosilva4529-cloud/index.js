const contratante = "Marcos Teixeira"
const pacote = "Pacote Prata"
const valorUnidade = 200
const periodo = 4
const quantidadeReservada = 10
const mesasDisponiveis = 15
const valorPago = 400

const valorBase = valorUnidade * periodo

let capacidadeStatus
let descontoStatus
let valorDesconto
let pagamentoStatus
let saldoDevedor
let statusOrcamento


if (quantidadeReservada <= mesasDisponiveis) {
capacidadeStatus = "Salão comporta o evento"
} else {
capacidadeStatus = "Salão não comporta o evento"
}

conto aplicado"
valorDesconto = valorBase * 0.1
} else {
if (periodo >= 6) {
descontoStatus = "Dessconto aplicado"
descontoStatus = "Sem desconto"
valorDesconto = 0
}

const valorFinal = valorBase - valorDesconto


if (valorPago >= valorFinal) {
pagamentoStatus = "Orçamento quitado"
} else {
pagamentoStatus = "Orçamento com saldo pendente"
}




if (valorPago >= valorFinal) {
saldoDevedor = 0
} else {
saldoDevedor = valorFinal - valorPago
}




if (quantidadeReservada <= mesasDisponiveis) {
if (valorPago >= valorFinal) {
statusOrcamento = "Orçamento confirmado"
} else {
statusOrcamento = "Orçamento confirmado com saldo pendente"
}
} else {
statusOrcamento = "Orçamento não pode ser confirmado: salão não comporta o evento"
}

const resumo = `Contratante = ${contratante}
Pacote = ${pacote}
Valor por hora = R$ ${valorUnidade}
Horas de festa = ${periodo}
Mesas necessárias = ${quantidadeReservada}
Mesas disponíveis = ${mesasDisponiveis}
Valor base = R$ ${valorBase}
Situação das mesas = ${capacidadeStatus}
Desconto = ${descontoStatus}
Valor do desconto = R$ ${valorDesconto}
Valor final = R$ ${valorFinal}
Valor pago = R$ ${valorPago}
Situação do pagamento = ${pagamentoStatus}
Saldo devedor = R$ ${saldoDevedor}
Situação do orçamento = ${statusOrcamento}`

console.log(resumo)

module.exports = {
contratante,
pacote,
valorUnidade,
periodo,
quantidadeReservada,
mesasDisponiveis,
valorPago,
valorBase,
capacidadeStatus,
descontoStatus,
valorDesconto,
valorFinal,
pagamentoStatus,
saldoDevedor,
statusOrcamento,
resumo
}






