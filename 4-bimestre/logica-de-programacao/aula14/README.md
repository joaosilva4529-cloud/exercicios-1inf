# 🎯 Aula 14 — ARROW FUNCTION, VARIÁVEIS E FUNÇÕES DENTRO DE FUNÇÕES

# 🎯 Objetivos da Aula

- Compreender a sintaxe da arrow function.
- Reescrever uma função comum como arrow function.
- Entender que variáveis criadas dentro de uma função não existem fora dela.
- Chamar uma função dentro de outra função.
- Usar arrow functions com valores digitados no terminal (`prompt-sync`).

# 🧩 O que é uma arrow function?

Arrow function é outra forma de escrever uma função, usando `=>`.

Função comum:

```jsx
function somar(a, b) {
  return a + b
}
```

A mesma função, como arrow function:

```jsx
const somar = (a, b) => {
  return a + b
}
```

As duas se comportam da mesma forma:

```jsx
console.log(somar(2, 3))
```

Resultado:

```
5
```

# 🧠 Forma ainda mais curta

Quando a função tem **apenas um `return`**, podemos remover as chaves `{ }` e a palavra `return`:

```jsx
const somar = (a, b) => a + b
```

```jsx
console.log(somar(2, 3))
```

Resultado:

```
5
```

O JavaScript entende que tudo depois do `=>` já é o valor a ser devolvido.

# 🔀 Arrow function com um parâmetro

Com apenas um parâmetro, os parênteses são opcionais:

```jsx
const dobro = (numero) => numero * 2
```

ou:

```jsx
const dobro = numero => numero * 2
```

```jsx
console.log(dobro(4))
```

Resultado:

```
8
```

# 💼 Exemplo — Calculando desconto com arrow function

```jsx
const calcularDesconto = (valorCompra) => {
  if (valorCompra >= 100) {
    return valorCompra * 0.1
  }

  return 0
}

console.log(calcularDesconto(150))
```

Resultado:

```
15
```

# 🧩 Variáveis dentro de funções

Uma variável criada **dentro** de uma função só existe dentro dela.

```jsx
function calcularTotal(preco, quantidade) {
  const total = preco * quantidade
  return total
}

console.log(calcularTotal(10, 3))
console.log(total)
```

A primeira linha funciona normalmente. A segunda gera um erro, porque `total` não existe fora da função — ela foi criada e destruída dentro de `calcularTotal`.

# 🧠 Por que isso é útil?

Cada função tem seu próprio "espaço" de variáveis. Isso evita que uma variável de uma função interfira em outra:

```jsx
function calcularTotalPedidoA() {
  const total = 100
  return total
}

function calcularTotalPedidoB() {
  const total = 250
  return total
}

console.log(calcularTotalPedidoA())
console.log(calcularTotalPedidoB())
```

Resultado:

```
100
250
```

Mesmo as duas funções usando uma variável chamada `total`, elas não se misturam.

# 🔀 Função dentro de função

Uma função pode chamar outra função dentro dela.

```jsx
const calcularSubtotal = (preco, quantidade) => preco * quantidade

const calcularTotalComFrete = (preco, quantidade, frete) => {
  const subtotal = calcularSubtotal(preco, quantidade)
  return subtotal + frete
}

console.log(calcularTotalComFrete(10, 3, 5))
```

Passo a passo:

```
calcularSubtotal(10, 3) → 30
calcularTotalComFrete  → 30 + 5 = 35
```

Resultado:

```
35
```

# 💼 Exemplo — Combinando funções

```jsx
const calcularDesconto = (valorCompra) =>
  valorCompra >= 100 ? valorCompra * 0.1 : 0

const calcularTotalFinal = (valorCompra) => {
  const desconto = calcularDesconto(valorCompra)
  return valorCompra - desconto
}

console.log(calcularTotalFinal(200))
```

Passo a passo:

```
calcularDesconto(200)   → 20
calcularTotalFinal(200) → 200 - 20 = 180
```

Resultado:

```
180
```

# ⌨️ Arrow functions com dados digitados

O `prompt-sync` continua sendo usado **fora** das funções: lemos os valores no terminal e os entregamos como argumentos.

```jsx
const prompt = require("prompt-sync")()

const calcularSubtotal = (preco, quantidade) => preco * quantidade

const calcularTotalComFrete = (preco, quantidade, frete) => {
  const subtotal = calcularSubtotal(preco, quantidade)
  return subtotal + frete
}

const preco = Number(prompt("Preço do produto: "))
const quantidade = Number(prompt("Quantidade: "))
const frete = Number(prompt("Valor do frete: "))

const total = calcularTotalComFrete(preco, quantidade, frete)

console.log("Total:", total)
```

Executando:

```
Preço do produto: 10
Quantidade: 3
Valor do frete: 5
Total: 35
```

Lembre-se do escopo: as constantes `preco`, `quantidade` e `frete` criadas fora das funções são **diferentes** dos parâmetros de mesmo nome dentro delas. Cada função enxerga apenas os valores que recebeu.

# 🧠 Pensando como desenvolvedor

Dividir um problema em **funções menores**, cada uma resolvendo uma parte, e depois **chamar uma função dentro da outra**, deixa o código mais fácil de entender e de testar.

Fim da aula!

_

# 🧩 Exercício Rápido

Uma lanchonete quer calcular o total de um pedido, já com o frete incluído. Os dados são **digitados no terminal**.

Crie duas arrow functions:

```jsx
const calcularSubtotal = (preco, quantidade) => { ... }
const calcularTotalComFrete = (preco, quantidade, frete) => { ... }
```

`calcularSubtotal` deve multiplicar `preco` por `quantidade`.

`calcularTotalComFrete` deve **chamar `calcularSubtotal` internamente** e somar o `frete` ao resultado.

Depois, leia **nesta ordem** o `preco`, a `quantidade` e o `frete` (convertendo com `Number`) e chame:

```jsx
const total = calcularTotalComFrete(preco, quantidade, frete)
```

Exemplo no terminal:

```
Preço do produto: 20
Quantidade: 2
Valor do frete: 5
```

A variável `total` deverá terminar com o valor:

```
45
```

Crie o arquivo `index.js`, teste com `node index.js` e exporte a variável `total` (`module.exports = total`) para que os testes funcionem e o GitHub Actions execute a correção.
