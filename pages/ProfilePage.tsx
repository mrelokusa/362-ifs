import React from 'react';
import { useAuth } from '../hooks/useAuth';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return null; // Or a loading indicator
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="mt-1 text-lg text-gray-600">Manage your personal information and settings.</p>
      </header>
      
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <form className="space-y-6">
           <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" defaultValue={user.name} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" defaultValue={user.email} disabled className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100" />
            </div>
             <div>
                <button type="submit" className="w-full sm:w-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Save Changes</button>
            </div>
        </form>
      </div>

       <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold text-gray-900">Settings</h2>
         <div className="mt-4 space-y-4">
            <fieldset>
                <legend className="text-base font-medium text-gray-900">Notifications</legend>
                <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                        <div className="flex h-5 items-center"><input id="reminders" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked /></div>
                        <div className="ml-3 text-sm"><label htmlFor="reminders" className="font-medium text-gray-700">Medication Reminders</label></div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex h-5 items-center"><input id="insights" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked /></div>
                        <div className="ml-3 text-sm"><label htmlFor="insights" className="font-medium text-gray-700">New AI Insights</label></div>
                    </div>
                </div>
            </fieldset>
         </div>
      </div>
    </div>
  );
};

export default ProfilePage;
