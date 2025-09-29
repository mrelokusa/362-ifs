
import React from 'react';
import Section from './Section';

const SystemArchitecture: React.FC = () => {
  return (
    <Section id="architecture" title="System Architecture">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <p className="text-gray-600 mb-6">
          Our system is designed for scalability and security, leveraging modern cloud technologies.
          The architecture separates the frontend presentation layer from the backend data and AI services.
        </p>
        <div className="w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-96">
          <img 
            src="https://picsum.photos/seed/arch/800/400" 
            alt="System Architecture Diagram Placeholder"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <p className="text-sm text-gray-500 mt-4">
          [A diagram showing Frontend (React/Vercel) -> Backend (Supabase) -> AI Services (Gemini API)]
        </p>
      </div>
    </Section>
  );
};

export default SystemArchitecture;
