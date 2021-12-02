import * as React from 'react';
import styled from 'styled-components';

interface HeroBarWrapperProps {
  hasSubMenu?: boolean;
  py?: number;
}

interface HeroBarContainer {
  flex?: boolean;
}

interface HeroBarProps extends HeroBarContainer, HeroBarWrapperProps {
  children: React.ReactNode;
}

/**
 *
 * The page hero block.
 *
 * @param hasSubMenu Optionally add top margin to account for absolute sub-menu.
 * @param py Optional vertical padding. Default: 4rem.
 * @param flex Optional flexbox.
 * @returns A hero element.
 */
const HeroBar = ({ hasSubMenu, py = 4, flex, children }: HeroBarProps) => (
  <Wrapper hasSubMenu={hasSubMenu} py={py}>
    <Container flex={flex}>{children}</Container>
  </Wrapper>
);

const Wrapper = styled.div<HeroBarWrapperProps>`
  background-color: ${props => props.theme.neutralMed};
  padding-top: ${props => `${props.py}rem`};
  padding-bottom: ${props => `${props.py}rem`};

  ${props =>
    props.hasSubMenu &&
    `
      margin-top:45px;
  `}
`;

const Container = styled.div<HeroBarContainer>`
  max-width: ${props => props.theme.containerWidth};
  margin: 0 auto;

  h1 {
    margin-bottom: 0;
  }

  p {
    font-size: 1.1rem;
    font-weight: normal;
    margin-top: 0.4rem;
    margin-bottom: 0;

    span {
      font-weight: bold;
    }
  }

  ${props =>
    props.flex &&
    `
    display:flex;
    align-items:center;
  `}
`;

const HeroTitle = styled.h1`
  margin-bottom: 0;
`;

const HeroSummary = styled.p`
  font-size: 1.1rem;
  font-weight: normal;
  margin-top: 0.4rem;
  margin-bottom: 0;

  span {
    /* color: ${props => props.theme.js}; */
    font-weight: bold;
  }
`;

export default HeroBar;
