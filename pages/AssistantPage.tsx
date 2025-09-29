import React from 'react';
import ChatAssistant from '../components/ChatAssistant';

const AssistantPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">AI Assistant</h1>
        <p className="mt-1 text-lg text-gray-600">
          Ask general questions about hypertension. This is not a substitute for medical advice.
        </p>
      </header>
      <ChatAssistant />
    </div>
  );
};

export default AssistantPage;
