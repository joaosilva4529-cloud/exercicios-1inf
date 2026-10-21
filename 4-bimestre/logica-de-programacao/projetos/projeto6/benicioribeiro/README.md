# 🚀 PROJETO 6 — RELATÓRIO DE VENDAS DE UMA LOJA DE BRINQUEDOS

Uma loja de brinquedos quer um relatório da semana.

```
Quantidade de dias: 5
Vendas: 340, 210, 180, 390, 260
Meta diária: 200
Meta semanal: 1300
```

# ⌨️ Dados digitados no terminal

Agora o programa **pergunta** os dados no terminal, usando o `prompt-sync` (já vem pronto no começo do `index.js`).

- O `prompt` devolve texto. Por isso os números usam `Number(prompt(...))`.
- Os testes digitam as respostas na mesma ordem das perguntas do arquivo. **Não mude a ordem das perguntas.**

Para os testes, serão digitados:

```
Quantidade de dias: 5
Meta diária: 200
Meta semanal: 1300
Venda do dia 1: 340
Venda do dia 2: 210
Venda do dia 3: 180
Venda do dia 4: 390
Venda do dia 5: 260
```

As vendas de cada dia são perguntadas **dentro do `for`**, uma por repetição.

# ⭐ SUA TAREFA!

Complete o arquivo `index.js`:

1. Use um `for` de 1 até a quantidade de dias. Dentro dele, pergunte a venda do dia e some no total vendido.
2. Calcule a média (total / quantidade de dias).
3. Use `if` dentro do `for` para contar os dias acima da meta diária.
4. Use `if` dentro do `for` para achar o melhor dia.
5. Use um ternário para a situação da semana.

# 🧪 Como executar

```
npm install
node index.js
npm test
```

`node index.js` roda o programa e pede os dados. `npm test` roda os testes.
