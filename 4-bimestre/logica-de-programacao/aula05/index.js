const prompt = require("prompt-sync")()


let totalProduzido = 0


const dias = Number(prompt("Quantos dias? "))

for (let i = 1; i <= dias; i++) {
    const totalProduzido = Number(prompt("Digite a produção diária: "))
}

module.exports = totalProduzido
