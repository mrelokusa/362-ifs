export interface User {
  id: string;
  name: string;
  email: string;
}

export interface BloodPressureReading {
  id: string;
  date: string; // ISO string format
  systolic: number;
  diastolic: number;
  heartRate: number;
  notes?: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time: string[];
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

// FIX: Add missing type definitions to resolve import errors.
export interface TeamMember {
  name: string;
  studentNumber: string;
  date: string;
}

export interface AiTool {
  tool: string;
  purpose: string;
  promptExample: string;
  integration: string;
}

export interface Persona {
  name: string;
  age: number;
  location: string;
  role: string;
  bio: string;
  needs: string[];
  painPoints: string[];
  imageUrl: string;
}

export interface Sprint {
  sprint: number;
  title: string;
  duration: string;
  goals: string[];
}
