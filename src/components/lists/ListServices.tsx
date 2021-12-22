import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Row, Column } from '../shared/Columns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faWordpress } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faImage,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

interface ServiceProps {
  id: string;
  frontmatter: {
    slug: string;
    shortTitle: string;
    summary: string;
  };
}

interface ListServicesProps {
  exclude?: string[];
  unstyled?: boolean;
}

/**
 *
 * Displays a list of services.
 *
 * @param {boolean} unstyled Add to retreive an unstyled list.
 * @returns A list of services.
 */
function ListServices({ exclude = [], unstyled = false }: ListServicesProps) {
  const { allMarkdownRemark } = useStaticQuery(query);
  // const services = allMarkdownRemark.nodes;

  const services = allMarkdownRemark.nodes.filter(
    (service: ServiceProps) => !exclude.includes(service.frontmatter.shortTitle)
  );

  if (unstyled) {
    return <>{handleServicesList(services)}</>;
  }

  return (
    <Row>
      {services.map((service: ServiceProps) => (
        <Column mediumWidth={50} largeWidth={50}>
          <Service
            to={`/services/${service.frontmatter.slug}`}
            title={service.frontmatter.shortTitle}
          >
            <Icon>
              <Circle className="grill">
                {handleIcon(service.frontmatter.shortTitle)}
              </Circle>
            </Icon>
            <Content>
              <Title>{service.frontmatter.shortTitle}</Title>
              <Summary>{service.frontmatter.summary}</Summary>
            </Content>
          </Service>
        </Column>
      ))}
    </Row>
  );
}

function handleIcon(service: string) {
  switch (service) {
    case 'Web Developer':
      return <FontAwesomeIcon icon={faLaptopCode} size="2x" />;
    case 'Design & UX':
      return <FontAwesomeIcon icon={faImage} size="2x" />;
    case 'HTML/CSS':
      return <FontAwesomeIcon icon={faHtml5} size="2x" />;
    case 'JavaScript':
      return <FontAwesomeIcon icon={faJs} size="2x" />;
    case 'WordPress':
      return <FontAwesomeIcon icon={faWordpress} size="2x" />;
    default:
      return <FontAwesomeIcon icon={faCode} size="2x" />;
  }
}

function handleServicesList(services: ServiceProps[]) {
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
}

const Service = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Icon = styled.div`
  display: flex;
  transition: 0.2s ease-in-out;
  min-width: 100px;
  width: 100px;
  height: 100px;
  overflow: hidden;
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${props => props.theme.colors.neutral600};
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.neutral300};
  transition: 0.5s transform cubic-bezier(0.75, 0.07, 0.44, 0.71),
    0.5s border ease-in-out, 0.5s color ease-in-out;

  svg {
    transition: 0.5s font-size ease-in-out;
  }

  ${Service}:hover & {
    transform: rotate(-25deg) rotateY(180deg);
    border: 2px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.neutral100};

    svg {
      font-size: 2.5rem;
    }
  }
`;

const Content = styled.div`
  padding: 0 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
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
  transition: 0.2s ease-in-out;

  ${Service}:hover & {
    color: ${props => props.theme.colors.neutral300};
  }
`;

export default ListServices;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { in: "services" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          shortTitle
          slug
          summary
          image {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 267
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
`;
