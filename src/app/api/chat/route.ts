import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919464807614";
  const systemPrompt = `You are Trading Spheres' 24/7 assistant. Help users learn about courses, pricing, and enrollment. 
For enrollment or direct support, always share the WhatsApp link: https://wa.me/${whatsappNumber}. 
Be concise, warm, and professional.`;

  const stream = await anthropic.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: systemPrompt,
    messages: messages,
  });

  return new Response(stream.toReadableStream());
}