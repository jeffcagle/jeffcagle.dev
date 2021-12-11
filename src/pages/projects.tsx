import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';
import ListProjects from '../components/lists/ListProjects';
import Seo from '../components/shared/Seo';

function Projects() {
  return (
    <>
      <Seo
        title="Recent Web Development Projects"
        description="Browse my recent Web Development projects built with JavaScript, React, &amp; WordPress. For inquiries about my services, visit my Services or Contact pages."
      />
      <HeroBar flex py={3} hasSubMenu>
        <FontAwesomeIcon icon={faCode} size="4x" />
        <Box pl={2}>
          <h1>Recent Projects</h1>
          <p>
            I build <span>fast</span> and <span>beautiful websites</span> and
            applications using modern tech stacks.
          </p>
        </Box>
      </HeroBar>
      <Box withContainer mt={3}>
        <ListProjects />
      </Box>
    </>
  );
}

export default Projects;
