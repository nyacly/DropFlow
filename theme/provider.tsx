import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme as useNativeColorScheme } from 'react-native';
import { getTheme, Theme } from './tokens';

interface ThemeContextType {
  theme: Theme;
  colorScheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const nativeColorScheme = useNativeColorScheme();
  const colorScheme = nativeColorScheme === 'dark' ? 'dark' : 'light';
  const theme = getTheme(colorScheme);

  return (
    <ThemeContext.Provider value={{ theme, colorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
