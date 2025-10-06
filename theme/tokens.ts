export interface BaseTokens {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    error: string;
    text: string;
    textSecondary: string;
    border: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
  };
}

export interface SemanticTokens {
  button: {
    primary: {
      background: string;
      text: string;
    };
    outline: {
      background: string;
      border: string;
      text: string;
    };
  };
}

export interface Theme {
  base: BaseTokens;
  semantic: SemanticTokens;
}

const lightTheme: Theme = {
  base: {
    colors: {
      primary: '#dc2626',
      secondary: '#6b7280',
      background: '#f8f9fa',
      surface: '#ffffff',
      error: '#ef4444',
      text: '#111827',
      textSecondary: '#6b7280',
      border: '#e5e7eb',
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 12,
    },
  },
  semantic: {
    button: {
      primary: {
        background: '#dc2626',
        text: '#ffffff',
      },
      outline: {
        background: 'transparent',
        border: '#dc2626',
        text: '#dc2626',
      },
    },
  },
};

export function getTheme(mode: 'light' | 'dark' = 'light'): Theme {
  return lightTheme;
}
