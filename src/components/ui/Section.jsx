import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ sectionTitle, flex, children }) => (
  <Wrapper>
    <Container flex={flex}>
      {sectionTitle && <Title>{sectionTitle}</Title>}
      {children}
    </Container>
  </Wrapper>
);

Section.propTypes = {
  sectionTitle: PropTypes.string,
  flex: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.any]),
};

Section.defaultProps = {
  sectionTitle: null,
  flex: false,
  children: null,
};

const Wrapper = styled.section`
  margin-top: 3rem;
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;

  ${(props) =>
    props.flex &&
    `
      display:flex;
      align-items:center;
  `}
`;

const Title = styled.h2`
  /* margin-bottom: 2rem; */
`;

export default Section;
