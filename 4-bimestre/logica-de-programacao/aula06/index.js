const prompt = require("prompt-sync")()

let turnos = Number(prompt("Digite a quantidade de turnos: "))
let turnosAcimaDaMeta = 0 

for (let i = 0; i < turnos; i++) {
    let peças = Number(prompt("Digite a quantidade de peças: "))
    if (peças < 15) {
        turnosAcimaDaMeta++
    }
} 
module.exports = turnosAcimaDaMeta
