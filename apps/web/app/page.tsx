'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GreetingCard } from '@turborepo-test/shared-ui';
import { Input, Paragraph, YStack } from 'tamagui';

export default function Home() {
  const [name, setName] = useState('Web User');

  return (
    <main>
      <YStack gap="$4" padding="$4" maxWidth={720} marginHorizontal="auto">
        <GreetingCard name={name} />
        <YStack gap="$2">
          <Paragraph color="$colorSubtle">Change the name to see the shared hook update everywhere.</Paragraph>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            aria-label="Name input"
            autoCapitalize="none"
          />
        </YStack>
        <Link href="https://turbo.build/repo" target="_blank" rel="noreferrer">
          <Paragraph color="$color">Read Turborepo Docs</Paragraph>
        </Link>
      </YStack>
    </main>
  );
}
