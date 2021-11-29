import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

interface ServiceProps {
  id: string;
  frontmatter: {
    slug: string;
    shortTitle: string;
  };
}

/**
 *
 * Displays a list of services.
 *
 * @returns An unordered list of services.
 */
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
      {services.map((service: ServiceProps) => (
        <li key={service.id}>
          <Link
            to={`/services/${service.frontmatter.slug}`}
            title={service.frontmatter.shortTitle}
          >
            {service.frontmatter.shortTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListServices;
