import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavSub from './NavSub';
import { SiteLink } from './ui';

const NavMain = ({ menu }) => (
  <nav>
    <Menu>
      {menu.map((menuItem) => (
        <Item key={menuItem.id}>
          <SiteLink
            to={`${menuItem.slug}`}
            activeClass="active"
            showActive
            className={menuItem.hasSubMenu ? 'hasSub' : ''}
            title={menuItem.name}
          >
            {menuItem.name}
          </SiteLink>
          {menuItem.hasSubMenu && (
            <SubMenu>
              <NavSub parentSlug={`${menuItem.name.toLowerCase()}`} />
            </SubMenu>
          )}
        </Item>
      ))}
    </Menu>
  </nav>
);

NavMain.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      hasSubMenu: PropTypes.bool,
    })
  ),
};

NavMain.defaultProps = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      hasSubMenu: PropTypes.bool,
    })
  ),
};

const Menu = styled.ul`
  display: flex;
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
      color: ${(props) => props.theme.white};
      /* background-color: ${(props) => props.theme.blueAccent}; */
    }

    &.active {
      color: ${(props) => props.theme.js};
      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));

      & + ${SubMenu} {
        opacity: 1;
        visibility: visible;
      }
    }

    &.hasSub.active:after {
      border-bottom: 12px solid ${(props) => props.theme.neutralDark};
    }

    &.active:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 39%;
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 12px solid ${(props) => props.theme.neutralMed};
    }
  }
`;

export default NavMain;
