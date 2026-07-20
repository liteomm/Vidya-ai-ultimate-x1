import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../theme/ThemeContext';
import { MD3Card } from '../components/MD3Card';
import { MD3Button } from '../components/MD3Button';
import { MD3TextField } from '../components/MD3TextField';

export function HomeScreen({ navigation }: any) {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const suggestedQuestions = [
    'Explain photosynthesis',
    'What is calculus?',
    'How does DNA work?',
    'Solve this equation',
  ];

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.greeting, { color: theme.colors.onBackground }]}>
            Welcome back! 👋
          </Text>
          <Text
            style={[
              styles.subtitle,
              { color: theme.colors.onSurfaceVariant },
            ]}
          >
            What would you like to learn today?
          </Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MD3TextField
            placeholder="Ask anything..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            icon="search"
            style={{ marginBottom: 0 }}
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <MD3Button
            label="Chat"
            icon="chat"
            onPress={() => navigation.navigate('Chat')}
            variant="filled"
            size="medium"
          />
          <MD3Button
            label="Tools"
            icon="auto-awesome"
            onPress={() => navigation.navigate('Tools')}
            variant="outlined"
            size="medium"
          />
          <MD3Button
            label="History"
            icon="history"
            onPress={() => navigation.navigate('History')}
            variant="outlined"
            size="medium"
          />
        </View>

        {/* Suggested Questions */}
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.onBackground },
            ]}
          >
            Suggested Questions
          </Text>
          <View style={styles.questionsGrid}>
            {suggestedQuestions.map((question, index) => (
              <MD3Card
                key={index}
                variant="outlined"
                style={styles.questionCard}
              >
                <TouchableOpacity
                  onPress={() => {
                    setSearchQuery(question);
                    navigation.navigate('Chat');
                  }}
                >
                  <Text
                    style={[
                      styles.questionText,
                      { color: theme.colors.onSurface },
                    ]}
                  >
                    {question}
                  </Text>
                </TouchableOpacity>
              </MD3Card>
            ))}
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.colors.onBackground },
            ]}
          >
            Features
          </Text>
          <MD3Card variant="elevated" style={styles.featureCard}>
            <View style={styles.featureContent}>
              <MaterialIcons
                name="auto-awesome"
                size={32}
                color={theme.colors.primary}
              />
              <View style={styles.featureText}>
                <Text
                  style={[
                    styles.featureTitle,
                    { color: theme.colors.onSurface },
                  ]}
                >
                  AI-Powered Learning
                </Text>
                <Text
                  style={[
                    styles.featureDesc,
                    { color: theme.colors.onSurfaceVariant },
                  ]}
                >
                  Get instant answers to any question
                </Text>
              </View>
            </View>
          </MD3Card>

          <MD3Card variant="elevated" style={styles.featureCard}>
            <View style={styles.featureContent}>
              <MaterialIcons
                name="palette"
                size={32}
                color={theme.colors.primary}
              />
              <View style={styles.featureText}>
                <Text
                  style={[
                    styles.featureTitle,
                    { color: theme.colors.onSurface },
                  ]}
                >
                  8 Beautiful Themes
                </Text>
                <Text
                  style={[
                    styles.featureDesc,
                    { color: theme.colors.onSurfaceVariant },
                  ]}
                >
                  Customize your experience
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
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  searchContainer: {
    marginBottom: 24,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  questionsGrid: {
    gap: 8,
  },
  questionCard: {
    marginBottom: 8,
  },
  questionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  featureCard: {
    marginBottom: 12,
  },
  featureContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 14,
  },
});
