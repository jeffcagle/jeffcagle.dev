import * as React from 'react';
import { graphql } from 'gatsby';
import ListTools from '../components/lists/ListTools';
import { Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';
import Seo from '../components/shared/Seo';

interface ServiceProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        shortTitle: string;
        longTitle: string;
        summary: string;
        tools: string[];
      };
    };
  };
}

function Service({ data }: ServiceProps) {
  const service = data.markdownRemark;

  return (
    <>
      <Seo
        title={service.frontmatter.longTitle}
        description={service.frontmatter.summary}
      />
      <HeroBar py={2} hasSubMenu>
        <h1>{service.frontmatter.longTitle}</h1>
        <p>{service.frontmatter.summary}</p>
        <Box flex mt={0.8} mb={0.5}>
          <ListTools startText="My tools: " items={service.frontmatter.tools} />
        </Box>
      </HeroBar>
      <Box withContainer mt={3}>
        <div
          className="service"
          dangerouslySetInnerHTML={{ __html: service.html }}
        />
      </Box>
    </>
  );
}

export const query = graphql`
  query Service($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        shortTitle
        longTitle
        summary
        tools
      }
    }
  }
`;

export default Service;
