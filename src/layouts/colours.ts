export interface ColourTheme {
  fg: string;
  bg: string;
  gray: string;
  accent_light: string;
  accent_dark: string;
}

export const defaultTheme = "Dark";

export const colourThemes: Record<string, ColourTheme> = {
  light: {
    fg: "#111827",
    bg: "#ffffff",
    gray: "#9CA3AF",
    accent_light: "#8c929d",
    accent_dark: "#2e3034",
  },
  dark: {
    fg: "#F3F4F6",
    bg: "#111827",
    gray: "#6B7280",
    accent_light: "#606673",
    accent_dark: "#151619",
  },
  notion_gray: {
    fg: "#FFFFFF",
    bg: "#7F7F7F",
    gray: "#121212",
    accent_light: "#CCCCCC",
    accent_dark: "#4D4D4D",
  },
  notion_brown: {
    fg: "#FFFFFF",
    bg: "#8F6551",
    gray: "#121212",
    accent_light: "#C4A597",
    accent_dark: "#523A2E",
  },
  notion_orange: {
    fg: "#FFFFFF",
    bg: "#D66E1F",
    gray: "#121212",
    accent_light: "#ECAC7A",
    accent_dark: "#7A3F11",
  },
  notion_yellow: {
    fg: "#FFFFFF",
    bg: "#D99F33",
    gray: "#121212",
    accent_light: "#EAC98B",
    accent_dark: "#835D18",
  },
  notion_green: {
    fg: "#FFFFFF",
    bg: "#488865",
    gray: "#121212",
    accent_light: "#8EC4A6",
    accent_dark: "#294E3A",
  },
  notion_blue: {
    fg: "#FFFFFF",
    bg: "#2E76B5",
    gray: "#121212",
    accent_light: "#80B2DE",
    accent_dark: "#1B4468",
  },
  notion_purple: {
    fg: "#FFFFFF",
    bg: "#694CAC",
    gray: "#121212",
    accent_light: "#A998D2",
    accent_dark: "#3C2C63",
  },
  notion_pink: {
    fg: "#FFFFFF",
    bg: "#A44695",
    gray: "#121212",
    accent_light: "#D091C5",
    accent_dark: "#5E2855",
  },
  notion_red: {
    fg: "#FFFFFF",
    bg: "#BD353F",
    gray: "#121212",
    accent_light: "#DD878C",
    accent_dark: "#6B1E23",
  },
};
