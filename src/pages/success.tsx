import React from 'react';
import styled from 'styled-components';
import Seo from '../components/shared/Seo';
import { Box } from '../components/shared/Ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/shared/Button';

function Success() {
  return (
    <>
      <Seo
        title="Recent Web Development Projects"
        description="Browse my recent Web Development projects built with JavaScript, React, &amp; WordPress. For inquiries about my services, visit my Services or Contact pages."
      />
      <Box flex withContainer mt={5}>
        <FontAwesomeIcon icon={faThumbsUp} size="4x" />
        <Message>
          <p>Your message has been sent!</p>
          <p>I will do my best to review and respond within 48 hours.</p>
        </Message>
      </Box>
      <Box withContainer mt={1}>
        <Button centered variant="primary" to="/">
          <FontAwesomeIcon icon={faHome} /> Return Home
        </Button>
      </Box>
    </>
  );
}

const Message = styled.div`
  padding-left: 2rem;

  p {
    margin: 0.5rem 0;

    &:first-of-type {
      font-weight: bold;
      font-size: 1.4rem;
    }
  }
`;

export default Success;
