import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";

// Fonction sécurisée pour récupérer la clé API dans un environnement Vite/Browser
const getApiKey = () => {
  try {
    // @ts-ignore
    if (typeof process !== 'undefined' && process.env?.API_KEY) {
       // @ts-ignore
       return process.env.API_KEY;
    }
    // @ts-ignore
    if (import.meta.env?.VITE_API_KEY) {
       // @ts-ignore
       return import.meta.env.VITE_API_KEY;
    }
  } catch (e) {
    console.warn("Erreur lecture clé API", e);
  }
  return '';
};

export const generateQuestionsForModule = async (moduleName: string, moduleDescription: string, count: number = 3): Promise<Question[]> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    console.warn("Clé API manquante");
    throw new Error("Clé API manquante. Veuillez ajouter VITE_API_KEY dans les Secrets GitHub.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const model = "gemini-2.5-flash";
  
  // Construction d'un prompt beaucoup plus précis incluant la description
  const contextText = moduleDescription 
    ? `Le contenu spécifique de ce module porte sur : "${moduleDescription}".` 
    : "Le contenu est général pour ce module de médecine.";

  const prompt = `Agis comme un professeur de faculté de médecine exigeant.
  Génère ${count} questions QCM (Choix Multiples) de haut niveau pour le module "${moduleName}".
  
  CONTEXTE OBLIGATOIRE : ${contextText}
  
  Instructions de génération :
  1. Les questions doivent être STRICTEMENT limitées au contexte fourni ci-dessus. SI LE CONTEXTE EST PRÉCIS (ex: "Thorax"), IL EST INTERDIT DE POSER DES QUESTIONS SUR D'AUTRES SUJETS (ex: "Foie", "Membre inférieur", "Cellule").
  2. Utilise la terminologie médicale précise.
  3. Fournis 4 options de réponse.
  4. Indique les indices de TOUTES les réponses correctes (0 à 3) dans un tableau (il peut y avoir plusieurs bonnes réponses).
  5. Fournis une explication pédagogique détaillée.
  6. Le contenu doit être en français.`;

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
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctIndices: { 
                type: Type.ARRAY,
                items: { type: Type.INTEGER } 
              },
              explanation: { type: Type.STRING }
            },
            required: ["text", "options", "correctIndices", "explanation"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];

    const rawQuestions = JSON.parse(text);
    
    return rawQuestions.map((q: any, index: number) => ({
      id: `ai-${Date.now()}-${index}`,
      text: q.text,
      options: q.options,
      correctIndices: q.correctIndices,
      explanation: q.explanation
    }));
  } catch (error) {
    console.error("Erreur Gemini:", error);
    throw error;
  }
};