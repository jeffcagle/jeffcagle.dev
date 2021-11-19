import React from "react";
import styled from "styled-components";

const Box = ({
  flex,
  flexSpace,
  justifyRight,
  mt,
  mr,
  ml,
  mb,
  pt,
  pr,
  pl,
  pb,
  withContainer,
  children,
}) => {
  return (
    <BoxElement
      flex={flex}
      flexSpace={flexSpace}
      justifyRight={justifyRight}
      mt={mt}
      mr={mr}
      ml={ml}
      mb={mb}
      pt={pt}
      pr={pr}
      pl={pl}
      pb={pb}
    >
      {withContainer ? <Container>{children}</Container> : children}
    </BoxElement>
  );
};

const BoxElement = styled.div`
  margin-top: ${(props) => (props.mt ? props.mt + "rem" : "0")};
  margin-right: ${(props) => (props.mr ? props.mr + "rem" : "0")};
  margin-left: ${(props) => (props.ml ? props.ml + "rem" : "0")};
  margin-bottom: ${(props) => (props.mb ? props.mb + "rem" : "0")};
  padding-top: ${(props) => (props.pt ? props.pt + "rem" : "0")};
  padding-right: ${(props) => (props.pr ? props.pr + "rem" : "0")};
  padding-left: ${(props) => (props.pl ? props.pl + "rem" : "0")};
  padding-bottom: ${(props) => (props.pb ? props.pb + "rem" : "0")};

  ${(props) =>
    props.flex &&
    `
    display:flex;
    align-items:center;
  `}

  ${(props) =>
    props.flexSpace &&
    `
    justify-content:space-between;
  `}

${(props) =>
    props.justifyRight &&
    `
    justify-content:right;
  `}
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;

  .gatsby-resp-image-wrapper {
    margin: 3rem 0;
  }
`;

export default Box;
