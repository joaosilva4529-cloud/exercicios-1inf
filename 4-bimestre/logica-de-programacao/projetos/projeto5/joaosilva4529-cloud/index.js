
const prompt = require("prompt-sync")()

const nomeTurno = prompt("Digite o nome do turno: ")
const meta = Number(prompt("Digite a meta de produção: "))
const producaoInicial = Number(prompt("Digite a produção inicial: "))
const pecasPorCaixa = Number(prompt("Digite os itens por caixa: "))

let producaoFinal = producaoInicial

while (producaoFinal < meta) {
    producaoFinal++
}

let caixasNecessarias = 0
let itensEmbalados = 0

do {
    caixasNecessarias++
    itensEmbalados += pecasPorCaixa
} while (itensEmbalados < producaoFinal)

const situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"

const resumo = `
Resumo do turno
Nome do turno: ${nomeTurno}
Produção final: ${producaoFinal}
Caixas necessárias: ${caixasNecessarias}
Situação: ${situacaoMeta}
`

console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}