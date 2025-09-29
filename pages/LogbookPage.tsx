import React, { useState } from 'react';
import { mockBPData } from '../data/mockData';
import { BloodPressureReading } from '../types';

const LogbookPage: React.FC = () => {
  const [readings, setReadings] = useState<BloodPressureReading[]>(mockBPData);
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReading: BloodPressureReading = {
      id: (readings.length + 1).toString(),
      date: new Date().toISOString(),
      systolic: parseInt(systolic),
      diastolic: parseInt(diastolic),
      heartRate: parseInt(heartRate),
      notes: notes,
    };
    setReadings([newReading, ...readings]);
    // Clear form
    setSystolic('');
    setDiastolic('');
    setHeartRate('');
    setNotes('');
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Health Logbook</h1>
        <p className="mt-1 text-lg text-gray-600">Log new readings and view your history.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Add New Reading</h2>
            <div>
              <label htmlFor="systolic" className="block text-sm font-medium text-gray-700">Systolic (mmHg)</label>
              <input type="number" id="systolic" value={systolic} onChange={e => setSystolic(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="diastolic" className="block text-sm font-medium text-gray-700">Diastolic (mmHg)</label>
              <input type="number" id="diastolic" value={diastolic} onChange={e => setDiastolic(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="heartRate" className="block text-sm font-medium text-gray-700">Heart Rate (BPM)</label>
              <input type="number" id="heartRate" value={heartRate} onChange={e => setHeartRate(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
             <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes (optional)</label>
              <textarea id="notes" value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Save Reading</button>
          </form>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Systolic</th>
                    <th scope="col" className="px-6 py-3">Diastolic</th>
                    <th scope="col" className="px-6 py-3">Heart Rate</th>
                    <th scope="col" className="px-6 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {readings.map(r => (
                    <tr key={r.id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{new Date(r.date).toLocaleString('en-ZA')}</td>
                      <td className="px-6 py-4">{r.systolic}</td>
                      <td className="px-6 py-4">{r.diastolic}</td>
                      <td className="px-6 py-4">{r.heartRate}</td>
                      <td className="px-6 py-4 max-w-xs truncate">{r.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogbookPage;
