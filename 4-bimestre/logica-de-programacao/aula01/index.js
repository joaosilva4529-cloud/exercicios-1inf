const prompt = require("prompt-sync")()
const meta = Number(prompt("Meta de caixas: "))
let caixas = 0
while ( caixas <= meta) {
    caixas = caixas + 1
}
module.exports = caixas

