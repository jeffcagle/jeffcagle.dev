import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import breakpoint from '../../styles/breakpoints';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, GatsbyImageProps, getImage } from 'gatsby-plugin-image';

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
  url: string;
  toolColor: string;
  icon: GatsbyImageProps['image'];
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
function ListTools({ startText = '', items, unstyled, mb }: ToolListProps) {
  const { allToolsJson } = useStaticQuery(query);
  const tools = allToolsJson.nodes.filter((tool: ToolProps) =>
    items.includes(tool.name)
  );

  if (unstyled) {
    return <>{handleToolsTextList(tools, startText)}</>;
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
              <ToolText>
                <ToolName>
                  {tool.icon && (
                    <Image>
                      <GatsbyImage
                        // @ts-ignore
                        image={getImage(tool.icon)}
                        alt={tool.name}
                      />
                    </Image>
                  )}
                  {tool.name}
                </ToolName>
                <ToolDesc>{tool.desc}</ToolDesc>
              </ToolText>
              <ToolUrl href={tool.url} target="_blank">
                {tool.url}
              </ToolUrl>
            </ToolDetails>
          </SingleTool>
        ))}
      </ToolGroup>
    </ToolsContainer>
  );
}

function handleToolsTextList(tools: ToolProps[], startText: string) {
  const lastToolIndex = tools.length - 1;

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

function handleToolColor(colorName: string) {
  const themeContext = React.useContext(ThemeContext);
  // @ts-ignore
  return themeContext.colors[colorName];
}

const ToolsContainer = styled.div<ToolsContainerProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : '0')};

  @media only screen and ${breakpoint.device.small} {
    flex-direction: column;
  }
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
  /* padding: 1rem; */
  visibility: hidden;
  opacity: 0;
  transition: 0.3s cubic-bezier(0.44, 0, 0.4, 1.29);
  transform: translate(-50%, 20%) scale(0);

  ${SingleTool}:hover & {
    background-color: ${props => props.theme.colors.neutral100};
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -1.2rem) scale(1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 99%;
    left: 50%;
    margin-left: -10px;
    width: 0;
    height: 0;
    border-top: 10px solid ${props => props.theme.colors.neutral150};
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
`;

const ToolText = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ToolName = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  color: ${props => props.theme.colors.neutral600};
`;

const Image = styled.div`
  margin-right: 0.5rem;
`;

const ToolDesc = styled.span`
  font-weight: normal;
  font-style: italic;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.neutral500};
`;

const ToolUrl = styled.a`
  border-top: 1px dashed ${props => props.theme.colors.neutral400};
  background-color: ${props => props.theme.colors.neutral150};
  color: ${props => props.theme.colors.secondary};
  padding: 0.5rem 1rem;
  /* font-weight: normal; */
  font-size: 0.9rem;
  border-radius: 0 0 10px 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.neutral700};
  }
`;

export default ListTools;

const query = graphql`
  query {
    allToolsJson {
      nodes {
        id
        name
        desc
        url
        toolColor
        icon {
          childImageSharp {
            gatsbyImageData(
              width: 25
              height: 25
              quality: 50
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
