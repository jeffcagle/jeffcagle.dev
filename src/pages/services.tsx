import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';
import ListServices from '../components/lists/ListServices';
import Seo from '../components/shared/Seo';

function Services() {
  return (
    <>
      <Seo
        title="Web Design &amp; Development Services"
        description="Professional freelance Web Design &amp; Web Development services for small to medium businesses from a US-based developer with 15+ years of experience."
      />
      <HeroBar flex py={3} hasSubMenu>
        <FontAwesomeIcon icon={faLaptopCode} size="4x" />
        <Box pl={2}>
          <h1>My Services</h1>
          <p>
            I build <span>fast</span> and <span>beautiful websites</span> and
            applications using modern tech stacks.
          </p>
        </Box>
      </HeroBar>
      <Box withContainer mt={3}>
        <ListServices />
      </Box>
    </>
  );
}

export default Services;
