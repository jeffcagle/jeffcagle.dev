import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Column, GridCard } from './ui';
import Pills from './Pills';

const ListProjectsGrid = ({ excludeDev, mt, mb }) => {
  const data = useStaticQuery(graphql`
    query getProjects {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { in: "projects" } } }
        sort: { fields: [frontmatter___order], order: ASC }
        limit: 8
      ) {
        nodes {
          id
          frontmatter {
            shortTitle
            summary
            slug
            frontendTools
            backendTools
            mainImg {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  height: 200
                  formats: [AUTO, WEBP, AVIF]
                  quality: 50
                )
              }
            }
          }
        }
      }
    }
  `);

  let projects = data.allMarkdownRemark.nodes;

  if (excludeDev) {
    projects = projects.filter(
      (project) => project.frontmatter.shortTitle !== 'JeffCagle.dev'
    );
  }

  const handleToolTip = (frontend, backend) => {
    const tools = [...frontend, ...backend];
    return <Pills startText="Built with:" unstyled items={tools} />;
  };

  return (
    <Row mt={mt} mb={mb}>
      {projects.map((project) => (
        <Column key={project.id} columnWidth={33.333} mb={2}>
          <GridCard
            to={`/projects/${project.frontmatter.slug}`}
            image={project.frontmatter.mainImg}
            imageAltText={project.frontmatter.shortTitle}
            title={project.frontmatter.shortTitle}
            summary={project.frontmatter.summary}
            tooltip={handleToolTip(
              project.frontmatter.frontendTools,
              project.frontmatter.backendTools
            )}
          />
        </Column>
      ))}
    </Row>
  );
};

ListProjectsGrid.propTypes = {
  excludeDev: PropTypes.bool,
  mt: PropTypes.number,
  mb: PropTypes.number,
};

ListProjectsGrid.defaultProps = {
  excludeDev: false,
  mt: 0,
  mb: 0,
};

export default ListProjectsGrid;
