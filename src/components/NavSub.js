import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Box, SiteLink } from "./ui";

/**
 *
 * Display the sub-nav menu for select parent menu items.
 *
 * @param {Object} props
 * @param {string} props.parentSlug The name of the top level menu item coverted to lowercase to work as a URL slug.
 * @returns {HTMLElement} An HTML sub-menu for select top level menu items.
 */
const NavSub = ({ parentSlug }) => {
  const data = useStaticQuery(graphql`
    query fetchSubNav {
      allMarkdownRemark(
        filter: {
          frontmatter: { templateKey: { in: ["services", "projects"] } }
        }
        sort: { fields: [frontmatter___order], order: ASC }
        limit: 1000
      ) {
        nodes {
          id
          frontmatter {
            templateKey
            shortTitle
            slug
          }
        }
      }
    }
  `);

  const items = data.allMarkdownRemark.nodes;

  const subLinks = items.filter(
    (item) => item.frontmatter.templateKey === parentSlug
  );

  return (
    <SubNav>
      <Box withContainer>
        <Menu>
          {subLinks.map((link) => (
            <MenuItem key={link.id}>
              <SiteLink
                activeClass="active"
                showActive={true}
                to={`/${parentSlug}/${link.frontmatter.slug}`}
              >
                {link.frontmatter.shortTitle}
              </SiteLink>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </SubNav>
  );
};

const SubNav = styled.div`
  background-color: ${(props) => props.theme.neutralDark};
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  height: 45px;
`;

const MenuItem = styled.li`
  a {
    padding: 0 1rem;
    display: block;
    font-size: 0.9rem;
    line-height: 45px;
  }
`;

export default NavSub;
