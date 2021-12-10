import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from '../styles/breakpoints';
import GlobalStyle from '../styles/globalStyles';
import HeaderBar from '../components/header/HeaderBar';
import jcTheme from '../styles/theme';
import Footer from '../components/footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
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
}

const Main = styled.div`
  padding-bottom: 5rem;
  flex-grow: 1;

  @media only screen and ${breakpoint.device.small} {
    padding: 0 1rem;
  }
`;

const ScreenWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default Layout;
