# 🚀 PROJETO 7 — CATÁLOGO DE PRODUTOS DE UMA LOJA DE INFORMÁTICA

Uma loja de informática quer organizar o catálogo.

```
1. Mouse - preço 45 - estoque 10
2. Teclado - preço 90 - estoque 3
3. Cabo USB - preço 15 - estoque 2
4. Headset - preço 150 - estoque 6

Limite de estoque baixo: 4
```

# ⌨️ Dados digitados no terminal

Agora o programa **pergunta** os dados no terminal, usando o `prompt-sync` (já vem pronto no começo do `index.js`).

- O `prompt` devolve texto. Por isso os números usam `Number(prompt(...))`.
- Os testes digitam as respostas na mesma ordem das perguntas do arquivo. **Não mude a ordem das perguntas.**

Para os testes, serão digitados:

```
Limite de estoque baixo: 4
Quantidade de produtos: 4
Produto 1 - nome: Mouse
Produto 1 - preço: 45
Produto 1 - estoque: 10
Produto 2 - nome: Teclado
Produto 2 - preço: 90
Produto 2 - estoque: 3
Produto 3 - nome: Cabo USB
Produto 3 - preço: 15
Produto 3 - estoque: 2
Produto 4 - nome: Headset
Produto 4 - preço: 150
Produto 4 - estoque: 6
Nome do produto a reajustar: Headset
Aumento: 10
```

# ⭐ SUA TAREFA!

Complete o arquivo `index.js`:

1. Use `for` para achar o produto mais caro.
2. Use `for` para somar o estoque total.
3. Use `for` + `if` para contar os produtos com estoque baixo.
4. Aumente o preço do produto que foi digitado para reajuste, usando o valor do aumento digitado.

# 🧪 Como executar

```
npm install
node index.js
npm test
```

`node index.js` roda o programa e pede os dados. `npm test` roda os testes.
