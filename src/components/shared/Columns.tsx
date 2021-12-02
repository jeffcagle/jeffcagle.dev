import * as React from 'react';
import styled from 'styled-components';

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
export const Row = ({ mt, mb, children }: RowProps) => (
  <RowItem mt={mt} mb={mb}>
    {children}
  </RowItem>
);

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
export const Column = ({ title, width = 100, children }: ColumnProps) => (
  <ColumnItem width={width}>
    {title && <h2>{title}</h2>}
    {children}
  </ColumnItem>
);

const ColumnItem = styled.div<ColumnProps>`
  width: ${props => `${props.width}%`};
  margin-bottom: 2rem;
  padding: 0 1rem;
`;
