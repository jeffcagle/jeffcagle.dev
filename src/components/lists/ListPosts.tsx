import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

interface ListPostsProps {
  type?: 'list' | 'grid';
  limit?: 1 | 2 | 3 | 4 | 5 | 6;
  allPostsLink?: boolean;
}

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
 * @param limit Up to 6 posts. Default: 6.
 * @param allPostsLink Show link to all posts.
 * @returns An unordered list of blog posts.
 */
function ListPosts({ type = 'grid', limit = 6, allPostsLink }: ListPostsProps) {
  const data = useStaticQuery(graphql`
    query getPosts {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { in: "blog" } } }
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 6
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
  `);

  const posts = data.allMarkdownRemark.nodes;

  if (type === 'grid') {
    return <div>Grid</div>;
  }

  if (type === 'list') {
    return (
      <>
        <BlogPosts>
          {posts.map(
            (post: PostProps, index: number) =>
              index < limit && (
                <BlogPost key={post.id}>
                  <BlogPostLink
                    to={`/blog/${post.frontmatter.slug}`}
                    title={post.frontmatter.title}
                  >
                    <FontAwesomeIcon icon={faFileAlt} size="xs" />{' '}
                    {post.frontmatter.title}
                  </BlogPostLink>
                </BlogPost>
              )
          )}
        </BlogPosts>
        {allPostsLink && (
          <MoreLink to="/blog/" title="All Posts">
            All Posts &raquo;
          </MoreLink>
        )}
      </>
    );
  }

  return null;
}

const BlogPosts = styled.ul``;

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
