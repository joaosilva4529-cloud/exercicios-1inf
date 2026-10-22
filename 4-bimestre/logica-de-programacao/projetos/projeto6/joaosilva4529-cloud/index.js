const prompt = require("prompt-sync")()

const quantidadeDeDias = prompt("Digite a quantidade de dias") 
const metaDiaria = Number ( prompt ("Digite a sua meta diária") )
const totalVendido = Number ( prompt ("Digite o totalvendido") ) 
//Quantidade de dias: 5
//Meta diária: 100
//Meta semanal: 530

let i = 1

for (let i <= metaDiaria; 1++) { 
  console.log(totalVendido)
} 
console.log("Seu total de vendas foi" + let totalVendido)

//o sistema deve usar um for de 1 até a quantidade de dias.
//  A cada repetição, pergunte a venda daquele dia (Venda do dia 1: , Venda do dia 2: , ...) e some o valor ao total 
// vendido.













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
