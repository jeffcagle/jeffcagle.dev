import React from "react";
import styled from "styled-components";
import { Box } from ".";

const Hero = ({
  isHome,
  heroImage,
  heroTitle,
  heroSummary,
  hasSubMenu,
  py = 4,
  children,
}) => {
  if (isHome) {
    return (
      <>
        <Wrapper py={py}>
          <Container heroImage={heroImage}>
            {heroImage}
            <Box pl={2}>
              <HeroTitle>{heroTitle}</HeroTitle>
              <HeroSummary>{heroSummary}</HeroSummary>
              {children}
            </Box>
          </Container>
        </Wrapper>
      </>
    );
  }

  return (
    <Wrapper hasSubMenu={hasSubMenu} py={py}>
      <Container hasSubMenu={hasSubMenu} heroImage={heroImage}>
        {heroImage ? (
          <>
            {heroImage}
            <Box pl={2}>
              <HeroTitle>{heroTitle}</HeroTitle>
              <HeroSummary>{heroSummary}</HeroSummary>
              {children}
            </Box>
          </>
        ) : (
          <>
            <HeroTitle>{heroTitle}</HeroTitle>
            {heroSummary && <HeroSummary>{heroSummary}</HeroSummary>}
            {children}
          </>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.neutralMed};
  padding-top: ${(props) => props.py + "rem"};
  padding-bottom: ${(props) => props.py + "rem"};

  ${(props) =>
    props.hasSubMenu &&
    `
      margin-top:45px;
  `}
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;

  ${(props) =>
    props.heroImage &&
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
    /* color: ${(props) => props.theme.js}; */
    font-weight: bold;
  }
`;

export default Hero;
