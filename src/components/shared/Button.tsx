import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import breakpoint from '../../styles/breakpoints';

interface BtnContainerProps {
  centered?: boolean;
  mt?: number;
  mb?: number;
}

interface BtnExternalProps {
  variant: 'primary' | 'secondary';
  href: string;
  disabled?: boolean;
  externalLink?: boolean;
  children: React.ReactNode;
}

interface ButtonProps extends BtnContainerProps {
  variant: 'primary' | 'secondary';
  to: string;
  disabled?: boolean;
  externalLink?: boolean;
  children: React.ReactNode;
}

/**
 *
 * Display a Button component.
 *
 * @param variant Button style variant (primary || secondary).
 * @param to Destination path.
 * @param centered Optional center positioned button.
 * @param mt Optional top margin.
 * @param mb Optional bottom margin.
 * @returns A button element.
 */
function Button({
  variant,
  to,
  disabled = false,
  centered,
  mt,
  mb,
  externalLink = false,
  children,
}: ButtonProps) {
  if (centered) {
    return (
      <BtnContainer centered={centered} mt={mt} mb={mb}>
        <Btn variant={variant} to={to} disabled={disabled}>
          {children}
        </Btn>
      </BtnContainer>
    );
  }

  if (externalLink) {
    return (
      <BtnExternal
        variant={variant}
        href={to}
        target="_blank"
        disabled={disabled}
      >
        {children}
      </BtnExternal>
    );
  }

  return (
    <Btn variant={variant} to={to} disabled={disabled}>
      {children}
    </Btn>
  );
}

const BtnContainer = styled.div<BtnContainerProps>`
  display: flex;
  justify-content: ${props => (props.centered ? 'center' : 'left')};
  margin-top: ${props => (props.mt ? `${props.mt}rem` : '0')};
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : '0')};
`;

const Btn = styled(Link)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  padding: 0.6rem 1.7rem;
  transition: 0.2s ease-in-out;
  border: none;
  outline: none;
  font-size: 1rem;
  line-height: 1.8;
  cursor: pointer;

  @media only screen and ${breakpoint.device.small} {
    display: flex;
    width: 100%;
    margin: 0;
  }

  svg {
    margin-right: 0.5rem;
  }

  background-color: ${props =>
    props.variant === 'primary'
      ? props.theme.buttons.primary.bgColor
      : props.theme.buttons.secondary.bgColor};
  color: ${props => props.theme.buttons.primary.color};

  &:hover {
    background-color: ${props =>
      props.variant === 'primary'
        ? props.theme.buttons.primary.bgColorHover
        : props.theme.buttons.secondary.bgColorHover};
    color: ${props => props.theme.buttons.primary.color};
    letter-spacing: 0.03rem;
    border-radius: 5px;
  }

  ${props =>
    props.disabled &&
    `
    pointer-events: none;
    background-color:${props.theme.colors.neutral600};
    color:${props.theme.colors.neutral500};
    text-decoration: line-through;
  `}
`;

const BtnExternal = styled.a<BtnExternalProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  padding: 0.6rem 1.7rem;
  transition: 0.2s ease-in-out;
  border: none;
  outline: none;
  font-size: 1rem;
  line-height: 1.8;
  cursor: pointer;

  @media only screen and ${breakpoint.device.small} {
    display: flex;
    width: 100%;
    margin: 0;
  }

  svg {
    margin-right: 0.5rem;
  }

  background-color: ${props =>
    props.variant === 'primary'
      ? props.theme.buttons.primary.bgColor
      : props.theme.buttons.secondary.bgColor};
  color: ${props =>
    props.variant === 'primary'
      ? props.theme.buttons.primary.color
      : props.theme.buttons.secondary.color};

  &:hover {
    background-color: ${props =>
      props.variant === 'primary'
        ? props.theme.buttons.primary.bgColorHover
        : props.theme.buttons.secondary.bgColorHover};
    color: ${props => props.theme.buttons.primary.color};
    letter-spacing: 0.03rem;
    border-radius: 5px;
  }

  ${props =>
    props.disabled &&
    `
    pointer-events: none;
    background-color:${props.theme.colors.neutral600};
    color:${props.theme.colors.neutral500};
    text-decoration: line-through;
  `}
`;

export default Button;
