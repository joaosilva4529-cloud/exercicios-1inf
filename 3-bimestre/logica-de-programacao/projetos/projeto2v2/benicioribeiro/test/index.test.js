const mensagem = require("../index.js")

test("A mensagem do aluno deve estar correta", () => {
  expect(mensagem).toBe(
    "Carlos está estudando Desenvolvimento de Sistemas na EEEP."
  )
})