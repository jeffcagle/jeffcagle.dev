import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Column, GridCard } from "./ui";

/**
 * Fetch a list of projects, and optionally add top/bottom margins or exclude the JeffCagle.dev project.
 *
 * @param {Object} props
 * @param {boolean} [props.excludeDev] Add this param to exclude the JeffCagle.dev project.
 * @param {number} [props.mt] Add a top margin.
 * @param {number} [props.mb] Add a bottom margin.
 * @returns {HTMLElement} An HTML list of projects.
 */
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
      (project) => project.frontmatter.shortTitle !== "JeffCagle.dev"
    );
  }

  const handleToolTip = (frontend, backend) => {
    const tools = [...frontend, ...backend];
    return `Built with ${tools.map((tool) => " " + tool)}`;
  };

  return (
    <Row mt={mt} mb={mb}>
      {projects.map((project) => (
        <Column key={project.id} columnWidth={33.333} mb={2}>
          <GridCard
            to={`/projects/${project.frontmatter.slug}/`}
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

export default ListProjectsGrid;
