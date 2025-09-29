import React, { useState, useRef, useEffect } from 'react';
import { getAiResponse } from '../services/geminiService';
import type { ChatMessage } from '../types';

const ChatAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: "Hello! I'm the HyperCare AI Assistant. How can I help you with your general hypertension questions today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiText = await getAiResponse(input);
      const aiMessage: ChatMessage = { sender: 'ai', text: aiText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: ChatMessage = { sender: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto" style={{ height: '70vh', display: 'flex', flexDirection: 'column' }}>
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0"></div>}
              <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex items-end gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0"></div>
                <div className="px-4 py-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-none">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question about hypertension..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || input.trim() === ''}
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 disabled:bg-gray-300 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
