declare namespace ToolTip {
  interface Wrapper {
    position: string;
    delay?: number;
    className?: string;
  }

  interface Element extends Wrapper {
    children: React.ReactNode;
  }
}
