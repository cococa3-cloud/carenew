
import { GoogleGenAI, Type } from "@google/genai";

// Always use the specified initialization pattern for GoogleGenAI
const ai = new GoogleGenAI({apiKey: process.env.API_KEY});

export const generateBrainQuiz = async (type: string) => {
  const prompt = `Generate a single simple ${type} quiz for a senior citizen. 
  It should be engaging and not too difficult. 
  Provide the question and the correct answer in Korean.
  Return as JSON.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          question: { type: Type.STRING },
          options: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING } 
          },
          answer: { type: Type.STRING },
          explanation: { type: Type.STRING }
        },
        required: ["question", "options", "answer", "explanation"]
      }
    }
  });

  // Access the text property directly and trim it to ensure clean JSON parsing
  return JSON.parse(response.text.trim());
};

export const analyzeDiary = async (content: string) => {
  const prompt = `다음은 시니어의 일기 내용입니다: "${content}". 
  이 일기를 읽고 긍정적인 피드백과 함께 한 줄 요약을 작성해주세요. 한국어로 작성하세요.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          feedback: { type: Type.STRING }
        },
        required: ["summary", "feedback"]
      }
    }
  });

  // Access the text property directly and trim it to ensure clean JSON parsing
  return JSON.parse(response.text.trim());
};
