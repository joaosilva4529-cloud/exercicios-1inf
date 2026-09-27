const nome = "João Silva"
const idade = 16
const categoria = "comum"
const possuiIngresso = true
const impedido = false
const valorIngresso = 60
const valorPago = 50

let idadeStatus
let nivelAcesso
let acessoStatus
let pagamentoStatus
let troco
let statusParque

if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

if (categoria === "salva-vidas" || categoria === "coordenador") {
    nivelAcesso = "Acesso administrativo liberado"
} else {
    nivelAcesso = "Acesso comum"
}

if (idade >= 18 && possuiIngresso && !impedido) {
    console.log("Entrada liberada")
    acessoStatus = true
} else {
    console.log("Entrada negada")
    acessoStatus = false
}

if (valorPago >= valorIngresso) {
    console.log("Pagamento aprovado")
    pagamentoStatus = "Pagamento aprovado"
    troco = valorPago - valorIngresso
} else {
    console.log("Pagamento insuficiente")
    pagamentoStatus = "Pagamento insuficiente"
    troco = 0
}

if (acessoStatus && pagamentoStatus === "Pagamento aprovado") {
    console.log("Check-in do parque confirmado")
    statusParque = true
} else {
    console.log("Check-in do parque não confirmado")
    statusParque = false
}
//resumo//
const resumo = `
Nome: ${nome}
Categoria: ${categoria}
Nível de acesso: ${nivelAcesso}
Valor ingresso: ${valorIngresso}
Valor pago: ${valorPago}
Troco: ${troco}
Acesso: ${acessoStatus}
Pagamento: ${pagamentoStatus}
Situação final: ${statusParque}
`

console.log(resumo)

module.exports = {
    nome,
    idade,
    categoria,
    possuiIngresso,
    impedido,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusParque,
    resumo
}
