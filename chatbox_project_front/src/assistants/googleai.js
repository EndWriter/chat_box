import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialisation de l'API Gemini
const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

export class Assistant {
  #chat;

  constructor(model = "gemini-2.5-flash") {
    const gemini = googleai.getGenerativeModel({ model });
    this.#chat = gemini.startChat({ history: [] });
  }

  async chat(content) {
    try {
      const result = await this.#chat.sendMessage(content); // ← correction ici
      return await result.response.text(); // ← ajout du await pour extraire le texte
    } catch (error) {
      throw error;
    }
  }
}
