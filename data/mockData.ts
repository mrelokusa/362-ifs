import { BloodPressureReading, Medication } from '../types';

export const mockBPData: BloodPressureReading[] = [
  { id: '1', date: '2024-07-20T08:00:00Z', systolic: 135, diastolic: 88, heartRate: 72, notes: 'Morning reading' },
  { id: '2', date: '2024-07-21T08:05:00Z', systolic: 138, diastolic: 90, heartRate: 75, notes: 'Felt a bit stressed' },
  { id: '3', date: '2024-07-22T07:55:00Z', systolic: 132, diastolic: 85, heartRate: 68 },
  { id: '4', date: '2024-07-23T08:10:00Z', systolic: 140, diastolic: 91, heartRate: 78, notes: 'After a salty dinner' },
  { id: '5', date: '2024-07-24T08:00:00Z', systolic: 133, diastolic: 86, heartRate: 70 },
  { id: '6', date: '2024-07-25T20:00:00Z', systolic: 128, diastolic: 82, heartRate: 65, notes: 'Evening reading, felt relaxed' },
  { id: '7', date: '2024-07-26T08:02:00Z', systolic: 130, diastolic: 84, heartRate: 67 },
];

export const mockMedications: Medication[] = [
    {
        id: 'med1',
        name: 'Amlodipine',
        dosage: '5mg',
        frequency: 'Once a day',
        time: ['08:00'],
    },
    {
        id: 'med2',
        name: 'Lisinopril',
        dosage: '10mg',
        frequency: 'Once a day',
        time: ['08:00'],
    },
     {
        id: 'med3',
        name: 'Metformin',
        dosage: '500mg',
        frequency: 'Twice a day',
        time: ['08:00', '20:00'],
    }
];
