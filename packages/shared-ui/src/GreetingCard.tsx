import React from 'react';
import { Button, H3, Paragraph, Separator, XStack, YStack } from 'tamagui';
import { useGreeting } from '@turborepo-test/shared';

type GreetingCardProps = {
  name: string;
};

export function GreetingCard({ name }: GreetingCardProps) {
  const greeting = useGreeting(name);

  return (
    <YStack
      backgroundColor="$background"
      borderRadius="$4"
      padding="$4"
      space
      borderWidth={1}
      borderColor="$borderColor"
      maxWidth={480}
      shadowColor="rgba(0,0,0,0.08)"
      shadowOpacity={1}
      shadowRadius={12}
    >
      <XStack justifyContent="space-between" alignItems="center">
        <H3>{greeting}</H3>
        <Separator vertical mx="$2" />
        <Paragraph>Shared via Tamagui</Paragraph>
      </XStack>
      <Paragraph color="$colorSubtle">Reusable UI from packages/shared-ui</Paragraph>
      <Button accessibilityLabel="refresh greeting" onPress={() => {}}>
        Tap me
      </Button>
    </YStack>
  );
}
