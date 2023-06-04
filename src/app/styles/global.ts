import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px red;
  }

  body {
    background-color: ${(props) => props.theme.colors['light-gray']};
    -webkit-font-smoothing: antialiased;
  }
`
