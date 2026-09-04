# projeto-RL-MODA-MASCULINA
# RL — Loja de Moda Masculina (Projeto HTML + CSS)

## Finalidade

Este projeto foi criado como exercício da disciplina de Ciências da Computação (2º semestre), com o objetivo de praticar **HTML semântico** e **CSS puro** (sem frameworks) construindo a página inicial de uma loja de moda masculina de luxo, a partir de três telas de referência fornecidas em imagem.

A ideia foi reproduzir fielmente a estrutura e o conteúdo das telas — cabeçalho, vitrine de produtos, seção de produto em destaque e opções de entrega — aplicando um sistema de design consistente (cores, tipografia e espaçamento) em vez de copiar estilos aleatórios.

## Arquivos do projeto

```
site/
├── index.html   → estrutura e conteúdo da página
├── style.css    → toda a estilização visual
└── README.md    → este documento
```

## Passo a passo do que foi feito

### 1. Planejamento visual
Antes de escrever código, defini um pequeno sistema de design baseado nas telas de referência:
- **Cores**: preto (`#0c0c0d`) como base, marfim (`#f4f2ee`) para texto, dourado (`#c9a24b`) como cor de destaque (badges, preços, botão), vermelho para promoções e verde para frete grátis/desconto.
- **Tipografia**: `Cormorant Garamond` (serifada) para logo e títulos, transmitindo a ideia de "grife"; `Inter` (sans-serif) para textos de apoio, por ser mais legível em telas.
- **Layout**: cabeçalho fixo no topo, grade de produtos em cartões, seção de destaque em duas colunas (imagem + informações).

### 2. Estrutura do HTML (`index.html`)
O arquivo foi dividido em blocos semânticos:

- **`<header class="topbar">`** — logo (SVG de uma coroa + sigla "RL"), menu de navegação (`<nav>`), ícones de favoritos/carrinho e a barra de benefícios (frete grátis, troca em 30 dias, pagamento seguro, envio imediato).
- **`<main>`** — contém duas seções de vitrine (`<section class="grid">`), cada uma com quatro `<article class="card">` representando um produto (imagem, badge, nome, marca, descrição e preço), reproduzindo os cards das imagens 1 e 2.
- **Seção "Peça da Semana"** — bloco especial com imagem grande do produto, descrição, aviso de estoque limitado, preço com desconto e botão de call-to-action ("RESERVAR"), seguido da grade de opções de entrega (PAC, SEDEX, SEDEX 1 dia e Frete Premium), reproduzindo a imagem 3.
- **`<footer>`** — ícones de redes sociais e informação de copyright.

Cada card de produto segue o mesmo padrão de marcação (imagem, badge opcional, título, marca, descrição, preço e botão "+"), o que facilita duplicar ou editar produtos no futuro.

### 3. Estilização com CSS (`style.css`)
O CSS foi organizado por blocos, na mesma ordem do HTML:

1. **Variáveis (`:root`)** — todas as cores e o raio de borda ficam centralizados em `custom properties`, facilitando trocar a paleta inteira alterando só um lugar.
2. **Reset básico** — `box-sizing: border-box` e remoção de estilos padrão de links.
3. **Cabeçalho (`.topbar`)** — `flexbox` para alinhar logo, menu e ícones lado a lado; `position: sticky` para o cabeçalho acompanhar a rolagem.
4. **Grade de produtos (`.grid` / `.card`)** — `CSS Grid` com 4 colunas, usando `gap` para criar as linhas divisórias entre os cards (efeito de "vitrine" com bordas finas).
5. **Seção "Peça da Semana"** — `grid-template-columns: 1fr 1fr` para dividir imagem e texto; cards de entrega em uma segunda grade menor.
6. **Rodapé** — ícones circulares centralizados com `flexbox`.
7. **Responsividade (`@media`)** — em telas médias o menu vira ícone de hambúrguer e a grade passa para 2 colunas; em telas pequenas, para 1 coluna.

### 4. Substituição de imagens
As imagens dos produtos usam URLs de banco de imagens gratuito (Unsplash) apenas como **placeholder**, já que não havia fotos reais dos produtos. Para usar em produção, basta trocar o valor de `background-image` em cada `.card__img` pelo link (ou caminho local) da foto real.

## Como visualizar
Basta abrir o arquivo `index.html` em qualquer navegador — ele já está ligado ao `style.css` pela tag `<link>` no `<head>`.

## Possíveis próximos passos
- Trocar as imagens placeholder por fotos reais dos produtos.
- Adicionar interatividade com JavaScript (ex.: abrir o menu mobile, atualizar contador do carrinho).
- Criar páginas internas (produto, carrinho, checkout) linkadas ao menu.