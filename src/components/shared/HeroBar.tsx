import * as React from 'react';
import styled from 'styled-components';
import breakpoint from '../../styles/breakpoints';

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
function HeroBar({ hasSubMenu, py = 4, flex, children }: HeroBarProps) {
  return (
    <Wrapper hasSubMenu={hasSubMenu} py={py}>
      <Container flex={flex}>{children}</Container>
    </Wrapper>
  );
}

const Wrapper = styled.div<HeroBarWrapperProps>`
  background-color: ${props => props.theme.colors.neutral700};
  padding-top: ${props => `${props.py}rem`};
  padding-bottom: ${props => `${props.py}rem`};

  ${props =>
    props.hasSubMenu &&
    `
      @media only screen and ${breakpoint.device.large} {
        margin-top:45px;
      }
  `}
`;

const Container = styled.div<HeroBarContainer>`
  max-width: ${props => props.theme.sizes.containerWidthSmall};

  @media only screen and ${breakpoint.device.medium} {
    max-width: ${props => props.theme.sizes.containerWidthMedium};
  }

  @media only screen and ${breakpoint.device.large} {
    max-width: ${props => props.theme.sizes.containerWidth};
  }

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

    @media only screen and ${breakpoint.device.small} {
      flex-direction:column;
    }
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
    /* color: ${props => props.theme.colors.primary}; */
    font-weight: bold;
  }
`;

export default HeroBar;
