import * as React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Column } from '../shared/Columns';
import { GatsbyImage, getImage, GatsbyImageProps } from 'gatsby-plugin-image';
import ToolTip from '../shared/ToolTip';
import ListTools from './ListTools';
import { Link } from 'gatsby';

interface ProjectProps {
  id: string;
  frontmatter: {
    slug: string;
    shortTitle: string;
    summary: string;
    coverImage: GatsbyImageProps['image'];
    frontendTools: string[];
    backendTools: string[];
  };
}

interface ListProjectsProps {
  type?: 'list' | 'grid';
  limit?: 1 | 2 | 3 | 5 | 6 | 7 | 8;
  exclude?: string;
}

function ListProjects({
  type = 'grid',
  limit = 8,
  exclude = '',
}: ListProjectsProps) {
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
            coverImage {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  height: 200
                  transformOptions: { cropFocus: CENTER }
                  quality: 50
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);

  let projects = data.allMarkdownRemark.nodes;

  if (exclude) {
    projects = data.allMarkdownRemark.nodes.filter(
      (project: ProjectProps) => project.frontmatter.shortTitle !== exclude
    );
  }

  const handleToolTip = (frontend: string[], backend: string[]) => {
    const tools = [...frontend, ...backend];
    return <ListTools startText="Built with:" unstyled items={tools} />;
  };

  if (type === 'list') {
    return (
      <ul>
        {projects.map(
          (project: ProjectProps, index: number) =>
            index < limit && (
              <li key={project.id}>
                <Link
                  to={`/projects/${project.frontmatter.slug}`}
                  title={project.frontmatter.shortTitle}
                >
                  {project.frontmatter.shortTitle}
                </Link>
              </li>
            )
        )}
      </ul>
    );
  }

  if (type === 'grid') {
    return (
      <Row>
        {projects.map(
          (project: ProjectProps, index: number) =>
            index < limit && (
              <Column width={33.333} key={project.id}>
                <Project
                  className="card"
                  to={`/projects/${project.frontmatter.slug}`}
                >
                  <Image>
                    <GatsbyImage
                      to={project.frontmatter.slug}
                      // @ts-ignore
                      image={getImage(project.frontmatter.coverImage)}
                      alt={project.frontmatter.shortTitle}
                    />
                  </Image>
                  <Content>
                    <Title>{project.frontmatter.shortTitle}</Title>
                    <Summary>{project.frontmatter.summary}</Summary>
                  </Content>
                  <Tooltip position="top" delay={0.3}>
                    {handleToolTip(
                      project.frontmatter.frontendTools,
                      project.frontmatter.backendTools
                    )}
                  </Tooltip>
                </Project>
              </Column>
            )
        )}
      </Row>
    );
  }

  return null;
}

const Project = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Image = styled.div`
  display: flex;
  transition: 0.2s ease-in-out;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 1.5rem 1.5rem 1.1rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.neutral300};
  transition: 0.2s ease-in-out;

  ${Project}:hover & {
    color: ${props => props.theme.colors.primary};
  }
`;

const Summary = styled.span`
  font-style: italic;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.neutral400};
  line-height: 1.7rem;
  margin-top: 0.2rem;
`;

const Tooltip = styled(ToolTip)`
  ${Project}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export default ListProjects;
