import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ListTools from '../components/lists/ListTools';
import { Box, Section } from '../components/shared/Ui';
import { Row, Column } from '../components/shared/Columns';
import ListBooks from '../components/lists/ListBooks';
import Seo from '../components/shared/Seo';

function About({ data }: About.Me) {
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
              I am a freelance{' '}
              <Link to="/services/freelance-javascript-developer">
                JavaScript Developer
              </Link>{' '}
              and{' '}
              <Link to="/services/freelance-ux-designer-usa">UX Designer</Link>{' '}
              from the USA who has been working in the industry for more than 15
              years.
            </p>
            <p>
              I love learning the latest libraries, languages, and frameworks,
              experimenting with new tools, and building cool apps.
            </p>
            <p>
              I have a strong interest in networking, cybersecurity, and systems
              architecture. I like to build virtual testing labs at home to
              break and discover new things.
            </p>
            <p>I am partial to Linux - specifically Kali and Ubuntu.</p>
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
            'Ubuntu',
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
