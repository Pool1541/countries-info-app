import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Ubuntu';
    font-weight: 300;
    src: url('/fonts/Ubuntu-Light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-weight: 400;
    src: url('/fonts/Ubuntu-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-weight: 500;
    src: url('/fonts/Ubuntu-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-weight: 700;
    src: url('/fonts/Ubuntu-Bold.woff2') format('woff2');
  }
    :root {
    --primary : #e3f4ff;
    --secondary: #9b5bf8;
    --error: #D20F46;
    --background : #676767;
    --background-hover: #7c7c7cff;
    --border-card: #76767645;
    --white: #FFFFFF;
    --text: #FFFFFF;
    --text-hover: #E4E4E4;
    --text-contrast: #4b5563;
    --text-contrast-transparent: #9ca3af; 
    --text-h-contrast: #111827;
    --accent: #ca78ff;
    --full-color-square: rgba(202, 120, 255, 0.3763480392156863);
    --light-color-square: rgba(202, 120, 255, 0.5763480392156863);
    --shadow-dark:29px 38px 34px -15px rgba(0, 0, 0, 0.28);
    --shadow-contrast: 19px 12px 38px -12px rgba(3, 34, 137, 0.57);
    --primary-transparent: #873bf650;
    --secondary-transparent: #9a5bf88e;
    --paragraph-size: 1.8rem;
    --heading3-size: 2.5rem;
    --heading2-size: 3rem;
    --heading1-size: 4rem;

    --h2-responsive: clamp(3rem, 4.5vw, 5rem);
    --h3-responsive: clamp(1.5rem, 2vw, 2rem);

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
    background-color: #e9b5846b;
    color: var(--tea-rose);
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
