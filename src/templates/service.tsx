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
import { faComments, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import breakpoint from '../styles/breakpoints';

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
        <h1 style={{ textAlign: 'center', marginBottom: 0 }}>
          {service.frontmatter.longTitle}
        </h1>
        <p style={{ textAlign: 'center' }}>{service.frontmatter.summary}</p>
      </HeroBar>
      <ToolWrapper>
        <Box withContainer>
          <ToolIntro>
            <BuiltWith>{`My ${service.frontmatter.shortTitle} tools: `}</BuiltWith>
            <Hover>
              - Hover <FontAwesomeIcon icon={faHandPointer} size="xs" /> items
              for more info -
            </Hover>
          </ToolIntro>
          <Box flex justifyCenter mt={0.8} mb={0.5}>
            <ListTools items={service.frontmatter.tools} />
          </Box>
        </Box>
      </ToolWrapper>
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

const ToolWrapper = styled.div`
  background: linear-gradient(
      90deg,
      ${props => props.theme.colors.neutral800} 46%,
      transparent 50%
    ),
    linear-gradient(
      180deg,
      transparent 50%,
      ${props => props.theme.colors.neutral800} 54%
    ),
    ${props => props.theme.colors.neutral700};
  background-size: 5px 5px;
  border-bottom: 2px solid ${props => props.theme.colors.neutral700};
  border-top: 3px solid ${props => props.theme.colors.neutral800};
  padding: 1.5rem 0;
`;

const ToolIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BuiltWith = styled.span`
  display: block;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  width: 200px;
  font-style: italic;
`;

const Hover = styled.span`
  display: block;
  text-align: center;
  /* margin-bottom: 0.5rem; */
  /* font-style: italic; */
  font-size: 0.9rem;
  color: ${props => props.theme.colors.neutral500};

  svg {
    color: ${props => props.theme.colors.neutral400};
    margin-bottom: 0.05rem;
  }
`;

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
    @media only screen and ${breakpoint.device.small} {
      margin-bottom: 2rem;
    }

    @media only screen and ${breakpoint.device.medium} {
      margin-right: 2rem;
    }
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
