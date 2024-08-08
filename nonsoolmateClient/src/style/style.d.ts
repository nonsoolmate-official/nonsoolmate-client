import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      grey_1200: string;
      grey_1100: string;
      grey_1000: string;
      grey_900: string;
      grey_800: string;
      grey_700: string;
      grey_600: string;
      grey_500: string;
      grey_400: string;
      grey_300: string;
      grey_200: string;
      grey_100: string;
      grey_50: string;
      white: string;

      main_blue: string;
      dark_blue: string;
      middle_blue: string;
      light_blue: string;

      error: string;
    };
    effects: {
      dimmed_60: string;
      dimmed_40: string;
      modal_shadow: string;
      top_nav_shadow: string;
      container_shadow: string;
      blur: string;
      pdf_shadow: string;
      membership_shadow: string;
    };
    fonts: {
      Headline1: SerializedStyles;
      Headline2: SerializedStyles;
      Headline3: SerializedStyles;
      Headline4: SerializedStyles;
      Headline5: SerializedStyles;
      Body1: SerializedStyles;
      Body2: SerializedStyles;
      Body3: SerializedStyles;
      Body4: SerializedStyles;
      Body5: SerializedStyles;
      Body6: SerializedStyles;
      Body7: SerializedStyles;
      Body8: SerializedStyles;
      Caption1: SerializedStyles;
    };
  }
}
