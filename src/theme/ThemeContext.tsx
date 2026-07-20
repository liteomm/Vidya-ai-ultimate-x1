import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createTheme,
  MD3Theme,
  ThemeName,
  AccentColor,
  getAllThemes,
  getAllAccentColors,
} from './md3-colors';

interface ThemeContextType {
  theme: MD3Theme;
  themeName: ThemeName;
  accentColor: AccentColor;
  setTheme: (themeName: ThemeName, accentColor: AccentColor) => Promise<void>;
  setThemeName: (themeName: ThemeName) => Promise<void>;
  setAccentColor: (accentColor: AccentColor) => Promise<void>;
  allThemes: ThemeName[];
  allAccentColors: AccentColor[];
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'vidya_md3_theme_name';
const ACCENT_STORAGE_KEY = 'vidya_md3_accent_color';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeName, setThemeNameState] = useState<ThemeName>('amoled_black');
  const [accentColor, setAccentColorState] = useState<AccentColor>('blue');
  const [theme, setThemeState] = useState<MD3Theme>(
    createTheme('amoled_black', 'blue')
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      const savedAccent = await AsyncStorage.getItem(ACCENT_STORAGE_KEY);

      const newTheme = (savedTheme as ThemeName) || 'amoled_black';
      const newAccent = (savedAccent as AccentColor) || 'blue';

      setThemeNameState(newTheme);
      setAccentColorState(newAccent);
      setThemeState(createTheme(newTheme, newAccent));
    } catch (error) {
      console.error('Failed to load theme:', error);
    } finally {
      setIsLoaded(true);
    }
  };

  const handleSetTheme = async (
    newThemeName: ThemeName,
    newAccentColor: AccentColor
  ) => {
    try {
      setThemeNameState(newThemeName);
      setAccentColorState(newAccentColor);
      setThemeState(createTheme(newThemeName, newAccentColor));

      await Promise.all([
        AsyncStorage.setItem(THEME_STORAGE_KEY, newThemeName),
        AsyncStorage.setItem(ACCENT_STORAGE_KEY, newAccentColor),
      ]);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  };

  const handleSetThemeName = async (newThemeName: ThemeName) => {
    await handleSetTheme(newThemeName, accentColor);
  };

  const handleSetAccentColor = async (newAccentColor: AccentColor) => {
    await handleSetTheme(themeName, newAccentColor);
  };

  if (!isLoaded) {
    return null;
  }

  const value: ThemeContextType = {
    theme,
    themeName,
    accentColor,
    setTheme: handleSetTheme,
    setThemeName: handleSetThemeName,
    setAccentColor: handleSetAccentColor,
    allThemes: getAllThemes(),
    allAccentColors: getAllAccentColors(),
    isDarkMode: theme.isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
