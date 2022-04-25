declare namespace Pagination {
  interface Count {
    currentPage: number;
    numberOfPages: number;
  }

  interface Item {
    slugBase: string;
    type: string;
    previous: Link;
    next: Link;
  }

  interface Link {
    frontmatter: {
      image: GatsbyImageProps['image'];
      title?: string;
      longTitle?: string;
      slug: string;
    };
  }
}
