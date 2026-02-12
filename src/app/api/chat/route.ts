import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userText = body.message || "Hello";

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b", // Бесплатная и быстрая модель
      max_tokens: 150,
      messages: [
        {
          role: "system",
          content: "You are an Aero-X sales agent. Reply in 2-4 short sentences maximum. Be concise, persuasive and confident. Avoid long explanations."
        },
        {
          role: "user",
          content: userText
        }
      ],
      temperature: 0.7,
      
    });

    const text = completion.choices[0].message.content;

    return NextResponse.json({ text });

  } catch (error: any) {
    console.error("Groq error:", error);
    return NextResponse.json({
      text: "Error: " + error.message
    });
  }
}
