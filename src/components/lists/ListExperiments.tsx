import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';

interface ExperimentProps {
  id: string;
  name: string;
  url: string;
}

/**
 *
 * Displays a list of experiments.
 *
 * @returns An unordered list of experiments.
 */
function ListExperiments() {
  const { allExperimentsJson } = useStaticQuery(query);
  const experiments = allExperimentsJson.nodes;

  return (
    <ExperimentGroup>
      {experiments.map((experiment: ExperimentProps) => (
        <Experiment key={experiment.id}>
          <a
            href={experiment.url}
            title="Chat App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFlask} size="xs" /> {experiment.name}
          </a>
        </Experiment>
      ))}
    </ExperimentGroup>
  );
}

const ExperimentGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Experiment = styled.li`
  border-bottom: 1px dashed ${props => props.theme.colors.neutral550};

  a {
    color: ${props => props.theme.colors.neutral400};
    transition: 200ms ease;
    padding: 0.2rem 0;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
      color: ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.neutral700};
      padding-left: 0.5rem;
    }
  }

  svg {
    margin-right: 0.5rem;
    position: relative;
    bottom: 0.1rem;
    color: ${props => props.theme.colors.neutral300};
  }
`;

export default ListExperiments;

const query = graphql`
  query {
    allExperimentsJson {
      nodes {
        id
        name
        url
      }
    }
  }
`;
