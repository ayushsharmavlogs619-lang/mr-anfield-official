import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || "");

export type ModelProvider = "pro" | "flash" | "cerebras";

export async function generateResponse(prompt: string, modelType: ModelProvider = "flash") {
    if (modelType === "cerebras") {
        try {
            const response = await fetch("https://api.cerebras.ai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.CEREBRAS_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b",
                    messages: [{ role: "user", content: prompt }],
                }),
            });
            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error("Cerebras API Error:", error);
            throw new Error("The referee has blown for a foul on the lightning counter!");
        }
    }

    try {
        const modelId = modelType === "pro" ? "gemini-1.5-pro" : "gemini-1.5-flash";
        const model = genAI.getGenerativeModel({ model: modelId });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw new Error("The referee has blown the whistle. Try again.");
    }
}
