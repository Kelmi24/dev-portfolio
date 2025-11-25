'use client';

import { Skill } from '@/lib/skills';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { progressBar } from '@/lib/animations';

interface SkillCardProps {
  skill: Skill;
  isHighlighted?: boolean;
}

export default function SkillCard({ skill, isHighlighted = false }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Determine progress bar color based on proficiency
  const getProgressColor = () => {
    if (skill.proficiency >= 90) return 'bg-primary-600';
    if (skill.proficiency >= 70) return 'bg-primary-500';
    if (skill.proficiency >= 50) return 'bg-primary-400';
    return 'bg-primary-300';
  };

  return (
    <motion.div
      className={`group relative rounded-lg border p-4 transition-all duration-1000 hover:shadow-lg ${
        isHighlighted
          ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/20'
          : 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900'
      } hover:-translate-y-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      {/* Skill Header */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">
            {skill.icon}
          </span>
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
              {skill.name}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {skill.proficiencyLabel}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300">
          {skill.yearsOfExperience}y
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="mb-1 flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
          <span>Proficiency</span>
          <span>{skill.proficiency}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
          <motion.div
            className={`h-full ${getProgressColor()}`}
            variants={progressBar}
            custom={skill.proficiency}
          />
        </div>
      </div>

      {/* Hover Details */}
      <div
        className={`overflow-hidden transition-all duration-1000 ${
          isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-2 border-t border-neutral-200 pt-3 dark:border-neutral-700">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            {skill.description}
          </p>

          {skill.projects.length > 0 && (
            <div>
              <p className="mb-1 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                Projects:
              </p>
              <div className="flex flex-wrap gap-1">
                {skill.projects.map((project, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}

          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Last used: {skill.lastUsed}
          </p>
        </div>
      </div>

      {/* Print-only details */}
      <div className="hidden print:block">
        <p className="mt-2 text-xs text-neutral-700">{skill.description}</p>
      </div>
    </motion.div>
  );
}
