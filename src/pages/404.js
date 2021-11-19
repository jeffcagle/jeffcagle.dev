import React from "react";
import { Hero, Box } from "../components/ui";

const NotFoundPage = () => {
  return (
    <>
      <Hero
        heroTitle="Page not found"
        heroSummary="Sorry, we couldn’t find what you were looking for."
      />
      <Box withContainer>
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
      </Box>
    </>
  );
};

export default NotFoundPage;
