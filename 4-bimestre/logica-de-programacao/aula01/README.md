# 🎯 Aula 1 — O LOOP `WHILE`

# 🎯 Objetivos da Aula

- Compreender o funcionamento do loop `while`.
- Entender o que é uma condição de parada.
- Perceber a diferença entre `while` e o `if`.
- Utilizar o `while` para repetir uma ação várias vezes.
- Evitar um loop infinito.
- **Novidade:** receber dados digitados no terminal com o `prompt-sync`.
- Converter o texto digitado em número com `Number()`.

# ⌨️ Novidade — Dados digitados no terminal com `prompt-sync`

Até o 3º bimestre, os dados ficavam **fixos** dentro do código:

```jsx
let meta = 10
```

Se quiséssemos trocar a meta, tínhamos que **editar o código**. A partir de agora o programa vai **perguntar** o valor para quem estiver usando, direto no terminal. Assim o mesmo código serve para qualquer valor — os dados passam a ser **dinâmicos**.

Para isso usamos o **`prompt-sync`**, uma biblioteca (um pacote do npm) que pausa o programa, mostra uma pergunta e espera a pessoa digitar e apertar `Enter`.

## 1️⃣ Instalando

Os exercícios e projetos já trazem o `prompt-sync` no `package.json`, então basta rodar, dentro da pasta:

```
npm install
```

Se você criar um projeto do zero, instale assim:

```
npm install prompt-sync
```

## 2️⃣ Usando no código

```jsx
const prompt = require("prompt-sync")()

const nome = prompt("Qual é o seu nome? ")

console.log(`Olá, ${nome}`)
```

- `require("prompt-sync")()` — carrega a biblioteca e devolve a função `prompt`. Repare nos **dois parênteses** no final.
- `prompt("texto")` — mostra o texto no terminal, espera a pessoa digitar e **devolve o que foi digitado**.
- Guarde sempre o resultado em uma variável, senão o valor digitado se perde.

## 3️⃣ Executando no terminal

Salve o código em um arquivo `index.js` e rode:

```
node index.js
```

O terminal vai mostrar a pergunta e esperar:

```
Qual é o seu nome? Marina
Olá, Marina
```

(`Marina` é o que a pessoa digitou.)

## 4️⃣ ⚠️ O `prompt` sempre devolve texto

Mesmo que a pessoa digite `5`, o que chega no código é o **texto** `"5"`, e não o número `5`.

```jsx
const prompt = require("prompt-sync")()

const a = prompt("Primeiro valor: ")
const b = prompt("Segundo valor: ")

console.log(a + b)
```

Digitando `5` e `3`, o resultado é:

```
53
```

Isso acontece porque `"5" + "3"` **junta textos**. Para fazer conta, converta o texto em número com `Number()`:

```jsx
const a = Number(prompt("Primeiro valor: "))
const b = Number(prompt("Segundo valor: "))

console.log(a + b)
```

Agora, digitando `5` e `3`:

```
8
```

Regra prática:

```
Vai usar como NÚMERO (conta, comparação com < >)? → Number(prompt(...))
Vai usar como TEXTO (nome, forma de pagamento)?    → prompt(...) puro
```

## 5️⃣ Cancelando um programa travado

Se o programa ficar esperando ou entrar em loop infinito, aperte `Ctrl + C` no terminal para interromper.

## 6️⃣ E os testes (GitHub Actions)?

Nos testes automáticos ninguém digita nada: o teste **simula** o teclado, entregando as respostas ao seu `prompt` na ordem em que ele for chamado. Por isso:

- faça as perguntas **na ordem pedida** no enunciado;
- não troque o nome do pacote: use sempre `require("prompt-sync")()`.

# 🧩 O que é o `while`?

O `while` é uma estrutura de repetição.

Enquanto uma condição for `true`, o bloco de código dentro dele continua sendo executado.

```jsx
while (condicao) {
  // código repetido
}
```

Podemos ler:

```
ENQUANTO a condição for verdadeira
    repita o bloco
```

# 🧠 Diferença entre `if` e `while`

O `if` verifica a condição **uma única vez**.

```jsx
if (idade < 18) {
  console.log("Menor de idade")
}
```

O `while` verifica a condição **repetidas vezes**, enquanto ela continuar `true`.

```jsx
let idade = 15

while (idade < 18) {
  console.log(idade)
  idade = idade + 1
}
```

Cada vez que o bloco termina, o JavaScript volta e verifica a condição de novo.

# 🧩 Primeiro exemplo

```jsx
let contador = 1

while (contador <= 5) {
  console.log(contador)
  contador = contador + 1
}
```

Resultado:

```
1
2
3
4
5
```

# 🛑 A condição de parada

Toda variável usada na condição precisa ser **alterada dentro do loop**.

```jsx
let contador = 1

while (contador <= 5) {
  console.log(contador)
  contador = contador + 1
}
```

Se `contador` nunca mudasse, a condição `contador <= 5` seria sempre `true`.

Isso gera um **loop infinito** — o programa nunca para.

# ⚠️ Cuidado com o loop infinito

Errado:

```jsx
let contador = 1

while (contador <= 5) {
  console.log(contador)
}
```

Aqui `contador` nunca muda, então a condição nunca vira `false`.

Correto:

```jsx
let contador = 1

while (contador <= 5) {
  console.log(contador)
  contador = contador + 1
}
```

# 💼 Exemplo — Contagem de produtos em um estoque

Uma loja quer contar quantas unidades de um produto cabem em uma caixa, a partir de uma quantidade inicial.

```jsx
let quantidade = 0

while (quantidade < 10) {
  quantidade = quantidade + 1
}

console.log(quantidade)
```

Resultado:

```
10
```

# 💼 Exemplo — `while` com dados digitados

Agora a meta não é mais fixa: quem usa o programa é quem escolhe até onde contar.

```jsx
const prompt = require("prompt-sync")()

const meta = Number(prompt("Até qual número contar? "))

let contador = 1

while (contador <= meta) {
  console.log(contador)
  contador = contador + 1
}
```

Executando `node index.js` e digitando `3`:

```
Até qual número contar? 3
1
2
3
```

Se rodarmos de novo e digitarmos `5`, o mesmo código conta até `5` — sem mudar nenhuma linha.

# 💼 Exemplo — Soma acumulada

```jsx
let numero = 1
let soma = 0

while (numero <= 4) {
  soma = soma + numero
  numero = numero + 1
}

console.log(soma)
```

Pensando passo a passo:

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

# 🧠 Pensando como desenvolvedor

Antes de escrever um `while`, pergunte:

```
Qual é a condição que mantém o loop rodando?

O que precisa mudar a cada repetição
para que essa condição um dia se torne falsa?
```

Sem resposta para a segunda pergunta, o loop nunca termina.

Fim da aula!

_

# 🧩 Exercício Rápido

Uma fábrica quer saber quantas caixas são produzidas até atingir uma meta de produção, **informada pelo usuário no terminal**.

Utilize o `prompt-sync` para perguntar a meta e converta a resposta para número:

```jsx
const prompt = require("prompt-sync")()

const meta = Number(prompt("Meta de caixas: "))
```

Depois, utilize:

```jsx
let caixas = 0
```

A cada repetição do `while`, some `1` a `caixas`, até que `caixas` seja igual a `meta`.

Exemplo, digitando `6` no terminal:

```
Meta de caixas: 6
```

A variável `caixas` deverá terminar com o valor:

```
6
```

Se o usuário digitar `9`, `caixas` deverá terminar com `9`.

Utilize obrigatoriamente o `while`.

Crie o arquivo `index.js`, teste rodando `node index.js` no terminal e exporte a variável `caixas` (`module.exports = caixas`) para que os testes funcionem e o GitHub Actions execute a correção.
