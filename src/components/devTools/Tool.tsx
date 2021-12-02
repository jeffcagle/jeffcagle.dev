import * as React from 'react';
import styled from 'styled-components';

interface SingleToolProps {
  color: string;
}

interface ToolProps extends SingleToolProps {
  name: string;
}

/**
 *s
 * Displays a tool.
 *
 * @param name The tool name.
 * @param color The color for the tool.
 * @returns A single tool in pill format.
 */
const Tool = ({ name, color }: ToolProps) => (
  <SingleTool color={color}>{name}</SingleTool>
);

const SingleTool = styled.li<SingleToolProps>`
  background-color: ${props => props.theme[props.color]};
  transition: 200ms ease;
  color: ${props =>
    props.color === 'js' ? props.theme.yellowToolText : 'white'};
  border-radius: 5px;
  padding: 0.05rem 0.5rem;
  font-size: 1rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${props => props.theme.neutralLighter};
    color: white;
  }
`;

export default Tool;
