// @ts-check

import * as React from 'react';
import styled from 'styled-components';

interface ToolTipWrapperProps {
  position: string;
  delay?: number;
  className?: string;
}

interface TooTipProps extends ToolTipWrapperProps {
  children: React.ReactNode;
}

/**
 *
 * Creates a tooltip.
 *
 * @param position Display on top, left, right, or bottom.
 * @param delay Optional delay, in seconds.
 * @param className Optional class for the tooltip.
 * @returns A tooltip element.
 */
const ToolTip = ({ position, delay = 0, className, children }: TooTipProps) => (
  <ToolTipWrapper position={position} delay={delay} className={className}>
    {children}
  </ToolTipWrapper>
);

const ToolTipWrapper = styled.div<ToolTipWrapperProps>`
  /* width: 250px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${props => props.theme.colors.neutral200};
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: ${props => props.theme.colors.neutral700};
  font-size: 0.8rem;
  line-height: 1.5;
  font-weight: normal;
  position: absolute;
  padding: 0.7rem;
  border-radius: 10px;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transition-property: opacity visibility;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  transition-delay: ${props => props.delay}s;

  ${props =>
    props.position === 'top' &&
    `
    bottom: 107%;
    width: 100%;
    left: 0;
    right: 0;
  `}

  ${props =>
    props.position === 'bottom' &&
    `
    top: 107%;
  `}

  ${props =>
    props.position === 'right' &&
    `
    left: 107%;
    top: 50%;
    transform: translateY(-50%);
  `}

  ${props =>
    props.position === 'left' &&
    `
    right: 107%;
    top: 50%;
    transform: translateY(-50%);
  `}

  &:before {
    content: '';
    position: absolute;

    ${props =>
      props.position === 'top' &&
      `
      left: 50%;
      transform: translateX(-50%);
      top: 99%;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid ${props.theme.colors.neutral200};
    `}

    ${props =>
      props.position === 'bottom' &&
      `
      left: 50%;
      transform: translateX(-50%);
      bottom: 99%;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid ${props.theme.colors.neutral200};
    `}

    ${props =>
      props.position === 'right' &&
      `
      top: 50%;
      transform: translateY(-50%);
      right: 99%;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid ${props.theme.colors.neutral200};
    `}

    ${props =>
      props.position === 'left' &&
      `
      top: 50%;
      transform: translateY(-50%);
      left: 99%;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid ${props.theme.colors.neutral200};
    `}
  }
`;

export default ToolTip;
