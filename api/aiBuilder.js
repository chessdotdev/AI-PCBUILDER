import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "https://router.huggingface.co/v1",
	apiKey: "API_KEY",
});

const chatCompletion = await client.chat.completions.create({
	model: "moonshotai/Kimi-K2-Thinking:novita",
    messages: [
        {
            role: "user",
            content: "What is the capital of France?",
        },
    ],
});

console.log(chatCompletion.choices[0].message);