'use client';

import { SkillCategory, SkillGroup } from '@/lib/skills';
import { useState } from 'react';

interface SkillsFilterProps {
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: SkillCategory | 'all') => void;
  onGroupChange: (group: SkillGroup | 'all') => void;
  activeCategory: SkillCategory | 'all';
  activeGroup: SkillGroup | 'all';
  searchQuery: string;
}

export default function SkillsFilter({
  onSearchChange,
  onCategoryChange,
  onGroupChange,
  activeCategory,
  activeGroup,
  searchQuery,
}: SkillsFilterProps) {
  const categories: Array<{ id: SkillCategory | 'all'; label: string; icon: string }> = [
    { id: 'all', label: 'All', icon: '🌟' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'database', label: 'Database', icon: '🗄️' },
    { id: 'devops', label: 'DevOps', icon: '🚀' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
  ];

  const groups: Array<{ id: SkillGroup | 'all'; label: string; icon: string }> = [
    { id: 'all', label: 'All Levels', icon: '📊' },
    { id: 'core', label: 'Core', icon: '⭐' },
    { id: 'familiar', label: 'Familiar', icon: '✓' },
    { id: 'learning', label: 'Learning', icon: '📚' },
  ];

  const handleClearFilters = () => {
    onSearchChange('');
    onCategoryChange('all');
    onGroupChange('all');
  };

  const hasActiveFilters =
    searchQuery !== '' || activeCategory !== 'all' || activeGroup !== 'all';

  return (
    <div className="mb-8 space-y-4 rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 print:hidden">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search skills, projects, or technologies..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 pl-10 text-neutral-900 placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400"
        />
        <svg
          className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Category Filters */}
      <div>
        <p className="mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Category
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Proficiency Group Filters */}
      <div>
        <p className="mb-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          Proficiency Level
        </p>
        <div className="flex flex-wrap gap-2">
          {groups.map((grp) => (
            <button
              key={grp.id}
              onClick={() => onGroupChange(grp.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeGroup === grp.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              <span className="mr-1">{grp.icon}</span>
              {grp.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={handleClearFilters}
          className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
          Clear all filters
        </button>
      )}
    </div>
  );
}
