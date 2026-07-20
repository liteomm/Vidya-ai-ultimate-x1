import React, { useState } from 'react';
import {
  View,
  TextInput,
  ViewStyle,
  TextStyle,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../theme/ThemeContext';

interface MD3TextFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: string;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  style?: ViewStyle;
}

export function MD3TextField({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  disabled = false,
  multiline = false,
  numberOfLines = 1,
  style,
}: MD3TextFieldProps) {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: multiline ? 'flex-start' : 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: isFocused ? theme.colors.primary : theme.colors.outline,
    paddingHorizontal: 12,
    paddingVertical: multiline ? 12 : 0,
    opacity: disabled ? 0.5 : 1,
    ...style,
  };

  const inputStyle: TextStyle = {
    flex: 1,
    color: theme.colors.onSurface,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
  };

  return (
    <View style={containerStyle}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color={isFocused ? theme.colors.primary : theme.colors.onSurfaceVariant}
        />
      )}
      <TextInput
        style={inputStyle}
        placeholder={placeholder || label}
        placeholderTextColor={theme.colors.onSurfaceVariant}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        editable={!disabled}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
}
