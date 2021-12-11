import * as React from 'react';
import styled from 'styled-components';
import breakpoint from '../../styles/breakpoints';

interface RowProps {
  mt?: number;
  mb?: number;
  children?: any;
}

/**
 *
 * Create a Row for responsive Columns.
 *
 * @param mt Optional top margin.
 * @param mb Optional bottom margin.
 * @returns A row element.
 */
export function Row({ mt, mb, children }: RowProps) {
  return (
    <RowItem mt={mt} mb={mb}>
      {children}
    </RowItem>
  );
}

const RowItem = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-top: ${props => (props.mt ? `${props.mt}rem` : '0')};
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : '0')};
`;

interface ColumnProps {
  title?: string;
  mediumWidth?: number;
  largeWidth?: number;
  width?: number;
  children?: any;
}

/**
 *
 * Create a responsive column.
 *
 * @param width Optional width percentage. Default: 100.
 * @param title Optional h2 for the column.
 * @returns A column element.
 */
export function Column({
  title,
  width,
  mediumWidth,
  largeWidth,
  children,
}: ColumnProps) {
  return (
    <ColumnItem width={width} mediumWidth={mediumWidth} largeWidth={largeWidth}>
      {title && <h2>{title}</h2>}
      {children}
    </ColumnItem>
  );
}

const ColumnItem = styled.div<ColumnProps>`
  width: 100%;

  ${props =>
    props.mediumWidth &&
    `
  @media only screen and ${breakpoint.device.medium} {
    width: ${props.mediumWidth}%;
  }
  `}

  ${props =>
    props.largeWidth &&
    `
  @media only screen and ${breakpoint.device.large} {
    width: ${props.largeWidth}%;
  }
  `}

  margin-bottom: 2rem;
  padding: 0 1rem;
`;
