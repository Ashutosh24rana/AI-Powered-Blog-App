import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/generate", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    // ✅ Use the updated model name for v1 API
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Updated prompt
    const prompt = `You are a professional blog writer.Write a short blog based on this title: "${title}"`;

    // ✅ Updated method for v1 SDK
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ about: text });
  } catch (error) {
    console.error("🔥 Gemini AI Error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Gemini AI failed to generate content",
    });
  }
});

export default router;
