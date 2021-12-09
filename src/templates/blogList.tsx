import * as React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { Box } from '../components/shared/Ui';
import { Row, Column } from '../components/shared/Columns';
import Pagination from '../components/shared/Pagination';
import { GatsbyImage, getImage, GatsbyImageProps } from 'gatsby-plugin-image';

interface PageContextProps {
  pageContext: {
    currentPage: number;
    limit: number;
    numberOfPages: number;
    skip: number;
  };
}

interface BlogListProps extends PageContextProps {
  data: {
    allMarkdownRemark: {
      nodes: [
        {
          id: string;
          frontmatter: {
            id: string;
            title: string;
            excerpt: string;
            slug: string;
            coverImage: GatsbyImageProps['image'];
          };
        }
      ];
    };
  };
}

function BlogList({ data, pageContext }: BlogListProps) {
  const posts = data.allMarkdownRemark.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <>
      <Box withContainer mt={3}>
        <h1>Dev Blog.</h1>
      </Box>
      <Box withContainer mt={3}>
        <Row>
          {posts.map(post => (
            <Column width={33.333} key={post.id}>
              <BlogPost
                to={`/blog/${post.frontmatter.slug}`}
                title={post.frontmatter.title}
              >
                <Image
                  // @ts-ignore
                  image={getImage(post.frontmatter.coverImage)}
                  alt={post.frontmatter.title}
                />
                <Title>{post.frontmatter.title}</Title>
                <Excerpt>{post.frontmatter.excerpt}</Excerpt>
              </BlogPost>
            </Column>
          ))}
        </Row>
        <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
      </Box>
    </>
  );
}

const BlogPost = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled(GatsbyImage)`
  margin-bottom: 1.2rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  color: ${props => props.theme.colors.neutral300};
  line-height: 1.8;
  margin-bottom: 0;
  transition: 0.2s color ease-in-out;

  ${BlogPost}:hover & {
    color: ${props => props.theme.colors.primary};
  }
`;

const Excerpt = styled.p`
  color: ${props => props.theme.colors.neutral400};
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-style: italic;
`;

export const blogQuery = graphql`
  query getPostsList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { in: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          excerpt
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
`;

export default BlogList;
