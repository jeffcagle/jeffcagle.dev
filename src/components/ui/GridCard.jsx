import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import ToolTip from '../ToolTip';

const GridCard = ({ to, image, imageAltText, title, summary, tooltip }) => (
  <Item to={to}>
    {image && <ItemImage image={getImage(image)} alt={imageAltText} />}
    <ItemContent>
      <Title>{title}</Title>
      {summary && <Summary>{summary}</Summary>}
    </ItemContent>
    {tooltip && (
      <Tooltip position="top" delay={0.3}>
        {tooltip}
      </Tooltip>
    )}
  </Item>
);

GridCard.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object]),
  imageAltText: PropTypes.string,
  tooltip: PropTypes.oneOfType([PropTypes.any]),
};

GridCard.defaultProps = {
  to: null,
  summary: null,
  image: null,
  imageAltText: null,
  tooltip: null,
};

const Item = styled(Link)`
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
  ${Item}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const ItemImage = styled(GatsbyImage)`
  border-radius: 5px 5px 0 0;
`;

const ItemContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.whiteDark};
  transition: 0.2s ease-in-out;

  ${Item}:hover & {
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

export default GridCard;
