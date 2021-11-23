import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Column, GridCard } from "./ui";

const ListServicesGrid = () => {
  const data = useStaticQuery(graphql`
    query getMyServices {
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
      {services.map((service) => (
        <Column key={service.id} columnWidth={33.333} mb={2}>
          <GridCard
            to={`/services/${service.frontmatter.slug}`}
            title={service.frontmatter.shortTitle}
            summary={service.frontmatter.summary}
          />
        </Column>
      ))}
    </Row>
  );
};

export default ListServicesGrid;
