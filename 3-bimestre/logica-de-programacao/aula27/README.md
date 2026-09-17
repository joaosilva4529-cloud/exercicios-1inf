# 🎯 Aula 27 — CONDICIONAL DUPLA `IF ELSE`

# 🎯 Objetivos da Aula

* Compreender o funcionamento da condicional dupla.
* Utilizar `if` e `else` juntos.
* Entender o caminho verdadeiro e o caminho falso.
* Criar decisões com duas possibilidades.
* Combinar `if/else` com operadores de comparação.
* Combinar `if/else` com operadores lógicos.
* Aplicar condicionais duplas em problemas reais.

# 🧩 Relembrando o `if`

O `if` permite que o programa execute determinado código quando uma condição for verdadeira.

```jsx
const idade = 20

if (idade >= 18) {
  console.log("Maior de idade")
}
```

A condição:

```jsx
idade >= 18
```

produz:

```text
true
```

Por isso o código dentro do `if` é executado.

Mas existe uma situação que ainda precisamos tratar:

> O que acontece quando a condição for falsa?

# 🔀 O que é o `else`?

O `else` representa o caminho contrário ao `if`.

Exemplo:

```jsx
const idade = 16

if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}
```

Nesse caso existem dois caminhos:

```text
SE idade >= 18
    Maior de idade

SENÃO
    Menor de idade
```

Apenas um dos caminhos será executado.

# 🧠 Estrutura básica

A estrutura é:

```jsx
if (condição) {
  // condição verdadeira
} else {
  // condição falsa
}
```

Podemos ler:

```text
SE acontecer alguma coisa
    faça isso

SENÃO
    faça aquilo
```

# 🧩 Exemplo — Aprovação

```jsx
const nota = 7

if (nota >= 6) {
  console.log("Aprovado")
} else {
  console.log("Reprovado")
}
```

Como:

```text
7 >= 6
```

é verdadeiro:

```text
Aprovado
```

# 🧩 Exemplo — Estoque

```jsx
const estoque = 0

if (estoque > 0) {
  console.log("Produto disponível")
} else {
  console.log("Produto esgotado")
}
```

Como:

```text
0 > 0
```

é falso:

```text
Produto esgotado
```

# 🧩 Exemplo — Senha

```jsx
const senha = "1234"

if (senha === "1234") {
  console.log("Acesso permitido")
} else {
  console.log("Acesso negado")
}
```

Como:

```text
"1234" === "1234"
```

é verdadeiro:

```text
Acesso permitido
```

# 🔄 O fluxo da condicional

Imagine:

```jsx
const idade = 15

if (idade >= 18) {
  console.log("Pode entrar")
} else {
  console.log("Não pode entrar")
}
```

O computador faz:

```text
idade = 15
     ↓
15 >= 18
     ↓
   false
     ↓
Executa o ELSE
     ↓
Não pode entrar
```

# 🔗 `if/else` com `&&`

Podemos utilizar operadores lógicos dentro da condicional.

Exemplo:

```jsx
const idade = 20
const possuiIngresso = true

if (idade >= 18 && possuiIngresso === true) {
  console.log("Entrada permitida")
} else {
  console.log("Entrada negada")
}
```

A regra é:

```text
Maior de idade
     E
Possui ingresso
```

Se as duas condições forem verdadeiras:

```text
Entrada permitida
```

Caso contrário:

```text
Entrada negada
```

# 🔀 `if/else` com `||`

Também podemos utilizar o operador `||`.

```jsx
const cargo = "diretor"

if (
  cargo === "gerente" ||
  cargo === "diretor"
) {
  console.log("Acesso administrativo")
} else {
  console.log("Acesso comum")
}
```

A regra é:

```text
Gerente
OU
Diretor
```

# ❌ `if/else` com `!`

Também podemos utilizar negação.

```jsx
const bloqueado = false

if (!bloqueado) {
  console.log("Usuário autorizado")
} else {
  console.log("Usuário bloqueado")
}
```

Como:

```text
bloqueado = false
```

temos:

```text
!false
 ↓
true
```

Portanto:

```text
Usuário autorizado
```

# 💼 Exemplo — Compra online

Uma loja deseja verificar se um pedido pode ser realizado.

A regra é:

> O cliente poderá realizar a compra se possuir estoque suficiente e tiver solicitado pelo menos um produto.

```jsx
const estoque = 10
const quantidade = 2

if (estoque >= quantidade && quantidade > 0) {
  console.log("Compra permitida")
} else {
  console.log("Compra não permitida")
}
```

# 🧠 Pensando como desenvolvedor

Antes de escrever o código, transforme a regra em uma pergunta.

Por exemplo:

> O aluno foi aprovado?

Depois identifique a condição:

```text
nota >= 6
```

E os dois caminhos:

```text
Verdadeiro → Aprovado
Falso → Reprovado
```

Só então escreva:

```jsx
if (nota >= 6) {
  resultado = "Aprovado"
} else {
  resultado = "Reprovado"
}
```

# 🧩 Outro exemplo — Frete

Uma loja oferece frete grátis para compras de R$ 500 ou mais.

```jsx
const valorCompra = 700

if (valorCompra >= 500) {
  console.log("Frete grátis")
} else {
  console.log("Frete pago")
}
```

Temos apenas duas possibilidades:

```text
R$ 500 ou mais
      ↓
Frete grátis

Menos de R$ 500
      ↓
Frete pago
```

# 🧩 Outro exemplo — Acesso ao sistema

```jsx
const usuario = "admin"
const senha = "1234"

if (
  usuario === "admin" &&
  senha === "1234"
) {
  console.log("Login realizado")
} else {
  console.log("Usuário ou senha incorretos")
}
```

Agora temos uma decisão baseada em **duas condições**.

# ⚠️ `if` sozinho x `if/else`

### Somente `if`

```jsx
if (idade >= 18) {
  console.log("Maior de idade")
}
```

Se for falso, nada acontece.

### `if/else`

```jsx
if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}
```

Agora o programa possui um comportamento para os dois casos.

# 🧠 Regra para lembrar

```text
if
 ↓
SE

else
 ↓
SENÃO
```

Ou:

```text
if → caminho verdadeiro
else → caminho falso
```

# 🧩 Condicional dupla na prática

Um sistema de notas pode fazer:

```jsx
const nota = 5

if (nota >= 6) {
  console.log("Aluno aprovado")
} else {
  console.log("Aluno reprovado")
}
```

O programa está transformando uma regra:

> Nota maior ou igual a 6 significa aprovação.

em uma decisão:

```text
nota >= 6
    ↓
 true / false
    ↓
if / else
    ↓
resultado
```

Fim da aula!

# 🧩 Exercício Rápido

Uma loja precisa verificar se um produto está disponível para venda.

Utilize:

```jsx
const estoque = 10
```

A regra é:

> Se houver pelo menos um produto em estoque, o produto estará disponível. Caso contrário, estará esgotado.

A variável `resultado` deverá receber:

```text
Produto disponível
```

ou:

```text
Produto esgotado
```

Utilize uma condicional dupla `if/else`.

Exporte a variável `resultado` para que os testes funcionem e o GitHub Actions execute a correção.