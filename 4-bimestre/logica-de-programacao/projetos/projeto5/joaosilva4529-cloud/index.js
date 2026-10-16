const prompt = require('prompt-sync')()

const nomeTurno = Number(prompt("Digite o nome de seu turno:")) 
const meta = Number (prompt ("digite sua meta:"))
const producaoInicial = Number(prompt ("Digite a produção inicial:"))
const caixasNecessarias = Number (prompt ("Digite o numero de itens que cabem em uma caixa:"))
let producaoFinal = producaoInicial
const pecasPorCaixa = 0




while (producaoFinal  < meta) {
    producaoFinal++
}
 
const itensPorCaixa = 0

do {
    caixasNecessarias++
    producaoFinal  -= itensPorCaixa
} while (producaoFinal > 0)

console.log(`CaixasNecessárias: ${caixasNecessarias}`)

const situacaoMeta = producaoFinal > meta? "Meta atingida" : "Meta não atendida"








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
