import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface MD3CardProps {
  children: ReactNode;
  variant?: 'filled' | 'outlined' | 'elevated';
  style?: ViewStyle;
  onPress?: () => void;
}

export function MD3Card({
  children,
  variant = 'filled',
  style,
  onPress,
}: MD3CardProps) {
  const { theme } = useTheme();

  const getCardStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: 12,
      padding: 16,
      overflow: 'hidden',
    };

    const variantStyle: ViewStyle = {
      filled: {
        backgroundColor: theme.colors.surface,
      },
      outlined: {
        backgroundColor: theme.colors.background,
        borderWidth: 1,
        borderColor: theme.colors.outline,
      },
      elevated: {
        backgroundColor: theme.colors.surface,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
    }[variant];

    return {
      ...baseStyle,
      ...variantStyle,
      ...style,
    };
  };

  return (
    <View style={getCardStyle()}>
      {children}
    </View>
  );
}
