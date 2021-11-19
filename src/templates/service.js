import React from "react";
import { graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Pills from "../components/Pills";
import { Hero, Box } from "../components/ui";

function Service({ data }) {
  const service = data.markdownRemark;

  return (
    <>
      <Hero
        hasSubMenu
        py={2}
        heroTitle={service.frontmatter.longTitle}
        heroSummary={service.frontmatter.summary}
      >
        <Box flex mt={0.8} mb={0.5}>
          <Pills startText="Tools: " items={service.frontmatter.tools} />
        </Box>
      </Hero>
      {/* <Box withContainer mt={3}>
        <GatsbyImage
          image={getImage(service.frontmatter.mainImg)}
          alt={service.frontmatter.longTitle}
        />
      </Box> */}
      <Box withContainer mt={3}>
        <div dangerouslySetInnerHTML={{ __html: service.html }} />
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
        mainImg {
          childImageSharp {
            gatsbyImageData(
              width: 928
              formats: [AUTO, WEBP, AVIF]
              quality: 50
            )
          }
        }
      }
    }
  }
`;

export default Service;
