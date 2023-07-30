# <img src="./img/1f4c5.png" width="30" height="30" alt="calendar" /> Gerenciador de Hábitos usando Next.js 13

Aprenda a usar o poder da versão 13 do Next.js construindo um gerenciador de hábitos!

## 🔨 Requisitos

- Utilize o Next.js na versão mais atual para construir a estrutura do projeto e gerenciar as rotas da aplicação.
- Desenvolva a aplicação mobile-first.

### Página inicial

- Implemente a funcionalidade de exibir uma lista de hábitos.
  - Cada hábito deve mostrar os últimos 7 dias, com um check se o hábito foi feito, um "x" se ele não foi feito ou uma bolinha cinza se ele ainda não foi marcado.
- Implemente um botão para excluir um hábito na lista de hábitos.
- Ao clicar em um hábito, você deverá redirecionar para uma nova rota que exibe os detalhes do hábito.
- Implemente um botão para adicionar hábitos que leva a uma nova página de cadastro de hábito.
- Exiba uma mensagem quando não houverem hábitos cadastrados

### Página de cadastro de hábitos

- Crie um formulário para a pessoa cadastrar o nome do hábito
- Implemente um botão para submeter
- Implemente um botão para cancelar o cadastro e voltar para a página inicial.

### Página de detalhes do hábito

- Mostre o nome do hábito e um botão de voltar para a tela inicial
- Mostre um calendário com os hábitos
  - A pessoa pode navegar entre os meses e verá, a cada dia do mês, um check se o hábito foi feito, um "x" se ele não foi feito ou uma bolinha cinza se ele ainda não foi marcado.
  - Quando a pessoa clica em um dia, o hábito deve ser marcado ou desmarcado.
- Faça o deploy da sua aplicação e submeta no [Codante](https://codante.io/mini-projetos/gerenciador-de-habitos-nextjs)

## 🔨 Desafios extras para quem quer ir além

- Implemente uma funcionalidade de "streak", ou seja, a quantidade de dias consecutivos que o hábito foi feito.
- Implemente um login e cadastro de usuários.

## 🔍 Dicas

- Simplifique o backend da aplicação. O foco principal é usar o Next no front, então não precisa criar uma API muito robusta. [Uma dica é utilizar o Redis da própria Vercel, que se chama KV.](https://vercel.com/docs/storage/vercel-kv)
- Estude sobre React 18 e Server Components.
- Utilize Server Actions
- Utilize um framework CSS, como Tailwind, para ganhar agilidade na implementação.

## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Mas sinta-se livre para utilizar a criatividade e fazer o seu próprio design.

🔗 [Link do Figma](https://www.figma.com/file/suvmja6210ggZOO6Cpehjl/Mini-Projetos---Codante.io?type=design&node-id=1533-149&mode=design&t=tptjmPrWwZzLsv9Z-0)

![Group 20](https://github.com/codante-io/mp-gerenciador-habitos-next/assets/6475893/72c62cf3-f8da-4540-923e-0b064e2e0961)

## 👉🏽 Sobre esse mini-projeto

### Tecnologias sugeridas

**NextJS 13**

- `Server Components`
- `Data fetching`
- `Server Actions`
- `Nested layouts`
- `Routes`
- `pages.tsx`
- `layout.tsx`
- `error.tsx`
- `loading.tsx`
- `Vercel KV`
- `Redis`

### Pré-requisitos

- `React`
- `HTML, CSS, JavaScript`

## ❓ FAQ

### Posso utilizar outros frameworks ou outras versões do Next?

Esse projeto foi pensado para praticar a versão 13 do NextJS, utilizando React 18 com Server Components. Por isso, a resolução oficial será feita dessa forma.

Sinta-se livre para fazer de outras maneiras, caso você esteja estudando outros conteúdos. Mas considere que a solução oficial poderá não cobrir isso.

### Posso usar features experimentais do Next?

Sim. Algumas features ainda estão em alpha e portanto não são recomendadas para uso em produção. Como esse se trata de um projeto para aprendizado, você pode aproveitar para experimentar essas features.
