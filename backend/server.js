require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Chatbot backend is running 🚀" });
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful, friendly, and concise AI assistant. Provide clear and accurate responses.",
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    const reply = chatCompletion.choices[0]?.message?.content || "";
    res.json({ reply });
  } catch (error) {
    console.error("Groq API error:", error?.message || error);

    if (error?.status === 401) {
      return res
        .status(401)
        .json({ error: "Invalid Groq API key. Please check your .env file." });
    }

    res.status(500).json({ error: "Failed to get a response from the AI." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
