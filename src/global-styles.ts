import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --bg: #F4F5F9;
    --text: #42567A;
  }

html,
  body {
    margin: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: var(--text);
    background-color: var(--bg);
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-variant-numeric: lining-nums proportional-nums;
    line-height: 1.5rem;
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: var(--text);
  }
}
`
