import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface BtnContainerProps {
  centered?: boolean;
  mt?: number;
  mb?: number;
}

interface ButtonProps extends BtnContainerProps {
  type: 'primary' | 'secondary';
  to: string;
  children: React.ReactNode;
}

/**
 *
 * Display a Button component.
 *
 * @param type Button style type (primary || secondary).
 * @param to Destination path.
 * @param centered Optional center positioned button.
 * @param mt Optional top margin.
 * @param mb Optional bottom margin.
 * @returns A button element.
 */
function Button({ type, to, centered, mt, mb, children }: ButtonProps) {
  return (
    <BtnContainer centered={centered} mt={mt} mb={mb}>
      <Btn type={type} to={to}>
        {children}
      </Btn>
    </BtnContainer>
  );
}

const BtnContainer = styled.div<BtnContainerProps>`
  display: flex;
  justify-content: ${props => (props.centered ? 'center' : 'left')};
  margin-top: ${props => (props.mt ? `${props.mt}rem` : '0')};
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : '0')};
`;

const Btn = styled(Link)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.neutral100};

  ${props =>
    props.type === 'primary' &&
    `
    padding: 0.6rem 1.7rem;
    // border-radius: 10px;
    transition: .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);


    &:hover {
      padding: 0.6rem 2rem;
      background-color: ${props.theme.colors.accent3};
      letter-spacing: .1rem;
    }
  `}
`;

export default Button;
