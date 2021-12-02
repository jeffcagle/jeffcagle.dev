import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

interface ToolsContainerProps {
  mb?: number;
}

interface ToolListProps extends ToolsContainerProps {
  startText?: string;
  items: string[];
  unstyled?: boolean;
}

interface ToolProps {
  id: string;
  name: string;
  pillColor: string;
}

interface SingleToolColor {
  color: string;
}

/**
 *
 * Display a list of tools.
 *
 * @param startText Optionally display text before the list of tools.
 * @param items A list of apps & programming languages to be added to tools.
 * @param unstyled Optionally return the tools in text format.
 * @param mb Optional bottom margin.
 * @returns A list of tools, styled or unstyled.
 */
const ListTools = ({ startText, items, unstyled, mb }: ToolListProps) => {
  const data = useStaticQuery(graphql`
    query getTools {
      allToolsJson {
        nodes {
          id
          name
          pillColor
        }
      }
    }
  `);

  const tools = data.allToolsJson.nodes.filter((tool: ToolProps) =>
    items.includes(tool.name)
  );

  const lastToolIndex = tools.length - 1;

  if (unstyled) {
    return (
      <>
        <strong>{startText}</strong>&nbsp;
        {tools.map((tool: ToolProps, index: number) => (
          <span key={tool.id}>
            {index === lastToolIndex && <>&amp; </>}
            {tool.name}
            {index !== lastToolIndex && <>,&nbsp;</>}
          </span>
        ))}
      </>
    );
  }

  return (
    <ToolsContainer mb={mb}>
      <StartText>{startText}</StartText>
      <ToolGroup>
        {tools.map((tool: ToolProps) => (
          <SingleTool key={tool.id} color={tool.pillColor}>
            {tool.name}
          </SingleTool>
        ))}
      </ToolGroup>
    </ToolsContainer>
  );
};

const ToolsContainer = styled.div<ToolsContainerProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : '0')};
`;

const StartText = styled.div`
  margin-right: 0.8rem;
  font-weight: bold;
  font-style: italic;
  color: ${props => props.theme.neutralLight};
`;

const ToolGroup = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const SingleTool = styled.li<SingleToolColor>`
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

export default ListTools;
