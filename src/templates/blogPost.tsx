import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage, GatsbyImageProps } from 'gatsby-plugin-image';
import { Box } from '../components/shared/Ui';
import { Row, Column } from '../components/shared/Columns';
import HeroBar from '../components/shared/HeroBar';

interface PostProps {
  data: {
    markdownRemark: {
      id: string;
      html: string;
      frontmatter: { date: string; title: string };
    };
    next: PrevNextProps;
    previous: PrevNextProps;
  };
}

interface PrevNextProps {
  frontmatter: {
    title: string;
    slug: string;
    coverImage: GatsbyImageProps['image'];
  };
}

const BlogPost = ({ data }: PostProps) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <article>
      <HeroBar py={2}>
        <h1>{post.frontmatter.title}</h1>
        <PostMeta>Posted: {post.frontmatter.date}</PostMeta>
      </HeroBar>
      <Box withContainer mt={3}>
        <div className="post" dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
      <Box withContainer mt={3}>
        <PrevNext>
          <Row>
            <Column width={50}>
              {previous && (
                <>
                  <Prev>Previous Post</Prev>
                  <PrevNextPost
                    to={`/blog/${previous.frontmatter.slug}`}
                    title={previous.frontmatter.title}
                  >
                    <PostImageContainer>
                      <PostImage
                        // @ts-ignore
                        image={getImage(previous.frontmatter.coverImage)}
                        alt={previous.frontmatter.title}
                      />
                    </PostImageContainer>
                    <PostTitle>{previous.frontmatter.title}</PostTitle>
                  </PrevNextPost>
                </>
              )}
            </Column>
            <Column width={50}>
              {next && (
                <>
                  <Next>Next Post</Next>
                  <PrevNextPost
                    to={`/blog/${next.frontmatter.slug}`}
                    title={next.frontmatter.title}
                  >
                    <PostImageContainer>
                      <PostImage
                        // @ts-ignore
                        image={getImage(next.frontmatter.coverImage)}
                        alt={next.frontmatter.title}
                      />
                    </PostImageContainer>
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

const PostMeta = styled.span`
  color: ${props => props.theme.colors.neutral400};
`;

const PrevNext = styled.div`
  border-top: 1px dashed ${props => props.theme.colors.neutral550};
  padding-top: 1rem;
`;

const Prev = styled.div`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.neutral500};
  font-weight: bold;
  font-style: italic;
  text-align: left;
`;

const Next = styled.div`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.neutral500};
  font-weight: bold;
  font-style: italic;
  text-align: right;
`;

const PrevNextPost = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.7rem;
  background: ${props => props.theme.colors.neutral700};
  border: 2px solid ${props => props.theme.colors.neutral700};
  border-radius: 10px;
  position: relative;
  width: 100%;
  top: 0;
  transition: width 0.2s, height 0.2s, margin 0.2s,
    0.2s cubic-bezier(0.37, 0, 0.65, 1);

  &:hover {
    border: 2px solid ${props => props.theme.colors.secondary};
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    top: -5px;
  }
`;

const PostImageContainer = styled.div`
  width: 80px;
  margin-right: 1rem;
  border-radius: 5px;
  overflow: hidden;
`;

const PostImage = styled(GatsbyImage)``;

const PostTitle = styled.span`
  color: ${props => props.theme.colors.neutral400};
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
        coverImage {
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
        coverImage {
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
