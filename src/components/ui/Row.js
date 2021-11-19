import React from "react";
import styled from "styled-components";

const Row = ({ mt, mb, children }) => {
  return (
    <Item mt={mt} mb={mb}>
      {children}
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-top: ${(props) => (props.mt ? props.mt + "rem" : "0")};
  margin-bottom: ${(props) => (props.mb ? props.mb + "rem" : "0")};
`;

export default Row;
