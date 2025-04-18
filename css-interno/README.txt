============================================================
📦 Estrutura de CSS explicada
============================================================

Este projeto organiza os estilos em múltiplos arquivos CSS
para facilitar a manutenção, legibilidade e reuso do código.

------------------------------------------------------------
1️⃣ _variables.css
------------------------------------------------------------
> Armazena variáveis globais, como cores, fontes, sombras.

✔️ Exemplos:
  --primary-bg
  --primary-color
  --box-shadow

🎯 Regra de ouro:
  Sempre use var(--nome-da-variavel) no lugar de valores fixos.

------------------------------------------------------------
2️⃣ _base.css
------------------------------------------------------------
> Define o estilo padrão do site (reset, tipografia, layout base)

✔️ Inclui:
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body, h1-h6, p, a, etc.

🎯 Use para garantir uma aparência consistente em todos navegadores.

------------------------------------------------------------
3️⃣ _layout.css
------------------------------------------------------------
> Define a estrutura visual das seções principais da página.

✔️ Exemplos:
  nav, section, footer
  grids gerais, alinhamentos, paddings

🎯 Este arquivo constrói o "esqueleto" do seu layout.

------------------------------------------------------------
4️⃣ _components.css
------------------------------------------------------------
> Estilos de componentes reutilizáveis da interface.

✔️ Exemplos:
  .service-card
  .timeline-item
  .skill-item
  button, input, textarea

🎯 Sempre que algo for reaproveitado ou for visualmente distinto, entra aqui.

------------------------------------------------------------
5️⃣ _responsive.css
------------------------------------------------------------
> Adapta o site para diferentes tamanhos de tela (responsivo).

✔️ Exemplos:
  @media (max-width: 768px)
  Mudança de grids, fontes, paddings

🎯 Nunca coloque media queries misturadas em outros arquivos — centralize aqui.

------------------------------------------------------------
6️⃣ _animations.css
------------------------------------------------------------
> Regras de transições, animações e aparições visuais.

✔️ Exemplos:
  .visible
  transition: all 0.6s ease-out;
  @keyframes fade-in

🎯 Ideal para suavizar interações visuais e respeitar acessibilidade.

============================================================
📌 Dica extra:
Todos os arquivos são importados dentro de `main.css` com:

@import url('./_variables.css');
@import url('./_base.css');
@import url('./_layout.css');
@import url('./_components.css');
@import url('./_responsive.css');
@import url('./_animations.css');

Assim, no seu HTML basta incluir apenas o main.css:

<link rel="stylesheet" href="css-interno/main.css" />
============================================================

Criado com carinho por você mesmo, com ajuda de um robô ninja 🥷🔧




🧠 **_variables.css**
Função: Centraliza todas as variáveis globais de cor, fontes, espaçamento e sombras.
📌 O que colocar aqui?
Paleta de cores do site
Fontes padrão
Tamanhos de espaçamento (ex: --spacing-lg)
Sombras reutilizáveis
💡 Dica: Nunca escreva uma cor direto nos outros arquivos, use var(--nome) que está aqui.



🧱 **_base.css**
Função: Contém reset de estilos, tipografia básica e regras globais que se aplicam ao site inteiro.
📌 O que colocar aqui?
> *, html, body, h1 a h6, p, a, etc.
Fontes padrão
box-sizing, margens zeradas, estilo base dos textos
scroll-behavior, line-height, estilo global de links
💡 Dica: Este arquivo "limpa" e padroniza a base para que tudo o resto funcione certinho.



🧩 **_layout.css**
Função: Define a estrutura geral da página: como o conteúdo é distribuído.
📌 O que colocar aqui?
nav, footer, section
Grids principais
Padding/margem de seções
Layout de colunas, centralização
💡 Dica: Pense nesse arquivo como o que “monta o esqueleto” da sua página.



🧱 **_components.css**
Função: Estiliza componentes reutilizáveis, como cartões, botões, formulários, etc.
📌 O que colocar aqui?
.service-card, .skill-item, .timeline-item, .contact-info
Estilos de botão (button)
Estilos de formulário (input, textarea, select)
💡 Dica: Tudo que for um “bloco funcional” ou visual reutilizável entra aqui.



📱 **_responsive.css**
Função: Contém media queries que adaptam seu site a diferentes tamanhos de tela.
📌 O que colocar aqui?
@media (max-width: XXXpx) { ... }
Ajustes de grid, tamanho de fontes, visibilidade
Mudanças em padding/margin para mobile
💡 Dica: Só entra aqui o que muda com o tamanho da tela. Nada fixo.



🎞️ **_animations.css**
Função: Estilos para transições, animações, visibilidade e motion preferences.
📌 O que colocar aqui?
transition, transform, opacity, keyframes
Classes como .visible, .fade-in, .slide-up
@media (prefers-reduced-motion: ...)
💡 Dica: Use este arquivo para dar “vida” ao site com suavidade, respeitando acessibilidade.
