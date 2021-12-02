import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCode,
  faLaptopCode,
  faBlog,
  faUserAstronaut,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';
import { MenuItemProps } from './NavMain';

interface MenuProps {
  menu: MenuItemProps[];
}

/**
 *
 * Displays the floating navigation menu.
 *
 * @param menu The main array of menu objects from mainMenu.json.
 * @returns The floating menu.
 */
const NavFloating = ({ menu }: MenuProps) => {
  const [visibile, setVisibile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisibile(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FontAwesomeIcon icon={faCode} />;
      case 1:
        return <FontAwesomeIcon icon={faLaptopCode} />;
      case 2:
        return <FontAwesomeIcon icon={faBlog} />;
      case 3:
        return <FontAwesomeIcon icon={faUserAstronaut} />;
      case 4:
        return <FontAwesomeIcon icon={faIdCard} />;
      default:
        return <FontAwesomeIcon icon={faCode} />;
    }
  };

  return (
    <FloatingNav>
      <Nav>
        <Menu className={visibile ? 'animateIn' : ''}>
          <MenuItem>
            <MenuLink to="/">
              <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </MenuLink>
          </MenuItem>

          {menu.map((menuItem: MenuItemProps, index: number) => (
            <MenuItem key={menuItem.id}>
              <MenuLink to={menuItem.slug}>
                {handleMenuIcon(index)} <span>{menuItem.name}</span>
              </MenuLink>
            </MenuItem>
          ))}
        </Menu>
      </Nav>
    </FloatingNav>
  );
};

const FloatingNav = styled.div`
  top: 30vh;
  left: 50%;
  margin-left: -650px;
  position: fixed;
`;

const Nav = styled.nav`
  border-radius: 5px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: 0;
  transition: 900ms ease;

  &.animateIn {
    opacity: 1;

    li {
      opacity: 0;
      animation-name: animateIn;
      animation-duration: 1s;
      animation-fill-mode: forwards;

      &:nth-child(2) {
        animation-delay: 0.1s;
      }

      &:nth-child(3) {
        animation-delay: 0.2s;
      }

      &:nth-child(4) {
        animation-delay: 0.3s;
      }

      &:nth-child(5) {
        animation-delay: 0.4s;
      }

      &:nth-child(6) {
        animation-delay: 0.5s;
      }

      @keyframes animateIn {
        from {
          opacity: 0;
          transform: translate3d(-200%, 0, 0);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }
    }
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.neutralMed};
  color: ${props => props.theme.neutralLighter};
  padding: 0.2rem 1rem;
  height: 50px;
  width: 50px;
  max-width: 50px;
  border-radius: 25px;
  transition: 200ms ease;
  position: relative;
  font-weight: bold;

  span {
    display: none;
  }

  svg {
    color: ${props => props.theme.neutralLighter};
  }

  &:hover {
    width: auto;
    max-width: 150px;
    justify-content: flex-start;

    span {
      opacity: 0.8;
      display: block;
      margin-left: 0.6rem;
    }
  }
`;

const MenuItem = styled.li`
  margin-bottom: 0.3rem;

  &:nth-child(1) {
    ${MenuLink}:hover {
      background-color: ${props => props.theme.colorD};
      color: ${props => props.theme.white};

      svg {
        color: ${props => props.theme.white};
        justify-self: left;
      }
    }
  }

  &:nth-child(2) {
    ${MenuLink}:hover {
      background-color: ${props => props.theme.colorA};
      color: ${props => props.theme.white};

      svg {
        color: ${props => props.theme.white};
        justify-self: left;
      }
    }
  }

  &:nth-child(3) {
    ${MenuLink}:hover {
      background-color: ${props => props.theme.js};
      color: ${props => props.theme.yellowToolText};

      svg {
        color: ${props => props.theme.yellowToolText};
        justify-self: left;
      }
    }
  }

  &:nth-child(4) {
    ${MenuLink}:hover {
      background-color: ${props => props.theme.colorD};
      color: ${props => props.theme.white};

      svg {
        color: ${props => props.theme.white};
        justify-self: left;
      }
    }
  }

  &:nth-child(5) {
    ${MenuLink}:hover {
      background-color: ${props => props.theme.colorA};
      color: ${props => props.theme.white};

      svg {
        color: ${props => props.theme.white};
        justify-self: left;
      }
    }
  }

  &:nth-child(6) {
    ${MenuLink}:hover {
      background-color: ${props => props.theme.js};
      color: ${props => props.theme.yellowToolText};

      svg {
        color: ${props => props.theme.yellowToolText};
        justify-self: left;
      }
    }
  }
`;

export default NavFloating;
