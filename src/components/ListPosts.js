import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { SiteLink } from "./ui";

/**
 *
 * Fetch all, or a select number of styled/unstyled blog posts from the data directory, with or without a blog icon.
 *
 * @param {Object} props
 * @param {number} [props.limit] Limit the number of blog posts to return.
 * @param {boolean} [props.withIcon] Add a blog icon next to the item title.
 * @returns {HTMLElement} An HTML list of blog posts.
 */
const ListPosts = ({ limit = "all", withIcon, allPostsLink }) => {
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
            (index < limit || limit === "all") && (
              <Item key={post.id}>
                <ItemLink
                  to={`/blog/${post.frontmatter.slug}`}
                  title={post.frontmatter.title}
                >
                  {withIcon && <FontAwesomeIcon icon={faFileAlt} size="xs" />}{" "}
                  {post.frontmatter.title}
                </ItemLink>
              </Item>
            )
        )}
      </Items>
      {allPostsLink && <MoreLink to="/blog/">All Posts &raquo;</MoreLink>}
    </>
  );
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
