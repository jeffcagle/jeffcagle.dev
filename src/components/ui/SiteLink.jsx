import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SiteLink = ({
  to,
  className,
  title,
  activeClass,
  showActive,
  children,
}) => (
  <Item
    to={to}
    className={className}
    title={title}
    activeClassName={activeClass}
    partiallyActive={showActive}
  >
    {children}
  </Item>
);

SiteLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  activeClass: PropTypes.string,
  showActive: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.any]),
};

SiteLink.defaultProps = {
  className: null,
  activeClass: null,
  showActive: false,
  children: null,
};

const Item = styled(Link)`
  color: ${(props) => props.theme.neutralLighter};
  transition: 200ms ease;

  &:hover {
    color: ${(props) => props.theme.js};
  }

  &.active {
    color: ${(props) => props.theme.js};
  }
`;

export default SiteLink;
