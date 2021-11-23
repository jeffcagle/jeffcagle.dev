import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import HeaderBar from '../components/HeaderBar';
import jcTheme from '../styles/theme';
import Footer from '../components/Footer';

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

  Layout.propTypes = {
    children: PropTypes.element.isRequired,
  };

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
