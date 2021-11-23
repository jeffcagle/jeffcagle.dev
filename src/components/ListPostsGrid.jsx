import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { Row, Column, GridCard } from './ui';

const ListPostsGrid = ({ limit }) => {
  const data = useStaticQuery(graphql`
    query getBlogPostsGrid {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { in: "blog" } } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
            coverImg {
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
  `);

  const posts = data.allMarkdownRemark.nodes;

  return (
    <Row>
      {posts.map(
        (post, index) =>
          (index < limit || limit === 'all') && (
            <Column columnWidth={33.333} key={post.id} mb={2}>
              <GridCard
                to={post.frontmatter.slug}
                image={post.frontmatter.coverImg}
                imageAltText={post.frontmatter.title}
                title={post.frontmatter.title}
              />
            </Column>
          )
      )}
    </Row>
  );
};

ListPostsGrid.propTypes = {
  limit: PropTypes.number,
};

ListPostsGrid.defaultProps = {
  limit: 1000,
};

export default ListPostsGrid;
