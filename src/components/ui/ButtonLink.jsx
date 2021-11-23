import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ButtonLink = ({ type, centered, mt, mb, to, buttonText }) => (
  <ButtonContainer centered={centered} mt={mt} mb={mb}>
    <Button type={type} to={to}>
      {buttonText}
    </Button>
  </ButtonContainer>
);

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string,
  centered: PropTypes.bool,
  mt: PropTypes.number,
  mb: PropTypes.number,
};

ButtonLink.defaultProps = {
  type: 'primary',
  centered: false,
  mt: 0,
  mb: 0,
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.centered ? 'center' : 'left')};
  margin-top: ${(props) => (props.mt ? `${props.mt}rem` : '0')};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : '0')};
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  background-color: ${(props) => props.theme.colorD};
  color: white;

  ${(props) =>
    props.type === 'primary' &&
    `
    padding: 0.6rem 1.4rem;
    border-radius: 10px;
    transition: .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);


    &:hover {
      padding: 0.6rem 2rem;
      background-color: ${props.theme.colorC};
      letter-spacing: .1rem;
    }
  `}
`;

export default ButtonLink;
