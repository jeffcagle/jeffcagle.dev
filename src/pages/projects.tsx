import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../components/shared/Ui';
import ListProjectsAsCards from '../components/lists/ListProjectsAsCards';
import HeroBar from '../components/shared/HeroBar';

const Projects = () => (
  <>
    <HeroBar flex py={3} hasSubMenu>
      <FontAwesomeIcon icon={faCode} size="4x" />
      <Box pl={2}>
        <h1>Current Projects</h1>
        <p>
          I build <span>fast</span> and <span>beautiful websites</span> and
          applications using modern tech stacks.
        </p>
      </Box>
    </HeroBar>
    <Box withContainer mt={3}>
      <ListProjectsAsCards />
    </Box>
  </>
);

export default Projects;