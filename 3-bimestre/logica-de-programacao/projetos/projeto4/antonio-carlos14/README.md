# 🚀 PROJETO 4 — SISTEMA DE PEDIDOS DE UMA CAFETERIA

# 🎯 PROBLEMA

Você continua fazendo parte da equipe de desenvolvimento que presta serviços de tecnologia para empresas da região.

Uma cafeteria com serviço de entrega contratou o time para desenvolver o sistema que **processa os pedidos** feitos pelos clientes.

Durante a reunião de **Sprint Planning**, o responsável pelo estabelecimento explicou:

> "O cliente escolhe uma opção do cardápio, informa quantas unidades quer e como vai pagar. O sistema precisa descobrir qual é o item, quanto custa, se o frete é grátis, se existe desconto para a forma de pagamento e em que situação está o pedido."
>

O líder técnico transformou o pedido nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do pedido

O sistema deve representar o pedido contendo:

- nome do cliente;
- opção escolhida no cardápio (número);
- quantidade de unidades;
- forma de pagamento (`pix`, `cartao` ou `dinheiro`);
- status do pedido (`pendente`, `aprovado`, `enviado` ou `cancelado`).

Para os testes, será utilizado inicialmente:

```
Cliente: Juliana Prado
Opção do cardápio: 2
Quantidade: 2
Forma de pagamento: dinheiro
Status do pedido: enviado
```

## RF02 — Identificação do item

O sistema deve identificar o nome do item escolhido, **usando `switch`**, `case`, `break` e `default`.

Cardápio:

```
1 - Café
2 - Cappuccino
3 - Bolo
4 - Sanduíche
```

Para qualquer outra opção, o resultado deverá ser:

```
Opção inválida
```

Para o cenário principal:

```
Opção: 2

Resultado esperado: Cappuccino
```

## RF03 — Preço unitário

O sistema deve identificar o preço de uma unidade do item, **usando `switch`** sobre a opção do cardápio.

```
1 - Café                  → R$ 6
2 - Cappuccino            → R$ 12
3 - Bolo                  → R$ 15
4 - Sanduíche             → R$ 20
```

Para qualquer outra opção, o preço deverá ser `0`.

Para o cenário principal:

```
Opção: 2

Resultado esperado: 12
```

## RF04 — Cálculo do subtotal

O sistema deve calcular o subtotal do pedido:

```
subtotal = preço unitário × quantidade
```

Para o cenário principal:

```
12 × 2 = 24
```

## RF05 — Frete

O sistema deve decidir se o pedido tem frete grátis, **usando o operador ternário** (`? :`).

Regra: pedidos com subtotal maior ou igual a **R$ 80** têm frete grátis. Os demais pagam **R$ 8** de frete.

Duas informações devem ser guardadas:

- a situação do frete: `Frete grátis` ou `Frete pago`;
- o valor do frete: `0` ou `8`.

Para o cenário principal:

```
Subtotal: R$ 24

Situação: Frete pago
Valor do frete: 8
```

## RF06 — Mensagem da forma de pagamento

O sistema deve gerar a mensagem da forma de pagamento escolhida, **usando `switch`**.

```
pix      → Pagamento via PIX
cartao   → Pagamento via cartão
dinheiro → Pagamento em dinheiro
```

Para qualquer outra forma, o resultado deverá ser:

```
Forma de pagamento inválida
```

Para o cenário principal:

```
Forma de pagamento: dinheiro

Resultado esperado: Pagamento em dinheiro
```

## RF07 — Desconto e total

O estabelecimento dá desconto para algumas formas de pagamento. O sistema deve descobrir o **percentual de desconto**, **usando `switch`** e **agrupando dois `case`** que produzem o mesmo resultado:

```
cartao ou dinheiro → 10 (%)
pix               → 0 (%)
```

Para qualquer outra forma de pagamento, o percentual deverá ser `0`.

Depois, o sistema deve calcular:

```
desconto = subtotal × percentual / 100
total    = subtotal - desconto + frete
```

Para o cenário principal:

```
Percentual: 10
Desconto: 24 × 10 / 100 = 2.4
Total: 24 - 2.4 + 8 = 29.6
```

## RF08 — Situação do pedido

O sistema deve gerar a mensagem da situação do pedido, **usando `switch`**.

```
pendente  → Aguardando pagamento
aprovado  → Pedido em preparo
enviado   → Pedido a caminho
cancelado → Pedido cancelado
```

Para qualquer outro status, o resultado deverá ser:

```
Status desconhecido
```

Para o cenário principal:

```
Status: enviado

Resultado esperado: Pedido a caminho
```

## RF09 — Resumo do pedido

O sistema deve gerar, utilizando **template string**, uma apresentação textual contendo as principais informações do pedido:

- nome do cliente;
- item e quantidade;
- subtotal;
- situação do frete;
- mensagem da forma de pagamento;
- desconto;
- total;
- situação do pedido.

O formato visual da apresentação fica a critério do desenvolvedor.

# 🧪 OUTROS CENÁRIOS PARA VOCÊ TESTAR (não fazem parte dos testes automáticos)

Depois de terminar o cenário principal, tente rodar seu programa mentalmente (ou trocando os valores) para conferir se ele se comporta corretamente nestes casos:

## Cenário — Pedido pequeno

```
Opção: 3 | Quantidade: 1 | Forma de pagamento: pix | Status: pendente
```

```
Bolo, preço R$ 15, subtotal R$ 15
Frete pago (R$ 8)
Pagamento via PIX, desconto R$ 0
Total: R$ 23 → Aguardando pagamento
```

## Cenário — Pedido grande

```
Opção: 4 | Quantidade: 6 | Forma de pagamento: cartao | Status: enviado
```

```
Sanduíche, preço R$ 20, subtotal R$ 120
Frete grátis
Pagamento via cartão, desconto R$ 12
Total: R$ 108 → Pedido a caminho
```

## Cenário — Opção inválida

```
Opção: 7 | Quantidade: 1 | Forma de pagamento: cheque | Status: perdido
```

```
Opção inválida, preço 0, subtotal 0
Frete pago (R$ 8)
Forma de pagamento inválida, desconto R$ 0
Total: R$ 8 → Status desconhecido
```

Crie o arquivo `index.js` que deverá conter a solução desenvolvida pelo aluno, utilizando os dados do cenário principal (RF01).

No final, cole isso abaixo para que os testes funcionem:

```jsx
module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}
```

# ▶️ Como executar

```
node index.js
npm install
npm test
```

# 📂 Estrutura do projeto

```
projeto4
 ┣ test
 ┃ ┗ index.test.js
 ┣ index.js
 ┣ package.json
 ┣ package-lock.json
 ┗ README.md
```

Boas práticas! 🤙
