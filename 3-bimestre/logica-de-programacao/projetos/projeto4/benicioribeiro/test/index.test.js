const { prato, frete } = require("../index.js")

test("Opção 2 deve ser Pizza", () => {
    expect(prato).toBe("Pizza")
})

test("Subtotal 120 deve ter frete grátis", () => {
    expect(frete).toBe("Frete grátis")
})
