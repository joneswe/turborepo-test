import './globals.css';
import './tamagui.css';
import '@tamagui/core/reset.css';
import type { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata = {
  title: 'Turborepo Web',
  description: 'Next.js app using shared hooks'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
