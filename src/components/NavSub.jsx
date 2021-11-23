import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Box, SiteLink } from './ui';

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
                showActive
                to={`/${parentSlug}/${link.frontmatter.slug}`}
                title={link.frontmatter.shortTitle}
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

NavSub.propTypes = {
  parentSlug: PropTypes.string.isRequired,
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
