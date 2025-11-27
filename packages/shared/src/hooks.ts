import { useMemo } from 'react';

/**
 * Simple hook that formats a greeting message for a given name.
 */
export const useGreeting = (name: string): string => {
  return useMemo(() => `Hello, ${name}! Welcome to the shared hooks.`, [name]);
};
