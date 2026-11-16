const prompt = require("prompt-sync")()

let meta = 0
let lotes = 0

do {
    meta = Number(prompt("meta de lotes (maior que 0): "))
} while (isNaN (meta) || meta <= 0)

    do {
        lotes = lotes + 1
    } while (lotes < meta)


module.exports = lotes
