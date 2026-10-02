# 🎯 Aula 31 — DESMISTIFICANDO O `IF` E CONDICIONAL TERNÁRIO

# 🎯 Objetivos da Aula

- Revisar o funcionamento do `if`.
- Entender que o `if` trabalha com valores `true` e `false`.
- Compreender que muitas decisões podem ser simplificadas.
- Conhecer o operador condicional ternário `? :`.
- Utilizar o ternário em decisões simples.
- Diferenciar situações em que o `if/else` é mais adequado das situações em que o ternário pode ser utilizado.
- Aplicar o operador ternário em problemas reais.

# 🧩 Desmistificando o `if`

Durante as últimas aulas, utilizamos bastante:

```jsx
if (condicao) {

}
```

Mas o que realmente acontece dentro do `if`?

O JavaScript avalia uma condição.

Por exemplo:

```jsx
const idade = 20

if (idade >= 18) {
  console.log("Maior de idade")
}
```

O computador verifica:

```
idade >= 18
     ↓
20 >= 18
     ↓
true
```

Como o resultado é `true`, o código dentro do `if` é executado.

# 🧠 O `if` trabalha com verdadeiro ou falso

Podemos pensar no `if` como uma pergunta:

```
A condição é verdadeira?
```

Se:

```
true
```

executa o bloco.

Se:

```
false
```

o bloco não é executado.

Exemplo:

```jsx
const estoque = 10

if (estoque > 0) {
  console.log("Produto disponível")
}
```

Temos:

```
10 > 0
 ↓
true
```

Portanto:

```
Produto disponível
```

# 🔀 `if` e `else`

Quando precisamos tratar os dois resultados:

```jsx
const estoque = 0

if (estoque > 0) {
  console.log("Produto disponível")
} else {
  console.log("Produto esgotado")
}
```

O computador verifica:

```
0 > 0
 ↓
false
```

Então executa o `else`.

Resultado:

```
Produto esgotado
```

# 🧩 Uma decisão simples

Observe:

```jsx
const idade = 20

let resultado

if (idade >= 18) {
  resultado = "Maior de idade"
} else {
  resultado = "Menor de idade"
}
```

Nesse exemplo, estamos fazendo uma decisão para escolher **um entre dois valores**.

O resultado será:

```
Maior de idade
```

Podemos representar:

```
idade >= 18
     ↓
 ┌───┴───┐
true    false
 ↓        ↓
Maior    Menor
```

# 🤔 Existe uma forma mais curta?

Sim.

Quando temos uma decisão **simples**, em que queremos escolher entre dois valores, podemos utilizar o **operador ternário**.

A estrutura é:

```jsx
condicao ? valorSeVerdadeiro : valorSeFalso
```

Observe:

```jsx
const idade = 20

const resultado =
  idade >= 18
    ? "Maior de idade"
    : "Menor de idade"
```

O resultado será:

```
Maior de idade
```

# ❓ Por que ele se chama ternário?

Porque existem **três partes**:

```
condição
   ?
valor verdadeiro
   :
valor falso
```

Exemplo:

```jsx
idade >= 18 ? "Maior" : "Menor"
```

Temos:

```
idade >= 18
     ↓
 condição

?
 ↓
 separação

"Maior"
   ↓
se verdadeiro

:
 ↓
separação

"Menor"
   ↓
se falso
```

# 🧩 Comparando `if/else` e ternário

Com `if/else`:

```jsx
const nota = 8

let resultado

if (nota >= 7) {
  resultado = "Aprovado"
} else {
  resultado = "Reprovado"
}
```

Com ternário:

```jsx
const nota = 8

const resultado =
  nota >= 7
    ? "Aprovado"
    : "Reprovado"
```

Os dois produzem:

```
Aprovado
```

A diferença está principalmente na forma de escrever.

# 🧠 Quando utilizar o ternário?

O ternário é interessante quando temos uma decisão **curta e simples**.

Por exemplo:

```jsx
const idade = 20

const podeEntrar =
  idade >= 18
    ? "Sim"
    : "Não"
```

Ou:

```jsx
const estoque = 5

const status =
  estoque > 0
    ? "Disponível"
    : "Esgotado"
```

# ⚠️ Quando não utilizar o ternário?

Imagine uma decisão grande:

```jsx
if (idade >= 18 && possuiIngresso && !bloqueado) {
  resultado = "Entrada permitida"
  console.log("Acesso liberado")
  console.log("Boa diversão")
} else {
  resultado = "Entrada negada"
  console.log("Acesso bloqueado")
}
```

Transformar isso em um ternário muito grande pode deixar o código difícil de entender.

O ternário não existe para substituir **todo `if/else`**.

Ele é mais adequado para decisões simples.

# 🧩 Ternário com comparação

Podemos utilizar todos os operadores de comparação que já aprendemos.

```jsx
const nota = 7

const resultado =
  nota >= 6
    ? "Aprovado"
    : "Reprovado"
```

Ou:

```jsx
const estoque = 0

const resultado =
  estoque > 0
    ? "Disponível"
    : "Esgotado"
```

Ou:

```jsx
const idade = 15

const resultado =
  idade >= 18
    ? "Maior de idade"
    : "Menor de idade"
```

# 🔗 Ternário com operadores lógicos

Também podemos utilizar condições mais complexas.

```jsx
const idade = 20
const possuiIngresso = true

const resultado =
  idade >= 18 && possuiIngresso
    ? "Entrada permitida"
    : "Entrada negada"
```

A condição é:

```
idade >= 18
     E
possui ingresso
```

# 🧩 Ternário armazenando valores

O ternário é muito útil quando precisamos escolher um valor.

```jsx
const estoque = 10

const mensagem =
  estoque > 0
    ? "Produto disponível"
    : "Produto esgotado"
```

Nesse caso, a variável `mensagem` receberá um dos dois textos.

# 💼 Exemplo — Sistema de vendas

Uma loja deseja identificar se uma compra terá desconto.

Regra:

> Compras de R$ 1.000 ou mais recebem desconto.
> 

```jsx
const valorCompra = 1500

const desconto =
  valorCompra >= 1000
    ? "Desconto aplicado"
    : "Sem desconto"
```

Resultado:

```
Desconto aplicado
```

# 💼 Exemplo — Situação do estoque

```jsx
const quantidade = 3

const status =
  quantidade > 0
    ? "Produto disponível"
    : "Produto esgotado"
```

Resultado:

```
Produto disponível
```

# 🧠 Ternário não é uma nova estrutura de decisão

É importante entender:

```jsx
idade >= 18
```

continua sendo uma condição.

O ternário apenas oferece outra maneira de escrever uma decisão simples:

```jsx
idade >= 18
  ? "Maior"
  : "Menor"
```

Podemos pensar:

```
IF / ELSE
   ↓
decisão

TERNÁRIO
   ↓
decisão simplificada
```

# ⚠️ Cuidado com ternários muito complexos

Evite fazer:

```jsx
const resultado =
  idade >= 18
    ? possuiIngresso
      ? "Pode entrar"
      : "Sem ingresso"
    : "Menor de idade"
```

Embora seja possível, a leitura fica mais difícil.

Nesse caso, um `if/else` pode ser mais claro.

A programação não consiste apenas em fazer o código funcionar.

Também precisamos escrever código que outras pessoas consigam entender.

# 🧠 Regra da disciplina

Podemos utilizar:

### `if/else`

Quando:

- existem várias instruções;
- a decisão é mais complexa;
- precisamos executar diferentes blocos de código;
- a lógica precisa ficar mais explícita.

### Ternário

Quando:

- a decisão é simples;
- estamos escolhendo entre dois valores;
- queremos atribuir rapidamente um resultado.

# 🧩 Exemplo comparativo

### `if/else`

```jsx
const idade = 20

let mensagem

if (idade >= 18) {
  mensagem = "Permitido"
} else {
  mensagem = "Negado"
}
```

### Ternário

```jsx
const idade = 20

const mensagem =
  idade >= 18
    ? "Permitido"
    : "Negado"
```

Os dois representam a mesma regra.

# 🧠 Pensando como desenvolvedor

Antes:

```
SE idade >= 18
    mensagem = "Permitido"
SENÃO
    mensagem = "Negado"
```

Depois podemos perceber:

```
Preciso apenas escolher
entre dois valores.
```

Então:

```jsx
idade >= 18
  ? "Permitido"
  : "Negado"
```

A capacidade importante aqui não é decorar o `? :`.

É reconhecer **quando uma decisão pode ser simplificada**.

Fim da aula!

_

# 🧩 Exercício Rápido

Uma escola precisa informar se um aluno foi aprovado.

A regra é:

> A nota mínima para aprovação é `7`.
> 

Utilize:

```jsx
const nota = 8
```

A variável `resultado` deverá receber:

```
Aprovado
```

quando a nota for maior ou igual a `7`.

Caso contrário:

```
Reprovado
```

Utilize obrigatoriamente o **operador ternário**.

Exporte a variável `resultado` para que os testes funcionem e o GitHub Actions execute a correção.