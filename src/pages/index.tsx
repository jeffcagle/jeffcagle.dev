import * as React from 'react';
import styled from 'styled-components';
import ListTools from '../components/lists/ListTools';
import ListExperiments from '../components/lists/ListExperiments';
import ListPosts from '../components/lists/ListPosts';
import { Row, Column } from '../components/shared/Columns';
import Button from '../components/shared/Button';
import { Section, Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ListServices from '../components/lists/ListServices';
import ListProjects from '../components/lists/ListProjects';
import Seo from '../components/shared/Seo';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface IndexProps {
  data: {
    allDevJson: {
      nodes: [
        {
          name: string;
          titles: string[];
          homeCountry: string;
          toolsILove: string[];
          social: {
            gitHub: string;
            linkedIn: string;
          };
        }
      ];
    };
  };
}

function Index({ data }: IndexProps) {
  const dev = data.allDevJson.nodes[0];

  return (
    <>
      <Seo />
      <HeroBar flex>
        <HeroImage>
          {
            // @ts-ignore
            <GatsbyImage image={getImage(dev.photos[1])} alt={dev.name} />
          }
        </HeroImage>

        <Box pl={2}>
          <h1>Hi, I'm {dev.name}</h1>
          <p>
            I’m a frontend <span>{dev.titles[0]}</span> and{' '}
            <span>{dev.titles[1]}</span> from the {dev.homeCountry}.
          </p>
          <Box mt={0.8} mb={0.5}>
            <ListTools startText="I love: " items={dev.toolsILove} />
          </Box>
          <Box mt={1.5} mb={0.5}>
            <FindMe>
              <span>Find me on:</span>
              <Social href={dev.social.gitHub} target="_blank">
                <FontAwesomeIcon icon={faGithub} size="1x" /> GitHub
              </Social>
              &middot;
              <Social href={dev.social.linkedIn} target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="1x" /> LinkedIn
              </Social>
            </FindMe>
          </Box>
        </Box>
      </HeroBar>
      <Section h2="My Services" centered>
        <ListServices exclude={['WordPress']} />
        <Button variant="primary" centered to="/services" mt={1}>
          All Services
        </Button>
      </Section>
      <Section h2="Current Projects" centered>
        <ListProjects exclude={['JeffCagle.dev']} />
        <Button variant="primary" centered to="/projects" mt={1}>
          All Projects
        </Button>
      </Section>
      <Section>
        <Row>
          <Column title="Experiments" mediumWidth={50}>
            <ListExperiments />
          </Column>
          <Column title="Dev Blog" mediumWidth={50}>
            <ListPosts />
            <Link to="/blog">All Posts &raquo;</Link>
          </Column>
        </Row>
      </Section>
    </>
  );
}

const HeroImage = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 200px;
  border-radius: 100px;
  overflow: hidden;
  border: 5px solid ${props => props.theme.colors.neutral550};
`;

const FindMe = styled.div`
  font-weight: bold;
  border-top: 1px dashed ${props => props.theme.colors.neutral550};
  padding-top: 0.8rem;

  span {
    color: ${props => props.theme.colors.neutral500};
    font-style: italic;
    margin-right: 0.4rem;
  }
`;

const Social = styled.a`
  margin: 0 0.5rem;
`;

export default Index;

export const data = graphql`
  query {
    allDevJson {
      nodes {
        name
        titles
        homeCountry
        toolsILove
        photos {
          childImageSharp {
            gatsbyImageData(
              width: 200
              height: 200
              transformOptions: { cropFocus: CENTER }
              quality: 50
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        social {
          gitHub
          linkedIn
        }
      }
    }
  }
`;
