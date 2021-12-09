import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Row, Column } from '../shared/Columns';

interface ServiceProps {
  id: string;
  frontmatter: {
    slug: string;
    shortTitle: string;
    summary: string;
  };
}

interface ListServicesProps {
  type?: 'list' | 'grid';
  limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

/**
 *
 * Displays a list of services.
 *
 * @param {boolean} unstyled Add prop to retreive an unstyled list.
 * @returns A list of services.
 */
function ListServices({ type = 'grid', limit = 8 }: ListServicesProps) {
  const data = useStaticQuery(graphql`
    query getServices {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { in: "services" } } }
        sort: { fields: [frontmatter___order], order: ASC }
        limit: 8
      ) {
        nodes {
          id
          frontmatter {
            shortTitle
            slug
            summary
          }
        }
      }
    }
  `);

  const services = data.allMarkdownRemark.nodes;

  if (type === 'list') {
    return (
      <ul>
        {services.map(
          (service: ServiceProps, index: number) =>
            index < limit && (
              <li key={service.id}>
                <Link
                  to={`/services/${service.frontmatter.slug}`}
                  title={service.frontmatter.shortTitle}
                >
                  {service.frontmatter.shortTitle}
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
        {services.map(
          (service: ServiceProps, index: number) =>
            index < limit && (
              <Column key={service.id} width={33.333}>
                <Service
                  className="card"
                  to={`/services/${service.frontmatter.slug}`}
                  title={service.frontmatter.shortTitle}
                >
                  <Title>{service.frontmatter.shortTitle}</Title>
                  <Summary>{service.frontmatter.summary}</Summary>
                </Service>
              </Column>
            )
        )}
      </Row>
    );
  }

  return null;
}

const Service = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1.5rem 1.1rem 1.5rem;
`;

const Title = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.neutral300};
  transition: 0.2s ease-in-out;

  ${Service}:hover & {
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

export default ListServices;
