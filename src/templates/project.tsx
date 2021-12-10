import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ListTools from '../components/lists/ListTools';
import { Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

interface ProjectProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        shortTitle: string;
        longTitle: string;
        summary: string;
        frontendTools: string[];
        backendTools: string[];
      };
    };
  };
}

function Project({ data }: ProjectProps) {
  const project = data.markdownRemark;

  return (
    <>
      <HeroBar py={2} hasSubMenu>
        <h1 style={{ textAlign: 'center', marginBottom: 0 }}>
          {project.frontmatter.longTitle}
        </h1>
        <p style={{ textAlign: 'center' }}>{project.frontmatter.summary}</p>
        <ToolIntro>
          <BuiltWith>Built With:</BuiltWith>
          <Hover>
            - Hover <FontAwesomeIcon icon={faHandPointer} size="xs" /> items for
            more info -
          </Hover>
        </ToolIntro>
        <Box flex flexSpace mt={0.8} mb={0.5}>
          <ListTools
            startText="Frontend: "
            items={project.frontmatter.frontendTools}
          />
          <ListTools
            startText="Backend: "
            items={project.frontmatter.backendTools}
          />
        </Box>
      </HeroBar>
      <Box withContainer mt={3}>
        <div
          className="project"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </Box>
    </>
  );
}

const ToolIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BuiltWith = styled.span`
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  border-top: 1px dashed #5e5e5e;
  padding-top: 1.5rem;
  margin-top: 2rem;
  width: 200px;
  font-style: italic;
`;

const Hover = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 0.8rem;
  /* font-style: italic; */
  font-size: 0.9rem;
  color: ${props => props.theme.colors.neutral400};

  svg {
    color: ${props => props.theme.colors.neutral300};
    margin-bottom: 0.05rem;
  }
`;

export const query = graphql`
  query Project($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        shortTitle
        longTitle
        summary
        frontendTools
        backendTools
      }
    }
  }
`;

export default Project;
