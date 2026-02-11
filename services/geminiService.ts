
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDIYAdvice = async (history: Message[], prompt: string) => {
  try {
    const chat = ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: "You are HandyScan AI, a friendly and expert home renovation and DIY consultant. You provide safe, practical, and step-by-step advice for home repair, woodworking, gardening, and interior design. Always prioritize safety (e.g., wearing masks, turning off electricity). Keep answers concise and helpful.",
        temperature: 0.7,
      },
    });

    const response = await chat;
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to my brain. Can you try asking that again?";
  }
};

export const generateProjectSummary = async (projectTitle: string, description: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Give me a 2-sentence motivating summary and one crucial safety tip for a DIY project titled: "${projectTitle}". Description: ${description}`,
  });
  return response.text;
};

export const generateShoppingList = async (tools: string[], materials: string[]) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Create a concise, organized shopping list for a DIYer who needs these: Tools: ${tools.join(', ')}. Materials: ${materials.join(', ')}. Group them by store section (e.g., Hardware, Paint, Lumber).`,
  });
  return response.text;
};
