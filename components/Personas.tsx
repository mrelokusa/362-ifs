
import React from 'react';
import Section from './Section';
import type { Persona } from '../types';

const personas: Persona[] = [
  {
    name: 'Nomsa Mthembu',
    age: 58,
    location: 'Soweto, Gauteng',
    role: 'Retired School Teacher',
    bio: 'Nomsa was diagnosed with hypertension five years ago. She lives with her daughter and grandchildren. She finds medical jargon confusing and struggles to remember to take her medication on time, especially with a busy household.',
    needs: [
      'Simple, clear health information in Zulu.',
      'Daily reminders for medication.',
      'Easy way to track blood pressure readings.',
    ],
    painPoints: [
      'Forgetting her clinic appointments.',
      'Feeling anxious about her health.',
      'Difficulty understanding doctor’s instructions.',
    ],
    imageUrl: 'https://picsum.photos/seed/nomsa/400/400',
  },
  {
    name: 'Thabo Molefe',
    age: 42,
    location: 'Cape Town, Western Cape',
    role: 'Minibus Taxi Driver',
    bio: 'Thabo has a stressful job with long hours, making it hard to prioritize his health. He was recently diagnosed with Stage 1 hypertension during a routine check-up. He is tech-savvy but needs a solution that fits his busy, mobile lifestyle.',
    needs: [
      'Quick access to health advice.',
      'Low-data usage application.',
      'Motivation to adopt healthier habits (e.g., less salt).',
    ],
    painPoints: [
      'No time for regular doctor visits.',
      'Unhealthy food choices on the road.',
      'High stress levels from his job.',
    ],
    imageUrl: 'https://picsum.photos/seed/thabo/400/400',
  },
];

const PersonaCard: React.FC<{ persona: Persona }> = ({ persona }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img className="w-full h-56 object-cover" src={persona.imageUrl} alt={persona.name} />
    <div className="p-6">
      <h3 className="text-xl font-bold text-blue-600">{persona.name}</h3>
      <p className="text-sm text-gray-500">{persona.age}, {persona.location}</p>
      <p className="text-sm font-semibold text-gray-700 mt-1">{persona.role}</p>
      <p className="mt-4 text-gray-600">{persona.bio}</p>
      <div className="mt-6">
        <h4 className="font-semibold text-green-700">Needs:</h4>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
          {persona.needs.map(need => <li key={need}>{need}</li>)}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="font-semibold text-red-700">Pain Points:</h4>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
          {persona.painPoints.map(point => <li key={point}>{point}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

const Personas: React.FC = () => {
  return (
    <Section id="personas" title="Personas & Needs Analysis">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personas.map(p => <PersonaCard key={p.name} persona={p} />)}
      </div>
    </Section>
  );
};

export default Personas;
