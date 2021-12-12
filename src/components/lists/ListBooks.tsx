import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImageProps, GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Column, Row } from '../shared/Columns';

interface BookProps {
  id: string;
  title: string;
  author: string;
  amazonUrl: string;
  image: GatsbyImageProps['image'];
}

function ListBooks() {
  const { allBooksJson } = useStaticQuery(query);
  const books = allBooksJson.nodes;

  return (
    <Row mt={3}>
      {books.map((book: BookProps) => (
        <Column key={book.id} mediumWidth={33.333} largeWidth={20}>
          <Book href={book.amazonUrl} target="_blank" title={book.title}>
            <Image>
              {
                // @ts-ignore
                <GatsbyImage image={getImage(book.image)} alt={book.title} />
              }
            </Image>
            <Title>{book.title}</Title>
            <Author>by {book.author}</Author>
          </Book>
        </Column>
      ))}
    </Row>
  );
}

const Book = styled.a``;

const Image = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  color: ${props => props.theme.colors.neutral300};
  transition: 0.2s ease-in-out;
  font-weight: bold;
  text-align: center;

  ${Book}:hover & {
    color: ${props => props.theme.colors.primary};
  }
`;

const Author = styled.div`
  color: ${props => props.theme.colors.neutral400};
  font-size: 0.9rem;
  font-style: italic;
  text-align: center;
`;

export default ListBooks;

const query = graphql`
  query {
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
