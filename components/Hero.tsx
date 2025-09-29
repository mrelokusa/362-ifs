import React from 'react';

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    document.getElementById('ai-demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="home" className="relative text-center py-24 sm:py-32">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl transform -rotate-2"
      ></div>
      <div className="relative">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          HyperCare AI Assistant
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Your personal guide to understanding and managing hypertension in South Africa.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={scrollToDemo}
            className="rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-transform transform hover:scale-105"
          >
            Try the AI Assistant
          </button>
          <a href="#features" className="text-sm font-semibold leading-6 text-gray-900 group">
            Learn more <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
