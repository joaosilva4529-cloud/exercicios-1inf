const prompt = require("prompt-sync")()

const preUnitario = prompt("Digite seu preço: ")

const quantidade = prompt("Digite a quantidade: ")

const formaPagamento = prompt("Digite a forma de pagamento: ")

let preço = 17


function soma (preUnitario,quantidade) {
    let subtotal = preUnitario + quantidade
    return subtotal
}





//Função tradicional
//function somar(a, b) {
  //return a + b;
//}

 //Arrow function equivalente
//const somar = (a, b) => a + b; //


module.exports = {
    preUnitarioUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}
