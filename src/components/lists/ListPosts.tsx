import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

interface PostProps {
  id: string;
  frontmatter: {
    slug: string;
    title: string;
  };
}

/**
 *
 * Display a list of blog posts.
 *
 * @returns An unordered list of blog posts.
 */
function ListPosts() {
  const { allMarkdownRemark } = useStaticQuery(query);
  const posts = allMarkdownRemark.nodes;

  return (
    <>
      <BlogPosts>
        {posts.map((post: PostProps) => (
          <BlogPost key={post.id}>
            <BlogPostLink
              to={`/blog/${post.frontmatter.slug}`}
              title={post.frontmatter.title}
            >
              <FontAwesomeIcon icon={faFileAlt} size="xs" />{' '}
              {post.frontmatter.title}
            </BlogPostLink>
          </BlogPost>
        ))}
      </BlogPosts>
    </>
  );
}

const BlogPosts = styled.ul`
  margin-bottom: 1rem;
`;

const BlogPost = styled.li`
  border-bottom: 1px dashed ${props => props.theme.colors.neutral550};
`;

const BlogPostLink = styled(Link)`
  padding: 0.2rem;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${props => props.theme.colors.neutral400};
  transition: 200ms ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.neutral700};
    padding-left: 0.5rem;
  }

  svg {
    margin-right: 0.5rem;
    position: relative;
    bottom: 0.1rem;
    color: ${props => props.theme.colors.neutral300};
  }
`;

const MoreLink = styled(Link)`
  margin-top: 1rem;
  display: block;
  color: ${props => props.theme.colors.neutral100};
`;

export default ListPosts;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { in: "blog" } } }
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 4
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;
