import React from "react";
import styled from "styled-components";
import Pill from "./Pill";
import { useStaticQuery, graphql } from "gatsby";

/**
 *
 * Get a list of tools in styled HTML pills.
 *
 * @param {Object} props
 * @param {string} props.startText The text to be displayed before the row of pills.
 * @param {Array.<string>} props.items The array of pills to make.
 * @returns {HTMLElement} A list of tools in an HTML pill.
 */
const Pills = ({ startText, items, unstyled, small, column, marginB }) => {
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
  const tools = allTools.filter((tool) => items?.includes(tool.name));
  const toolsLength = tools.length - 1;

  if (unstyled) {
    return (
      <>
        {tools.map((tool, index) => (
          <span key={tool.id}>
            {index === toolsLength && <span>&amp; </span>}
            {tool.name}
            {index !== toolsLength && ","}&nbsp;
          </span>
        ))}
      </>
    );
  }

  return (
    <>
      {items && (
        <PillsContainer marginB={marginB} column={column}>
          <StartText column={column}>{startText}</StartText>
          <PillGroup>
            {tools.map((tool) => (
              <Pill
                key={tool.id}
                name={tool.name}
                color={tool.pillColor}
                small={small}
              />
            ))}
          </PillGroup>
        </PillsContainer>
      )}
    </>
  );
};

const PillsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.marginB ? props.marginB + "rem" : "0")};

  ${(props) =>
    props.column &&
    `
    flex-direction: column;
  `}
`;

const StartText = styled.div`
  margin-right: 0.8rem;
  font-weight: bold;
  font-style: italic;
  color: ${(props) => props.theme.neutralLight};

  ${(props) =>
    props.column &&
    `
    margin-bottom:.5rem;
  `}
`;

const PillGroup = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export default Pills;
