const resultado = require("../index.js") 
test("Produto com estoque deve estar disponível", () => { 
    expect(resultado).toBe("Produto disponível") 
})