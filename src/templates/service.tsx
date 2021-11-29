import * as React from 'react';
import { graphql } from 'gatsby';
import Tools from '../components/devTools/Tools';
import { Box } from '../components/shared/Ui';
import HeroBar from '../components/shared/HeroBar';

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

const Service = ({ data }: ServiceProps) => {
  const service = data.markdownRemark;

  return (
    <>
      <HeroBar py={2} hasSubMenu>
        <h1>{service.frontmatter.longTitle}</h1>
        <p>{service.frontmatter.summary}</p>
        <Box flex mt={0.8} mb={0.5}>
          <Tools startText="Tools: " items={service.frontmatter.tools} />
        </Box>
      </HeroBar>
      <Box withContainer mt={3}>
        <div dangerouslySetInnerHTML={{ __html: service.html }} />
      </Box>
    </>
  );
};

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
