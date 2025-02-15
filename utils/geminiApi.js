import axios from "axios";

const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;

export const generateResponse = async (prompt) => {
  try {
    const response = await axios({
      url: GEMINI_API_URL,
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
    });

    return response["data"]["candidates"][0]["content"]["parts"][0]["text"]; // Return the result to the caller
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error; // Rethrow the error for the UI to handle
  }
};
