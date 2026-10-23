const prompt = require("prompt-sync")()

const quantidadeDeDias = Number (prompt("Digite a quantidade de dias: "))
const metaDiaria = Number(prompt("Digite a sua meta diária: "))
const metaSemanal = Number(prompt("Digite a meta semanal: "))


let totalVendido = 0
let diasAcimaDaMeta = 0
let melhorDia = 0

for (let i = 1; i <= quantidadeDeDias; i++) {
  let vendaDia = Number(prompt("Digite a venda do dia: "))
if (vendaDia >= metaDiaria ) {
  diasAcimaDaMeta++
}

if ( vendaDia > melhorDia ) {
  melhorDia = vendaDia
}

  totalVendido = (totalVendido + vendaDia)
}

const mediaVendas = (totalVendido / quantidadeDeDias)

let situacaoSemana = totalVendido >= metaSemanal?"Meta semanal atingida" : "Meta semanal não atingida"  

const resumo = `
quantidadeDeDias: ${quantidadeDeDias}
metaDiaria: ${metaDiaria}
metaSemanal: ${metaSemanal}
totalVendido: ${totalVendido}
mediaVendas: ${mediaVendas}
diasAcimaDaMeta ${diasAcimaDaMeta}
melhorDia: ${melhorDia}
situacaoSemana: ${situacaoSemana}
`
console.log(resumo)


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
