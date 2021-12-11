import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent1: string;
      accent2: string;
      accent3: string;
      accent4: string;

      neutral100: string;
      neutral150: string;
      neutral200: string;
      neutral300: string;
      neutral400: string;
      neutral500: string;
      neutral550: string;
      neutral600: string;
      neutral700: string;
      neutral750: string;
      neutral800: string;

      jsToolFont: string;
    };

    fonts: {
      title: string;
      content: string;
    };

    sizes: {
      containerWidth: string;
      containerWidthMedium: string;
      containerWidthSmall: string;
    };

    buttons: {
      primary: {
        color: string;
        bgColor: string;
        bgColorHover: string;
      };
      secondary: {
        color: string;
        bgColor: string;
        bgColorHover: string;
      };
    };
  }
}
