import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImageProps } from 'gatsby-plugin-image';
import { Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';
import Seo from '../components/shared/Seo';
import PrevNextItem from '../components/shared/PrevNextItem';

interface PostProps {
  data: {
    markdownRemark: {
      id: string;
      html: string;
      frontmatter: { date: string; title: string; excerpt: string };
    };
    next: PrevNextProps;
    previous: PrevNextProps;
  };
}

interface PrevNextProps {
  frontmatter: {
    title: string;
    slug: string;
    image: GatsbyImageProps['image'];
  };
}

function BlogPost({ data }: PostProps) {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
      />
      <article>
        <HeroBar py={2}>
          <h1>{post.frontmatter.title}</h1>
          <PostMeta>Posted: {post.frontmatter.date}</PostMeta>
        </HeroBar>
        <Box withContainer mt={3}>
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Box>
        <PrevNextItem
          slugBase="blog"
          type="Post"
          previous={previous}
          next={next}
        />
      </article>
    </>
  );
}

const PostMeta = styled.span`
  color: ${props => props.theme.colors.neutral400};
`;

export const query = graphql`
  query BlogPost($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        excerpt
        date(formatString: "MMMM DD, YYYY")
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        slug
        image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              width: 60
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
        image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              width: 60
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`;

export default BlogPost;
