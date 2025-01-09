import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI({ apiKey });

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b", // Choose your desired model
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 256, // Adjust as needed
  responseMimeType: "text/plain",
};

const generateResponse = async (prompt) => {
  try {
    const chatSession = await model.startChat({ generationConfig });
    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    throw error; // Re-throw the error for handling in the component
  }
};

// Test the API key by making a simple fetch call
fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-8b:generateContent",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Add any body parameters if required by the API
    }),
  }
)
  .then((response) => response.json())
  .then((data) => console.log("API Test Response:", data))
  .catch((error) => console.error("Error in API Test:", error));

export default generateResponse;
