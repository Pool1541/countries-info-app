import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Ubuntu';
    font-weight: 300;
    src: url('./fonts/Ubuntu-Light.woff2');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-weight: 400;
    src: url('./fonts/Ubuntu-Regular.woff2');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-weight: 500;
    src: url('./fonts/Ubuntu-Medium.woff2');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-weight: 700;
    src: url('./fonts/Ubuntu-Bold.woff2');
  }
    :root {
    --primary : #e3f4ff;
    --background : #676767;
    --background-hover: #7c7c7cff;
    --white: #FFFFFF;
    --text: #FFFFFF;
    --accent: #009cff;
    --paragraph-size: 1.8rem;
    --heading3-size: 2.5rem;
    --heading2-size: 3rem;
    --heading1-size: 4rem; 
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Ubuntu'
  }

  h1 {
    font-size: var(--heading1-size);
  }

  h2 {
    font-size: var(--heading2-size);
  }

  h3 {
    font-size: var(--heading3-size);
  }

  html {
    font-size: 62.5%;
  }

  *::selection {
    background-color: #84d2e96b;
  }

  body {
    font-weight: 400;
    min-height: 100vh;
    color: var(--text-contrast);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input {
    border: none;
    background-color: unset;
    outline: none;
  }

  a, button {
    cursor: pointer;
    font-size: var(--paragraph-size);
  }

  a, button, div, span {
    font-size: var(--paragraph-size);
  }

  ul {
    list-style: none;
  }

  img {
    pointer-events: none;
  }
`;

export default GlobalStyle;
