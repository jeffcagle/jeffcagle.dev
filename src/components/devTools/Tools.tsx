import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Tool from './Tool';

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
const Tools = ({ startText, items, unstyled, mb }: ToolListProps) => {
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

  const allTools = data.allToolsJson.nodes;
  const tools = allTools.filter((tool: ToolProps) => items.includes(tool.name));
  const toolsLength = tools.length - 1;

  if (unstyled) {
    return (
      <>
        <strong>{startText}</strong>&nbsp;
        {tools.map((tool: ToolProps, index: number) => (
          <span key={tool.id}>
            {index === toolsLength && <span>&amp; </span>}
            {tool.name}
            {index !== toolsLength && ','}&nbsp;
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
          <Tool key={tool.id} name={tool.name} color={tool.pillColor} />
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

export default Tools;
