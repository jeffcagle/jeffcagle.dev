import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Box } from '../shared/Ui';

interface NavSubProps {
  parentSlug: string;
}

interface ProjectServiceProps {
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
function NavSub({ parentSlug }: NavSubProps) {
  const { allMarkdownRemark } = useStaticQuery(query);
  const projectsAndServices = allMarkdownRemark.nodes;
  const currentSubMenu = projectsAndServices.filter(
    (item: ProjectServiceProps) => item.frontmatter.templateKey === parentSlug
  );

  return (
    <SubNav>
      <Box withContainer>
        <Menu>
          {currentSubMenu.map((link: ProjectServiceProps) => (
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
}

const SubNav = styled.div`
  background-color: ${props => props.theme.colors.neutral800};
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
    color: ${props => props.theme.colors.neutral400};
    transition: 200ms ease;
    padding: 0 1rem;
    display: block;
    font-size: 0.9rem;
    line-height: 45px;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }

    &.active {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export default NavSub;

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { in: ["services", "projects"] } } }
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
`;
