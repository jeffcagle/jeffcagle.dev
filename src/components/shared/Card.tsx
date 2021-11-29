import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, GatsbyImageProps } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ToolTip from './ToolTip';

interface CardImage {
  image: string;
  alt: string;
}

interface CardProps extends CardImage {
  to: string;
  title: string;
  summary?: string;
  tooltip?: object;
}

/**
 *
 * Create a card element.
 *
 * @param to Path destination.
 * @param title Card title.
 * @param summary Optional card summary.
 * @param tooltip Optional tooltip object.
 * @param image Optional image object.
 * @param alt Optional image alt tag.
 * @returns A card element.
 */
const Card = ({ to, image, alt, title, summary, tooltip }: CardProps) => (
  <CardItem to={to}>
    {image && (
      // @ts-ignore
      <ItemImage image={getImage(image)} alt={alt} />
    )}
    <CardContent>
      <Title>{title}</Title>
      {summary && <Summary>{summary}</Summary>}
    </CardContent>
    {tooltip && (
      <Tooltip position="top" delay={0.3}>
        {tooltip}
      </Tooltip>
    )}
  </CardItem>
);

const CardItem = styled(Link)`
  padding: 0.7rem;
  text-align: center;
  background: ${(props) => props.theme.neutralMed};
  border: 2px solid ${(props) => props.theme.neutralMed};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  transition: width 0.2s, height 0.2s, margin 0.2s,
    0.2s cubic-bezier(0.37, 0, 0.65, 1);

  &:hover {
    border: 2px solid ${(props) => props.theme.colorD};
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    top: -5px;
  }
`;

const Tooltip = styled(ToolTip)`
  ${CardItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const ItemImage = styled(GatsbyImage)<CardImage>`
  border-radius: 5px 5px 0 0;
`;

const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.whiteDark};
  transition: 0.2s ease-in-out;

  ${CardItem}:hover & {
    color: ${(props) => props.theme.js};
  }
`;

const Summary = styled.span`
  font-style: italic;
  font-size: 0.9rem;
  color: ${(props) => props.theme.neutralLighter};
  line-height: 1.7rem;
  margin-top: 0.2rem;
`;

export default Card;
