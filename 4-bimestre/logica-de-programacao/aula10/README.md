# 🎯 Aula 10 — O QUE SÃO OBJETOS, ACESSANDO E ALTERANDO DADOS

# 🎯 Objetivos da Aula

- Compreender o que é um objeto em JavaScript.
- Acessar propriedades de um objeto.
- Alterar o valor de uma propriedade.
- Adicionar uma nova propriedade a um objeto.
- Diferenciar array de objeto.
- Criar um objeto a partir de dados digitados no terminal (`prompt-sync`).

# 🧩 O que é um objeto?

Um array guarda uma lista de valores, organizados por posição (índice).

Um objeto guarda valores organizados por **nome** (chamado de propriedade, ou `key`).

```jsx
const produto = {
  nome: "Caderno",
  preco: 15,
  estoque: 40
}
```

Cada propriedade tem um **nome** e um **valor**:

```
nome    → "Caderno"
preco   → 15
estoque → 40
```

# 🧠 Array x Objeto

```jsx
const frutas = ["maçã", "banana", "uva"]
```

```
frutas[0] → "maçã"   (acesso por posição)
```

```jsx
const produto = { nome: "Caderno", preco: 15 }
```

```
produto.nome → "Caderno"   (acesso por nome)
```

Usamos array quando a ordem dos itens importa e eles são do mesmo tipo de coisa. Usamos objeto quando queremos descrever **as características de uma única coisa**.

# 📌 Acessando propriedades

Existem duas formas de acessar uma propriedade:

```jsx
console.log(produto.nome)
console.log(produto["nome"])
```

As duas retornam:

```
Caderno
```

A forma com ponto (`produto.nome`) é a mais usada no dia a dia.

# 🔀 Alterando o valor de uma propriedade

```jsx
const produto = {
  nome: "Caderno",
  preco: 15,
  estoque: 40
}

produto.preco = 18

console.log(produto.preco)
```

Resultado:

```
18
```

# 🧩 Adicionando uma nova propriedade

Se a propriedade ainda não existe, atribuir um valor a ela a cria:

```jsx
const produto = {
  nome: "Caderno",
  preco: 15
}

produto.categoria = "Papelaria"

console.log(produto.categoria)
```

Resultado:

```
Papelaria
```

# ⌨️ Criando um objeto com dados digitados

Em vez de escrever os valores dentro do código, podemos perguntar cada propriedade no terminal e montar o objeto com as respostas:

```jsx
const prompt = require("prompt-sync")()

const produto = {
  nome: prompt("Nome do produto: "),
  preco: Number(prompt("Preço: ")),
  estoque: Number(prompt("Estoque: "))
}

console.log(produto)
```

Executando:

```
Nome do produto: Caderno
Preço: 15
Estoque: 40
{ nome: 'Caderno', preco: 15, estoque: 40 }
```

Atenção ao tipo de cada propriedade:

```
nome    → texto   → prompt(...) puro
preco   → número  → Number(prompt(...))
estoque → número  → Number(prompt(...))
```

As perguntas acontecem **na ordem em que as propriedades aparecem** no objeto.

Também podemos alterar o objeto usando um valor digitado:

```jsx
const aumento = Number(prompt("Quanto aumentar no preço? "))

produto.preco = produto.preco + aumento

console.log(produto.preco)
```

Digitando `3`, o preço passa de `15` para `18`.

# 💼 Exemplo — Atualizando estoque após uma venda

```jsx
const produto = {
  nome: "Caderno",
  preco: 15,
  estoque: 40
}

produto.estoque = produto.estoque - 1

console.log(produto.estoque)
```

Resultado:

```
39
```

# 💼 Exemplo — Objeto representando um funcionário

```jsx
const funcionario = {
  nome: "Marina",
  cargo: "Vendedora",
  salario: 2000
}

funcionario.salario = funcionario.salario + 200

console.log(funcionario.salario)
```

Resultado:

```
2200
```

# 🧩 Array de objetos

É muito comum combinar as duas estruturas: um array, onde cada posição é um objeto.

```jsx
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Lápis", preco: 3 },
  { nome: "Borracha", preco: 2 }
]

console.log(produtos[0].nome)
console.log(produtos[1].preco)
```

Resultado:

```
Caderno
3
```

Podemos percorrer esse array com `for`, acessando a propriedade de cada objeto (e também montá-lo com `push`, perguntando os dados de cada produto no terminal):

```jsx
const quantidade = Number(prompt("Quantos produtos? "))
const produtos = []

for (let i = 1; i <= quantidade; i++) {
  const produto = {
    nome: prompt(`Nome do produto ${i}: `),
    preco: Number(prompt(`Preço do produto ${i}: `))
  }

  produtos.push(produto)
}
```

Percorrendo:

```jsx
for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome)
}
```

Resultado:

```
Caderno
Lápis
Borracha
```

# 🧠 Pensando como desenvolvedor

Quando um problema descreve **as características de uma coisa** (nome, preço, estoque, cargo, salário...), geralmente a melhor representação é um **objeto**.

Quando o problema descreve **uma lista de coisas do mesmo tipo**, geralmente a melhor representação é um **array** — e, se cada item tiver várias características, um **array de objetos**.

Fim da aula!

_

# 🧩 Exercício Rápido

Uma loja quer atualizar o preço de um produto depois de um reajuste. Os dados são **digitados no terminal**.

1. Monte o objeto `produto` perguntando, **nesta ordem**, o `nome`, o `preco` e o `estoque`:

```jsx
const produto = {
  nome: ...,
  preco: ...,
  estoque: ...
}
```

2. Pergunte o valor do `aumento` e some ao `preco` do produto.

Exemplo no terminal:

```
Nome do produto: Mochila
Preço: 80
Estoque: 12
Aumento no preço: 10
```

A propriedade `produto.preco` deverá terminar com o valor:

```
90
```

Crie o arquivo `index.js`, teste com `node index.js` e exporte o objeto `produto` (`module.exports = produto`) para que os testes funcionem e o GitHub Actions execute a correção.
