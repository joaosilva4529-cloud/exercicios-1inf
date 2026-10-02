const resultado = require("../index.js")

test("Aluno com nota 8 deve estar aprovado", () => {
  expect(resultado).toBe("Aprovado")
})