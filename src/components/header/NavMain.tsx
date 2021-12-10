import * as React from 'react';
import breakpoint from '../../styles/breakpoints';
import { Link } from 'gatsby';
import styled from 'styled-components';
import NavSub from './NavSub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';

interface MenuProps {
  menu: MenuItemProps[];
}

export interface MenuItemProps {
  id: string;
  name: string;
  slug: string;
  hasSubMenu: boolean;
}

/**
 *
 * Displays the main navigation menu.
 *
 * @param menu The main array of menu objects from mainMenu.json.
 * @returns The main menu.
 */
function NavMain({ menu }: MenuProps) {
  return (
    <Nav>
      <Menu>
        {menu.map((menuItem: MenuItemProps) => (
          <Item key={menuItem.id}>
            <Link
              to={`${menuItem.slug}`}
              activeClassName="active"
              partiallyActive
              className={menuItem.hasSubMenu ? 'hasSub' : ''}
              title={menuItem.name}
            >
              {menuItem.name}
            </Link>
            {menuItem.hasSubMenu && (
              <SubMenu>
                <NavSub parentSlug={`${menuItem.name.toLowerCase()}`} />
              </SubMenu>
            )}
          </Item>
        ))}
      </Menu>
      <MobileMenu>
        <Link to="#">
          <FontAwesomeIcon icon={faBars} size="2x" color="white" />
        </Link>
      </MobileMenu>
    </Nav>
  );
}

const Nav = styled.nav``;

const Menu = styled.ul`
  display: none;

  @media only screen and ${breakpoint.device.large} {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: initial;

  @media only screen and ${breakpoint.device.large} {
    display: none;
  }
`;

const SubMenu = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 0;
  right: 0;
`;

const Item = styled.li`
  & > a {
    color: rgba(255, 255, 255, 0.8);
    padding: 0 1rem;
    height: 86px;
    display: flex;
    align-items: center;
    position: relative;
    font-weight: bold;
    background-color: transparent;
    transition: 200ms ease;

    &:hover {
      color: ${props => props.theme.colors.neutral100};
    }

    &.active {
      color: ${props => props.theme.colors.primary};
      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));

      & + ${SubMenu} {
        opacity: 1;
        visibility: visible;
      }
    }

    /* &.hasSub.active:after {
      border-bottom: 12px solid ${props => props.theme.colors.neutral800};
    } */

    &.active:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 39%;
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 12px solid ${props => props.theme.colors.neutral800};
    }
  }
`;

export default NavMain;
