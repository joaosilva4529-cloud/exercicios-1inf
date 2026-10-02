// CRIE SUA SOLUÇÃO ABAIXO ================
const opcao = 2
const subtotal = 120

// Parte 1
let prato = "Opção inválida"

❓ (opcao) {

  ❓ 1:
    prato = "Hambúrguer"
    ❓

  ❓ 2:
    prato = "Pizza"
    ❓

  ❓ 3:
    prato = "Suco"
    ❓

  ❓:
    prato = "Opção inválida"
}

// Parte 2
const frete =
  subtotal >= 100
    ❓ "Frete grátis"
    ❓ "Frete pago"

// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = { prato, frete }
