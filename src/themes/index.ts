
// Theme configuration type definitions
export type ThemeColors = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: {
    default: string;
    secondary?: string;
    tertiary?: string;
  };
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
};

export type ThemeConfig = {
  name: string;
  cssClass: string;
  colors: ThemeColors;
  isDark: boolean;
  icon: string;
};

// Theme configurations
const themes: Record<string, ThemeConfig> = {
  "light-ocean": {
    name: "Light Ocean",
    cssClass: "light-ocean",
    isDark: false,
    icon: "#0EA5E9",
    colors: {
      background: "180 33% 99%",
      foreground: "200 50% 20%",
      card: "0 0% 100%",
      cardForeground: "200 50% 20%",
      popover: "0 0% 100%",
      popoverForeground: "200 50% 20%",
      primary: "196 94% 48%",
      primaryForeground: "0 0% 100%",
      secondary: "100 65% 94%",
      secondaryForeground: "200 50% 20%",
      muted: "0 0% 95%",
      mutedForeground: "200 25% 40%",
      accent: {
        default: "196 94% 94%",
        secondary: "190 90% 90%"
      },
      accentForeground: "200 50% 20%",
      destructive: "0 84% 60%",
      destructiveForeground: "0 0% 100%",
      border: "200 20% 88%",
      input: "200 20% 88%",
      ring: "196 94% 48%"
    }
  },
  "dark-intelij": {
    name: "Dark IntelliJ",
    cssClass: "dark-intelij",
    isDark: true,
    icon: "#2B2B2B",
    colors: {
      background: "230 25% 13%",
      foreground: "250 25% 98%",
      card: "230 25% 15%",
      cardForeground: "250 25% 98%",
      popover: "230 25% 15%",
      popoverForeground: "250 25% 98%",
      primary: "260 79% 75%",
      primaryForeground: "250 25% 98%",
      secondary: "260 64% 35%",
      secondaryForeground: "250 25% 98%",
      muted: "230 25% 20%",
      mutedForeground: "250 25% 70%",
      accent: {
        default: "272 91% 65%",
        secondary: "265 85% 60%"
      },
      accentForeground: "250 25% 98%",
      destructive: "324 80% 60%",
      destructiveForeground: "250 25% 98%",
      border: "230 25% 20%",
      input: "230 25% 20%",
      ring: "260 79% 75%"
    }
  },
  "pure-black-cyberpunk": {
    "name": "Pure Black Cyberpunk",
    "cssClass": "pure-black-cyberpunk",
    "isDark": true,
    "icon": "#000000",
    "colors": {
      "background": "0 0% 0%",
      "foreground": "54 100% 50%",
      "card": "220 100% 10%",
      "cardForeground": "54 100% 55%",
      "popover": "220 100% 8%",
      "popoverForeground": "54 100% 60%",
      "primary": "195 100% 50%",
      "primaryForeground": "0 0% 100%",
      "secondary": "0 100% 50%",
      "secondaryForeground": "0 0% 100%",
      "muted": "220 100% 15%",
      "mutedForeground": "54 100% 40%",
      "accent": {
        "default": "195 100% 60%",
        "secondary": "54 100% 50%",
        "tertiary": "0 100% 50%"
      },
      "accentForeground": "0 0% 100%",
      "destructive": "0 100% 50%",
      "destructiveForeground": "0 0% 100%",
      "border": "195 100% 40%",
      "input": "195 100% 20%",
      "ring": "54 100% 50%"
    }
  },
  "gray-retro": {
    name: "Gray Retro",
    cssClass: "gray-retro",
    isDark: false,
    icon: "#D3D3D3",
    colors: {
      background: "0 0% 95%",
      foreground: "0 0% 20%",
      card: "0 0% 100%",
      cardForeground: "0 0% 20%",
      popover: "0 0% 100%",
      popoverForeground: "0 0% 20%",
      primary: "0 0% 40%",
      primaryForeground: "0 0% 100%",
      secondary: "0 0% 90%",
      secondaryForeground: "0 0% 20%",
      muted: "0 0% 85%",
      mutedForeground: "0 0% 40%",
      accent: {
        default: "0 0% 80%"
      },
      accentForeground: "0 0% 20%",
      destructive: "0 60% 50%",
      destructiveForeground: "0 0% 100%",
      border: "0 0% 80%",
      input: "0 0% 80%",
      ring: "0 0% 40%"
    }
  },
  "light-earth": {
    name: "Light Earth",
    cssClass: "light-earth",
    isDark: false,
    icon: "#A2845E",
    colors: {
      background: "40 30% 95%",
      foreground: "20 30% 20%",
      card: "40 30% 99%",
      cardForeground: "20 30% 20%",
      popover: "40 30% 99%",
      popoverForeground: "20 30% 20%",
      primary: "30 50% 60%",
      primaryForeground: "40 30% 99%",
      secondary: "40 40% 90%",
      secondaryForeground: "20 30% 20%",
      muted: "40 20% 90%",
      mutedForeground: "20 30% 40%",
      accent: {
        default: "20 50% 90%",
        secondary: "40 60% 80%"
      },
      accentForeground: "20 30% 20%",
      destructive: "0 60% 50%",
      destructiveForeground: "40 30% 99%",
      border: "30 20% 80%",
      input: "30 20% 80%",
      ring: "30 50% 60%"
    }
  },
  "light-sakura": {
    name: "Light Sakura",
    cssClass: "light-sakura",
    isDark: false,
    icon: "#FFB7C5",
    colors: {
      background: "350 30% 97%",
      foreground: "340 40% 30%",
      card: "350 30% 99%",
      cardForeground: "340 40% 30%",
      popover: "350 30% 99%",
      popoverForeground: "340 40% 30%",
      primary: "350 80% 70%",
      primaryForeground: "350 30% 99%",
      secondary: "350 60% 95%",
      secondaryForeground: "340 40% 30%",
      muted: "350 30% 94%",
      mutedForeground: "340 40% 50%",
      accent: {
        default: "340 70% 94%",
        secondary: "330 60% 90%"
      },
      accentForeground: "340 40% 30%",
      destructive: "0 70% 60%",
      destructiveForeground: "350 30% 99%",
      border: "350 60% 90%",
      input: "350 60% 90%",
      ring: "350 80% 70%"
    }
  },
  "dark-vscode": {
    name: "Dark VSCode",
    cssClass: "dark-vscode",
    isDark: true,
    icon: "#1E1E1E",
    colors: {
      background: "220 20% 15%",
      foreground: "210 10% 90%",
      card: "220 20% 18%",
      cardForeground: "210 10% 90%",
      popover: "220 20% 18%",
      popoverForeground: "210 10% 90%",
      primary: "200 100% 50%",
      primaryForeground: "210 10% 98%",
      secondary: "220 20% 25%",
      secondaryForeground: "210 10% 90%",
      muted: "220 20% 22%",
      mutedForeground: "210 10% 60%",
      accent: {
        default: "200 60% 40%",
        secondary: "210 70% 35%"
      },
      accentForeground: "210 10% 98%",
      destructive: "0 70% 60%",
      destructiveForeground: "210 10% 98%",
      border: "220 20% 25%",
      input: "220 20% 25%",
      ring: "200 100% 50%"
    }
  }
};

// Available themes list
export const themeList = Object.keys(themes) as Array<keyof typeof themes>;

// Get theme config by key
export const getTheme = (key: string): ThemeConfig => {
  if (key in themes) {
    return themes[key];
  }
  // Default to light-ocean if theme not found
  return themes["light-ocean"];
};

// Check if theme is dark
export const isDarkTheme = (themeName: string): boolean => {
  return getTheme(themeName).isDark;
};

export default themes;
