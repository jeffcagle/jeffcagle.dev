import * as React from 'react';
import styled from 'styled-components';
import breakpoint from '../../styles/breakpoints';

interface H2Props {
  centered?: boolean;
}
interface SectionProps extends H2Props {
  h2?: string;
  flex?: boolean;
  children?: React.ReactNode;
}

/**
 *
 * Create an HTML section element.
 *
 * @param h2 Optional h2 for the section.
 * @param centered Optional centering for h2 element.
 * @param flex Optional flexbox for section content.
 * @returns A section element.
 */
export function Section({ h2, centered, flex, children }: SectionProps) {
  return (
    <SectionItem>
      <SectionContainer flex={flex}>
        {h2 && (
          <Title centered={centered}>
            <span>{h2}</span>
          </Title>
        )}
        {children}
      </SectionContainer>
    </SectionItem>
  );
}

const SectionItem = styled.section`
  margin-top: 3rem;
`;

const SectionContainer = styled.div<SectionProps>`
  max-width: ${props => props.theme.sizes.containerWidthSmall};

  @media only screen and ${breakpoint.device.medium} {
    max-width: ${props => props.theme.sizes.containerWidthMedium};
  }

  @media only screen and ${breakpoint.device.large} {
    max-width: ${props => props.theme.sizes.containerWidth};
  }

  margin: 0 auto;

  ${props =>
    props.flex &&
    `
      display:flex;
      align-items:center;
  `}
`;

const Title = styled.h2<H2Props>`
  margin-bottom: 3.5rem;

  span {
    border-bottom: 2px solid ${props => props.theme.colors.neutral550};
    padding: 1rem;
  }

  ${props =>
    props.centered &&
    `
    text-align:center;
  `}
`;

interface BoxProps {
  flex?: boolean;
  flexSpace?: boolean;
  justifyRight?: boolean;
  justifyCenter?: boolean;
  withContainer?: boolean;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  pt?: number;
  pr?: number;
  pl?: number;
  pb?: number;
  children?: React.ReactNode;
}

interface BoxContainerProps {
  flex?: boolean;
}

/**
 *
 * Create an HTML box.
 *
 * @param flex Optional flexbox.
 * @param flexSpace Optional justify-content:space-between rule.
 * @param justifyRight Optional justify-content:right rule.
 * @param justifyCenter Optional justify-content:center rule.
 * @param withContainer Optional centered container.
 * @param mt Optional top margin.
 * @param mr Optional right margin.
 * @param ml Optional left margin.
 * @param mb Optional bottom margin.
 * @param pt Optional top padding.
 * @param pr Optional right padding.
 * @param pl Optional left padding.
 * @param pb Optional bottom padding.
 * @returns A div element.
 */
export function Box(props: BoxProps) {
  return (
    <BoxItem
      flex={props.flex}
      flexSpace={props.flexSpace}
      justifyRight={props.justifyRight}
      justifyCenter={props.justifyCenter}
      mt={props.mt}
      mr={props.mr}
      ml={props.ml}
      mb={props.mb}
      pt={props.pt}
      pr={props.pr}
      pl={props.pl}
      pb={props.pb}
    >
      {props.withContainer ? (
        <BoxContainer flex={props.flex}>{props.children}</BoxContainer>
      ) : (
        props.children
      )}
    </BoxItem>
  );
}

const BoxItem = styled.div<BoxProps>`
  margin-top: ${props => (props.mt ? `${props.mt}rem` : '0')};
  margin-right: ${props => (props.mr ? `${props.mr}rem` : '0')};
  margin-left: ${props => (props.ml ? `${props.ml}rem` : '0')};
  margin-bottom: ${props => (props.mb ? `${props.mb}rem` : '0')};
  padding-top: ${props => (props.pt ? `${props.pt}rem` : '0')};
  padding-right: ${props => (props.pr ? `${props.pr}rem` : '0')};
  padding-left: ${props => (props.pl ? `${props.pl}rem` : '0')};
  padding-bottom: ${props => (props.pb ? `${props.pb}rem` : '0')};

  ${props =>
    props.flex &&
    `
    display:flex;
    align-items:center;

    @media only screen and ${breakpoint.device.small} {
      flex-direction:column;
    }
  `}

  ${props =>
    props.flexSpace &&
    `
    justify-content:space-between;
  `}

${props =>
    props.justifyRight &&
    `
    @media only screen and ${breakpoint.device.small} {
      justify-content:center;
    }
    @media only screen and ${breakpoint.device.medium} {
      justify-content:right;
    }
  `}

${props =>
    props.justifyCenter &&
    `
    justify-content:center;
  `}
`;

const BoxContainer = styled.div<BoxContainerProps>`
  max-width: ${props => props.theme.sizes.containerWidthSmall};

  @media only screen and ${breakpoint.device.medium} {
    max-width: ${props => props.theme.sizes.containerWidthMedium};
  }

  @media only screen and ${breakpoint.device.large} {
    max-width: ${props => props.theme.sizes.containerWidth};
  }
  margin: 0 auto;

  .gatsby-resp-image-wrapper {
    margin: 3rem 0;
  }

  ${props =>
    props.flex &&
    `
    display:flex;
    align-items:center;

    @media only screen and ${breakpoint.device.small} {
      flex-direction:column;
      text-align:center;
    }
  `}
`;
