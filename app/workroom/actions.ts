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
    You are Mr. Anfield, the world's leading Liverpool FC analyst and editor-at-large. 
    Write a definitive, long-form magazine feature based on this topic: "${prompt}"
    
    You MUST return the response in strict JSON format:
    {
        "title": "A bold, cinematic headline (uppercase, italic, punchy)",
        "excerpt": "A gripping 2-sentence intro summary that hooks the reader immediately",
        "content": "A massive, detailed article (MINIMUM 800-1000 WORDS) using Markdown. 
                   Start with a drop-cap paragraph. 
                   Include deep tactical breakdowns, specific player stats, and historical context. 
                   Use ## and ### headers for sections like 'THE TACTICAL SHAPER' and 'MANAGER'S OFFICE'.
                   
                   CRITICAL: Use the following special blocks within the content:
                   1. For Tactical Metrics, use:
                   ### Tactical Breakdown: [Title]
                   [Paragraph analysis]
                   - Metric 1: Value
                   - Metric 2: Value
                   - Metric 3: Value
                   
                   2. For Manager's Notes or Quotes, use:
                   > [The quote or note]
                   
                   Wait for the whistle and deliver a masterclass.",
        "category": "One of: Tactics, Transfers, Match Analysis, Academy, Club, or News",
        "readTime": "e.g. 12 min read",
        "slug": "url-friendly-slug"
    }

    Guidelines:
    - Content: Go extremely deep. Don't just summarize; analyze the 'why' behind the 'what'.
    - Tone: Elegant yet fierce. The voice of a club that has won everything but is never satisfied.
    - Formatting: Split the content into 6-8 distinct sections. Use **bold** for emphasis on key names.
    - Mention: Reference Anfield's atmosphere, the 'Kop roar', and the 'Slot Machine' precision if applicable.
    `;

    try {
        const responseText = await generateResponse(fullPrompt, "pro");
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        const data = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(responseText);

        return { article: data };
    } catch (error) {
        console.error("Ghostwriter Error:", error);
        return { error: "The Ghostwriter's ink has run dry! Tactical breakdown in the engine room." };
    }
}
