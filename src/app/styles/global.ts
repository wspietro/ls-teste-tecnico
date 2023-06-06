import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(p) => p.theme.colors.white};
    -webkit-font-smoothing: antialiased;
    block-size: 100vh;
    display: flex;
    flex-direction: column;
  }
`
