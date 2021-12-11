import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, GatsbyImageProps } from 'gatsby-plugin-image';
import { Box } from './Ui';
import { Row, Column } from './Columns';

interface PrevNextItemProps {
  slugBase: string;
  type: string;
  previous: PrevNextProps;
  next: PrevNextProps;
}

interface PrevNextProps {
  frontmatter: {
    image: GatsbyImageProps['image'];
    title?: string;
    longTitle?: string;
    slug: string;
  };
}

function PrevNextItem({ slugBase, type, previous, next }: PrevNextItemProps) {
  return (
    <Box withContainer mt={1}>
      <PrevNext>
        <Row>
          <Column mediumWidth={50}>
            {previous && (
              <PrevPost>
                <Prev>Previous {type}</Prev>
                <PrevCard
                  className="card"
                  to={`/${slugBase}/${previous.frontmatter.slug}`}
                  title={
                    previous.frontmatter.title || previous.frontmatter.longTitle
                  }
                >
                  <PostImageContainer>
                    {
                      // @ts-ignore
                      <PostImage
                        image={getImage(previous.frontmatter.image)}
                        alt={
                          previous.frontmatter.title ||
                          previous.frontmatter.longTitle
                        }
                      />
                    }
                  </PostImageContainer>
                  <PostTitle>
                    {previous.frontmatter.title ||
                      previous.frontmatter.longTitle}
                  </PostTitle>
                </PrevCard>
              </PrevPost>
            )}
          </Column>
          <Column mediumWidth={50}>
            {next && (
              <NextPost>
                <Next>Next {type}</Next>
                <NextCard
                  className="card"
                  to={`/${slugBase}/${next.frontmatter.slug}`}
                  title={next.frontmatter.title || next.frontmatter.longTitle}
                >
                  <PostImageContainer>
                    {
                      // @ts-ignore
                      <PostImage
                        image={getImage(next.frontmatter.image)}
                        alt={
                          next.frontmatter.title || next.frontmatter.longTitle
                        }
                      />
                    }
                  </PostImageContainer>
                  <PostTitle>
                    {next.frontmatter.title || next.frontmatter.longTitle}
                  </PostTitle>
                </NextCard>
              </NextPost>
            )}
          </Column>
        </Row>
      </PrevNext>
    </Box>
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

export default PrevNextItem;
