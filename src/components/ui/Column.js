import React from "react";
import styled from "styled-components";

const Column = ({ columnTitle, columnWidth, mb, children }) => {
  return (
    <Item columnWidth={columnWidth} mb={mb}>
      {columnTitle && <h2>{columnTitle}</h2>}
      {children}
    </Item>
  );
};

const Item = styled.div`
  width: ${(props) => (props.columnWidth ? props.columnWidth + "%" : "100%")};
  margin-bottom: ${(props) => (props.mb ? props.mb + "rem" : "0")};
  padding: 0 1rem;
`;

export default Column;
