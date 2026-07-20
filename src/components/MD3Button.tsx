import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../theme/ThemeContext';
import * as Haptics from 'react-native-haptics';

interface MD3ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
}

export function MD3Button({
  label,
  onPress,
  variant = 'filled',
  size = 'medium',
  icon,
  disabled = false,
  fullWidth = false,
  style,
}: MD3ButtonProps) {
  const { theme } = useTheme();

  const handlePress = async () => {
    if (!disabled) {
      try {
        await Haptics.trigger('impactLight');
      } catch (e) {
        // Haptics not available
      }
      onPress();
    }
  };

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 8,
      opacity: disabled ? 0.5 : 1,
    };

    const sizeStyle: ViewStyle = {
      small: { paddingHorizontal: 12, paddingVertical: 8 },
      medium: { paddingHorizontal: 24, paddingVertical: 12 },
      large: { paddingHorizontal: 32, paddingVertical: 16 },
    }[size];

    const variantStyle: ViewStyle = {
      filled: { backgroundColor: theme.colors.primary },
      outlined: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.colors.outline,
      },
      text: { backgroundColor: 'transparent' },
      elevated: {
        backgroundColor: theme.colors.surface,
        elevation: 3,
      },
      tonal: {
        backgroundColor: theme.colors.primaryContainer,
      },
    }[variant];

    return {
      ...baseStyle,
      ...sizeStyle,
      ...variantStyle,
      ...style,
      width: fullWidth ? '100%' : 'auto',
    };
  };

  const getTextStyle = (): TextStyle => ({
    color:
      variant === 'filled'
        ? theme.colors.onPrimary
        : variant === 'tonal'
          ? theme.colors.onPrimaryContainer
          : theme.colors.primary,
    fontSize: size === 'small' ? 12 : size === 'large' ? 16 : 14,
    fontWeight: '600',
  });

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      style={getButtonStyle()}
      activeOpacity={0.8}
    >
      {icon && (
        <MaterialIcons
          name={icon}
          size={size === 'small' ? 16 : size === 'large' ? 24 : 20}
          color={getTextStyle().color as string}
        />
      )}
      <Text style={getTextStyle()}>{label}</Text>
    </TouchableOpacity>
  );
}
