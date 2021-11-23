import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SiteLink } from './ui';

const ListServices = () => {
  const data = useStaticQuery(graphql`
    query getServices {
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
          }
        }
      }
    }
  `);

  const services = data.allMarkdownRemark.nodes;

  return (
    <ul>
      {services.map((service) => (
        <li key={service.id}>
          <SiteLink
            to={`/services/${service.frontmatter.slug}`}
            title={service.frontmatter.shortTitle}
          >
            {service.frontmatter.shortTitle}
          </SiteLink>
        </li>
      ))}
    </ul>
  );
};

export default ListServices;
