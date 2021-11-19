import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Column, Hero, Row, Section } from "../components/ui";
import Pills from "../components/Pills";

const About = ({ data }) => {
  console.log(data);
  const books = data.allBooksJson.nodes;
  const about = data.allMarkdownRemark.nodes[0].frontmatter;
  console.log(about);

  return (
    <>
      <Hero heroTitle="About" py={3} heroSummary="This is the about page..." />

      <Section sectionTitle="Who Am I?">
        <Row>
          <Column columnWidth={50}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque.
            </p>
            <Social>
              <span>Find Me On: </span>
              <a href="/">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Social>
          </Column>
          <Column columnWidth={50}>
            <Box flex justifyRight>
              <ProfileImage>
                <GatsbyImage
                  image={getImage(about.profileImageUrl)}
                  alt="Jeff Cagle - Web Developer"
                />
              </ProfileImage>
            </Box>
          </Column>
        </Row>
      </Section>

      <Section sectionTitle="Favorite Dev Tools">
        <Pills
          startText="I love:"
          items={[
            "JavaScript",
            "TypeScript",
            "React",
            "Python",
            "Styled Components",
            "SASS",
            "Photoshop",
            "Figma",
          ]}
        />
      </Section>

      <Section sectionTitle="Some Books I Like">
        <Row>
          {books.map((book) => (
            <Column columnWidth={20} key={book.id} mb={2}>
              <BookItem href={book.amazonUrl}>
                <GatsbyImage image={getImage(book.imageUrl)} alt={book.title} />
                <Title>{book.title}</Title>
              </BookItem>
            </Column>
          ))}
        </Row>
      </Section>
    </>
  );
};

const ProfileImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  overflow: hidden;
  border: 10px solid ${(props) => props.theme.neutralMed};
`;

const BookItem = styled.a`
  padding: 0.7rem;
  color: ${(props) => props.theme.whiteDark};
  background: ${(props) => props.theme.neutralMed};
  border: 2px solid ${(props) => props.theme.neutralMed};
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
    /* color: ${(props) => props.theme.white}; */
    color: ${(props) => props.theme.js};
    border: 2px solid ${(props) => props.theme.colorD};
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

const Title = styled.span`
  display: block;
  line-height: 1.8rem;
  font-weight: bold;
  text-align: center;
`;

const Social = styled.div`
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  margin-top: 2rem;

  span {
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    margin-right: 20px;
    display: block;
    color: ${(props) => props.theme.neutralLight};
  }

  a {
    margin-right: 0.8rem;
    color: ${(props) => props.theme.neutralLight};
  }
`;

export const query = graphql`
  query getBooks {
    allBooksJson {
      nodes {
        id
        title
        author
        imageUrl {
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

    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "about" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          profileImageUrl {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1
                width: 475
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`;

export default About;
