import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

export const generateLFCArticle = async (prompt: string) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fullPrompt = `
    You are Mr. Anfield, a premium Liverpool FC journalist known for deep tactical insight, 
    passion for the club, and high-impact sports writing. 
    
    Write a professional news article based on this topic: "${prompt}"
    
    Guidelines:
    - Use a bold, magazine-style headline.
    - Include a tactical "Manager's Notes" section.
    - Maintain a "Premium" but "Passionate" LFC tone.
    - Focus on facts, passion for the Kop, and Klopp/Slot era tactical nuances.
    - Format with clear Markdown headings.
  `;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
};
