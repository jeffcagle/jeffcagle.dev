import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import breakpoint from '../../styles/breakpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MenuItemProps } from './NavMain';

interface MenuStateProps {
  open: boolean;
}

interface NavMobileProps {
  menu: MenuItemProps[];
}

function NavMobile({ menu }: NavMobileProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <MobileMenu>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {handleMenuIcon(menuOpen)}
      </MenuButton>
      <Menu open={menuOpen} ref={menuRef}>
        {menu.map(menuItem => (
          <MenuLink
            key={menuItem.id}
            onClick={() => setMenuOpen(false)}
            to={`${menuItem.slug}`}
          >
            {menuItem.name}
          </MenuLink>
        ))}
      </Menu>
    </MobileMenu>
  );
}

function handleMenuIcon(menuOpen: boolean) {
  return (
    <>
      {menuOpen ? (
        <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
      ) : (
        <FontAwesomeIcon icon={faBars} size="2x" color="white" />
      )}
    </>
  );
}

const MobileMenu = styled.div`
  display: initial;

  @media only screen and ${breakpoint.device.large} {
    display: none;
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div<MenuStateProps>`
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  width: 100%;
  left: 0;
  right: 0;
  top: 86px;
  padding: 0 1rem;
  color: ${props => props.theme.colors.neutral700};
  max-height: 0;
  background-color: ${props => props.theme.colors.neutral100};
  visibility: hidden;
  opacity: 0;
  transition: 0.2s ease-in-out;
  transform-origin: top;
  transform: scaleY(0);

  ${props =>
    props.open &&
    css`
      visibility: visible;
      opacity: 1;
      max-height: 500px;
      transform: scaleY(1);
    `}
`;

const MenuLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  display: block;
  padding: 1rem 0;
  border-bottom: 1px dashed ${props => props.theme.colors.neutral400};
  transition: 0.2s color ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.neutral700};
  }

  &:last-of-type {
    border-bottom: 0;
  }
`;

export default NavMobile;
