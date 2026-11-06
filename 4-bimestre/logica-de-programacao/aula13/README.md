# 🎯 Aula 13 — COMO USAR UMA FUNÇÃO, PARÂMETROS E RETORNO CONDICIONAL

# 🎯 Objetivos da Aula

- Compreender o que é uma função.
- Criar e chamar uma função.
- Passar parâmetros para uma função.
- Utilizar o `return` para devolver um valor.
- Utilizar retorno condicional dentro de uma função.
- Chamar uma função usando valores digitados no terminal (`prompt-sync`).

# 🧩 O que é uma função?

Uma função é um bloco de código que podemos **reutilizar**, sempre que precisarmos repetir a mesma lógica.

```jsx
function saudacao() {
  console.log("Olá!")
}

saudacao()
saudacao()
```

Resultado:

```
Olá!
Olá!
```

# 🧠 Parâmetros

Uma função pode receber valores, chamados de **parâmetros**, para trabalhar com dados diferentes a cada chamada.

```jsx
function saudacao(nome) {
  console.log(`Olá, ${nome}`)
}

saudacao("Marina")
saudacao("João")
```

Resultado:

```
Olá, Marina
Olá, João
```

# 🔀 O `return`

Até agora, as funções só imprimiam algo na tela. Mas, na maioria das vezes, queremos que a função **devolva um valor**, para usarmos em outro lugar do código.

```jsx
function somar(a, b) {
  return a + b
}

const resultado = somar(2, 3)

console.log(resultado)
```

Resultado:

```
5
```

Quando o JavaScript encontra um `return`, a função **para** e devolve aquele valor.

# 🧩 Vários parâmetros

```jsx
function calcularTotal(preco, quantidade) {
  return preco * quantidade
}

const total = calcularTotal(10, 3)

console.log(total)
```

Resultado:

```
30
```

# 💼 Exemplo — Verificando aprovação

```jsx
function verificarAprovacao(nota) {
  if (nota >= 7) {
    return "Aprovado"
  } else {
    return "Reprovado"
  }
}

console.log(verificarAprovacao(8))
console.log(verificarAprovacao(5))
```

Resultado:

```
Aprovado
Reprovado
```

# 🧠 Retorno condicional

Uma função pode ter **mais de um `return`**, cada um dentro de uma condição diferente. O JavaScript para na primeira condição verdadeira e devolve aquele valor.

```jsx
function classificarEstoque(quantidade) {
  if (quantidade === 0) {
    return "Sem estoque"
  }

  if (quantidade < 10) {
    return "Estoque baixo"
  }

  return "Estoque normal"
}

console.log(classificarEstoque(0))
console.log(classificarEstoque(5))
console.log(classificarEstoque(50))
```

Resultado:

```
Sem estoque
Estoque baixo
Estoque normal
```

# ⚠️ O código depois do `return` não executa

```jsx
function exemplo() {
  return "Primeiro"
  console.log("Isso nunca será impresso")
}

console.log(exemplo())
```

Resultado:

```
Primeiro
```

A linha depois do `return` nunca roda, porque a função já terminou.

# 💼 Exemplo — Calculando desconto

```jsx
function calcularDesconto(valorCompra) {
  if (valorCompra >= 100) {
    return valorCompra * 0.1
  }

  return 0
}

console.log(calcularDesconto(150))
console.log(calcularDesconto(50))
```

Resultado:

```
15
0
```

# ⌨️ Funções com dados digitados

O `prompt-sync` e as funções combinam muito bem: **o programa lê os dados no terminal e os passa como argumentos** para a função.

```jsx
const prompt = require("prompt-sync")()

function verificarAprovacao(nota) {
  if (nota >= 7) {
    return "Aprovado"
  }

  return "Reprovado"
}

const nota = Number(prompt("Digite a nota: "))

const situacao = verificarAprovacao(nota)

console.log(situacao)
```

Executando:

```
Digite a nota: 8
Aprovado
```

Repare na divisão de responsabilidades:

```
- quem LÊ o dado é o código fora da função (prompt + Number);
- quem DECIDE é a função, que recebe o valor por parâmetro e usa return.
```

Assim a mesma função funciona com qualquer valor, venha do terminal ou de outro lugar. Evite colocar o `prompt` dentro da função de cálculo: uma função que só recebe parâmetros e devolve um resultado é mais fácil de reaproveitar e de testar.

# 🧠 Pensando como desenvolvedor

Quando um problema pede **o mesmo cálculo repetido com dados diferentes**, geralmente a solução é criar uma função com parâmetros, e usar `return` para devolver o resultado, em vez de só imprimir com `console.log`.

Fim da aula!

_

# 🧩 Exercício Rápido

Uma lanchonete quer calcular o valor do frete de um pedido. O subtotal é **digitado no terminal**.

Crie uma função chamada `calcularFrete`, que recebe um parâmetro `subtotal`.

Regra:

> Pedidos com `subtotal` maior ou igual a `80` têm frete grátis (`0`). Os demais pagam `10` de frete.
>

Utilize retorno condicional (`if`/`return`) dentro da função.

Depois, leia o subtotal no terminal e chame a função:

```jsx
const prompt = require("prompt-sync")()

const subtotal = Number(prompt("Subtotal do pedido: "))
const frete = calcularFrete(subtotal)
```

Exemplo no terminal:

```
Subtotal do pedido: 50
```

A variável `frete` deverá terminar com o valor:

```
10
```

Se o usuário digitar `120`, `frete` deverá terminar com `0`.

Crie o arquivo `index.js`, teste com `node index.js` e exporte a variável `frete` (`module.exports = frete`) para que os testes funcionem e o GitHub Actions execute a correção.
