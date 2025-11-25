'use client';

import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Kelmi
          </a>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
