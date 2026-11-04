# 🚀 PROJETO 7 — CATÁLOGO DE PRODUTOS DE UMA LOJA DE BRINQUEDOS

# 🎯 PROBLEMA

Você continua fazendo parte da equipe de desenvolvimento que presta serviços de tecnologia para empresas da região.

Uma loja de brinquedos contratou o time para organizar o **catálogo de produtos** em um sistema simples.

Durante a reunião, a gerente explicou:

> "Cada produto tem nome, preço e estoque. Preciso saber qual é o produto mais caro, quanto temos no total em estoque, quais produtos estão com estoque baixo, e preciso poder reajustar o preço de um produto quando o fornecedor muda o valor."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## ⌨️ Dados digitados no terminal (`prompt-sync`)

Neste projeto os dados **não ficam mais fixos dentro do código**. O programa deve **perguntar cada valor no terminal** com o `prompt-sync`, como vimos nas aulas:

```jsx
const prompt = require("prompt-sync")()

const exemplo = prompt("Digite algo: ")
```

- O `prompt` devolve sempre **texto**. Use `Number(prompt(...))` nos valores numéricos.
- Faça as perguntas **exatamente na ordem do RF01**: os testes automáticos "digitam" as respostas nessa ordem.
- O `prompt-sync` já está no `package.json`. Rode `npm install` uma vez e teste seu programa no terminal com `node index.js`.
- Os testes digitam os valores do cenário principal **e também os de um cenário extra** (veja mais abaixo). Se você deixar valores fixos no código, o cenário extra vai falhar.

## RF01 — Registro do catálogo

O sistema deve representar o catálogo como um **array de objetos**, onde cada objeto representa um produto com:

- `nome`;
- `preco`;
- `estoque`.

Também deve existir um valor representando o **limite de estoque baixo**.

Os dados são **digitados no terminal** (com `prompt-sync`), nesta ordem:

1. o limite de estoque baixo;
2. a quantidade de produtos do catálogo;
3. para cada produto — um `for` que usa `push` para montar o array —, o nome, o preço e o estoque, nessa ordem;
4. no final do programa, os dois valores do reajuste do RF05: o nome do produto e o valor do aumento.

`preco`, `estoque`, o limite e o aumento são números (use `Number`); `nome` é texto.

Para os testes, serão digitados no terminal, nesta ordem, os valores do cenário principal:

```
Limite de estoque baixo: 4
Quantidade de produtos: 4
Produto 1 - nome: Boneca
Produto 1 - preço: 50
Produto 1 - estoque: 10
Produto 2 - nome: Carrinho
Produto 2 - preço: 30
Produto 2 - estoque: 5
Produto 3 - nome: Quebra-cabeça
Produto 3 - preço: 35
Produto 3 - estoque: 4
Produto 4 - nome: Pelúcia
Produto 4 - preço: 65
Produto 4 - estoque: 13
Reajuste - nome do produto: Pelúcia
Reajuste - aumento: 10
```

Isso resulta em:

```
Catálogo:
1. Boneca - preço 50 - estoque 10
2. Carrinho - preço 30 - estoque 5
3. Quebra-cabeça - preço 35 - estoque 4
4. Pelúcia - preço 65 - estoque 13

Limite de estoque baixo: 4
```

## RF02 — Produto mais caro

O sistema deve descobrir qual é o produto mais caro do catálogo, **percorrendo o array com `for`** e comparando o `preco` de cada produto. O resultado deve ser o **nome** do produto.

Para o cenário principal:

```
Resultado esperado: Pelúcia
```

## RF03 — Estoque total

O sistema deve somar o `estoque` de todos os produtos, **percorrendo o array com `for`**.

Para o cenário principal:

```
Resultado esperado: 32
```

## RF04 — Produtos com estoque baixo

O sistema deve contar quantos produtos têm `estoque` **menor ou igual** ao limite de estoque baixo, **usando `for` combinado com `if`**.

Para o cenário principal:

```
Resultado esperado: 1
```

## RF05 — Reajuste de preço

O sistema deve **perguntar no terminal** (depois dos dados do catálogo) o nome do produto a reajustar e o valor do aumento, e então aumentar o `preco` desse produto, **alterando a propriedade do objeto correspondente** dentro do array. No cenário principal serão digitados `"Pelúcia"` e `10`.

Para o cenário principal:

```
Preço antes: 65
Preço depois: 75
```

## RF06 — Resumo do catálogo

O sistema deve gerar, utilizando **template string**, um resumo contendo: o produto mais caro, o estoque total e a quantidade de produtos com estoque baixo.

Crie o arquivo `index.js` que deverá conter a solução desenvolvida por você, lendo os dados com o `prompt-sync` (para conferir, digite no terminal os valores do cenário principal do RF01). O reajuste do RF05 deve ser aplicado **antes** de exportar o catálogo, para que o teste confira o preço já atualizado.

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}
```

# 🧪 CENÁRIO EXTRA (também digitado pelos testes automáticos)

Além do cenário principal, os testes executam o seu programa mais uma vez, com outros valores digitados:

```
Limite de estoque baixo: 4
Quantidade de produtos: 3
Produto 1 - nome: Caneta
Produto 1 - preço: 5
Produto 1 - estoque: 30
Produto 2 - nome: Caderno
Produto 2 - preço: 20
Produto 2 - estoque: 4
Produto 3 - nome: Pasta
Produto 3 - preço: 12
Produto 3 - estoque: 2
Reajuste - nome do produto: Caneta
Reajuste - aumento: 5
```

Resultado esperado:

```
Produto mais caro: Caderno
Estoque total: 36
Produtos com estoque baixo: 2
Preço da Caneta depois do reajuste: 10
```

# ▶️ Como executar

Dentro da pasta do projeto:

```
npm install      # instala o prompt-sync e o jest (só na primeira vez)
node index.js    # roda o programa e pede os dados no terminal
npm test         # roda os testes automáticos
```

# 📂 Estrutura do projeto

```
projeto7
 ┣ test
 ┃ ┗ index.test.js
 ┣ index.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

Boas práticas! 🤙
