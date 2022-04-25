declare namespace Hero {
  interface Wrapper {
    hasSubMenu?: boolean;
    py?: number;
  }

  interface Container {
    flex?: boolean;
  }

  interface Bar extends Container, Wrapper {
    children: React.ReactNode;
  }
}
