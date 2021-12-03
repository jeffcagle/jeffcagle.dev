import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { Box } from '../components/shared/Ui';
// import ListPostsAsCards from '../components/lists/ListPostsAsCards';
import HeroBar from '../components/shared/HeroBar';

const Blog = () => (
  <>
    <HeroBar flex py={3}>
      <FontAwesomeIcon icon={faBlog} size="4x" />
      <Box pl={2}>
        <h1>Dev Blog</h1>
        <p>These are my blog posts...</p>
      </Box>
    </HeroBar>
    <Box withContainer mt={3}>
      {/* <ListPostsAsCards /> */}
    </Box>
  </>
);

export default Blog;
