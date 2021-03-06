import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
// import { GatsbyImageProps } from 'gatsby-plugin-image';
import ListTools from '../components/lists/ListTools';
import { Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import Seo from '../components/shared/Seo';
import PrevNextItem from '../components/shared/PrevNextItem';
import Button from '../components/shared/Button';
import { faChrome, faGithub } from '@fortawesome/free-brands-svg-icons';
import breakpoint from '../styles/breakpoints';

function Project({ data }: Templates.Project) {
  const project = data.markdownRemark;
  const { previous, next } = data;

  return (
    <>
      <Seo
        title={project.frontmatter.longTitle}
        description={project.frontmatter.summary}
      />
      <HeroBar py={2} hasSubMenu>
        <h1 style={{ textAlign: 'center', marginBottom: 0 }}>
          {project.frontmatter.longTitle}
        </h1>
        <p style={{ textAlign: 'center' }}>{project.frontmatter.summary}</p>
      </HeroBar>
      <ToolWrapper className="grill">
        <Box withContainer>
          <ToolIntro>
            <BuiltWith>Built With:</BuiltWith>
            <Hover>
              - Hover <FontAwesomeIcon icon={faHandPointer} size="xs" /> items
              for more info -
            </Hover>
          </ToolIntro>
          <Box flex flexSpace mt={0.8} mb={0.5}>
            <ListTools
              startText="Frontend: "
              items={project.frontmatter.frontendTools}
            />
            <ListTools
              startText="Backend: "
              items={project.frontmatter.backendTools}
            />
          </Box>
        </Box>
      </ToolWrapper>
      <Box withContainer mt={3}>
        <div
          className="project"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </Box>
      <Box withContainer mt={3}>
        <Explore>
          {!project.frontmatter.codeUnavailable ||
          !project.frontmatter.siteUnavailable
            ? 'Explore Further!'
            : 'Coming Soon!'}
        </Explore>
        <MoreButtons>
          <Button
            externalLink
            variant="primary"
            to={project.frontmatter.codeUrl}
            disabled={project.frontmatter.codeUnavailable}
          >
            <FontAwesomeIcon icon={faGithub} size="1x" /> Project Code
          </Button>
          <Button
            externalLink
            variant="secondary"
            to={project.frontmatter.siteUrl}
            disabled={project.frontmatter.siteUnavailable}
          >
            <FontAwesomeIcon icon={faChrome} size="1x" /> Live Site
          </Button>
        </MoreButtons>
      </Box>
      <PrevNextItem
        slugBase="projects"
        type="Project"
        previous={previous}
        next={next}
      />
    </>
  );
}

const ToolWrapper = styled.div`
  padding: 1.5rem 0;
  border-bottom: 2px solid ${props => props.theme.colors.neutral700};
  border-top: 3px solid ${props => props.theme.colors.neutral800};
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

  @media only screen and ${breakpoint.device.medium} {
    display: flex;
    align-items: center;
  }

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
  query Project($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        shortTitle
        longTitle
        summary
        frontendTools
        backendTools
        codeUrl
        codeUnavailable
        siteUrl
        siteUnavailable
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

export default Project;
