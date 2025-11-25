'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function DebugTheme() {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  const [htmlClass, setHtmlClass] = useState('');

  useEffect(() => {
    setHtmlClass(document.documentElement.className);
    
    // TEMPORARY FIX: Manually correct the inverted class
    if (resolvedTheme === 'dark' && !document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      console.log('Fixed: Added dark class');
    } else if (resolvedTheme === 'light' && document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      console.log('Fixed: Removed dark class');
    }
  }, [theme, resolvedTheme]);

  return (
    <div className="fixed bottom-4 left-4 z-50 p-4 bg-black/80 text-white text-xs rounded-lg font-mono">
      <div className="font-bold mb-2">Theme Debug:</div>
      <div>Theme: {theme || 'undefined'}</div>
      <div>System: {systemTheme || 'undefined'}</div>
      <div>Resolved: {resolvedTheme || 'undefined'}</div>
      <div>HTML class: "{htmlClass}"</div>
    </div>
  );
}
