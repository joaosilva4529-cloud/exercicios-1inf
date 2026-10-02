# 🚀 PROJETO 4 — SISTEMA DE PEDIDOS DE UMA RESTAURANTE JAPONÊS

# 🎯 PROBLEMA

Você continua fazendo parte da equipe de desenvolvimento que presta serviços de tecnologia para empresas da região.

Uma restaurante japonês com serviço de entrega contratou o time para desenvolver o sistema que **processa os pedidos** feitos pelos clientes.

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
Cliente: Bruno Siqueira
Opção do cardápio: 1
Quantidade: 4
Forma de pagamento: pix
Status do pedido: cancelado
```

## RF02 — Identificação do item

O sistema deve identificar o nome do item escolhido, **usando `switch`**, `case`, `break` e `default`.

Cardápio:

```
1 - Sushi
2 - Temaki
3 - Yakisoba
4 - Chá Gelado
```

Para qualquer outra opção, o resultado deverá ser:

```
Opção inválida
```

Para o cenário principal:

```
Opção: 1

Resultado esperado: Sushi
```

## RF03 — Preço unitário

O sistema deve identificar o preço de uma unidade do item, **usando `switch`** sobre a opção do cardápio.

```
1 - Sushi                 → R$ 32
2 - Temaki                → R$ 24
3 - Yakisoba              → R$ 28
4 - Chá Gelado            → R$ 9
```

Para qualquer outra opção, o preço deverá ser `0`.

Para o cenário principal:

```
Opção: 1

Resultado esperado: 32
```

## RF04 — Cálculo do subtotal

O sistema deve calcular o subtotal do pedido:

```
subtotal = preço unitário × quantidade
```

Para o cenário principal:

```
32 × 4 = 128
```

## RF05 — Frete

O sistema deve decidir se o pedido tem frete grátis, **usando o operador ternário** (`? :`).

Regra: pedidos com subtotal maior ou igual a **R$ 100** têm frete grátis. Os demais pagam **R$ 8** de frete.

Duas informações devem ser guardadas:

- a situação do frete: `Frete grátis` ou `Frete pago`;
- o valor do frete: `0` ou `8`.

Para o cenário principal:

```
Subtotal: R$ 128

Situação: Frete grátis
Valor do frete: 0
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
Forma de pagamento: pix

Resultado esperado: Pagamento via PIX
```

## RF07 — Desconto e total

O estabelecimento dá desconto para algumas formas de pagamento. O sistema deve descobrir o **percentual de desconto**, **usando `switch`** e **agrupando dois `case`** que produzem o mesmo resultado:

```
pix ou dinheiro → 15 (%)
cartao         → 0 (%)
```

Para qualquer outra forma de pagamento, o percentual deverá ser `0`.

Depois, o sistema deve calcular:

```
desconto = subtotal × percentual / 100
total    = subtotal - desconto + frete
```

Para o cenário principal:

```
Percentual: 15
Desconto: 128 × 15 / 100 = 19.2
Total: 128 - 19.2 + 0 = 108.8
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
Status: cancelado

Resultado esperado: Pedido cancelado
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
Opção: 2 | Quantidade: 1 | Forma de pagamento: cartao | Status: pendente
```

```
Temaki, preço R$ 24, subtotal R$ 24
Frete pago (R$ 8)
Pagamento via cartão, desconto R$ 0
Total: R$ 32 → Aguardando pagamento
```

## Cenário — Pedido grande

```
Opção: 3 | Quantidade: 6 | Forma de pagamento: pix | Status: enviado
```

```
Yakisoba, preço R$ 28, subtotal R$ 168
Frete grátis
Pagamento via PIX, desconto R$ 25.2
Total: R$ 142.8 → Pedido a caminho
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
