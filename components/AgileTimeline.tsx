
import React from 'react';
import Section from './Section';
import type { Sprint } from '../types';

const sprints: Sprint[] = [
  {
    sprint: 1,
    title: 'Project Setup & Core UX',
    duration: '2 Weeks',
    goals: [
      'Setup project repository & CI/CD pipeline.',
      'Design core UI/UX wireframes.',
      'Develop landing page structure.',
      'Define database schema.',
    ],
  },
  {
    sprint: 2,
    title: 'Frontend Development & Supabase Stubs',
    duration: '2 Weeks',
    goals: [
      'Build React components for all sections.',
      'Implement responsive design with Tailwind.',
      'Create Supabase client stubs.',
      'Develop initial user profile pages.',
    ],
  },
  {
    sprint: 3,
    title: 'Gemini AI Integration',
    duration: '2 Weeks',
    goals: [
      'Implement Gemini API service.',
      'Build the AI chat interface.',
      'Handle streaming responses for chat.',
      'Log AI sessions to the database.',
    ],
  },
  {
    sprint: 4,
    title: 'Testing, Deployment & Presentation',
    duration: '1 Week',
    goals: [
      'End-to-end testing.',
      'Finalize PDF export functionality.',
      'Deploy to Vercel.',
      'Prepare final presentation.',
    ],
  },
];

const TimelineItem: React.FC<{ sprint: Sprint, isLast: boolean }> = ({ sprint, isLast }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-200 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-blue-500 rounded-full">{sprint.duration}</div>
      <div className="text-xl font-bold text-gray-900">Sprint {sprint.sprint}: {sprint.title}</div>
    </div>
    <div className="text-slate-500 ml-8 sm:ml-32">
      <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
        {sprint.goals.map(goal => <li key={goal}>{goal}</li>)}
      </ul>
    </div>
  </div>
);

const AgileTimeline: React.FC = () => {
  return (
    <Section id="planning" title="Agile Planning & Sprint Breakdown">
      <div className="space-y-4">
        {sprints.map((sprint, index) => (
          <TimelineItem key={sprint.sprint} sprint={sprint} isLast={index === sprints.length - 1} />
        ))}
      </div>
    </Section>
  );
};

export default AgileTimeline;
