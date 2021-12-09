import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
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
  desc: string;
  toolColor: string;
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
function ListTools({ startText, items, unstyled, mb }: ToolListProps) {
  const data = useStaticQuery(graphql`
    query getTools {
      allToolsJson {
        nodes {
          id
          name
          desc
          toolColor
        }
      }
    }
  `);

  const tools = data.allToolsJson.nodes.filter((tool: ToolProps) =>
    items.includes(tool.name)
  );

  const lastToolIndex = tools.length - 1;

  const handleToolColor = (colorName: string) => {
    const themeContext = React.useContext(ThemeContext);
    // @ts-ignore
    return themeContext.colors[colorName];
  };

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
      {startText && <StartText>{startText}</StartText>}
      <ToolGroup>
        {tools.map((tool: ToolProps) => (
          <SingleTool
            key={tool.id}
            color={handleToolColor(`${tool.toolColor}`)}
          >
            {tool.name}
            <ToolDetails>
              <ToolName>{tool.name}</ToolName>
              <ToolDesc>{tool.desc}</ToolDesc>
            </ToolDetails>
          </SingleTool>
        ))}
      </ToolGroup>
    </ToolsContainer>
  );
}

const ToolsContainer = styled.div<ToolsContainerProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : '0')};
`;

const StartText = styled.div`
  margin-right: 0.8rem;
  font-weight: bold;
  font-style: italic;
  color: ${props => props.theme.colors.neutral500};
`;

const ToolGroup = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const SingleTool = styled.li`
  background-color: ${props => props.color};
  transition: 200ms ease;
  color: ${props =>
    props.color === props.theme.colors.primary
      ? props.theme.colors.jsToolFont
      : props.theme.colors.neutral100};
  padding: 0.05rem 0.5rem;
  font-size: 1rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  font-weight: bold;
  position: relative;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.neutral100};
  }
`;

const ToolDetails = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 100%;
  left: 50%;
  width: 350px;
  height: auto;
  padding: 1rem;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s cubic-bezier(0.44, 0, 0.4, 1.29);
  transform: scaleY(0) translate(-50%, 20%);

  ${SingleTool}:hover & {
    background-color: ${props => props.theme.colors.neutral550};
    border-radius: 10px;
    visibility: visible;
    opacity: 1;
    transform: scaleY(1) translate(-50%, -1.2rem);
  }

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    width: 0;
    height: 0;
    border-top: 10px solid ${props => props.theme.colors.neutral550};
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
`;

const ToolName = styled.span`
  margin-bottom: 0.3rem;
  color: ${props => props.theme.colors.neutral200};
`;

const ToolDesc = styled.span`
  font-weight: normal;
  font-style: italic;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.neutral300};
`;

export default ListTools;
