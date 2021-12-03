import * as React from 'react';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../components/shared/Ui';
import { Row, Column } from '../components/shared/Columns';
import Card from '../components/shared/Card';
import HeroBar from '../components/shared/HeroBar';
import Pagination from '../components/shared/Pagination';

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
            slug: string;
            coverImage: string;
          };
        }
      ];
    };
  };
}

const BlogList = ({ data, pageContext }: BlogListProps) => {
  const posts = data.allMarkdownRemark.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <>
      <HeroBar flex py={3}>
        <FontAwesomeIcon icon={faBlog} size="4x" />
        <Box pl={2}>
          <h1>Dev Blog</h1>
          <p>These are my blog posts...</p>
        </Box>
      </HeroBar>
      <Box withContainer mt={3}>
        <Row>
          {posts.map(post => (
            <Column width={33.333} key={post.id}>
              <Card
                to={`/blog/${post.frontmatter.slug}`}
                image={post.frontmatter.coverImage}
                alt={post.frontmatter.title}
                title={post.frontmatter.title}
              />
            </Column>
          ))}
        </Row>
        <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
      </Box>
    </>
  );
};

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
