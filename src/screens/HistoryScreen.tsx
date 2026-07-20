import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../theme/ThemeContext';
import { MD3Card } from '../components/MD3Card';

interface ChatHistory {
  id: string;
  title: string;
  preview: string;
  timestamp: Date;
  pinned: boolean;
}

const MOCK_HISTORY: ChatHistory[] = [
  {
    id: '1',
    title: 'Photosynthesis Explained',
    preview: 'How does photosynthesis work in plants?',
    timestamp: new Date(Date.now() - 3600000),
    pinned: true,
  },
  {
    id: '2',
    title: 'Calculus Basics',
    preview: 'What is the derivative of x^2?',
    timestamp: new Date(Date.now() - 7200000),
    pinned: false,
  },
  {
    id: '3',
    title: 'DNA Structure',
    preview: 'Explain the structure of DNA',
    timestamp: new Date(Date.now() - 86400000),
    pinned: false,
  },
];

export function HistoryScreen({ navigation }: any) {
  const { theme } = useTheme();
  const [history, setHistory] = useState<ChatHistory[]>(MOCK_HISTORY);

  const handlePin = (id: string) => {
    setHistory((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  const handleDelete = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const renderHistoryItem = ({ item }: { item: ChatHistory }) => (
    <MD3Card
      variant="outlined"
      style={[
        styles.historyCard,
        item.pinned && { borderColor: theme.colors.primary, borderWidth: 2 },
      ]}
    >
      <TouchableOpacity
        style={styles.historyContent}
        onPress={() => navigation.navigate('Chat')}
      >
        <View style={styles.historyText}>
          <Text
            style={[styles.historyTitle, { color: theme.colors.onSurface }]}
          >
            {item.title}
          </Text>
          <Text
            style={[
              styles.historyPreview,
              { color: theme.colors.onSurfaceVariant },
            ]}
            numberOfLines={1}
          >
            {item.preview}
          </Text>
          <Text
            style={[
              styles.historyTime,
              { color: theme.colors.onSurfaceVariant },
            ]}
          >
            {item.timestamp.toLocaleString()}
          </Text>
        </View>

        <View style={styles.historyActions}>
          <TouchableOpacity onPress={() => handlePin(item.id)}>
            <MaterialIcons
              name={item.pinned ? 'bookmark' : 'bookmark-outline'}
              size={20}
              color={
                item.pinned ? theme.colors.primary : theme.colors.onSurfaceVariant
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <MaterialIcons
              name="delete-outline"
              size={20}
              color={theme.colors.error}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </MD3Card>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.onBackground }]}>
          History
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: theme.colors.onSurfaceVariant },
          ]}
        >
          {history.length} conversations
        </Text>
      </View>

      {/* History List */}
      <FlatList
        data={history}
        renderItem={renderHistoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  historyCard: {
    marginBottom: 12,
  },
  historyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyText: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  historyPreview: {
    fontSize: 14,
    marginBottom: 4,
  },
  historyTime: {
    fontSize: 12,
  },
  historyActions: {
    flexDirection: 'row',
    gap: 12,
    marginLeft: 12,
  },
});
