import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, GatsbyImageProps, getImage } from 'gatsby-plugin-image';
import Tools from '../components/devTools/Tools';
import { Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';

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

const Project = ({ data }: ProjectProps) => {
  const project = data.markdownRemark;

  return (
    <>
      <HeroBar py={2} hasSubMenu>
        <h1>{project.frontmatter.longTitle}</h1>
        <p>{project.frontmatter.summary}</p>
        <Box flex flexSpace mt={0.8} mb={0.5}>
          <Tools
            startText="Frontend: "
            items={project.frontmatter.frontendTools}
          />
          <Tools
            startText="Backend: "
            items={project.frontmatter.backendTools}
          />
        </Box>
      </HeroBar>
      <Box withContainer mt={3}>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </Box>
    </>
  );
};

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
