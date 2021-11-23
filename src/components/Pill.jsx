import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pill = ({ name, color }) => <SinglePill color={color}>{name}</SinglePill>;

Pill.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const SinglePill = styled.li`
  background-color: ${(props) => props.theme[props.color]};
  transition: 200ms ease;
  color: ${(props) =>
    props.color === 'js' ? props.theme.yellowPillText : 'white'};
  border-radius: 5px;
  padding: 0.05rem 0.5rem;
  font-size: 1rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.neutralLighter};
    color: white;
  }
`;

export default Pill;
