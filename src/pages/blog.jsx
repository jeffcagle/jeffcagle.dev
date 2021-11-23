import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../components/ui';
import Hero from '../components/Hero';
import ListPostsGrid from '../components/ListPostsGrid';

const Blog = () => (
  <>
    <Hero
      heroTitle="Dev Blog"
      py={3}
      heroImage={<FontAwesomeIcon icon={faBlog} size="4x" />}
      heroSummary="This are my blog posts..."
    />
    <Box withContainer mt={3}>
      <ListPostsGrid />
    </Box>
  </>
);

export default Blog;
