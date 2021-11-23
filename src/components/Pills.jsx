import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Pill from './Pill';

const Pills = ({ startText, items, unstyled, column, marginB }) => {
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
  const tools = allTools.filter((tool) => items.includes(tool.name));
  const toolsLength = tools.length - 1;

  if (unstyled) {
    return (
      <>
        <strong>{startText}</strong>&nbsp;
        {tools.map((tool, index) => (
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
    <PillsContainer marginB={marginB} column={column}>
      <StartText column={column}>{startText}</StartText>
      <PillGroup>
        {tools.map((tool) => (
          <Pill key={tool.id} name={tool.name} color={tool.pillColor} />
        ))}
      </PillGroup>
    </PillsContainer>
  );
};

Pills.propTypes = {
  startText: PropTypes.string,
  unstyled: PropTypes.bool,
  column: PropTypes.bool,
  marginB: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Pills.defaultProps = {
  startText: '',
  unstyled: false,
  column: false,
  marginB: 0,
};

const PillsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.marginB};

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
