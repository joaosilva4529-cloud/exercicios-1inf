# 🎯 Aula 9 — ARRAYS: OPERAÇÕES BÁSICAS, LOOP, ORDENAÇÃO E ITERAÇÃO

# 🎯 Objetivos da Aula

- Revisar o que é um array.
- Realizar operações básicas (acessar, adicionar, remover).
- Percorrer um array com loop.
- Ordenar um array com `.sort()`.
- Iterar um array com `.forEach()`.
- Montar um array com valores digitados no terminal (`prompt-sync` + `push`).

# 🧩 O que é um array?

Um array é uma lista de valores, guardados numa única variável.

```jsx
const frutas = ["maçã", "banana", "uva"]
```

Cada valor tem uma posição, chamada de **índice**, começando em `0`.

```
frutas[0] → "maçã"
frutas[1] → "banana"
frutas[2] → "uva"
```

# 🧠 Operações básicas

**Acessar um valor:**

```jsx
console.log(frutas[1])
```

Resultado:

```
banana
```

**Saber o tamanho:**

```jsx
console.log(frutas.length)
```

Resultado:

```
3
```

**Adicionar um valor ao final:**

```jsx
frutas.push("pera")
```

```
["maçã", "banana", "uva", "pera"]
```

**Remover o último valor:**

```jsx
frutas.pop()
```

```
["maçã", "banana", "uva"]
```

# ⌨️ Montando um array com dados digitados

Na aula de `for` vimos que o `prompt-sync` entrega **texto** e que o `push` adiciona valores ao final do array. Juntando as duas ideias, montamos listas com dados do terminal:

```jsx
const prompt = require("prompt-sync")()

const quantidade = Number(prompt("Quantos preços? "))

const precos = []

for (let i = 1; i <= quantidade; i++) {
  const preco = Number(prompt(`Preço ${i}: `))
  precos.push(preco)
}

console.log(precos)
```

Executando:

```
Quantos preços? 3
Preço 1: 10
Preço 2: 25
Preço 3: 8
[ 10, 25, 8 ]
```

Sem o `Number(...)`, o array ficaria com textos (`["10", "25", "8"]`) e contas e comparações dariam resultados estranhos — inclusive o `.sort()`, que compararia como texto.

A partir daqui, **todos os exemplos de array funcionam do mesmo jeito** com a lista vinda do terminal: o `for`, o `.sort()` e o `.forEach()` não sabem (nem precisam saber) de onde os valores vieram.

# 🔁 Percorrendo um array com `for`

```jsx
const precos = [10, 25, 8]

for (let i = 0; i < precos.length; i++) {
  console.log(precos[i])
}
```

Resultado:

```
10
25
8
```

# 💼 Exemplo — Somando valores de um array

```jsx
const precos = [10, 25, 8]

let total = 0

for (let i = 0; i < precos.length; i++) {
  total = total + precos[i]
}

console.log(total)
```

Resultado:

```
43
```

# 🔀 Ordenando um array com `.sort()`

```jsx
const numeros = [5, 1, 4, 2]

numeros.sort((a, b) => a - b)

console.log(numeros)
```

Resultado:

```
[1, 2, 4, 5]
```

A função `(a, b) => a - b` diz ao `.sort()` para organizar do **menor para o maior**. Para organizar do maior para o menor, basta inverter:

```jsx
numeros.sort((a, b) => b - a)
```

Resultado:

```
[5, 4, 2, 1]
```

# 🧩 Iterando com `.forEach()`

O `.forEach()` é outra forma de percorrer um array, executando uma função para cada valor.

```jsx
const precos = [10, 25, 8]

precos.forEach((preco) => {
  console.log(preco)
})
```

Resultado:

```
10
25
8
```

# 🧠 `for` x `.forEach()`

Os dois percorrem o array, mas de formas diferentes:

```
for      → você controla o índice manualmente
forEach  → o próprio array entrega cada valor, um por vez
```

Com `.forEach()`, também é possível acumular um valor, usando uma variável de fora:

```jsx
const precos = [10, 25, 8]

let total = 0

precos.forEach((preco) => {
  total = total + preco
})

console.log(total)
```

Resultado:

```
43
```

# 💼 Exemplo — Maior valor de uma lista

Aqui as vendas são digitadas no terminal:

```jsx
const prompt = require("prompt-sync")()

const quantidade = Number(prompt("Quantas vendas? "))
const vendas = []

for (let i = 1; i <= quantidade; i++) {
  vendas.push(Number(prompt(`Venda ${i}: `)))
}

let maiorVenda = vendas[0]

for (let i = 0; i < vendas.length; i++) {
  if (vendas[i] > maiorVenda) {
    maiorVenda = vendas[i]
  }
}

console.log(maiorVenda)
```

Executando:

```
Quantas vendas? 5
Venda 1: 120
Venda 2: 340
Venda 3: 90
Venda 4: 500
Venda 5: 210
500
```

Fim da aula!

_

# 🧩 Exercício Rápido

Uma loja quer saber qual foi o **menor valor de venda** registrado na semana. As vendas são **digitadas no terminal**.

1. Pergunte quantas vendas serão registradas.
2. Com um `for`, pergunte cada venda (convertendo com `Number`) e guarde no array:

```jsx
const vendasDaSemana = []
```

3. Percorra o array com `for` (ou `.forEach()`) e descubra o menor valor:

```jsx
let menorVenda = vendasDaSemana[0]
```

Exemplo no terminal:

```
Quantas vendas? 5
Venda 1: 320
Venda 2: 150
Venda 3: 480
Venda 4: 90
Venda 5: 260
```

A variável `menorVenda` deverá terminar com o valor:

```
90
```

Crie o arquivo `index.js`, teste com `node index.js` e exporte a variável `menorVenda` (`module.exports = menorVenda`) para que os testes funcionem e o GitHub Actions execute a correção.
