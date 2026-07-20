import React from 'react';
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

const TOOLS = [
  { id: 'chat', name: 'AI Chat', icon: 'chat', description: 'Talk to AI' },
  { id: 'image', name: 'Image Generator', icon: 'image', description: 'Generate images' },
  { id: 'writer', name: 'AI Writer', icon: 'edit', description: 'Write content' },
  { id: 'translator', name: 'Translator', icon: 'translate', description: 'Translate text' },
  { id: 'summarizer', name: 'Summarizer', icon: 'summarize', description: 'Summarize text' },
  { id: 'pdf', name: 'PDF Chat', icon: 'picture-as-pdf', description: 'Chat with PDFs' },
  { id: 'ocr', name: 'Camera OCR', icon: 'photo-camera', description: 'Scan text' },
  { id: 'voice', name: 'Voice Assistant', icon: 'mic', description: 'Voice commands' },
  { id: 'flashcards', name: 'Flashcards', icon: 'note-add', description: 'Study cards' },
  { id: 'quiz', name: 'Quiz Generator', icon: 'quiz', description: 'Create quizzes' },
  { id: 'notes', name: 'Notes', icon: 'note', description: 'Take notes' },
  { id: 'planner', name: 'Study Planner', icon: 'schedule', description: 'Plan study' },
  { id: 'calculator', name: 'Calculator', icon: 'calculate', description: 'Calculate' },
  { id: 'converter', name: 'Unit Converter', icon: 'straighten', description: 'Convert units' },
];

export function ToolsScreen({ navigation }: any) {
  const { theme } = useTheme();

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
            Tools
          </Text>
          <Text
            style={[
              styles.subtitle,
              { color: theme.colors.onSurfaceVariant },
            ]}
          >
            {TOOLS.length} powerful tools available
          </Text>
        </View>

        {/* Tools Grid */}
        <View style={styles.toolsGrid}>
          {TOOLS.map((tool) => (
            <TouchableOpacity
              key={tool.id}
              style={styles.toolContainer}
              onPress={() => {}}
            >
              <MD3Card variant="elevated" style={styles.toolCard}>
                <View style={styles.toolContent}>
                  <MaterialIcons
                    name={tool.icon as any}
                    size={32}
                    color={theme.colors.primary}
                  />
                  <Text
                    style={[
                      styles.toolName,
                      { color: theme.colors.onSurface },
                    ]}
                  >
                    {tool.name}
                  </Text>
                  <Text
                    style={[
                      styles.toolDesc,
                      { color: theme.colors.onSurfaceVariant },
                    ]}
                  >
                    {tool.description}
                  </Text>
                </View>
              </MD3Card>
            </TouchableOpacity>
          ))}
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  toolContainer: {
    width: '50%',
    padding: 8,
  },
  toolCard: {
    flex: 1,
  },
  toolContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  toolName: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  toolDesc: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
});
