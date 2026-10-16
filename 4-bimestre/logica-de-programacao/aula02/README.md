# 🎯 Aula 2 — O LOOP `DO...WHILE`

# 🎯 Objetivos da Aula

- Compreender o funcionamento do loop `do...while`.
- Entender a diferença entre `while` e `do...while`.
- Perceber que o `do...while` executa o bloco **antes** de verificar a condição.
- Utilizar o `do...while` em um problema prático.
- Usar o `do...while` com `prompt-sync` para **pedir um dado até ele ser válido**.
- Reforçar: o `prompt` devolve texto, e `Number()` converte para número.

# ⌨️ Revisão rápida do `prompt-sync`

Na aula anterior aprendemos a receber dados digitados no terminal:

```jsx
const prompt = require("prompt-sync")()

const idade = Number(prompt("Qual é a sua idade? "))
```

Lembre-se:

```
prompt("pergunta")  → mostra a pergunta e devolve o que foi digitado, sempre como TEXTO
Number(...)         → converte esse texto em número
node index.js       → executa o programa no terminal
```

Nesta aula vamos descobrir por que o `do...while` combina tão bem com o `prompt`.

# 🧩 Revisão rápida do `while`

Na aula anterior vimos que o `while` verifica a condição **antes** de executar o bloco:

```jsx
let contador = 1

while (contador <= 3) {
  console.log(contador)
  contador = contador + 1
}
```

Se a condição já começar `false`, o bloco nunca executa:

```jsx
let contador = 10

while (contador <= 3) {
  console.log(contador)
  contador = contador + 1
}
```

Aqui nada é impresso, porque `10 <= 3` já é `false` desde o início.

# 🔀 O `do...while`

O `do...while` funciona de forma parecida, mas a ordem é diferente: o bloco **executa primeiro**, e a condição só é verificada **depois**.

```jsx
do {
  // código repetido
} while (condicao)
```

Isso garante que o bloco roda **pelo menos uma vez**, mesmo que a condição já comece `false`.

# 🧠 Comparando os dois

```jsx
let contador = 10

while (contador <= 3) {
  console.log(contador)
  contador = contador + 1
}
```

Não imprime nada.

```jsx
let contador = 10

do {
  console.log(contador)
  contador = contador + 1
} while (contador <= 3)
```

Imprime:

```
10
```

Porque o bloco já rodou uma vez antes de o JavaScript verificar `contador <= 3`.

# 🧩 Primeiro exemplo

```jsx
let numero = 1

do {
  console.log(numero)
  numero = numero + 1
} while (numero <= 4)
```

Resultado:

```
1
2
3
4
```

# 🛑 A condição de parada continua obrigatória

Assim como no `while`, a variável usada na condição precisa mudar dentro do loop, senão o programa roda para sempre.

```jsx
let numero = 1

do {
  console.log(numero)
  numero = numero + 1
} while (numero <= 4)
```

# 💼 Exemplo — Senha digitada ao menos uma vez

Um sistema precisa pedir a senha **pelo menos uma vez**, e repetir a pergunta enquanto a senha estiver errada. Como a pergunta precisa acontecer antes de qualquer verificação, o `do...while` é a escolha natural:

```jsx
const prompt = require("prompt-sync")()

const senhaCorreta = "1234"
let senha

do {
  senha = prompt("Digite a senha: ")
} while (senha !== senhaCorreta)

console.log("Acesso liberado!")
```

Executando `node index.js`:

```
Digite a senha: 0000
Digite a senha: abcd
Digite a senha: 1234
Acesso liberado!
```

Repare: a variável `senha` é criada **antes** do loop, para que a condição do `while` consiga enxergá-la.

# 💼 Exemplo — Validando um número digitado

O `do...while` também serve para **não aceitar valores inválidos**. Aqui o programa insiste até receber um número maior que zero:

```jsx
const prompt = require("prompt-sync")()

let quantidade

do {
  quantidade = Number(prompt("Quantidade de produtos (maior que 0): "))
} while (quantidade <= 0)

console.log(`Quantidade aceita: ${quantidade}`)
```

Executando:

```
Quantidade de produtos (maior que 0): 0
Quantidade de produtos (maior que 0): -4
Quantidade de produtos (maior que 0): 8
Quantidade aceita: 8
```

Se a pessoa digitar letras, `Number("abc")` vira `NaN` (not a number), e `NaN <= 0` é `false` — o loop pararia com um valor inválido. Para cobrir esse caso, use `isNaN`:

```jsx
} while (isNaN(quantidade) || quantidade <= 0)
```

`isNaN(valor)` devolve `true` quando o valor **não é um número**.

# 💼 Exemplo — Acumulando valores

```jsx
let dia = 1
let totalVendido = 0

do {
  totalVendido = totalVendido + 50
  dia = dia + 1
} while (dia <= 3)

console.log(totalVendido)
```

Passo a passo:

```
dia = 1 → totalVendido = 0 + 50 = 50 → dia vira 2
dia = 2 → totalVendido = 50 + 50 = 100 → dia vira 3
dia = 3 → totalVendido = 100 + 50 = 150 → dia vira 4
dia = 4 → condição falsa, loop encerra
```

Resultado:

```
150
```

# 🧠 Quando usar `do...while`?

Use `do...while` quando o bloco **precisa rodar pelo menos uma vez**, independentemente da condição.

Use `while` quando o bloco **pode não precisar rodar nenhuma vez**.

Fim da aula!

_

# 🧩 Exercício Rápido

Uma fábrica produz lotes até atingir a meta do dia. A meta é **digitada no terminal** e deve ser **maior que zero**.

1. Use um `do...while` com `prompt-sync` para pedir a meta de lotes, repetindo a pergunta enquanto o valor digitado for **menor ou igual a zero**:

```jsx
const prompt = require("prompt-sync")()

let meta = 0

do {
  meta = Number(prompt("Meta de lotes (maior que 0): "))
} while (...)
```

2. Depois, utilize:

```jsx
let lotes = 0
```

A cada repetição de um **segundo `do...while`**, some `1` a `lotes`, até que `lotes` seja igual a `meta`.

Exemplo no terminal:

```
Meta de lotes (maior que 0): 0
Meta de lotes (maior que 0): -2
Meta de lotes (maior que 0): 5
```

A variável `lotes` deverá terminar com o valor:

```
5
```

Se o usuário digitar apenas `3` na primeira tentativa, `lotes` termina com `3`.

Utilize obrigatoriamente o `do...while` nas duas etapas.

Crie o arquivo `index.js`, teste com `node index.js` e exporte a variável `lotes` (`module.exports = lotes`) para que os testes funcionem e o GitHub Actions execute a correção.
