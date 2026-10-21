# 🎯 Aula 5 — O LOOP `FOR`

# 🎯 Objetivos da Aula

- Compreender o funcionamento do loop `for`.
- Entender as três partes do `for` (inicialização, condição, incremento).
- Perceber a diferença entre `for` e `while`.
- Utilizar o `for` para contar e acumular valores.
- Usar um valor digitado (`prompt-sync`) como limite do `for`.
- Fazer perguntas **dentro** do `for`, uma a cada repetição.

# 🧩 O que é o `for`?

O `for` é outra estrutura de repetição, assim como o `while` e o `do...while`.

A diferença é que o `for` organiza, numa única linha, as três partes que controlam o loop:

```jsx
for (inicializacao; condicao; incremento) {
  // código repetido
}
```

# 🧠 As três partes do `for`

```jsx
for (let contador = 1; contador <= 5; contador = contador + 1) {
  console.log(contador)
}
```

```
inicialização → let contador = 1       (roda uma vez, no início)
condição      → contador <= 5          (verificada antes de cada repetição)
incremento    → contador = contador + 1 (roda depois de cada repetição)
```

Resultado:

```
1
2
3
4
5
```

# 🔀 Comparando `for` com `while`

Com `while`:

```jsx
let contador = 1

while (contador <= 5) {
  console.log(contador)
  contador = contador + 1
}
```

Com `for`:

```jsx
for (let contador = 1; contador <= 5; contador = contador + 1) {
  console.log(contador)
}
```

Os dois produzem o mesmo resultado. O `for` apenas organiza as três partes (início, condição, incremento) num só lugar, o que ajuda a não esquecer nenhuma delas.

# 🧩 Incremento mais curto

É comum escrever o incremento de forma mais curta:

```jsx
contador = contador + 1
```

pode ser escrito como:

```jsx
contador++
```

```jsx
for (let contador = 1; contador <= 5; contador++) {
  console.log(contador)
}
```

O resultado é o mesmo.

# 💼 Exemplo — Soma de valores

```jsx
let soma = 0

for (let numero = 1; numero <= 4; numero++) {
  soma = soma + numero
}

console.log(soma)
```

Passo a passo:

```
numero = 1 → soma = 0 + 1 = 1
numero = 2 → soma = 1 + 2 = 3
numero = 3 → soma = 3 + 3 = 6
numero = 4 → soma = 6 + 4 = 10
numero = 5 → condição falsa, loop encerra
```

Resultado:

```
10
```

# 💼 Exemplo — Contagem de peças

Uma fábrica quer saber quantas peças são produzidas em 6 repetições de linha de produção, somando `2` peças a cada repetição.

```jsx
let pecas = 0

for (let i = 1; i <= 6; i++) {
  pecas = pecas + 2
}

console.log(pecas)
```

Resultado:

```
12
```

# ⌨️ `for` com dados digitados

Como já sabemos o `prompt-sync`, o limite do `for` pode vir do terminal. Lembrete: o `prompt` devolve **texto**, então use `Number()` quando for usar como número.

```jsx
const prompt = require("prompt-sync")()

const quantidade = Number(prompt("Quantas vezes repetir? "))

for (let i = 1; i <= quantidade; i++) {
  console.log("Repetição", i)
}
```

Digitando `3`:

```
Quantas vezes repetir? 3
Repetição 1
Repetição 2
Repetição 3
```

# ⌨️ Perguntando dentro do `for`

Podemos fazer uma pergunta a **cada repetição** do `for`. Assim, o usuário informa um valor por vez e o programa vai acumulando:

```jsx
const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias de venda? "))

let total = 0

for (let dia = 1; dia <= dias; dia++) {
  const venda = Number(prompt(`Venda do dia ${dia}: `))
  total = total + venda
}

console.log(total)
```

Executando com 3 dias:

```
Quantos dias de venda? 3
Venda do dia 1: 100
Venda do dia 2: 50
Venda do dia 3: 70
220
```

Repare em dois detalhes:

```
- a variável `venda` é criada DENTRO do for, uma nova a cada repetição;
- a variável `total` é criada FORA do for, para guardar o resultado depois que o loop terminar.
```

# ⚠️ Cuidado com o incremento

Assim como no `while`, se a variável do `for` não for alterada corretamente, o loop pode nunca parar (ou parar antes do esperado).

Errado:

```jsx
for (let contador = 1; contador <= 5;) {
  console.log(contador)
}
```

Aqui não existe incremento — a condição nunca muda, e o loop roda para sempre.

Correto:

```jsx
for (let contador = 1; contador <= 5; contador++) {
  console.log(contador)
}
```

# 🧠 Quando usar `for` em vez de `while`?

Use `for` quando você já sabe, de antemão, **quantas vezes** (ou em que intervalo) o loop deve repetir.

Use `while` ou `do...while` quando a repetição depende de uma condição que não está ligada a contar de um número até outro.

Fim da aula!

_

# 🧩 Exercício Rápido

Uma fábrica quer somar a produção diária de uma linha de montagem. Os dados são **digitados no terminal**.

1. Pergunte quantos dias serão registrados e converta para número:

```jsx
const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias? "))
```

2. Utilize um `for` que percorra de `1` até `dias` (incluindo os dois). A cada repetição, pergunte a produção daquele dia (`prompt`, convertendo com `Number`) e some ao total:

```jsx
let totalProduzido = 0
```

Exemplo no terminal:

```
Quantos dias? 3
Produção do dia 1: 10
Produção do dia 2: 20
Produção do dia 3: 5
```

A variável `totalProduzido` deverá terminar com o valor:

```
35
```

Utilize obrigatoriamente o `for`.

Crie o arquivo `index.js`, teste com `node index.js` e exporte a variável `totalProduzido` (`module.exports = totalProduzido`) para que os testes funcionem e o GitHub Actions execute a correção.
