import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const SiteLink = ({
  to,
  className,
  title,
  activeClass,
  showActive,
  children,
}) => {
  return (
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
