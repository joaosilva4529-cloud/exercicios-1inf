const resultado = require("../index.js")

test("Pagamento PIX deve ser identificado corretamente", () => {
  expect(resultado).toBe("Pagamento via PIX")
})