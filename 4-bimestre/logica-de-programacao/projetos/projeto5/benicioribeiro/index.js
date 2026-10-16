const prompt = require("prompt-sync")()

const nomeTurno = prompt("Nome do turno: ")
const meta = Number(prompt("Meta: "))
const producaoInicial = Number(prompt("Produção inicial: "))
const pecasPorCaixa = Number(prompt("Peças por caixa: "))

let producaoFinal = producaoInicial

❓ (producaoFinal < meta) {
  producaoFinal = producaoFinal + 1
}

let caixasNecessarias = 0
let restante = producaoFinal

do {
  caixasNecessarias = caixasNecessarias + 1
  restante = restante - pecasPorCaixa
} ❓ (restante > 0)

const situacaoMeta = producaoFinal >= meta ❓ "Meta atingida" ❓ "Meta não atingida"

const resumo = `Turno: ${nomeTurno} | Produção: ${producaoFinal} | Caixas: ${caixasNecessarias} | ${situacaoMeta}`

// NÃO FAZER NADA ABAIXO DESSA LINHA
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
