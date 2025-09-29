import React from 'react';
import { Link } from 'react-router-dom';

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
    name: 'Personalized AI Insights',
    description: 'Understand your health trends with AI-generated reports that make sense of your data.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
  },
];


const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Take Control of Your Health with HyperCare AI
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Your personal guide to understanding and managing hypertension in South Africa. Track your readings, get smart reminders, and receive AI-powered insights.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link to="/login" className="rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Get Started
                  </Link>
                  <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
             <div className="shadow-lg md:rounded-3xl" >
                <img src="https://picsum.photos/seed/app-dashboard/1024/768" alt="App screenshot" className="w-full h-auto md:rounded-3xl" />
            </div>
          </div>
        </div>
      </div>

       <div id="features" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How HyperCare Helps You</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A comprehensive platform designed to make managing your hypertension simpler and more effective.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                 <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{feature.name}</h3>
                <p className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                 {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} HyperCare AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
