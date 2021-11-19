import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%; 
    font-size: 1rem;
    line-height: 1.8rem;
    min-height:100%;

  }

  body {
    background-color: ${(props) => props.theme.neutralDark};
    color: ${(props) => props.theme.whiteDark};
    font-family: ${(props) => props.theme.fontFamilyText};
    height:100vh;
    width:100%;
    margin:0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-wrap: break-word;
    font-weight: normal;
    font-kerning: normal;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.neutralLighter};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.neutralLight};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.js};
  }

  h1, h2, h3, h4 {
    color: ${(props) => props.theme.whiteMed};
    font-family: ${(props) => props.theme.fontFamilyText};
    text-rendering: optimizeLegibility;
    margin-top:0;
  }

  h1 {
    font-size: 2rem;
    line-height: 2.7rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }

  p {
    line-height: 1.8rem;
    margin:1rem 0;
  }

  a {
    text-decoration:none;
  }

  ul {
    list-style: none;
    margin:0;
    padding:0;
  }
`;

export default GlobalStyle;
