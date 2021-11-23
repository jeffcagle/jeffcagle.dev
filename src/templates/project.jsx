import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Pills from '../components/Pills';
import Hero from '../components/Hero';
import { Box } from '../components/ui';

const Project = ({ data }) => {
  const project = data.markdownRemark;

  return (
    <>
      <Hero
        hasSubMenu
        py={2}
        heroTitle={project.frontmatter.longTitle}
        heroSummary={project.frontmatter.summary}
      >
        <Box flex flexSpace mt={0.8} mb={0.5}>
          <Pills
            startText="Frontend: "
            items={project.frontmatter.frontendTools}
          />
          <Pills
            startText="Backend: "
            items={project.frontmatter.backendTools}
          />
        </Box>
      </Hero>
      <Box withContainer mt={3}>
        <GatsbyImage
          image={getImage(project.frontmatter.mainImg)}
          alt={project.frontmatter.longTitle}
        />
      </Box>
      <Box withContainer mt={3}>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </Box>
    </>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        backendTools: PropTypes.arrayOf(PropTypes.string),
        frontendTools: PropTypes.arrayOf(PropTypes.string),
        longTitle: PropTypes.string,
        shortTitle: PropTypes.string,
        summary: PropTypes.string,
        mainImg: PropTypes.oneOfType([PropTypes.object]),
      }),
      html: PropTypes.string,
    }),
  }).isRequired,
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
        mainImg {
          childImageSharp {
            gatsbyImageData(
              width: 928
              formats: [AUTO, WEBP, AVIF]
              quality: 50
            )
          }
        }
      }
    }
  }
`;

export default Project;
