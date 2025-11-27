import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { Input, Paragraph, Spacer, YStack } from 'tamagui';
import { GreetingCard, SharedUIProvider } from '@turborepo-test/shared-ui';

export default function App() {
  const [name, setName] = useState('Mobile User');

  return (
    <SharedUIProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <YStack flex={1} padding="$4" backgroundColor="$backgroundStrong" justifyContent="center" gap="$4">
          <GreetingCard name={name} />
          <YStack gap="$2">
            <Paragraph color="$colorSubtle">Update the name to watch the shared hook respond.</Paragraph>
            <Input
              accessibilityLabel="Name input"
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              autoCapitalize="none"
            />
          </YStack>
          <Spacer />
          <StatusBar style={Platform.OS === 'ios' ? 'dark' : 'light'} />
        </YStack>
      </SafeAreaView>
    </SharedUIProvider>
  );
}
