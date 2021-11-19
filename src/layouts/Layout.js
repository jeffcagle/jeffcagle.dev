import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import HeaderBar from "../components/HeaderBar";
import jcTheme from "../styles/theme";
import Footer from "../components/Footer";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query getMenu {
      allMainMenuJson {
        nodes {
          id
          name
          slug
          hasSubMenu
        }
      }
    }
  `);

  const menu = data.allMainMenuJson.nodes;

  return (
    <ThemeProvider theme={jcTheme}>
      <GlobalStyle />
      <ScreenWrap>
        <HeaderBar menu={menu} />
        <Main>{children}</Main>
        <Footer />
      </ScreenWrap>
    </ThemeProvider>
  );
};

const Main = styled.div`
  padding-bottom: 5rem;
  flex-grow: 1;
`;

const ScreenWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default Layout;
