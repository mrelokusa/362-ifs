
import React from 'react';
import Section from './Section';
import type { TeamMember, AiTool } from '../types';

const teamMembers: TeamMember[] = [
  { name: 'Alice Smith', studentNumber: 'u12345678', date: new Date().toLocaleDateString('en-ZA') },
  { name: 'Bob Johnson', studentNumber: 'u87654321', date: new Date().toLocaleDateString('en-ZA') },
  { name: 'Charlie Brown', studentNumber: 'u11223344', date: new Date().toLocaleDateString('en-ZA') },
];

const aiTools: AiTool[] = [
  { tool: 'Gemini API', purpose: 'AI chat responses, content generation', promptExample: '"Explain hypertension in simple terms."', integration: 'Client-side API call via service layer' },
  { tool: 'GitHub Copilot', purpose: 'Code completion and suggestions', promptExample: 'N/A (inline)', integration: 'VS Code Extension' },
  { tool: 'ChatGPT-4', purpose: 'Project planning, content structuring', promptExample: '"Create a persona for a South African hypertension patient."', integration: 'Manual Copy/Paste' },
];

const Declaration: React.FC = () => {
  return (
    <Section id="declarations" title="Declarations">
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Anti-Plagiarism Declaration</h3>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">Member Name</th>
                  <th scope="col" className="px-6 py-3">Student Number</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr key={member.studentNumber} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{member.name}</td>
                    <td className="px-6 py-4">{member.studentNumber}</td>
                    <td className="px-6 py-4">{member.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">AI-Use Declaration</h3>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">Tool</th>
                  <th scope="col" className="px-6 py-3">Purpose</th>
                  <th scope="col" className="px-6 py-3">Prompt Example</th>
                  <th scope="col" className="px-6 py-3">Integration</th>
                </tr>
              </thead>
              <tbody>
                {aiTools.map((tool) => (
                  <tr key={tool.tool} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{tool.tool}</td>
                    <td className="px-6 py-4">{tool.purpose}</td>
                    <td className="px-6 py-4 italic">"{tool.promptExample}"</td>
                    <td className="px-6 py-4">{tool.integration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Declaration;
