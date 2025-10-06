import React from 'react';
import {
  View as RNView,
  Text as RNText,
  Pressable,
  TextInput,
  StyleSheet,
  ViewProps as RNViewProps,
  TextProps as RNTextProps,
  PressableProps,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from './provider';

export interface ViewProps extends RNViewProps {
  variant?: 'background' | 'surface';
}

export function View({ variant, style, ...props }: ViewProps) {
  const { theme } = useTheme();

  const variantStyle = variant === 'background'
    ? { backgroundColor: theme.base.colors.background }
    : variant === 'surface'
    ? { backgroundColor: theme.base.colors.surface }
    : {};

  return <RNView style={[variantStyle, style]} {...props} />;
}

export interface TextProps extends RNTextProps {
  variant?: 'title' | 'headline' | 'subtitle' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'error';
}

export function Text({ variant, color, style, ...props }: TextProps) {
  const { theme } = useTheme();

  const variantStyle: TextStyle = variant === 'title'
    ? { fontSize: 24, fontWeight: 'bold' }
    : variant === 'headline'
    ? { fontSize: 20, fontWeight: 'bold' }
    : variant === 'subtitle'
    ? { fontSize: 18, fontWeight: '600' }
    : variant === 'body'
    ? { fontSize: 16 }
    : variant === 'caption'
    ? { fontSize: 14 }
    : {};

  const colorStyle: TextStyle = color === 'primary'
    ? { color: theme.base.colors.primary }
    : color === 'secondary'
    ? { color: theme.base.colors.textSecondary }
    : color === 'error'
    ? { color: theme.base.colors.error }
    : { color: theme.base.colors.text };

  return <RNText style={[variantStyle, colorStyle, style]} {...props} />;
}

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', style, children, ...props }: ButtonProps) {
  const { theme } = useTheme();

  const variantStyle: ViewStyle = variant === 'primary'
    ? {
        backgroundColor: theme.semantic.button.primary.background,
        borderWidth: 0,
      }
    : {
        backgroundColor: theme.semantic.button.outline.background,
        borderWidth: 2,
        borderColor: theme.semantic.button.outline.border,
      };

  const sizeStyle: ViewStyle = size === 'sm'
    ? { paddingVertical: 8, paddingHorizontal: 16 }
    : size === 'lg'
    ? { paddingVertical: 16, paddingHorizontal: 32 }
    : { paddingVertical: 12, paddingHorizontal: 24 };

  const textColor = variant === 'primary'
    ? theme.semantic.button.primary.text
    : theme.semantic.button.outline.text;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        variantStyle,
        sizeStyle,
        pressed && { opacity: 0.8 },
        style,
      ]}
      {...props}
    >
      {typeof children === 'string' ? (
        <RNText style={[styles.buttonText, { color: textColor }]}>{children}</RNText>
      ) : (
        children
      )}
    </Pressable>
  );
}

export interface CardProps extends RNViewProps {
  children: React.ReactNode;
}

export function Card({ style, children, ...props }: CardProps) {
  const { theme } = useTheme();

  return (
    <RNView
      style={[
        styles.card,
        {
          backgroundColor: theme.base.colors.surface,
          borderColor: theme.base.colors.border,
          borderRadius: theme.base.borderRadius.lg,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNView>
  );
}

export interface InputProps extends TextInputProps {
  error?: boolean;
}

export function Input({ error, style, ...props }: InputProps) {
  const { theme } = useTheme();

  return (
    <TextInput
      style={[
        styles.input,
        {
          backgroundColor: theme.base.colors.surface,
          borderColor: error ? theme.base.colors.error : theme.base.colors.border,
          borderRadius: theme.base.borderRadius.md,
          color: theme.base.colors.text,
        },
        style,
      ]}
      placeholderTextColor={theme.base.colors.textSecondary}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    padding: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    fontSize: 16,
  },
});
