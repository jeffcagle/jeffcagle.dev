import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Column = ({ columnTitle, columnWidth, mb, children }) => (
  <Item columnWidth={columnWidth} mb={mb}>
    {columnTitle && <h2>{columnTitle}</h2>}
    {children}
  </Item>
);

Column.propTypes = {
  columnTitle: PropTypes.string,
  columnWidth: PropTypes.number,
  mb: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.any]),
};

Column.defaultProps = {
  columnTitle: '',
  columnWidth: 100,
  mb: 0,
  children: null,
};

const Item = styled.div`
  width: ${(props) => `${props.columnWidth}%`};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : '0')};
  padding: 0 1rem;
`;

export default Column;
