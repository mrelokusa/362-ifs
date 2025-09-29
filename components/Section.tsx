
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
