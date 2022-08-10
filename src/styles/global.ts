import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    border: none;
  }

  button {
    cursor: pointer;
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme.yellow};
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;
