import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = ({ mt, mb, children }) => (
  <Item mt={mt} mb={mb}>
    {children}
  </Item>
);

Row.propTypes = {
  mt: PropTypes.number,
  mb: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.any]),
};

Row.defaultProps = {
  mt: 0,
  mb: 0,
  children: null,
};

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-top: ${(props) => `${props.mt}rem`};
  margin-bottom: ${(props) => `${props.mb}rem`};
`;

export default Row;
