import React from 'react';
import Section from './Section';

const features = [
  {
    name: 'AI-Powered Chat',
    description: 'Get instant, easy-to-understand answers to your hypertension questions, available 24/7.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    ),
  },
  {
    name: 'Blood Pressure Logging',
    description: 'Easily track your blood pressure readings over time to see your progress and share with your doctor.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
  {
    name: 'Medication Reminders',
    description: 'Set up smart, personalized reminders so you never miss a dose of your important medication.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    ),
  },
  {
    name: 'Personalized Insights',
    description: 'Understand your health trends with simple charts and summaries that make sense of your data.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <Section id="features" title="How HyperCare Helps You">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div key={feature.name} className="relative p-8 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
            <p className="mt-2 text-base text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
