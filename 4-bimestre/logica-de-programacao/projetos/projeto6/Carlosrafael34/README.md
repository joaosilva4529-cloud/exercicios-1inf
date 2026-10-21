# 🚀 PROJETO 6 — RELATÓRIO DE VENDAS DE UMA CAFETERIA

# 🎯 PROBLEMA

Você continua fazendo parte da equipe de desenvolvimento que presta serviços de tecnologia para empresas da região.

Uma cafeteria contratou o time para desenvolver um **relatório simples das vendas da semana**.

Durante a reunião, a gerente explicou:

> "Todos os dias eu anoto o valor vendido. No fim da semana, preciso saber o total vendido, a média por dia, quantos dias bateram a meta diária, qual foi o melhor dia e se batemos a meta da semana."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## ⌨️ Dados digitados no terminal (`prompt-sync`)

Neste projeto os dados **não ficam mais fixos dentro do código**. O programa deve **perguntar cada valor no terminal** com o `prompt-sync`, como vimos nas aulas:

```jsx
const prompt = require("prompt-sync")()

const exemplo = prompt("Digite algo: ")
```

- O `prompt` devolve sempre **texto**. Use `Number(prompt(...))` nos valores numéricos.
- Faça as perguntas **exatamente na ordem do RF01 e do RF02**: os testes automáticos "digitam" as respostas nessa ordem.
- O `prompt-sync` já está no `package.json`. Rode `npm install` uma vez e teste seu programa no terminal com `node index.js`.
- Os testes digitam os valores do cenário principal **e também os de um cenário extra** (veja mais abaixo). Se você deixar valores fixos no código, o cenário extra vai falhar.

## RF01 — Dados da semana

O sistema deve **ler pelo terminal** (com `prompt-sync`), nesta ordem:

1. a quantidade de dias da semana que serão registrados;
2. a meta de vendas diária;
3. a meta de vendas da semana.

Todos os valores são números: use `Number`.

Para os testes, serão digitados no terminal, nesta ordem, os valores do cenário principal:

```
Quantidade de dias: 5
Meta diária: 150
Meta semanal: 1000
```

Isso resulta em:

```
quantidadeDeDias = 5
metaDiaria = 150
metaSemanal = 1000
```

## RF02 — Total vendido na semana

Logo depois do RF01, o sistema deve usar **um `for`** de `1` até a quantidade de dias. A cada repetição, pergunte a venda daquele dia (`Venda do dia 1: `, `Venda do dia 2: `, ...) e some o valor ao total vendido.

Para o cenário principal, serão digitados depois das metas:

```
Venda do dia 1: 230
Venda do dia 2: 95
Venda do dia 3: 260
Venda do dia 4: 110
Venda do dia 5: 300
```

```
230 + 95 + 260 + 110 + 300 = 995
```

## RF03 — Média de vendas por dia

O sistema deve calcular a média de vendas por dia:

```
media = total vendido / quantidade de dias
```

Para o cenário principal:

```
995 / 5 = 199
```

## RF04 — Dias acima da meta diária

O sistema deve contar quantos dias tiveram venda **maior ou igual** à meta diária, **usando `if` dentro do mesmo `for` do RF02**.

Para o cenário principal:

```
230 → conta
95  → não conta
260 → conta
110 → não conta
300 → conta

Resultado esperado: 3
```

## RF05 — Melhor dia de vendas

O sistema deve descobrir o maior valor vendido na semana, **usando `if` dentro do mesmo `for` do RF02**.

Dica: comece com `melhorDia = 0` e, a cada dia, troque o valor se a venda do dia for maior.

Para o cenário principal:

```
Resultado esperado: 300
```

## RF06 — Situação da semana e resumo

O sistema deve informar a situação da semana, **usando o operador ternário**: se o total vendido (RF02) for maior ou igual à meta semanal, a situação é `"Meta semanal atingida"`; caso contrário, `"Meta semanal não atingida"`.

Depois, deve gerar, utilizando **template string**, um resumo contendo: total vendido, média diária, quantidade de dias acima da meta, melhor dia de vendas e a situação da semana.

Para o cenário principal:

```
Resultado esperado: Meta semanal não atingida
```

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, lendo os dados com o `prompt-sync` (para conferir, digite no terminal os valores do cenário principal).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}
```

# 🧪 CENÁRIO EXTRA (também digitado pelos testes automáticos)

Além do cenário principal, os testes executam o seu programa mais uma vez, com outros valores digitados:

```
Quantidade de dias: 5
Meta diária: 200
Meta semanal: 800
Venda do dia 1: 150
Venda do dia 2: 200
Venda do dia 3: 250
Venda do dia 4: 100
Venda do dia 5: 50
```

Resultado esperado:

```
Total: 750
Média: 150
Dias acima da meta: 2
Melhor dia: 250
Meta semanal não atingida
```

# ▶️ Como executar

Dentro da pasta do projeto:

```
npm install      # instala o prompt-sync e o jest (só na primeira vez)
node index.js    # roda o programa e pede os dados no terminal
npm test         # roda os testes automáticos
```

# 📂 Estrutura do projeto

```
projeto6
 ┣ test
 ┃ ┗ index.test.js
 ┣ index.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

Boas práticas! 🤙
