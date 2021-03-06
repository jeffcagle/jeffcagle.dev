import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import breakpoint from '../../styles/breakpoints';
import NavFloating from './NavFloating';
import NavMain from './NavMain';
import Brand from './Brand';
import { Box } from '../shared/Ui';

/**
 *
 * The main header bar.
 *
 * @returns The website header element.
 */
function HeaderBar() {
  const { allMainMenuJson } = useStaticQuery(query);
  const menu = allMainMenuJson.nodes;

  return (
    <Header>
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
      <Box withContainer>
        <HeaderContainer>
          <NavFloating menu={menu} />
          <Brand />
          <NavMain menu={menu} />
        </HeaderContainer>
      </Box>
    </Header>
  );
}

const Header = styled.header`
  position: relative;
  background: ${props =>
    `linear-gradient(-45deg, ${props.theme.colors.accent1}, ${props.theme.colors.accent2}, ${props.theme.colors.accent3}, ${props.theme.colors.secondary})`};
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @media only screen and ${breakpoint.device.small} {
    padding: 0 1rem;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86px;
  position: relative;
`;

export default HeaderBar;

const query = graphql`
  query {
    allMainMenuJson {
      nodes {
        id
        name
        slug
        hasSubMenu
      }
    }
  }
`;
