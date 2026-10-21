# 🎯 Aula 6 — `FOR` COM `IF`: CONTANDO, SOMANDO E COMPARANDO

# 🎯 Objetivos da Aula

- Aprofundar o uso do `for` em intervalos maiores.
- Alterar o passo do `for` (`i += 2`) e contar de trás para frente.
- Combinar o `for` com um `if` dentro do bloco.
- Contar e somar apenas os valores que atendem a uma regra.
- Descobrir o maior valor de uma sequência de valores digitados.
- Perceber que o `if` dentro do `for` não interrompe a repetição.

# 🧩 Revisão rápida

Na aula anterior vimos a estrutura do `for`:

```jsx
for (let i = 1; i <= 5; i++) {
  console.log(i)
}
```

Agora vamos usar o `for` para resolver problemas um pouco mais completos, combinando-o com um `if` dentro do bloco.

# 🧩 Mudando o passo do `for`

O incremento não precisa ser sempre `+1`. Podemos pular de dois em dois:

```jsx
for (let i = 2; i <= 10; i += 2) {
  console.log(i)
}
```

Resultado:

```
2
4
6
8
10
```

`i += 2` é o mesmo que `i = i + 2`.

Também podemos contar de trás para frente:

```jsx
for (let i = 5; i >= 1; i--) {
  console.log(i)
}
```

Resultado:

```
5
4
3
2
1
```

Repare que, ao diminuir, a condição também muda: `i >= 1` em vez de `i <= 5`.

# 🧠 Combinando `for` com `if`

Imagine que queremos somar apenas os números **pares** de `1` até `6`:

```jsx
let somaPares = 0

for (let numero = 1; numero <= 6; numero++) {
  if (numero % 2 === 0) {
    somaPares = somaPares + numero
  }
}

console.log(somaPares)
```

Passo a passo:

```
1 → ímpar, ignora
2 → par, soma = 0 + 2 = 2
3 → ímpar, ignora
4 → par, soma = 2 + 4 = 6
5 → ímpar, ignora
6 → par, soma = 6 + 6 = 12
```

Resultado:

```
12
```

# ⌨️ `for` + `if` com dados digitados

Uma loja quer contar quantos dias de uma semana tiveram vendas **maiores ou iguais a 100**. O programa pergunta a venda de cada dia, **dentro do `for`**, e já decide ali mesmo se o dia conta:

```jsx
const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias de venda? "))

let diasComBoaVenda = 0

for (let dia = 1; dia <= dias; dia++) {
  const venda = Number(prompt(`Venda do dia ${dia}: `))

  if (venda >= 100) {
    diasComBoaVenda = diasComBoaVenda + 1
  }
}

console.log(diasComBoaVenda)
```

Executando com 3 dias:

```
Quantos dias de venda? 3
Venda do dia 1: 80
Venda do dia 2: 150
Venda do dia 3: 40
1
```

Passo a passo:

```
dia 1 → 80  → não conta
dia 2 → 150 → conta (1)
dia 3 → 40  → não conta
```

Repare que:

```
- `venda` é criada DENTRO do for: uma nova a cada repetição;
- `diasComBoaVenda` é criada FORA do for, para guardar o resultado depois que o loop terminar.
```

# 💼 Exemplo — Somando só alguns valores

Podemos usar o `if` para somar apenas as vendas que passam de um valor, e contar quantas foram:

```jsx
const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias? "))

let totalAcimaDe100 = 0
let quantidade = 0

for (let dia = 1; dia <= dias; dia++) {
  const venda = Number(prompt(`Venda do dia ${dia}: `))

  if (venda > 100) {
    totalAcimaDe100 = totalAcimaDe100 + venda
    quantidade = quantidade + 1
  }
}

console.log(totalAcimaDe100, quantidade)
```

Com as vendas `80`, `150` e `200`:

```
350 2
```

Um mesmo `if` pode atualizar mais de uma variável.

# 💼 Exemplo — Descobrindo o maior valor

Para achar o maior valor digitado, guardamos o maior encontrado até agora e comparamos a cada repetição:

```jsx
const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias? "))

let maiorVenda = 0

for (let dia = 1; dia <= dias; dia++) {
  const venda = Number(prompt(`Venda do dia ${dia}: `))

  if (venda > maiorVenda) {
    maiorVenda = venda
  }
}

console.log(maiorVenda)
```

Com as vendas `80`, `150` e `40`:

```
dia 1 → 80  > 0   → maiorVenda = 80
dia 2 → 150 > 80  → maiorVenda = 150
dia 3 → 40  > 150 → falso, mantém 150
```

Resultado:

```
150
```

> 📌 Começamos `maiorVenda` com `0` porque vendas nunca são negativas. Assim, qualquer venda digitada será maior ou igual a ele.

# ⚠️ Cuidado ao combinar `for` e `if`

O `if` dentro do `for` não interrompe a repetição — ele só decide se aquele passo específico conta ou não.

```jsx
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Chegou no 3")
  }
}
```

O `for` continua rodando até `i` chegar a `5`, mesmo depois de passar pelo `3`.

Outro cuidado: as variáveis que **acumulam** (`soma`, `contador`, `maior`) devem ser criadas **antes** do `for`. Se forem criadas dentro, voltam ao valor inicial a cada repetição.

# 🧠 Pensando como desenvolvedor

Quando um problema pede para **contar quantas vezes algo acontece**, **somar só alguns valores** ou **achar o maior valor**, geralmente a solução é:

```
1. Variáveis fora do for, guardando o resultado (contador, soma, maior)
2. Um for que repete uma vez para cada valor
3. Um if dentro dele, decidindo o que contar/somar/guardar
```

Fim da aula!

_

# 🧩 Exercício Rápido

Uma linha de produção registra a quantidade de peças feitas em cada turno. Os dados são **digitados no terminal**.

1. Pergunte quantos turnos serão registrados e converta para número.
2. Crie a variável que vai guardar o resultado, **antes** do `for`:

```jsx
let turnosAcimaDaMeta = 0
```

3. Com **um `for`** de `1` até a quantidade de turnos, pergunte as peças de cada turno (convertendo com `Number`). Dentro do mesmo `for`, use um `if` para contar o turno quando ele produziu **mais de 15 peças**.

Exemplo no terminal:

```
Quantos turnos? 5
Peças do turno 1: 12
Peças do turno 2: 25
Peças do turno 3: 8
Peças do turno 4: 30
Peças do turno 5: 15
```

A variável `turnosAcimaDaMeta` deverá terminar com o valor:

```
2
```

Utilize obrigatoriamente `for` e `if`.

Crie o arquivo `index.js`, teste com `node index.js` e exporte a variável `turnosAcimaDaMeta` (`module.exports = turnosAcimaDaMeta`) para que os testes funcionem e o GitHub Actions execute a correção.
