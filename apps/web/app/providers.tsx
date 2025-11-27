'use client';

import { SharedUIProvider } from '@turborepo-test/shared-ui';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <SharedUIProvider>{children}</SharedUIProvider>;
}
