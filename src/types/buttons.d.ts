declare namespace Buttons {
  interface Container {
    centered?: boolean;
    mt?: number;
    mb?: number;
  }

  interface Button extends Container {
    variant: 'primary' | 'secondary';
    to: string;
    disabled?: boolean;
    externalLink?: boolean;
    children: React.ReactNode;
  }

  interface Link {
    variant: 'primary' | 'secondary';
    href: string;
    disabled?: boolean;
    externalLink?: boolean;
    children: React.ReactNode;
  }
}
