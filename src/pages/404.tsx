import * as React from 'react';
import { Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';

function NotFoundPage() {
  return (
    <>
      <HeroBar>
        <h1>Page not found</h1>
        <p>Sorry, we couldn’t find what you were looking for.</p>
      </HeroBar>
      <Box withContainer>
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
      </Box>
    </>
  );
}

export default NotFoundPage;
