import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import { Box, Row, Column } from '../components/ui';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <article>
      <Hero heroTitle={post.frontmatter.title} py={2}>
        <PostMeta>Posted: {post.frontmatter.date}</PostMeta>
      </Hero>
      <Box withContainer mt={3}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
      <Box withContainer mt={3}>
        <PrevNext>
          <Row>
            <Column columnWidth={50}>
              {previous && (
                <>
                  <Prev>Previous Post</Prev>
                  <PrevNextPost
                    to={`/blog/${previous.frontmatter.slug}`}
                    title={previous.frontmatter.title}
                  >
                    <PostImage>
                      <GatsbyImage
                        image={getImage(previous.frontmatter.coverImg)}
                        alt={previous.frontmatter.title}
                      />
                    </PostImage>
                    <PostTitle>{previous.frontmatter.title}</PostTitle>
                  </PrevNextPost>
                </>
              )}
            </Column>
            <Column columnWidth={50}>
              {next && (
                <>
                  <Next>Next Post</Next>
                  <PrevNextPost
                    to={`/blog/${next.frontmatter.slug}`}
                    title={next.frontmatter.title}
                  >
                    <PostImage>
                      <GatsbyImage
                        image={getImage(next.frontmatter.coverImg)}
                        alt={next.frontmatter.title}
                      />
                    </PostImage>
                    <PostTitle>{next.frontmatter.title}</PostTitle>
                  </PrevNextPost>
                </>
              )}
            </Column>
          </Row>
        </PrevNext>
      </Box>
    </article>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: shape({
      id: PropTypes.string,
      html: PropTypes.string,
      frontmatter: shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
    next: shape({
      frontmatter: shape({
        title: PropTypes.string,
        slug: PropTypes.string,
        coverImg: PropTypes.oneOfType([PropTypes.object]),
      }),
    }),
    previous: shape({
      frontmatter: shape({
        title: PropTypes.string,
        slug: PropTypes.string,
        coverImg: PropTypes.oneOfType([PropTypes.object]),
      }),
    }),
  }).isRequired,
};

const PostMeta = styled.span`
  color: ${(props) => props.theme.neutralLighter};
`;

const PrevNext = styled.div`
  border-top: 1px dashed ${(props) => props.theme.border};
  padding-top: 1rem;
`;

const Prev = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.neutralLight};
  font-weight: bold;
  font-style: italic;
  text-align: left;
`;

const Next = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.neutralLight};
  font-weight: bold;
  font-style: italic;
  text-align: right;
`;

const PrevNextPost = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  color: ${(props) => props.theme.whiteDark};
  background: ${(props) => props.theme.neutralMed};
  border: 2px solid ${(props) => props.theme.neutralMed};
  border-radius: 10px;
  position: relative;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  transition: width 0.2s, height 0.2s, margin 0.2s,
    0.2s cubic-bezier(0.37, 0, 0.65, 1);

  &:hover {
    color: ${(props) => props.theme.js};
    border: 2px solid ${(props) => props.theme.colorD};
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    width: 102%;
    margin-top: -1%;
    margin-bottom: 0.7%;
    margin-left: -1%;
    margin-right: -1%;
  }
`;

const PostImage = styled.div`
  width: 80px;
  margin-right: 1rem;
  border-radius: 5px;
  overflow: hidden;
`;

const PostTitle = styled.span`
  color: ${(props) => props.theme.neutralLighter};
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const query = graphql`
  query BlogPost($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        slug
        coverImg {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              width: 475
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        slug
        coverImg {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              width: 475
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;

export default BlogPost;
