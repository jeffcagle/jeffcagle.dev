import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Card from '../shared/Card';
import { Row, Column } from '../shared/Columns';
import Tools from '../devTools/Tools';

interface ListProjectsProps {
  excludeDev?: boolean;
  mt?: number;
  mb?: number;
}

interface ProjectProps {
  id: string;
  frontmatter: {
    slug: string;
    shortTitle: string;
    summary: string;
    coverImage: string;
    frontendTools: string[];
    backendTools: string[];
  };
}

/**
 *
 * Displays a list of projects.
 *
 * @param excludeDev Optionally exclude this website.
 * @param mt Optional top margin.
 * @param mb Optional bottom margin.
 * @returns A list of projects in card format.
 */
const ListProjectsAsCards = ({ excludeDev, mt, mb }: ListProjectsProps) => {
  const data = useStaticQuery(graphql`
    query getProjectsWithImage {
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
            coverImage {
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
      (project: ProjectProps) =>
        project.frontmatter.shortTitle !== 'JeffCagle.dev'
    );
  }

  const handleToolTip = (frontend: string[], backend: string[]) => {
    const tools = [...frontend, ...backend];
    return <Tools startText="Built with:" unstyled items={tools} />;
  };

  return (
    <Row mt={mt} mb={mb}>
      {projects.map((project: ProjectProps) => (
        <Column key={project.id} width={33.333}>
          <Card
            to={`/projects/${project.frontmatter.slug}`}
            image={project.frontmatter.coverImage}
            alt={project.frontmatter.shortTitle}
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

export default ListProjectsAsCards;
