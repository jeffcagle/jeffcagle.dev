import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { GatsbyImageProps } from 'gatsby-plugin-image';
import ListTools from '../components/lists/ListTools';
import { Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';
import Seo from '../components/shared/Seo';
import Button from '../components/shared/Button';
import PrevNextItem from '../components/shared/PrevNextItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faComments } from '@fortawesome/free-solid-svg-icons';

interface ServiceProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        shortTitle: string;
        longTitle: string;
        summary: string;
        tools: string[];
      };
    };
    next: PrevNextProps;
    previous: PrevNextProps;
  };
}

interface ServiceItemProps {
  frontmatter: {
    shortTitle: string;
  };
}

interface PrevNextProps {
  frontmatter: {
    shortTitle: string;
    slug: string;
    image: GatsbyImageProps['image'];
  };
}

function Service({ data }: ServiceProps) {
  const service = data.markdownRemark;
  const { previous, next } = data;

  return (
    <>
      <Seo
        title={service.frontmatter.longTitle}
        description={service.frontmatter.summary}
      />
      <HeroBar py={2} hasSubMenu>
        <h1>{service.frontmatter.longTitle}</h1>
        <p>{service.frontmatter.summary}</p>
        <Box flex mt={0.8} mb={0.5}>
          <ListTools startText="My tools: " items={service.frontmatter.tools} />
        </Box>
      </HeroBar>
      <Box withContainer mt={3}>
        <div
          className="service"
          dangerouslySetInnerHTML={{ __html: service.html }}
        />
      </Box>
      <Box withContainer mt={3}>
        <Explore>{handleProText(service)}</Explore>
        <MoreButtons>
          <Button variant="primary" to="/contact">
            <FontAwesomeIcon icon={faComments} size="1x" /> Get In Touch
          </Button>
          <Button variant="secondary" to="/projects">
            Recent Projects
          </Button>
        </MoreButtons>
      </Box>
      <PrevNextItem
        slugBase="services"
        type="Service"
        previous={previous}
        next={next}
      />
    </>
  );
}

function handleProText(service: ServiceItemProps) {
  if (service.frontmatter.shortTitle === 'Web Developer') {
    return 'Need a Web Developer?';
  }

  if (service.frontmatter.shortTitle === 'HTML/CSS') {
    return 'Need an HTML/CSS professional?';
  }

  return `Need a ${service.frontmatter.shortTitle} professional?`;
}

const Explore = styled.span`
  display: flex;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.neutral300};
  border-top: 3px solid ${props => props.theme.colors.neutral550};
  padding-top: 1rem;
`;

const MoreButtons = styled.div`
  margin-bottom: 2rem;

  a:first-of-type {
    margin-right: 2rem;
  }
`;

export const query = graphql`
  query Service($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        shortTitle
        longTitle
        summary
        tools
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        longTitle
        slug
        image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              width: 60
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        longTitle
        slug
        image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              width: 60
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;

export default Service;
