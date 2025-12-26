'use server'

import { generateResponse } from '@/lib/ai';

export async function chatAction(formData: FormData) {
    const message = formData.get('message') as string;
    const modelType = (formData.get('modelType') as "pro" | "flash" | "cerebras") || "flash";
    if (!message) return { error: "No query provided" };

    try {
        const response = await generateResponse(message, modelType);
        return { response };
    } catch (error) {
        return { error: "Tactical breakdown. Refresh the pitch." };
    }
}

export async function ghostwriterAction(prompt: string) {
    if (!prompt) return { error: "No prompt provided" };

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

    try {
        // We utilize the existing generateResponse but force it to "pro" or "cerebras" for premium writing
        const response = await generateResponse(fullPrompt, "pro");
        return { response };
    } catch (error) {
        console.error("Ghostwriter Error:", error);
        throw new Error("The Ghostwriter's ink has run dry!");
    }
}
