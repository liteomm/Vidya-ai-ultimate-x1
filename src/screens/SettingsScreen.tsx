import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../theme/ThemeContext';
import { MD3Card } from '../components/MD3Card';

export function SettingsScreen({ navigation }: any) {
  const { theme, themeName, accentColor, setTheme, allThemes, allAccentColors } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(theme.isDark);

  const handleThemeChange = async (newTheme: any) => {
    await setTheme(newTheme, accentColor);
  };

  const handleAccentChange = async (newAccent: any) => {
    await setTheme(themeName, newAccent);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.colors.onBackground }]}>
            Settings
          </Text>
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.onBackground },
            ]}
          >
            Appearance
          </Text>

          {/* Theme Selection */}
          <MD3Card variant="outlined" style={styles.settingCard}>
            <View style={styles.settingContent}>
              <MaterialIcons
                name="palette"
                size={24}
                color={theme.colors.primary}
              />
              <View style={styles.settingText}>
                <Text
                  style={[
                    styles.settingLabel,
                    { color: theme.colors.onSurface },
                  ]}
                >
                  Theme
                </Text>
                <Text
                  style={[
                    styles.settingValue,
                    { color: theme.colors.onSurfaceVariant },
                  ]}
                >
                  {themeName.replace(/_/g, ' ')}
                </Text>
              </View>
            </View>
          </MD3Card>

          {/* Theme Options */}
          <View style={styles.optionsContainer}>
            {allThemes.map((t) => (
              <TouchableOpacity
                key={t}
                onPress={() => handleThemeChange(t)}
                style={[
                  styles.themeOption,
                  {
                    backgroundColor:
                      themeName === t
                        ? theme.colors.primaryContainer
                        : theme.colors.surface,
                    borderColor:
                      themeName === t
                        ? theme.colors.primary
                        : theme.colors.outline,
                    borderWidth: 2,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.themeOptionText,
                    {
                      color:
                        themeName === t
                          ? theme.colors.primary
                          : theme.colors.onSurface,
                    },
                  ]}
                >
                  {t.replace(/_/g, ' ')}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Accent Color Selection */}
          <MD3Card variant="outlined" style={styles.settingCard}>
            <View style={styles.settingContent}>
              <MaterialIcons
                name="color-lens"
                size={24}
                color={theme.colors.primary}
              />
              <View style={styles.settingText}>
                <Text
                  style={[
                    styles.settingLabel,
                    { color: theme.colors.onSurface },
                  ]}
                >
                  Accent Color
                </Text>
                <Text
                  style={[
                    styles.settingValue,
                    { color: theme.colors.onSurfaceVariant },
                  ]}
                >
                  {accentColor}
                </Text>
              </View>
            </View>
          </MD3Card>

          {/* Accent Color Options */}
          <View style={styles.colorGrid}>
            {allAccentColors.map((color) => (
              <TouchableOpacity
                key={color}
                onPress={() => handleAccentChange(color)}
                style={[
                  styles.colorOption,
                  {
                    borderWidth: accentColor === color ? 3 : 0,
                    borderColor: theme.colors.primary,
                  },
                ]}
              >
                <View
                  style={[
                    styles.colorCircle,
                    {
                      backgroundColor:
                        color === 'blue'
                          ? '#90CAF9'
                          : color === 'green'
                            ? '#81C784'
                            : color === 'purple'
                              ? '#CE93D8'
                              : color === 'orange'
                                ? '#FFB74D'
                                : color === 'red'
                                  ? '#EF5350'
                                  : color === 'pink'
                                    ? '#F48FB1'
                                    : '#90CAF9',
                    },
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.onBackground },
            ]}
          >
            Preferences
          </Text>

          <MD3Card variant="outlined" style={styles.settingCard}>
            <View style={styles.settingContent}>
              <MaterialIcons
                name="notifications"
                size={24}
                color={theme.colors.primary}
              />
              <View style={styles.settingText}>
                <Text
                  style={[
                    styles.settingLabel,
                    { color: theme.colors.onSurface },
                  ]}
                >
                  Notifications
                </Text>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
              />
            </View>
          </MD3Card>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.onBackground },
            ]}
          >
            About
          </Text>

          <MD3Card variant="outlined" style={styles.settingCard}>
            <View style={styles.settingContent}>
              <MaterialIcons
                name="info"
                size={24}
                color={theme.colors.primary}
              />
              <View style={styles.settingText}>
                <Text
                  style={[
                    styles.settingLabel,
                    { color: theme.colors.onSurface },
                  ]}
                >
                  Version
                </Text>
                <Text
                  style={[
                    styles.settingValue,
                    { color: theme.colors.onSurfaceVariant },
                  ]}
                >
                  1.0.0
                </Text>
              </View>
            </View>
          </MD3Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  settingCard: {
    marginBottom: 12,
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingText: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingValue: {
    fontSize: 14,
    marginTop: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  themeOption: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
  },
  themeOptionText: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  colorOption: {
    width: '23%',
    aspectRatio: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
