import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../components/ui';
import Hero from '../components/Hero';
import ListServicesGrid from '../components/ListServicesGrid';

const Services = () => (
  <>
    <Hero
      hasSubMenu
      py={3}
      heroImage={<FontAwesomeIcon icon={faLaptopCode} size="4x" />}
      heroTitle="My Services"
      heroSummary="I build fast and beautiful websites and applications using modern tech stacks."
    />
    <Box withContainer mt={3}>
      <ListServicesGrid />
    </Box>
  </>
);

export default Services;