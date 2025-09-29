import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { mockBPData } from '../data/mockData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Safeguard against rendering before user data is available from context
  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Handle case where there is no mock data to prevent crash
  if (!mockBPData || mockBPData.length === 0) {
    return (
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name.split(' ')[0]}!</h1>
          <p className="mt-1 text-lg text-gray-600">No health data available. Please visit the Logbook to add your first reading.</p>
        </header>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center text-gray-500">
          Your health summary and charts will appear here once you've logged some data.
        </div>
      </div>
    );
  }

  const latestReading = mockBPData[mockBPData.length - 1];
  const formattedData = mockBPData.map(d => ({
    ...d,
    name: new Date(d.date).toLocaleDateString('en-ZA', { month: 'short', day: 'numeric' }),
  }));

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name.split(' ')[0]}!</h1>
        <p className="mt-1 text-lg text-gray-600">Here’s your health summary for today.</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Latest Blood Pressure</h3>
          <p className="mt-1 text-3xl font-semibold text-gray-900">
            {latestReading.systolic}/{latestReading.diastolic} <span className="text-lg font-medium">mmHg</span>
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Heart Rate</h3>
          <p className="mt-1 text-3xl font-semibold text-gray-900">
            {latestReading.heartRate} <span className="text-lg font-medium">BPM</span>
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Medication</h3>
          <p className="mt-1 text-3xl font-semibold text-green-600">
            Taken
          </p>
        </div>
         <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Next Appointment</h3>
          <p className="mt-1 text-3xl font-semibold text-gray-900">
            In 5 days
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-md">
         <h3 className="text-xl font-semibold text-gray-900 mb-4">Blood Pressure Trend (Last 7 Days)</h3>
         <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart data={formattedData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="colorSys" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDia" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="systolic" stroke="#ef4444" fillOpacity={1} fill="url(#colorSys)" name="Systolic (mmHg)" />
              <Area type="monotone" dataKey="diastolic" stroke="#3b82f6" fillOpacity={1} fill="url(#colorDia)" name="Diastolic (mmHg)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;