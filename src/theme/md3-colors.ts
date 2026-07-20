/**
 * Material Design 3 Color System
 * Complete theme engine with 8 themes and 7 accent colors
 */

export type ThemeName = 
  | "amoled_black" 
  | "dark" 
  | "light" 
  | "glass" 
  | "gradient" 
  | "neon" 
  | "minimal" 
  | "dynamic_material_you";

export type AccentColor = 
  | "blue" 
  | "green" 
  | "purple" 
  | "orange" 
  | "red" 
  | "pink" 
  | "dynamic";

export interface MD3Colors {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  outline: string;
  outlineVariant: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  success: string;
  warning: string;
  info: string;
}

export interface MD3Theme {
  name: ThemeName;
  accent: AccentColor;
  colors: MD3Colors;
  isDark: boolean;
}

// Accent color definitions
const ACCENT_COLORS: Record<AccentColor, Record<"light" | "dark", string>> = {
  blue: { light: "#0D47A1", dark: "#90CAF9" },
  green: { light: "#1B5E20", dark: "#81C784" },
  purple: { light: "#4A148C", dark: "#CE93D8" },
  orange: { light: "#E65100", dark: "#FFB74D" },
  red: { light: "#B71C1C", dark: "#EF5350" },
  pink: { light: "#880E4F", dark: "#F48FB1" },
  dynamic: { light: "#0D47A1", dark: "#90CAF9" },
};

// AMOLED Black Theme
export const AMOLED_BLACK_THEME = (accent: AccentColor): MD3Theme => {
  const accentColor = ACCENT_COLORS[accent].dark;
  return {
    name: "amoled_black",
    accent,
    isDark: true,
    colors: {
      primary: accentColor,
      onPrimary: "#000000",
      primaryContainer: `${accentColor}1A`,
      onPrimaryContainer: accentColor,
      secondary: "#B0BEC5",
      onSecondary: "#000000",
      secondaryContainer: "#37474F",
      onSecondaryContainer: "#B0BEC5",
      tertiary: "#80DEEA",
      onTertiary: "#000000",
      tertiaryContainer: "#004D5C",
      onTertiaryContainer: "#80DEEA",
      background: "#000000",
      onBackground: "#FFFFFF",
      surface: "#0A0A0A",
      onSurface: "#FFFFFF",
      surfaceVariant: "#1A1A1A",
      onSurfaceVariant: "#B0BEC5",
      error: "#FF5252",
      onError: "#000000",
      errorContainer: "#B71C1C",
      onErrorContainer: "#FF5252",
      outline: "#424242",
      outlineVariant: "#2A2A2A",
      scrim: "#000000",
      inverseSurface: "#FFFFFF",
      inverseOnSurface: "#000000",
      inversePrimary: accentColor,
      success: "#4CAF50",
      warning: "#FFC107",
      info: "#2196F3",
    },
  };
};

// Dark Theme
export const DARK_THEME = (accent: AccentColor): MD3Theme => {
  const accentColor = ACCENT_COLORS[accent].dark;
  return {
    name: "dark",
    accent,
    isDark: true,
    colors: {
      primary: accentColor,
      onPrimary: "#FFFFFF",
      primaryContainer: `${accentColor}1A`,
      onPrimaryContainer: accentColor,
      secondary: "#B0BEC5",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#37474F",
      onSecondaryContainer: "#B0BEC5",
      tertiary: "#80DEEA",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#004D5C",
      onTertiaryContainer: "#80DEEA",
      background: "#121212",
      onBackground: "#FFFFFF",
      surface: "#1E1E1E",
      onSurface: "#FFFFFF",
      surfaceVariant: "#2A2A2A",
      onSurfaceVariant: "#B0BEC5",
      error: "#FF5252",
      onError: "#FFFFFF",
      errorContainer: "#B71C1C",
      onErrorContainer: "#FF5252",
      outline: "#424242",
      outlineVariant: "#2A2A2A",
      scrim: "#000000",
      inverseSurface: "#FFFFFF",
      inverseOnSurface: "#000000",
      inversePrimary: accentColor,
      success: "#4CAF50",
      warning: "#FFC107",
      info: "#2196F3",
    },
  };
};

// Light Theme
export const LIGHT_THEME = (accent: AccentColor): MD3Theme => {
  const accentColor = ACCENT_COLORS[accent].light;
  return {
    name: "light",
    accent,
    isDark: false,
    colors: {
      primary: accentColor,
      onPrimary: "#FFFFFF",
      primaryContainer: `${accentColor}1A`,
      onPrimaryContainer: accentColor,
      secondary: "#5E6366",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#E8DEF8",
      onSecondaryContainer: "#5E6366",
      tertiary: "#006B5E",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#A0F2E9",
      onTertiaryContainer: "#006B5E",
      background: "#FFFFFF",
      onBackground: "#1C1B1F",
      surface: "#FFFBFE",
      onSurface: "#1C1B1F",
      surfaceVariant: "#F3EFF7",
      onSurfaceVariant: "#49454E",
      error: "#B3261E",
      onError: "#FFFFFF",
      errorContainer: "#F9DEDC",
      onErrorContainer: "#B3261E",
      outline: "#79747E",
      outlineVariant: "#CAC7D0",
      scrim: "#000000",
      inverseSurface: "#313033",
      inverseOnSurface: "#F4EFF4",
      inversePrimary: accentColor,
      success: "#4CAF50",
      warning: "#FFC107",
      info: "#2196F3",
    },
  };
};

// Glass Theme
export const GLASS_THEME = (accent: AccentColor): MD3Theme => {
  const accentColor = ACCENT_COLORS[accent].dark;
  return {
    name: "glass",
    accent,
    isDark: true,
    colors: {
      primary: accentColor,
      onPrimary: "#FFFFFF",
      primaryContainer: `${accentColor}1A`,
      onPrimaryContainer: accentColor,
      secondary: "#B0BEC5",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#37474F",
      onSecondaryContainer: "#B0BEC5",
      tertiary: "#80DEEA",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#004D5C",
      onTertiaryContainer: "#80DEEA",
      background: "#0F0F0F",
      onBackground: "#FFFFFF",
      surface: "#1A1A2E",
      onSurface: "#FFFFFF",
      surfaceVariant: "#16213E",
      onSurfaceVariant: "#B0BEC5",
      error: "#FF5252",
      onError: "#FFFFFF",
      errorContainer: "#B71C1C",
      onErrorContainer: "#FF5252",
      outline: "#424242",
      outlineVariant: "#2A2A2A",
      scrim: "#000000",
      inverseSurface: "#FFFFFF",
      inverseOnSurface: "#000000",
      inversePrimary: accentColor,
      success: "#4CAF50",
      warning: "#FFC107",
      info: "#2196F3",
    },
  };
};

// Gradient Theme
export const GRADIENT_THEME = (accent: AccentColor): MD3Theme => {
  const accentColor = ACCENT_COLORS[accent].dark;
  return {
    name: "gradient",
    accent,
    isDark: true,
    colors: {
      primary: accentColor,
      onPrimary: "#FFFFFF",
      primaryContainer: `${accentColor}1A`,
      onPrimaryContainer: accentColor,
      secondary: "#B0BEC5",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#37474F",
      onSecondaryContainer: "#B0BEC5",
      tertiary: "#80DEEA",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#004D5C",
      onTertiaryContainer: "#80DEEA",
      background: "#0A0E27",
      onBackground: "#FFFFFF",
      surface: "#1A1F3A",
      onSurface: "#FFFFFF",
      surfaceVariant: "#2A2F4A",
      onSurfaceVariant: "#B0BEC5",
      error: "#FF5252",
      onError: "#FFFFFF",
      errorContainer: "#B71C1C",
      onErrorContainer: "#FF5252",
      outline: "#424242",
      outlineVariant: "#2A2A2A",
      scrim: "#000000",
      inverseSurface: "#FFFFFF",
      inverseOnSurface: "#000000",
      inversePrimary: accentColor,
      success: "#4CAF50",
      warning: "#FFC107",
      info: "#2196F3",
    },
  };
};

// Neon Theme
export const NEON_THEME = (accent: AccentColor): MD3Theme => {
  const accentColor = ACCENT_COLORS[accent].dark;
  return {
    name: "neon",
    accent,
    isDark: true,
    colors: {
      primary: accentColor,
      onPrimary: "#000000",
      primaryContainer: `${accentColor}1A`,
      onPrimaryContainer: accentColor,
      secondary: "#00FF00",
      onSecondary: "#000000",
      secondaryContainer: "#00AA00",
      onSecondaryContainer: "#00FF00",
      tertiary: "#00FFFF",
      onTertiary: "#000000",
      tertiaryContainer: "#00AAAA",
      onTertiaryContainer: "#00FFFF",
      background: "#0A0A0A",
      onBackground: "#00FF00",
      surface: "#1A1A1A",
      onSurface: "#00FF00",
      surfaceVariant: "#2A2A2A",
      onSurfaceVariant: "#00FFFF",
      error: "#FF0000",
      onError: "#000000",
      errorContainer: "#AA0000",
      onErrorContainer: "#FF0000",
      outline: "#00FF00",
      outlineVariant: "#00FFFF",
      scrim: "#000000",
      inverseSurface: "#FFFFFF",
      inverseOnSurface: "#000000",
      inversePrimary: accentColor,
      success: "#00FF00",
      warning: "#FFFF00",
      info: "#00FFFF",
    },
  };
};

// Minimal Theme
export const MINIMAL_THEME = (accent: AccentColor): MD3Theme => {
  const accentColor = ACCENT_COLORS[accent].dark;
  return {
    name: "minimal",
    accent,
    isDark: true,
    colors: {
      primary: accentColor,
      onPrimary: "#FFFFFF",
      primaryContainer: `${accentColor}1A`,
      onPrimaryContainer: accentColor,
      secondary: "#808080",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#404040",
      onSecondaryContainer: "#808080",
      tertiary: "#A0A0A0",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#505050",
      onTertiaryContainer: "#A0A0A0",
      background: "#FFFFFF",
      onBackground: "#000000",
      surface: "#F5F5F5",
      onSurface: "#000000",
      surfaceVariant: "#EEEEEE",
      onSurfaceVariant: "#666666",
      error: "#D32F2F",
      onError: "#FFFFFF",
      errorContainer: "#FFEBEE",
      onErrorContainer: "#D32F2F",
      outline: "#CCCCCC",
      outlineVariant: "#E0E0E0",
      scrim: "#000000",
      inverseSurface: "#000000",
      inverseOnSurface: "#FFFFFF",
      inversePrimary: accentColor,
      success: "#4CAF50",
      warning: "#FFC107",
      info: "#2196F3",
    },
  };
};

// Dynamic Material You Theme
export const DYNAMIC_MATERIAL_YOU_THEME = (accent: AccentColor): MD3Theme => {
  const accentColor = ACCENT_COLORS[accent].dark;
  return {
    name: "dynamic_material_you",
    accent,
    isDark: true,
    colors: {
      primary: accentColor,
      onPrimary: "#FFFFFF",
      primaryContainer: `${accentColor}1A`,
      onPrimaryContainer: accentColor,
      secondary: "#B0BEC5",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#37474F",
      onSecondaryContainer: "#B0BEC5",
      tertiary: "#80DEEA",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#004D5C",
      onTertiaryContainer: "#80DEEA",
      background: "#0F1419",
      onBackground: "#FFFFFF",
      surface: "#1A1F2B",
      onSurface: "#FFFFFF",
      surfaceVariant: "#25293A",
      onSurfaceVariant: "#B0BEC5",
      error: "#FF5252",
      onError: "#FFFFFF",
      errorContainer: "#B71C1C",
      onErrorContainer: "#FF5252",
      outline: "#424242",
      outlineVariant: "#2A2A2A",
      scrim: "#000000",
      inverseSurface: "#FFFFFF",
      inverseOnSurface: "#000000",
      inversePrimary: accentColor,
      success: "#4CAF50",
      warning: "#FFC107",
      info: "#2196F3",
    },
  };
};

// Theme factory
export function createTheme(
  themeName: ThemeName,
  accentColor: AccentColor
): MD3Theme {
  switch (themeName) {
    case "amoled_black":
      return AMOLED_BLACK_THEME(accentColor);
    case "dark":
      return DARK_THEME(accentColor);
    case "light":
      return LIGHT_THEME(accentColor);
    case "glass":
      return GLASS_THEME(accentColor);
    case "gradient":
      return GRADIENT_THEME(accentColor);
    case "neon":
      return NEON_THEME(accentColor);
    case "minimal":
      return MINIMAL_THEME(accentColor);
    case "dynamic_material_you":
      return DYNAMIC_MATERIAL_YOU_THEME(accentColor);
    default:
      return AMOLED_BLACK_THEME("blue");
  }
}

export function getAllThemes(): ThemeName[] {
  return [
    "amoled_black",
    "dark",
    "light",
    "glass",
    "gradient",
    "neon",
    "minimal",
    "dynamic_material_you",
  ];
}

export function getAllAccentColors(): AccentColor[] {
  return ["blue", "green", "purple", "orange", "red", "pink", "dynamic"];
}
