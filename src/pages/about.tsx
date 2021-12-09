import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import ListTools from '../components/lists/ListTools';
import { Box, Section } from '../components/shared/Ui';
import { Row, Column } from '../components/shared/Columns';
import ListBooks from '../components/lists/ListBooks';

function About() {
  return (
    <>
      <Section>
        <h1>About</h1>
        <Row>
          <Column width={50}>
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
          <Column width={50}>
            <Box flex justifyRight>
              <ProfileImage>
                <StaticImage
                  src="../images/jeff_cagle.jpg"
                  alt="Jeff Cagle - Web Developer"
                />
              </ProfileImage>
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

      <Section h2="Books I Like">
        <ListBooks />
      </Section>
    </>
  );
}

const ProfileImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  overflow: hidden;
  border: 10px solid ${props => props.theme.colors.neutral700};
`;

export default About;
