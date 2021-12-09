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

function BlogPost({ data }: PostProps) {
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
                <PrevPost>
                  <Prev>Previous Post</Prev>
                  <PrevCard
                    className="card"
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
                  </PrevCard>
                </PrevPost>
              )}
            </Column>
            <Column width={50}>
              {next && (
                <NextPost>
                  <Next>Next Post</Next>
                  <NextCard
                    className="card"
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
                  </NextCard>
                </NextPost>
              )}
            </Column>
          </Row>
        </PrevNext>
      </Box>
    </article>
  );
}

const PostMeta = styled.span`
  color: ${props => props.theme.colors.neutral400};
`;

const PrevNext = styled.div`
  border-top: 1px dashed ${props => props.theme.colors.neutral550};
  padding-top: 1rem;
`;

const PrevPost = styled.div`
  display: flex;
  flex-direction: column;
`;

const NextPost = styled(PrevPost)``;

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

const PrevCard = styled(Link)`
  padding: 1rem 1rem 0.6rem 1rem;
  display: flex;
`;

const NextCard = styled(PrevCard)``;

const PostImageContainer = styled.div`
  min-width: 60px;
  width: 60px;
  height: 60px;
  margin-right: 1rem;
`;

const PostImage = styled(GatsbyImage)``;

const PostTitle = styled.span`
  color: ${props => props.theme.colors.neutral400};
  transition: 0.2s color ease-in-out;
  display: flex;
  align-items: center;
  font-weight: bold;
  /* text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; */

  ${PrevCard}:hover & {
    color: ${props => props.theme.colors.primary};
  }
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
