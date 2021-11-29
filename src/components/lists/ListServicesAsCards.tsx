import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Column } from '../shared/Columns';
import Card from '../shared/Card';

interface ServiceProps {
  id: string;
  frontmatter: {
    slug: string;
    shortTitle: string;
    summary: string;
  };
}

/**
 *
 * Displays a list of services.
 *
 * @returns A list of services in card format.
 */
const ListServicesAsCards = () => {
  const data = useStaticQuery(graphql`
    query getServicesWithSummary {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { in: "services" } } }
        sort: { fields: [frontmatter___order], order: ASC }
        limit: 1000
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

  return (
    <Row>
      {services.map((service: ServiceProps) => (
        <Column key={service.id} width={33.333}>
          <Card
            to={`/services/${service.frontmatter.slug}`}
            title={service.frontmatter.shortTitle}
            summary={service.frontmatter.summary}
          />
        </Column>
      ))}
    </Row>
  );
};

export default ListServicesAsCards;
