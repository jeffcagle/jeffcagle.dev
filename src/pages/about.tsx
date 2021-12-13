import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ListTools from '../components/lists/ListTools';
import { Box, Section } from '../components/shared/Ui';
import { Row, Column } from '../components/shared/Columns';
import ListBooks from '../components/lists/ListBooks';
import Seo from '../components/shared/Seo';

interface AboutProps {
  data: {
    allDevJson: {
      nodes: [
        {
          name: string;
          photos: string[];
        }
      ];
    };
  };
}

function About({ data }: AboutProps) {
  const dev = data.allDevJson.nodes[0];

  return (
    <>
      <Seo
        title="About Me"
        description="I am a freelance modern JavaScript Developer &amp; Designer from the USA who has been working in the industry for more than 15 years."
      />
      <Section>
        <h1>About</h1>
        <Row>
          <Column mediumWidth={50}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque.
            </p>
          </Column>
          <Column mediumWidth={50}>
            <Box flex justifyRight>
              {
                // @ts-ignore
                <GatsbyImage image={getImage(dev.photos[0])} alt={dev.name} />
              }
            </Box>
          </Column>
        </Row>
      </Section>

      <Section h2="Tech I Like">
        <ListTools
          items={[
            'JavaScript',
            'React',
            'Next.js',
            'Gatsby',
            'TypeScript',
            'Python',
            'Figma',
            'Linux',
            'VSCode',
            'GraphQL',
            'CSS3',
            'SASS',
          ]}
        />
      </Section>

      <Section h2="Recent Reads">
        <ListBooks />
      </Section>
    </>
  );
}

export default About;

export const data = graphql`
  query {
    allDevJson {
      nodes {
        name
        photos {
          childImageSharp {
            gatsbyImageData(
              height: 300
              width: 300
              transformOptions: { cropFocus: NORTH }
              quality: 50
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
