import React, { useState } from 'react';
import { mockMedications } from '../data/mockData';
import { Medication } from '../types';

const MedicationsPage: React.FC = () => {
  const [medications, setMedications] = useState<Medication[]>(mockMedications);

  // Placeholder functions for CRUD operations
  const addMedication = () => alert('Add medication functionality to be implemented.');
  const editMedication = (id: string) => alert(`Edit medication ${id} functionality to be implemented.`);
  const deleteMedication = (id: string) => alert(`Delete medication ${id} functionality to be implemented.`);

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Medications</h1>
          <p className="mt-1 text-lg text-gray-600">Keep track of your prescribed medications and schedules.</p>
        </div>
        <button onClick={addMedication} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          + Add Medication
        </button>
      </header>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <ul role="list" className="divide-y divide-gray-200">
          {medications.map((med) => (
            <li key={med.id} className="py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex-grow">
                <p className="text-lg font-bold text-gray-900">{med.name}</p>
                <p className="text-sm text-gray-600">
                  {med.dosage} - {med.frequency} at {med.time.join(', ')}
                </p>
              </div>
              <div className="flex-shrink-0 space-x-2">
                  <button onClick={() => editMedication(med.id)} className="text-sm font-medium text-blue-600 hover:text-blue-800">Edit</button>
                  <button onClick={() => deleteMedication(med.id)} className="text-sm font-medium text-red-600 hover:text-red-800">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicationsPage;
