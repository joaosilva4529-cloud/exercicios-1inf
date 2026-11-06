# 🚀 PROJETO 8 — CALCULADORA DE PEDIDOS DE UMA TAPIOCARIA

# 🎯 PROBLEMA

Você continua fazendo parte da equipe de desenvolvimento que presta serviços de tecnologia para empresas da região.

Uma tapiocaria com serviço de entrega contratou o time para organizar o **cálculo dos pedidos** em funções reutilizáveis.

Durante a reunião, a gerente explicou:

> "Hoje calculamos tudo misturado num monte de código solto. Quero que cada cálculo — subtotal, frete e desconto — vire uma função separada, e que o total final seja calculado chamando essas funções."
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

## RF01 — Registro do pedido

O sistema deve **ler pelo terminal** (com `prompt-sync`), nesta ordem, os dados do pedido: preço de uma unidade do produto escolhido, quantidade de unidades e forma de pagamento (`pix`, `cartao` ou `dinheiro`).

Para os testes, serão digitados no terminal, nesta ordem, os valores do cenário principal (preço e quantidade são números; a forma de pagamento é texto):

```
Preço unitário: 14
Quantidade: 5
Forma de pagamento: dinheiro
```

## RF02 — Função para calcular o subtotal

Crie uma **arrow function** chamada `calcularSubtotal`, que recebe `preco` e `quantidade`, e devolve o subtotal:

```
subtotal = preco × quantidade
```

Para o cenário principal:

```
calcularSubtotal(14, 5) → 70
```

## RF03 — Função para calcular o frete

Crie uma função chamada `calcularFrete`, que recebe o `subtotal` e devolve o valor do frete, **usando retorno condicional**.

Regra: pedidos com subtotal maior ou igual a `100` têm frete grátis (`0`). Os demais pagam `10` de frete.

Para o cenário principal:

```
calcularFrete(70) → 10
```

## RF04 — Função para calcular o desconto

Crie uma função chamada `calcularDesconto`, que recebe o `subtotal` e a `formaPagamento`, e devolve o valor do desconto.

Regra (**use `switch` dentro da função** para descobrir o percentual):

```
pix ou dinheiro → 5% de desconto
cartao          → 0% de desconto
```

```
desconto = subtotal × percentual / 100
```

Para o cenário principal:

```
calcularDesconto(70, "dinheiro") → 3.5
```

## RF05 — Função para calcular o total (função dentro de função)

Crie uma função chamada `calcularTotal`, que recebe `preco`, `quantidade` e `formaPagamento`, e **chama internamente** `calcularSubtotal`, `calcularFrete` e `calcularDesconto` para calcular:

```
total = subtotal - desconto + frete
```

Para o cenário principal:

```
calcularTotal(14, 5, "dinheiro") → 76.5
```

## RF06 — Resumo do pedido

O sistema deve gerar, utilizando **template string**, um resumo contendo: o subtotal, o frete, o desconto e o total do pedido.

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, lendo os dados com o `prompt-sync` (para conferir, digite no terminal os valores do cenário principal do RF01) para calcular o resultado final com `calcularTotal`.

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}
```

# 🧪 CENÁRIO EXTRA (também digitado pelos testes automáticos)

Além do cenário principal, os testes executam o seu programa mais duas vezes, com outros valores digitados:

```
Preço unitário: 30
Quantidade: 2
Forma de pagamento: dinheiro
```

```
Subtotal: 60
Frete: 10
Desconto: 3
Total: 67
```

```
Preço unitário: 50
Quantidade: 4
Forma de pagamento: cartao
```

```
Subtotal: 200
Frete: 0
Desconto: 0
Total: 200
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
projeto8
 ┣ test
 ┃ ┗ index.test.js
 ┣ index.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

Boas práticas! 🤙
