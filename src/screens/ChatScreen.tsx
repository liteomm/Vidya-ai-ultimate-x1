import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../theme/ThemeContext';
import { MD3TextField } from '../components/MD3TextField';
import { MD3Button } from '../components/MD3Button';
import { MD3Card } from '../components/MD3Card';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatScreen({ navigation }: any) {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'This is a simulated AI response. Connect to your AI backend to get real responses.',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
      ]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: theme.colors.surface, borderBottomColor: theme.colors.outline },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back"
            size={24}
            color={theme.colors.onSurface}
          />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.onSurface }]}>
          Chat
        </Text>
        <TouchableOpacity>
          <MaterialIcons
            name="more-vert"
            size={24}
            color={theme.colors.onSurface}
          />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.length === 0 && !isLoading && (
          <View style={styles.emptyState}>
            <MaterialIcons
              name="chat-bubble-outline"
              size={64}
              color={theme.colors.onSurfaceVariant}
            />
            <Text
              style={[
                styles.emptyText,
                { color: theme.colors.onSurfaceVariant },
              ]}
            >
              Start a conversation
            </Text>
          </View>
        )}

        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageRow,
              message.isUser && styles.userMessageRow,
            ]}
          >
            <MD3Card
              variant={message.isUser ? 'filled' : 'outlined'}
              style={[
                styles.messageBubble,
                message.isUser && {
                  backgroundColor: theme.colors.primary,
                },
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  {
                    color: message.isUser
                      ? theme.colors.onPrimary
                      : theme.colors.onSurface,
                  },
                ]}
              >
                {message.text}
              </Text>
            </MD3Card>
          </View>
        ))}

        {isLoading && (
          <View style={styles.messageRow}>
            <MD3Card variant="outlined" style={styles.messageBubble}>
              <ActivityIndicator color={theme.colors.primary} />
            </MD3Card>
          </View>
        )}
      </ScrollView>

      {/* Input Area */}
      <View
        style={[
          styles.inputArea,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <View style={styles.inputRow}>
          <MD3TextField
            placeholder="Type your message..."
            value={inputText}
            onChangeText={setInputText}
            icon="edit"
            multiline
            numberOfLines={3}
            style={{ flex: 1 }}
          />
          <MD3Button
            label=""
            icon="send"
            onPress={handleSendMessage}
            variant="filled"
            size="medium"
            style={styles.sendButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    marginTop: 12,
  },
  messageRow: {
    marginVertical: 8,
    justifyContent: 'flex-start',
  },
  userMessageRow: {
    justifyContent: 'flex-end',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  messageText: {
    fontSize: 14,
  },
  inputArea: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  sendButton: {
    marginBottom: 0,
  },
});
