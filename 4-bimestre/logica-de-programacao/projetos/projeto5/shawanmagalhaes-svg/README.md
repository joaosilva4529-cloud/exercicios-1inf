# 🚀 PROJETO 5 — CONTROLE DE PRODUÇÃO DE LIVROS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento que presta serviços de tecnologia para empresas da região.

Uma fábrica de livros contratou o time para desenvolver um sistema que **acompanha a produção de um turno**.

Durante a reunião, o supervisor explicou:

> "Cada turno começa com uma certa quantidade de livros já prontas do turno anterior. O sistema precisa contar quantas livros ainda serão produzidas até bater a meta, descobrir quantas caixas serão necessárias para embalar tudo, e informar se a meta do turno foi atingida."
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
- Faça as perguntas **exatamente na ordem do RF01**: os testes automáticos "digitam" as respostas nessa ordem.
- O `prompt-sync` já está no `package.json`. Rode `npm install` uma vez e teste seu programa no terminal com `node index.js`.
- Os testes digitam os valores do cenário principal **e também os de um cenário extra** (veja mais abaixo). Se você deixar valores fixos no código, o cenário extra vai falhar.

## RF01 — Registro do turno

O sistema deve **ler pelo terminal** (com `prompt-sync`), nesta ordem, os dados do turno:

- nome do turno;
- meta de produção;
- produção inicial;
- quantidade de itens que cabem em uma caixa.

Para os testes, serão digitados no terminal, nesta ordem, os valores do cenário principal (a meta, a produção inicial e os itens por caixa são números; o nome do turno é texto):

```
Turno: Turno Express
Meta: 15
Produção inicial: 6
Itens por caixa: 3
```

## RF02 — Produção até a meta

O sistema deve descobrir quantas unidades serão produzidas **até atingir a meta**, partindo da produção inicial.

**Utilize obrigatoriamente o `while`**: a cada repetição, a produção aumenta em `1`, até que a produção seja igual à meta.

Para o cenário principal:

```
Produção inicial: 6
Meta: 15

Resultado esperado: 15
```

## RF03 — Caixas necessárias para embalar

O sistema deve descobrir quantas caixas serão usadas para embalar toda a produção do turno (RF02).

**Utilize obrigatoriamente o `do...while`**: o sistema precisa verificar pelo menos uma caixa, mesmo que a produção seja pequena. A cada repetição, uma caixa é preenchida com a quantidade de itens por caixa, até que não sobre nenhum item para embalar.

Para o cenário principal:

```
Produção: 15
Itens por caixa: 3

Resultado esperado: 5
```

## RF04 — Situação da meta

O sistema deve informar a situação da meta do turno, **usando o operador ternário** (`? :`).

Regra: se a produção (RF02) for maior ou igual à meta, a situação é `"Meta atingida"`. Caso contrário, `"Meta não atingida"`.

Para o cenário principal:

```
Resultado esperado: Meta atingida
```

## RF05 — Resumo do turno

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo: nome do turno, produção final, quantidade de caixas necessárias e a situação da meta.

O formato visual da apresentação fica a critério do desenvolvedor.

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, lendo os dados com o `prompt-sync` (para conferir, digite no terminal os valores do cenário principal do RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}
```

# 🧪 CENÁRIO EXTRA (também digitado pelos testes automáticos)

Além do cenário principal, os testes executam o seu programa mais uma vez, com outros valores digitados:

```
Turno: Turno Noite
Meta: 6
Produção inicial: 6
Itens por caixa: 4
```

Resultado esperado: produção final `6` (o `while` nem chega a repetir, pois a produção já está na meta), `2` caixas e a situação `Meta atingida`.

# ▶️ Como executar

Dentro da pasta do projeto:

```
npm install      # instala o prompt-sync e o jest (só na primeira vez)
node index.js    # roda o programa e pede os dados no terminal
npm test         # roda os testes automáticos
```

# 📂 Estrutura do projeto

```
projeto5
 ┣ test
 ┃ ┗ index.test.js
 ┣ index.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

Boas práticas! 🤙
