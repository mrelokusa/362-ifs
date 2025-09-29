import { GoogleGenAI } from "@google/genai";
import { BloodPressureReading } from "../types";

// Lazy-initialized instance to prevent app crash on startup.
let ai: GoogleGenAI | null = null;

/**
 * Gets a singleton instance of the GoogleGenAI client.
 * Initializes it on the first call.
 */
const getAiClient = (): GoogleGenAI => {
  if (!ai) {
    // This will still produce an error when called if the API key is not set,
    // but it will be caught by the functions below, preventing a crash.
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

const baseSystemInstruction = "You are HyperCare AI, a helpful assistant specializing in hypertension in South Africa. Provide clear, supportive, and general information. Always remind users to consult a healthcare professional for personal medical advice. Do not provide a diagnosis or prescribe treatment.";

export const getAiResponse = async (message: string): Promise<string> => {
  try {
    const client = getAiClient();
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: baseSystemInstruction,
      },
      contents: message,
    });

    return response.text;
  } catch (error) {
    console.error("Error getting AI response from Gemini:", error);
    return "Sorry, I'm having trouble connecting to the AI service right now. This might be due to a missing API key configuration. Please try again later.";
  }
};

export const getAiInsightReport = async (readings: BloodPressureReading[]): Promise<string> => {
  if (readings.length < 3) {
    return "You need at least 3 blood pressure readings to generate an insightful report. Please log more data.";
  }

  const formattedData = readings.map(r => 
    `- Date: ${new Date(r.date).toLocaleDateString('en-ZA')}, Systolic: ${r.systolic}, Diastolic: ${r.diastolic}, Heart Rate: ${r.heartRate}`
  ).join('\n');

  const prompt = `
    Analyze the following blood pressure and heart rate data for a user in South Africa. 
    Based *only* on the data provided, identify any notable trends (e.g., upward/downward trend, morning spikes, high variability), calculate the average readings, and highlight the highest and lowest readings. 
    Provide general, non-prescriptive lifestyle suggestions based on these patterns (e.g., if readings are consistently high, suggest discussing it with a doctor and mention general advice like monitoring sodium intake).
    Structure your response in clear sections: "Overall Summary", "Key Observations", and "General Recommendations".
    
    IMPORTANT: Do NOT provide a medical diagnosis. Start and end your response with a clear disclaimer that this is not medical advice and the user should consult their doctor.

    Data:
    ${formattedData}
  `;

  try {
    const client = getAiClient();
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: baseSystemInstruction,
      },
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error getting AI insight report from Gemini:", error);
    return "Sorry, I could not generate the report due to a connection issue. This might be due to a missing API key configuration. Please try again later.";
  }
};