import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

interface ListPostsProps {
  limit?: number;
  withIcon?: boolean;
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
 * @param limit Number of posts to return. Default: 1000.
 * @param withIcon Show Icon before post text.
 * @param allPostsLink Show link to all posts.
 * @returns An unordered list of blog posts.
 */
const ListPosts = ({
  limit = 1000,
  withIcon,
  allPostsLink,
}: ListPostsProps) => {
  const data = useStaticQuery(graphql`
    query getPosts {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { in: "blog" } } }
        sort: { fields: [frontmatter___date], order: ASC }
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

  return (
    <>
      <Items>
        {posts.map(
          (post: PostProps, index: number) =>
            index < limit && (
              <Item key={post.id}>
                <ItemLink
                  to={`/blog/${post.frontmatter.slug}`}
                  title={post.frontmatter.title}
                >
                  {withIcon && <FontAwesomeIcon icon={faFileAlt} size="xs" />}{' '}
                  {post.frontmatter.title}
                </ItemLink>
              </Item>
            )
        )}
      </Items>
      {allPostsLink && (
        <MoreLink to="/blog/" title="All Posts">
          All Posts &raquo;
        </MoreLink>
      )}
    </>
  );
};

const Items = styled.ul``;

const Item = styled.li`
  border-bottom: 1px dashed ${props => props.theme.border};
`;

const ItemLink = styled(Link)`
  padding: 0.2rem;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${props => props.theme.neutralLighter};
  transition: 200ms ease;

  &:hover {
    color: ${props => props.theme.js};
    background-color: ${props => props.theme.neutralMed};
    padding-left: 0.5rem;
  }

  svg {
    margin-right: 0.5rem;
    position: relative;
    bottom: 0.1rem;
    color: ${props => props.theme.whiteDark};
  }
`;

const MoreLink = styled(Link)`
  margin-top: 1rem;
  display: block;
  color: ${props => props.theme.white};
`;

export default ListPosts;
