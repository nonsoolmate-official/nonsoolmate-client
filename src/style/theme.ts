import { css, DefaultTheme } from "styled-components";

const colors = {
  black: "#000000",
  grey_1200: "#0D131A",
  grey_1100: "#0F1620",
  grey_1000: "#18202A",
  grey_900: "#2D333F",
  grey_800: "#414654",
  grey_700: "#5A6072",
  grey_600: "#73798D",
  grey_500: "#9196A7",
  grey_400: "#AFB3C0",
  grey_300: "#C6CAD2",
  grey_200: "#E2E4E8",
  grey_100: "#ECEDF0",
  grey_50: "#F3F4F6",
  grey_8: "#1D1D1F",
  white: "#FFFFFF",

  main_blue: "#6478FF",
  dark_blue: "#4C61F0",
  middle_blue: "#93A1FF",
  light_blue: "#EDEFFF",

  error: "#FF5858",
};

const effects = {
  dimmed_60: `
    background: rgba(0, 0, 0, 0.60);
    `,
  dimmed_40: `
    background: rgba(0, 0, 0, 0.40);
    `,
  modal_shadow: `
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.05);
    `,
  top_nav_shadow: `
    background: #FFF;
    box-shadow: 0px 0px 12px 0px #E7E7E7;
    `,
  container_shadow: `
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
    `,
  blur: `
    filter: blur(3px);
    `,
  pdf_shadow: `
    box-shadow: 0px 2.56px 10.239px 0px rgba(0, 0, 0, 0.12);
    `,
  membership_shadow: `
    box-shadow: 0px 0px 12px 0px rgb(236, 237, 249)`,
  gradient: `
    linear-gradient(180deg, #FFF 0%, #E5E8FF 100%);
`,
};

const fonts = {
  Headline1: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 6rem;
  `,
  Headline2: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 3.6rem;
    font-weight: 600;
    line-height: 4.4rem;
  `,
  Headline3: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 3.6rem;
  `,
  Headline4: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.8rem;
  `,
  Headline5: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.8rem;
  `,
  Body1: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.8rem;
  `,
  Body2: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.8rem;
  `,
  Body3: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.4rem;
  `,
  Body4: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  `,
  Body5: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2rem;
  `,
  Body6: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;
  `,
  Body7: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6rem;
  `,
  Body8: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;
  `,
  Caption1: css`
    font-family: SUIT, "Apple SD Gothic Neo";
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.6rem;
  `,
  Policies: css`
    font-family: Inter;
    font-style: normal;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: normal;
  `,
};

const theme: Pick<DefaultTheme, "colors" | "fonts" | "effects"> = {
  colors,
  fonts,
  effects,
};
export default theme;
