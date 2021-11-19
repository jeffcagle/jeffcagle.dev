import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { SiteLink } from "./ui";

const ListExperiments = () => {
  return (
    <ExperimentGroup>
      <Experiment>
        <SiteLink to="/" title="Chat App">
          <FontAwesomeIcon icon={faFlask} size="xs" /> Chat App
        </SiteLink>
      </Experiment>
      <Experiment>
        <SiteLink to="/" title="Experiment Two">
          <FontAwesomeIcon icon={faFlask} size="xs" /> Experiment Two
        </SiteLink>
      </Experiment>
      <Experiment>
        <SiteLink to="/" title="Experiment Three">
          <FontAwesomeIcon icon={faFlask} size="xs" /> Experiment Three
        </SiteLink>
      </Experiment>
    </ExperimentGroup>
  );
};

const ExperimentGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Experiment = styled.li`
  border-bottom: 1px dashed ${(props) => props.theme.border};

  a {
    padding: 0.2rem 0;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
      background-color: ${(props) => props.theme.neutralMed};
      padding-left: 0.5rem;
    }
  }

  svg {
    margin-right: 0.5rem;
    position: relative;
    bottom: 0.1rem;
    color: ${(props) => props.theme.whiteDark};
  }
`;

export default ListExperiments;
