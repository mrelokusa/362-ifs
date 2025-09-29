import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 text-center px-4">
      <div>
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</p>
        <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <div className="mt-8">
          <Link
            to="/dashboard"
            className="rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;