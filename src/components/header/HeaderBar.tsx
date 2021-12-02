import * as React from 'react';
import styled from 'styled-components';
import NavFloating from './NavFloating';
import NavMain from './NavMain';
import Brand from './Brand';
import { Box } from '../shared/Ui';
import { MenuItemProps } from './NavMain';

interface HeaderBarProps {
  menu: MenuItemProps[];
}

/**
 *
 * The main header bar.
 *
 * @param menu An array of menu objects from mainMenu.json.
 * @returns The website header element.
 */
const HeaderBar = ({ menu }: HeaderBarProps) => (
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

const Header = styled.header`
  position: relative;
  background: ${props =>
    `linear-gradient(-45deg, ${props.theme.colorA}, ${props.theme.colorB}, ${props.theme.colorC}, ${props.theme.colorD})`};
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

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
`;

export default HeaderBar;
