'use client';

import { useState, useMemo } from 'react';
import {
  skills,
  categories,
  mostRelevantSkills,
  SkillCategory as SkillCategoryType,
  SkillGroup,
} from '@/lib/skills';
import SkillsFilter from './SkillsFilter';
import SkillCategory from './SkillCategory';
import SkillCard from './SkillCard';

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<SkillCategoryType | 'all'>('all');
  const [activeGroup, setActiveGroup] = useState<SkillGroup | 'all'>('all');

  // Filter skills based on search and filters
  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.projects.some((project) =>
          project.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Category filter
      const matchesCategory =
        activeCategory === 'all' || skill.category === activeCategory;

      // Group filter
      const matchesGroup = activeGroup === 'all' || skill.group === activeGroup;

      return matchesSearch && matchesCategory && matchesGroup;
    });
  }, [searchQuery, activeCategory, activeGroup]);

  // Group filtered skills by category
  const skillsByCategory = useMemo(() => {
    return categories.map((category) => ({
      category,
      skills: filteredSkills.filter((skill) => skill.category === category.id),
    }));
  }, [filteredSkills]);

  // Get most relevant skills
  const relevantSkills = useMemo(() => {
    return skills.filter((skill) => mostRelevantSkills.includes(skill.name));
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            A comprehensive overview of my technical skills, organized by
            category and proficiency level. Hover over each skill to see
            detailed information and project examples.
          </p>
        </div>

        {/* Most Relevant Skills Section */}
        <div className="mb-12 rounded-xl border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-primary-100 p-6 dark:from-primary-950/30 dark:to-primary-900/20 print:border print:border-neutral-300 print:bg-white">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Most Relevant for Full Stack Developer
            </h3>
          </div>
          <p className="mb-6 text-neutral-700 dark:text-neutral-300">
            Core technologies I use daily in full-stack development projects.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {relevantSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} isHighlighted={true} />
            ))}
          </div>
        </div>

        {/* Filters */}
        <SkillsFilter
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          activeGroup={activeGroup}
          onSearchChange={setSearchQuery}
          onCategoryChange={setActiveCategory}
          onGroupChange={setActiveGroup}
        />

        {/* Results Count */}
        <div className="mb-6 text-center print:hidden">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Showing{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              {filteredSkills.length}
            </span>{' '}
            {filteredSkills.length === 1 ? 'skill' : 'skills'}
            {searchQuery && (
              <>
                {' '}
                matching &quot;
                <span className="font-semibold">{searchQuery}</span>&quot;
              </>
            )}
          </p>
        </div>

        {/* Skills by Category */}
        {filteredSkills.length > 0 ? (
          <div>
            {skillsByCategory.map(
              ({ category, skills: categorySkills }) =>
                categorySkills.length > 0 && (
                  <SkillCategory
                    key={category.id}
                    category={category}
                    skills={categorySkills}
                    highlightedSkills={mostRelevantSkills}
                  />
                )
            )}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              No skills found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setActiveGroup('all');
              }}
              className="mt-4 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Print Instructions */}
        <div className="mt-12 hidden rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900 print:hidden">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🖨️</span>
            <div>
              <h4 className="mb-1 font-semibold text-neutral-900 dark:text-neutral-100">
                Print-Friendly Version
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                This page is optimized for printing. Press{' '}
                <kbd className="rounded bg-neutral-200 px-2 py-1 text-xs dark:bg-neutral-800">
                  Ctrl/Cmd + P
                </kbd>{' '}
                to generate a printer-friendly version showing all your skills
                with proficiency levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
