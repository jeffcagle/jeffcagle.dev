import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import {
  GatsbyImage,
  GatsbyImageProps,
  getImage,
  StaticImage,
} from 'gatsby-plugin-image';
import ListTools from '../components/lists/ListTools';
import { Box, Section } from '../components/shared/Ui';
import { Row, Column } from '../components/shared/Columns';
import SocialLinks from '../components/shared/SocialLinks';
import HeroBar from '../components/shared/HeroBar';

interface AboutProps {
  data: {
    allBooksJson: {
      nodes: BookProps[];
    };
  };
}

interface BookProps {
  id: string;
  title: string;
  author: string;
  amazonUrl: string;
  image: GatsbyImageProps['image'];
}

const About = ({ data }: AboutProps) => {
  const books = data.allBooksJson.nodes;

  return (
    <>
      <HeroBar py={3}>
        <h1>About</h1>
        <p>This is the about page...</p>
      </HeroBar>
      <Section h2="Who Am I?">
        <Row>
          <Column width={50}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque.
            </p>
            <SocialLinks startText="Find Me On: " />
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

      <Section h2="Favorite Dev Tools">
        <ListTools
          startText="I love:"
          items={[
            'JavaScript',
            'TypeScript',
            'React',
            'Python',
            'Styled Components',
            'SASS',
            'Photoshop',
            'Figma',
          ]}
        />
      </Section>

      <Section h2="Some Books I Like">
        <Row>
          {books.map((book: BookProps) => (
            <Column width={20} key={book.id}>
              <BookItem href={book.amazonUrl}>
                {
                  // @ts-ignore
                  <BookImage image={getImage(book.image)} alt={book.title} />
                }
                <Title>{book.title}</Title>
              </BookItem>
            </Column>
          ))}
        </Row>
      </Section>
    </>
  );
};

About.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const ProfileImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  overflow: hidden;
  border: 10px solid ${props => props.theme.neutralMed};
`;

const BookItem = styled.a`
  padding: 0.7rem;
  color: ${props => props.theme.whiteDark};
  background: ${props => props.theme.neutralMed};
  border: 2px solid ${props => props.theme.neutralMed};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  transition: width 0.2s, height 0.2s, margin 0.2s,
    0.2s cubic-bezier(0.37, 0, 0.65, 1);

  &:hover {
    /* color: ${props => props.theme.white}; */
    color: ${props => props.theme.js};
    border: 2px solid ${props => props.theme.colorD};
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    width: 102%;
    height: 102%;
    margin-top: -2%;
    margin-left: -1%;
    margin-right: -1%;
  }

  .gatsby-image-wrapper {
    margin-bottom: 1rem;
    border-radius: 5px 5px 0 0;
  }
`;

const BookImage = styled(GatsbyImage)``;

const Title = styled.span`
  display: block;
  line-height: 1.8rem;
  font-weight: bold;
  text-align: center;
`;

export const query = graphql`
  query getBooks {
    allBooksJson {
      nodes {
        id
        title
        author
        image {
          childImageSharp {
            gatsbyImageData(
              width: 250
              height: 350
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
        amazonUrl
      }
    }
  }
`;

export default About;
