import React, { useState } from 'react';
import { getAiInsightReport } from '../services/geminiService';
import { mockBPData } from '../data/mockData';

const InsightsPage: React.FC = () => {
  const [report, setReport] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleGenerateReport = async () => {
    setIsLoading(true);
    setError('');
    setReport('');
    try {
      const result = await getAiInsightReport(mockBPData);
      setReport(result);
    } catch (err) {
      setError('Failed to generate report. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">AI Health Insights</h1>
        <p className="mt-1 text-lg text-gray-600">
          Get a personalized analysis of your recent blood pressure trends powered by AI.
        </p>
      </header>

      <div className="text-center">
        <button
          onClick={handleGenerateReport}
          disabled={isLoading}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating Report...
            </>
          ) : (
            'Generate My Health Report'
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      )}

      {report && (
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your AI-Generated Report</h2>
          <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap">
            {report}
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightsPage;
