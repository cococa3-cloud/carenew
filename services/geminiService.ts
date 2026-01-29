
import { GoogleGenAI, Type } from "@google/genai";

// process.env.API_KEY가 없는 환경에서도 앱이 크래시되지 않도록 안전하게 처리합니다.
const getApiKey = () => {
  try {
    return process.env.API_KEY || "";
  } catch (e) {
    console.warn("API_KEY를 찾을 수 없습니다. 환경 변수를 확인해주세요.");
    return "";
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export const generateBrainQuiz = async (type: string) => {
  const prompt = `Generate a single simple ${type} quiz for a senior citizen. 
  It should be engaging and not too difficult. 
  Provide the question and the correct answer in Korean.
  Return as JSON.`;

  try {
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

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("퀴즈 생성 중 오류 발생:", error);
    throw error;
  }
};

export const analyzeDiary = async (content: string) => {
  const prompt = `다음은 시니어의 일기 내용입니다: "${content}". 
  이 일기를 읽고 긍정적인 피드백과 함께 한 줄 요약을 작성해주세요. 한국어로 작성하세요.`;

  try {
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

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("일기 분석 중 오류 발생:", error);
    throw error;
  }
};
