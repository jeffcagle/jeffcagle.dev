import * as React from 'react';
import ListTools from '../components/lists/ListTools';
import ListExperiments from '../components/lists/ListExperiments';
import ListPosts from '../components/lists/ListPosts';
import { Row, Column } from '../components/shared/Columns';
import Button from '../components/shared/Button';
import { Section, Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ListProjects from '../components/lists/ListProjects';
import Seo from '../components/shared/Seo';

function Index() {
  const tools = [
    'JavaScript',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Figma',
  ];

  return (
    <>
      <Seo />
      <HeroBar flex>
        <FontAwesomeIcon icon={faCoffee} size="8x" />
        <Box pl={2}>
          <h1>Hi, I'm Jeff Cagle</h1>
          <p>
            I’m a frontend <span>Web Developer</span> and{' '}
            <span>UX Designer</span> from the United States.
          </p>
          <Box mt={0.8} mb={0.5}>
            <ListTools startText="I love: " items={tools} />
          </Box>
        </Box>
      </HeroBar>
      <Section h2="Current Projects">
        <ListProjects limit={3} exclude="JeffCagle.dev" />
        <Button variant="primary" centered to="/projects" mt={1}>
          All Projects
        </Button>
      </Section>
      <Section>
        <Row>
          <Column title="Experiments" mediumWidth={50}>
            <ListExperiments />
          </Column>
          <Column title="Dev Blog" mediumWidth={50}>
            <ListPosts type="list" limit={5} allPostsLink />
          </Column>
        </Row>
      </Section>
    </>
  );
}

export default Index;
