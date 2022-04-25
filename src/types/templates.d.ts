declare namespace Templates {
  interface Project {
    data: {
      markdownRemark: {
        html: string;
        frontmatter: {
          shortTitle: string;
          longTitle: string;
          summary: string;
          frontendTools: string[];
          backendTools: string[];
          codeUrl: string;
          codeUnavailable: boolean;
          siteUrl: string;
          siteUnavailable: boolean;
        };
      };
      next: PrevNext;
      previous: PrevNext;
    };
  }

  interface Service {
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
      next: PrevNext;
      previous: PrevNext;
    };
  }

  interface ShortTitle {
    frontmatter: {
      shortTitle: string;
    };
  }

  interface PrevNext {
    frontmatter: {
      shortTitle: string;
      slug: string;
      image: GatsbyImageProps['image'];
    };
  }
}
