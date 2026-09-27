const nome = "João Silva"
const idade = 16
const categoria = "Comun"
const valorIngresso = 60
const possuiIngresso = true
const valorPago = 50
const impedido = false

let idadeStatus
let nivelAcesso
let acessoStatus
let pagamentoStatus
let statusParque
let ingressoStatus

if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

if (categoria === "Comun") {
    nivelAcesso = "Acesso comum"
} else if (categoria === "Salvavidas" || categoria === "Coordenador") {
    nivelAcesso = "Acesso administrativo"
}

if (possuiIngresso && idade >= 18 && !impedido) {
    console.log("Entrada liberada")
    acessoStatus = true
} else {
    console.log("Entrada negada")
    acessoStatus = false
}

if (valorPago >= valorIngresso) {
    console.log("Pagamento aprovado")
    pagamentoStatus = "Pagamento aprovado"
} else {
    console.log("Pagamento insuficiente")
    pagamentoStatus = "Pagamento insuficiente"
}

if (valorPago >= valorIngresso) {
    troco = valorPago - valorIngresso
} else {
    troco = 0
}

if (acessoStatus) {
    console.log("Check-in do parque confirmado")
    statusParque = true
} else {
    console.log("Check-in do parque não confirmado")
    statusParque = false
}

const resumo = `
nome: ${nome}
idade: ${idade}
categoria: ${categoria}
possui ingresso: ${possuiIngresso}
impedido: ${impedido}
valor ingresso: ${valorIngresso}
valor pago: ${valorPago}
idade: ${idadeStatus}
nivel de acesso: ${nivelAcesso}
acesso: ${acessoStatus}
pagamento: ${pagamentoStatus}
troco: ${troco}
parque: ${statusParque}
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

