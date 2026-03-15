import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";

const getApiKey = () => {
  return process.env.GEMINI_API_KEY || '';
};

export const generateQuestionsForModule = async (moduleName: string, moduleDescription: string, count: number = 3): Promise<Question[]> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    throw new Error("Clé API absente. Assurez-vous d'avoir configuré GEMINI_API_KEY dans les paramètres (Settings) de AI Studio.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const model = "gemini-2.5-flash";
  
  const contextText = moduleDescription 
    ? `Le contenu spécifique de ce module porte sur : "${moduleDescription}".` 
    : "Le contenu est général pour ce module de médecine.";

  const prompt = `Agis comme un professeur de faculté de médecine. Génère ${count} questions QCM pour le module "${moduleName}". Contexte : ${contextText}`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              text: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctIndices: { type: Type.ARRAY, items: { type: Type.INTEGER } },
              explanation: { type: Type.STRING }
            },
            required: ["text", "options", "correctIndices", "explanation"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    const parsed = JSON.parse(text) as Array<Omit<Question, 'id'>>;
    return parsed.map((q, i: number) => ({
      id: `ai-${Date.now()}-${i}`,
      ...q
    }));

  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    
    if (errorMsg.includes("User location is not supported")) {
      throw new Error("L'IA Gemini n'est pas disponible dans votre pays. Essayez d'utiliser un VPN (USA/Suisse) ou vérifiez la disponibilité régionale.", { cause: error });
    }
    if (errorMsg.includes("API key not valid") || errorMsg.includes("403")) {
      throw new Error("La clé API configurée sur le serveur est invalide ou a été révoquée par Google pour des raisons de sécurité.", { cause: error });
    }
    
    throw error;
  }
};
