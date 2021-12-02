import * as React from 'react';
import ListTools from '../components/lists/ListTools';
import ListProjectsAsCards from '../components/lists/ListProjectsAsCards';
import ListExperiments from '../components/lists/ListExperiments';
import ListPosts from '../components/lists/ListPosts';
import { Row, Column } from '../components/shared/Columns';
import Button from '../components/shared/Button';
import { Section, Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  const tools = [
    'JavaScript',
    'React',
    'Gatsby',
    'TypeScript',
    'Python',
    'Figma',
  ];

  return (
    <>
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
        <ListProjectsAsCards excludeDev mt={2} />
        <Button type="primary" centered to="/projects" mt={1}>
          All Projects
        </Button>
      </Section>
      <Section>
        <Row>
          <Column title="Experiments" width={50}>
            <ListExperiments />
          </Column>
          <Column title="Dev Blog" width={50}>
            <ListPosts limit={5} withIcon allPostsLink />
          </Column>
        </Row>
      </Section>
    </>
  );
};

export default Index;
