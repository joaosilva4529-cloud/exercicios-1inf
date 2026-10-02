# 🎯 Aula 32 — `SWITCH`

# 🎯 Objetivos da Aula

- Compreender o funcionamento do `switch`.
- Entender quando utilizar `switch` em vez de vários `if/else`.
- Utilizar `case`.
- Utilizar `break`.
- Utilizar `default`.
- Trabalhar com diferentes possibilidades para um mesmo valor.
- Aplicar `switch` em situações reais de sistemas.

# 🧩 O que é o `switch`?

O `switch` é uma estrutura utilizada quando precisamos verificar **diferentes possibilidades para um mesmo valor**.

Imagine um sistema que recebe o tipo de pagamento:

```jsx
const pagamento = "pix"
```

Podemos verificar:

```
Se for cartão
Se for PIX
Se for dinheiro
Se for boleto
```

Uma maneira seria utilizar vários `if`.

Por exemplo:

```jsx
if (pagamento === "pix") {
  console.log("Pagamento via PIX")
} else if (pagamento === "cartao") {
  console.log("Pagamento via cartão")
} else if (pagamento === "dinheiro") {
  console.log("Pagamento em dinheiro")
}
```

Quando temos várias possibilidades para **uma mesma variável**, o `switch` pode deixar essa estrutura mais organizada.

# 🔀 Estrutura básica do `switch`

A estrutura é:

```jsx
switch (valor) {

  case valor1:
    // código
    break

  case valor2:
    // código
    break

  default:
    // código
}
```

Podemos ler:

```
VERIFIQUE o valor

SE for valor1
    faça isso

SE for valor2
    faça aquilo

CASO NENHUM
    faça outra coisa
```

# 🧩 Primeiro exemplo

```jsx
const dia = 1

switch (dia) {

  case 1:
    console.log("Domingo")
    break

  case 2:
    console.log("Segunda-feira")
    break

  case 3:
    console.log("Terça-feira")
    break
}
```

O JavaScript verifica:

```
dia = 1
```

Depois procura:

```
case 1
```

Encontrando:

```
case 1
```

executa:

```
Domingo
```

# 🧠 O que é `case`?

O `case` representa uma possibilidade.

```jsx
case 1:
```

significa:

> Caso o valor seja `1`.
> 

Outro:

```jsx
case 2:
```

significa:

> Caso o valor seja `2`.
> 

E assim por diante.

# 🛑 O que é `break`?

O `break` informa ao JavaScript que a execução do `switch` deve parar naquele ponto.

Exemplo:

```jsx
const opcao = 1

switch (opcao) {

  case 1:
    console.log("Cadastrar")
    break

  case 2:
    console.log("Consultar")
    break
}
```

Quando encontra:

```
case 1
```

executa:

```
Cadastrar
```

Depois encontra:

```jsx
break
```

e encerra o `switch`.

# ⚠️ O que acontece sem `break`?

Observe:

```jsx
const opcao = 1

switch (opcao) {

  case 1:
    console.log("Cadastrar")

  case 2:
    console.log("Consultar")
}
```

Nesse caso, depois de executar o `case 1`, o JavaScript continuará executando os próximos casos.

Por isso, normalmente utilizamos:

```jsx
break
```

ao final de cada `case`.

# 🧩 `default`

O `default` representa o caso em que nenhum `case` corresponde ao valor.

Exemplo:

```jsx
const opcao = 5

switch (opcao) {

  case 1:
    console.log("Cadastrar")
    break

  case 2:
    console.log("Consultar")
    break

  default:
    console.log("Opção inválida")
}
```

Como não existe:

```
case 5
```

será executado:

```
Opção inválida
```

# 💼 Exemplo — Forma de pagamento

Uma loja possui quatro formas de pagamento:

```
pix
cartao
dinheiro
boleto
```

Podemos utilizar:

```jsx
const pagamento = "pix"

switch (pagamento) {

  case "pix":
    console.log("Pagamento via PIX")
    break

  case "cartao":
    console.log("Pagamento via cartão")
    break

  case "dinheiro":
    console.log("Pagamento em dinheiro")
    break

  case "boleto":
    console.log("Pagamento via boleto")
    break

  default:
    console.log("Forma de pagamento inválida")
}
```

# 🧠 Pensando como o computador

Temos:

```jsx
const pagamento = "pix"
```

O `switch` verifica:

```
pagamento === "pix"?
```

Sim.

Então:

```
Pagamento via PIX
```

O `break` encerra a estrutura.

# 🧩 Exemplo — Menu de sistema

Imagine um sistema:

```
1 - Cadastrar
2 - Consultar
3 - Editar
4 - Excluir
```

Podemos utilizar:

```jsx
const opcao = 2

switch (opcao) {

  case 1:
    console.log("Cadastrar usuário")
    break

  case 2:
    console.log("Consultar usuário")
    break

  case 3:
    console.log("Editar usuário")
    break

  case 4:
    console.log("Excluir usuário")
    break

  default:
    console.log("Opção inválida")
}
```

Resultado:

```
Consultar usuário
```

# 🔀 `switch` x `if/else`

Quando temos uma condição como:

```jsx
if (idade >= 18) {
  // ...
} else {
  // ...
}
```

o `if/else` é uma boa escolha porque estamos avaliando uma **comparação**.

Já quando temos:

```jsx
const opcao = 2
```

e precisamos verificar várias possibilidades para essa mesma variável:

```
1
2
3
4
```

o `switch` pode ser uma alternativa mais organizada.

# 🧩 Comparação

Com `if/else`:

```jsx
if (opcao === 1) {
  resultado = "Cadastrar"
} else if (opcao === 2) {
  resultado = "Consultar"
} else if (opcao === 3) {
  resultado = "Editar"
} else {
  resultado = "Opção inválida"
}
```

Com `switch`:

```jsx
switch (opcao) {

  case 1:
    resultado = "Cadastrar"
    break

  case 2:
    resultado = "Consultar"
    break

  case 3:
    resultado = "Editar"
    break

  default:
    resultado = "Opção inválida"
}
```

Os dois podem resolver o problema.

# 🧠 Quando utilizar `switch`?

O `switch` é especialmente interessante quando:

- temos uma variável;
- existem vários valores possíveis;
- cada valor representa uma ação ou resultado diferente.

Exemplo:

```
status
 ↓
"pendente"
"aprovado"
"cancelado"
"enviado"
```

Podemos verificar cada situação com `case`.

# 💼 Exemplo — Status de pedido

```jsx
const status = "aprovado"

switch (status) {

  case "pendente":
    console.log("Aguardando pagamento")
    break

  case "aprovado":
    console.log("Pedido aprovado")
    break

  case "enviado":
    console.log("Pedido enviado")
    break

  case "cancelado":
    console.log("Pedido cancelado")
    break

  default:
    console.log("Status desconhecido")
}
```

Resultado:

```
Pedido aprovado
```

# 🧩 Vários `case` para o mesmo resultado

Também podemos utilizar vários `case` para executar o mesmo código.

Exemplo:

```jsx
const dia = "sábado"

switch (dia) {

  case "sábado":
  case "domingo":
    console.log("Fim de semana")
    break

  default:
    console.log("Dia útil")
}
```

Nesse caso:

```
sábado
```

e:

```
domingo
```

produzem:

```
Fim de semana
```

# ⚠️ `switch` utiliza comparação de valor e tipo

Observe:

```jsx
const opcao = 1

switch (opcao) {

  case 1:
    console.log("Número um")
    break

  case "1":
    console.log("Texto um")
    break
}
```

Como:

```
1
```

é um número, será executado:

```
Número um
```

e não:

```
Texto um
```

Isso acontece porque o `switch` compara o valor e o tipo.

# 🧠 Pensando como desenvolvedor

Quando receber uma situação com várias possibilidades, pergunte:

```
Estou verificando diferentes valores
da mesma informação?
```

Se sim, `switch` pode ser uma boa alternativa.

Exemplo:

```
Forma de pagamento
       ↓
PIX
Cartão
Dinheiro
Boleto
```

Ou:

```
Status do pedido
       ↓
Pendente
Aprovado
Enviado
Cancelado
```

Ou:

```
Opção do menu
       ↓
1
2
3
4
```

# 📌 Estrutura para lembrar

```jsx
switch (valor) {

  case valor1:
    // código
    break

  case valor2:
    // código
    break

  default:
    // código
}
```

Pense:

```
switch → qual valor estamos verificando?

case → qual possibilidade?

break → encerra o switch

default → nenhuma possibilidade encontrada
```

Fim da aula!

_

# 🧩 Exercício Rápido

Uma loja precisa identificar a forma de pagamento escolhida pelo cliente.

Utilize:

```jsx
const pagamento = "pix"
```

As opções possíveis são:

```
pix
cartao
dinheiro
```

A variável `resultado` deverá receber:

```
Pagamento via PIX
```

quando o pagamento for `pix`.

Para `cartao`:

```
Pagamento via cartão
```

Para `dinheiro`:

```
Pagamento em dinheiro
```

Caso seja informada outra opção:

```
Forma de pagamento inválida
```

Utilize obrigatoriamente:

```jsx
switch
case
break
default
```

Exporte a variável `resultado` para que os testes funcionem e o GitHub Actions execute a correção.