# 🚀 PROJETO 5 — CONTROLE DE PRODUÇÃO DE BOLOS

Uma fábrica de bolos quer saber quanto produziu e quantas caixas vai usar.

```
Turno: Turno B
Meta: 7
Produção inicial: 1
Peças por caixa: 3
```

# ⌨️ Dados digitados no terminal

Agora o programa **pergunta** os dados no terminal, usando o `prompt-sync` (já vem pronto no começo do `index.js`).

- O `prompt` devolve texto. Por isso os números usam `Number(prompt(...))`.
- Os testes digitam as respostas na mesma ordem das perguntas do arquivo. **Não mude a ordem das perguntas.**

Para os testes, serão digitados:

```
Turno: Turno B
Meta: 7
Produção inicial: 1
Peças por caixa: 3
```

# ⭐ SUA TAREFA!

Complete o arquivo `index.js`:

1. Use um `while` para a produção subir de 1 até 7.
2. Use um `do...while` para contar as caixas necessárias.
3. Use um ternário para dizer se a meta foi atingida.

# 🧪 Como executar

```
npm install
node index.js
npm test
```

`node index.js` roda o programa e pede os dados. `npm test` roda os testes.
