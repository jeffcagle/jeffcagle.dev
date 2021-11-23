import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavFloating from './NavFloating';
import NavMain from './NavMain';
import Brand from './Brand';
import { Box } from './ui';

const HeaderBar = ({ menu }) => (
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

HeaderBar.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      hasSubMenu: PropTypes.bool,
    })
  ),
};

HeaderBar.defaultProps = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      hasSubMenu: false,
    })
  ),
};

const Header = styled.header`
  position: relative;
  background: ${(props) =>
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

  /* .bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: ${(props) =>
    `linear-gradient(-60deg, ${props.theme.colorA} 50%, ${props.theme.js} 50%)`};
    bottom: 0;
    left: -50%;
    opacity: 0.5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
    height: 86px;
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 7s;
  }

  .bg3 {
    animation-duration: 5s;
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  } */
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: relative; */
`;

export default HeaderBar;
