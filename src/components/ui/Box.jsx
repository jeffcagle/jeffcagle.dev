import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
}) => (
  <Item
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
  </Item>
);

Box.propTypes = {
  flex: PropTypes.bool,
  flexSpace: PropTypes.bool,
  justifyRight: PropTypes.bool,
  withContainer: PropTypes.bool,
  mt: PropTypes.number,
  mr: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  pt: PropTypes.number,
  pr: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

Box.defaultProps = {
  flex: false,
  flexSpace: false,
  justifyRight: false,
  withContainer: false,
  mt: 0,
  mr: 0,
  mb: 0,
  ml: 0,
  pt: 0,
  pr: 0,
  pb: 0,
  pl: 0,
};

const Item = styled.div`
  margin-top: ${(props) => (props.mt ? `${props.mt}rem` : '0')};
  margin-right: ${(props) => (props.mr ? `${props.mr}rem` : '0')};
  margin-left: ${(props) => (props.ml ? `${props.ml}rem` : '0')};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : '0')};
  padding-top: ${(props) => (props.pt ? `${props.pt}rem` : '0')};
  padding-right: ${(props) => (props.pr ? `${props.pr}rem` : '0')};
  padding-left: ${(props) => (props.pl ? `${props.pl}rem` : '0')};
  padding-bottom: ${(props) => (props.pb ? `${props.pb}rem` : '0')};

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
