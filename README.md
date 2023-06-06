
<h1 align="center" style="color: rgba(68, 131, 97, 1);">Teste Técnico Lacrei Saúde</h1>

<p align="center">
  <a href="#-tecnologias-e-bibliotecas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>
</p>

<br>

## ✏️ Tecnologias e bibliotecas

Para a construção do projeto, foram utilizadas as seguintes tecnologias:

- [React.js](https://nextjs.org/)
- [Next.js](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)

<br>

---

## ✨ NextJs 13

O projeto foi construído em cima do Next.Js 13, o que implica em mudanças notáveis na arquitetura quando comparado com o Next.Js 12. Entre as principais alterações encontramos:
- O novo diretório **App** subistitui o diretório **pages**, funcionando de forma muito similar como anteriormente. As rotas ainda são baseadas em arquivos aninhados, mas agora a UI particular de uma rota é definida por **page.tsx**;
- O arquivo **layout.tsx** substitui os arquivos **_app.tsx** e **_document.tsx**. Além de realizar configurações, ele aplica o layout comum para as rotas da aplicação, no nosso caso, header e footer;
- O **App** router é construído em cima dos *React Server Components* (React 18). Isso significa que as bibliotecas CSS-In-Js (que precisam de Runtime Js) não possuem suporte nos server components (que passaram a ser padrão no Next). Assim, uma configuração extra para *styled-components* pode ser encontrada dentro do diretóro **lib**. Além disso, os arquivos que utilizam do *styled-components* possuem *use-client* definidos no topo, para podermos utilizar **Client Components** nessa nova versão;
- A nova versão do NextJs introduz o módulo *next/font* para otimização de fonte. A configuração pode ser encontrada no arquivo **layout.tsx**;
- Por utilizar **Client Components**, não foi possível configurar os metadados das páginas, por isso a ausência do título nos navegadores.


---

## 📄 Como executar
Para executar o projeto, rode o seguinte código no terminal após clonar o mesmo:

```bash

$ npm install

$ npm run build

$ npm run dev

$ npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br>

---
