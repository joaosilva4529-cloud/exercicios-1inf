const prompt = require("prompt-sync")()

const quantidadeDeDias = Number(prompt("Quantidade de dias: "))
const metaDiaria = Number(prompt("Meta diária: "))
const metaSemanal = Number(prompt("Meta semanal: "))

let totalVendido = 0
let diasAcimaDaMeta = 0
let melhorDia = 0

❓ (let dia = 1; dia <= quantidadeDeDias; dia++) {
  const venda = Number(prompt(`Venda do dia ${dia}: `))

  totalVendido = totalVendido + venda

  ❓ (venda >= metaDiaria) {
    diasAcimaDaMeta = diasAcimaDaMeta + 1
  }

  if (venda > melhorDia) {
    melhorDia = venda
  }
}

const mediaVendas = totalVendido / quantidadeDeDias

const situacaoSemana = totalVendido >= metaSemanal ❓ "Meta semanal atingida" ❓ "Meta semanal não atingida"

const resumo = `Total: ${totalVendido}`

// NÃO FAZER NADA ABAIXO DESSA LINHA
module.exports = {
  quantidadeDeDias,
  metaDiaria,
  metaSemanal,
  totalVendido,
  mediaVendas,
  diasAcimaDaMeta,
  melhorDia,
  situacaoSemana,
  resumo
}
