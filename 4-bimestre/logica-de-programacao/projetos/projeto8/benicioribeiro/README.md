# 🚀 PROJETO 8 — CALCULADORA DE PEDIDOS DE UMA PIZZARIA

Uma pizzaria quer calcular o pedido com funções separadas.

```
Preço unitário: 53
Quantidade: 3
Forma de pagamento: cartao
```

# ⌨️ Dados digitados no terminal

Agora o programa **pergunta** os dados no terminal, usando o `prompt-sync` (já vem pronto no começo do `index.js`).

- O `prompt` devolve texto. Por isso os números usam `Number(prompt(...))`.
- Os testes digitam as respostas na mesma ordem das perguntas do arquivo. **Não mude a ordem das perguntas.**

Para os testes, serão digitados:

```
Preço unitário: 53
Quantidade: 3
Forma de pagamento: cartao
```

# ⭐ SUA TAREFA!

Complete o arquivo `index.js`:

1. `calcularSubtotal` multiplica preço por quantidade.
2. `calcularFrete` devolve `0` se o subtotal for maior ou igual a 100, senão `10`.
3. `calcularDesconto` usa `switch` para achar o percentual (`pix`/`dinheiro` = 5%, `cartao` = 0%).
4. `calcularTotal` chama as três funções e devolve `subtotal - desconto + frete`.

# 🧪 Como executar

```
npm install
node index.js
npm test
```

`node index.js` roda o programa e pede os dados. `npm test` roda os testes.
