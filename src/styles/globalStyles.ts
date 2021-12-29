import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%; 
    font-size: 1rem;
    line-height: 1.8rem;
    min-height:100%;
    
  }
  
  body {
    background-color: ${props => props.theme.colors.neutral800};
    color: ${props => props.theme.colors.neutral300};
    font-family: ${props => props.theme.fonts.content};
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
    background: ${props => props.theme.colors.neutral400};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.neutral500};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary};
  }

  h1, h2, h3, h4 {
    color: ${props => props.theme.colors.neutral200};
    font-family: ${props => props.theme.fonts.title};
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
    color: ${props => props.theme.colors.neutral300};
    transition:.2s color ease-in-out;

    &:hover {
    color: ${props => props.theme.colors.primary};
    }
  }

  ul {
    list-style: none;
    margin:0;
    padding:0;
  }

  .project, .post, .service {
    a {
      color: ${props => props.theme.colors.primary}
    }

    h2 {
      margin-top:3rem;
    }
  }

  .card {
    cursor: pointer;
    background-color: ${props => props.theme.colors.neutral700};
    border-bottom: .4rem solid transparent;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    &:hover {
      border-bottom: .4rem solid ${props => props.theme.colors.secondary};
      top: -.4rem;
    }
  }

  .grill {
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.neutral800} 46%,
      transparent 50%
    ),
    linear-gradient(
      180deg,
      transparent 50%,
      ${props => props.theme.colors.neutral800} 54%
    ),
    ${props => props.theme.colors.neutral700};
    background-size: 5px 5px;
  }

  blockquote {
    background: ${props => props.theme.colors.neutral700};
    color: ${props => props.theme.colors.neutral300};
    font-size:1.6rem;
    font-style: italic;
    font-weight:bold;
    text-align:center;
    margin:2rem 0;
    padding:1rem;
    border-radius:5px;

    p {
      line-height:2.2rem;
    }

    cite {
      font-size:1rem;
      color: ${props => props.theme.colors.neutral400};
      font-style: normal;
      font-weight: normal;
    }
  }

  pre {
    background-color: ${props => props.theme.colors.neutral700};
    border: 1px dashed ${props => props.theme.colors.neutral550};
    padding:2rem;
    border-radius:5px;
    margin:2rem 0;

    code {
      color: ${props => props.theme.colors.neutral400};
    }
  }
`;

export default GlobalStyle;
