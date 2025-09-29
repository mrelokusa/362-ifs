import React from 'react';
import Section from './Section';

const AboutHypertension: React.FC = () => {
  return (
    <Section id="about-htn" title="Understanding Hypertension">
      <div className="prose prose-lg lg:prose-xl max-w-none text-gray-600 bg-white p-8 rounded-xl shadow-md">
        <p>
          Hypertension, or high blood pressure, is a common but serious condition where the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease. It's often called a "silent killer" because many people don't experience any symptoms.
        </p>
        <p>
          In South Africa, it's a major public health challenge, affecting millions. Key barriers to effective management include limited access to healthcare, poor health literacy, and lack of personalized support.
        </p>
        <blockquote>
          Our mission with HyperCare AI is to bridge this gap. We provide an accessible, personal, and proactive assistant to empower you to take control of your health, improve your knowledge, and achieve better health outcomes.
        </blockquote>
        <h3 className="text-2xl font-semibold text-gray-800 mt-8">Key things to watch for:</h3>
        <ul>
            <li><strong>Regular Check-ups:</strong> Since there are often no symptoms, regular blood pressure checks are vital.</li>
            <li><strong>Lifestyle Matters:</strong> Diet, exercise, and stress management play a huge role in controlling blood pressure.</li>
            <li><strong>Medication Adherence:</strong> If prescribed medication, it's crucial to take it as directed by your doctor.</li>
        </ul>
      </div>
    </Section>
  );
};

export default AboutHypertension;
