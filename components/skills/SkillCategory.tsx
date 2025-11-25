'use client';

import { Skill, CategoryInfo } from '@/lib/skills';
import SkillCard from './SkillCard';
import { useState } from 'react';

interface SkillCategoryProps {
  category: CategoryInfo;
  skills: Skill[];
  highlightedSkills?: string[];
}

export default function SkillCategory({
  category,
  skills,
  highlightedSkills = [],
}: SkillCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (skills.length === 0) return null;

  return (
    <div className="mb-8">
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mb-4 flex w-full items-center justify-between rounded-lg bg-neutral-100 p-4 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 print:bg-transparent print:p-0"
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl" aria-hidden="true">
            {category.icon}
          </span>
          <div className="text-left">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              {category.name}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {category.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-primary-600 px-3 py-1 text-sm font-medium text-white">
            {skills.length}
          </span>
          <svg
            className={`h-5 w-5 transition-transform print:hidden ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Skills Grid */}
      <div
        className={`grid gap-4 transition-all duration-300 sm:grid-cols-2 lg:grid-cols-3 ${
          isExpanded
            ? 'max-h-[5000px] opacity-100'
            : 'max-h-0 overflow-hidden opacity-0 print:max-h-none print:opacity-100'
        }`}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            isHighlighted={highlightedSkills.includes(skill.name)}
          />
        ))}
      </div>
    </div>
  );
}
