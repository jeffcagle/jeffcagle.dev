import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Card from '../shared/Card';
import { Row, Column } from '../shared/Columns';

interface ListPostsProps {
  limit?: number;
}

interface PostProps {
  id: string;
  frontmatter: { slug: string; title: string; coverImage: string };
}

/**
 *
 * Display a list of blog posts.
 *
 * @param limit Number of posts to return. Default: 1000.
 * @returns A list of blog posts in card format.
 */
const ListPostsAsCards = ({ limit = 1000 }: ListPostsProps) => {
  const data = useStaticQuery(graphql`
    query getPostsWithImage {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { in: "blog" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
            coverImage {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.5
                  width: 475
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes;

  return (
    <Row>
      {posts.map(
        (post: PostProps, index: number) =>
          index < limit && (
            <Column width={33.333} key={post.id}>
              <Card
                to={post.frontmatter.slug}
                image={post.frontmatter.coverImage}
                alt={post.frontmatter.title}
                title={post.frontmatter.title}
              />
            </Column>
          )
      )}
    </Row>
  );
};

export default ListPostsAsCards;
