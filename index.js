import { GoogleGenAI } from "@google/genai";

// ditaruh di .env
const ai = new GoogleGenAI({ apiKey: "tesapikeyyahjangandicopylho" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say Hi from Gemini AI to AVPN Wave 1 Batch 3 students!",
  });
  console.log(response.text);
}

// Prompt: "Say Hi from Gemini AI to AVPN Wave 1 Batch 3 students!"

await main();

// 2 jenis import syntax
// CommonJS --> require() untuk import, module.exports untuk export
// ES Module --> import untuk import, export untuk export