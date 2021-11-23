import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../components/ui';
import ListProjectsGrid from '../components/ListProjectsGrid';
import Hero from '../components/Hero';

const Projects = () => (
  <>
    <Hero
      hasSubMenu
      py={3}
      heroImage={<FontAwesomeIcon icon={faCode} size="4x" />}
      heroTitle="Current Projects"
      heroSummary="I build fast and beautiful websites and applications using modern tech stacks."
    />
    <Box withContainer mt={3}>
      <ListProjectsGrid />
    </Box>
  </>
);

export default Projects;
