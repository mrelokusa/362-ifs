import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <NavBar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} HyperCare AI Platform. All rights reserved.</p>
           <p className="text-xs mt-2">This platform provides general information and is not a substitute for professional medical advice.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
