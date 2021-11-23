import React from 'react';
import Pills from '../components/Pills';
import Avatar from '../components/Avatar';
import { Section, Box, Row, Column, ButtonLink } from '../components/ui';
import ListProjectsGrid from '../components/ListProjectsGrid';
import ListExperiments from '../components/ListExperiments';
import Hero from '../components/Hero';
import ListPosts from '../components/ListPosts';

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
      <Hero
        isHome
        heroImage={<Avatar />}
        heroTitle="Hi, I'm Jeff Cagle"
        heroSummary={
          <>
            I’m a frontend <span>Web Developer</span> and{' '}
            <span>UX Designer</span> from the United States.
          </>
        }
      >
        <Box mt={0.8} mb={0.5}>
          <Pills startText="I love: " items={tools} />
        </Box>
      </Hero>
      <Section sectionTitle="Current Projects">
        <ListProjectsGrid excludeDev mt={2} />
        <ButtonLink
          type="primary"
          centered
          to="/projects"
          buttonText="All Projects"
          mt={1}
        />
      </Section>
      <Section>
        <Row>
          <Column columnTitle="Experiments" columnWidth={50}>
            <ListExperiments />
          </Column>
          <Column columnTitle="Dev Blog" columnWidth={50}>
            <ListPosts limit={5} withIcon allPostsLink />
          </Column>
        </Row>
      </Section>
    </>
  );
};

export default Index;
