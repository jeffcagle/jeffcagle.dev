import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { SiteLink } from './ui';

const ListPosts = ({ limit, withIcon, allPostsLink }) => {
  const data = useStaticQuery(graphql`
    query getBlogPostsList {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { in: "blog" } } }
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 10
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
          (post, index) =>
            (index < limit || limit === 'all') && (
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

ListPosts.propTypes = {
  limit: PropTypes.number,
  withIcon: PropTypes.bool,
  allPostsLink: PropTypes.bool,
};

ListPosts.defaultProps = {
  limit: 1000,
  withIcon: false,
  allPostsLink: false,
};

const Items = styled.ul``;

const Item = styled.li`
  border-bottom: 1px dashed ${(props) => props.theme.border};
`;

const ItemLink = styled(SiteLink)`
  padding: 0.2rem;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background-color: ${(props) => props.theme.neutralMed};
    padding-left: 0.5rem;
  }

  svg {
    margin-right: 0.5rem;
    position: relative;
    bottom: 0.1rem;
    color: ${(props) => props.theme.whiteDark};
  }
`;

const MoreLink = styled(SiteLink)`
  margin-top: 1rem;
  display: block;
  color: ${(props) => props.theme.white};
`;

export default ListPosts;
