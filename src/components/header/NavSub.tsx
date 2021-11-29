import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Box } from '../shared/Ui';

interface NavSubProps {
  parentSlug: string;
}

interface SubMenuItemProps {
  id: string;
  frontmatter: {
    shortTitle: string;
    slug: string;
    templateKey: string;
  };
}

/**
 *
 * Display navigation submenu on select pages.
 *
 * @param parentSlug The parent link path.
 * @returns The main nav sub-menu.
 */
const NavSub = ({ parentSlug }: NavSubProps) => {
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

  const subMenuItems = data.allMarkdownRemark.nodes;

  const subMenuLinks = subMenuItems.filter(
    (item: SubMenuItemProps) => item.frontmatter.templateKey === parentSlug
  );

  return (
    <SubNav>
      <Box withContainer>
        <Menu>
          {subMenuLinks.map((link: SubMenuItemProps) => (
            <MenuItem key={link.id}>
              <Link
                activeClassName="active"
                partiallyActive
                to={`/${parentSlug}/${link.frontmatter.slug}`}
                title={link.frontmatter.shortTitle}
              >
                {link.frontmatter.shortTitle}
              </Link>
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
    color: ${(props) => props.theme.neutralLighter};
    transition: 200ms ease;
    padding: 0 1rem;
    display: block;
    font-size: 0.9rem;
    line-height: 45px;

    &:hover {
      color: ${(props) => props.theme.js};
    }

    &.active {
      color: ${(props) => props.theme.js};
    }
  }
`;

export default NavSub;
