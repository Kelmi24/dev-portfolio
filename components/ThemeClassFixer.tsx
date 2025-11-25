'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function ThemeClassFixer() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Force the correct class on the HTML element
    const html = document.documentElement;
    
    if (resolvedTheme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
    } else if (resolvedTheme === 'light') {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }, [resolvedTheme]);

  return null; // This component doesn't render anything
}
