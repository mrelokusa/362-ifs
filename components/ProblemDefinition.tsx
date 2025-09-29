
import React from 'react';
import Section from './Section';

const ProblemDefinition: React.FC = () => {
  return (
    <Section id="problem" title="Problem Definition">
      <div className="prose prose-lg lg:prose-xl max-w-none text-gray-600 bg-white p-8 rounded-xl shadow-md">
        <p>
          Hypertension, or high blood pressure, is a silent killer and a major public health challenge in South Africa.
          It affects millions, yet awareness, treatment, and control rates remain alarmingly low.
        </p>
        <p>
          Key barriers to effective management include limited access to healthcare professionals, poor health literacy,
          non-adherence to medication, and a lack of personalized support for lifestyle modifications.
          Patients often feel isolated and overwhelmed, struggling to manage their condition between infrequent clinic visits.
        </p>
        <blockquote>
          Our mission is to bridge this gap by leveraging AI to provide an accessible, personalized, and proactive
          hypertension management assistant. HyperCare AI aims to empower South Africans to take control of their
          health, improving adherence, knowledge, and ultimately, health outcomes.
        </blockquote>
      </div>
    </Section>
  );
};

export default ProblemDefinition;
