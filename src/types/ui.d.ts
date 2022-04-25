declare namespace UI {
  interface H2 {
    centered?: boolean;
  }

  interface Theme extends H2 {
    light?: boolean;
  }

  interface Section extends Theme {
    h2?: string;
    flex?: boolean;
    children?: React.ReactNode;
  }

  interface Box {
    flex?: boolean;
    flexSpace?: boolean;
    justifyRight?: boolean;
    justifyCenter?: boolean;
    withContainer?: boolean;
    mt?: number;
    mr?: number;
    ml?: number;
    mb?: number;
    pt?: number;
    pr?: number;
    pl?: number;
    pb?: number;
    children?: React.ReactNode;
  }

  interface BoxContainer {
    flex?: boolean;
  }
}
