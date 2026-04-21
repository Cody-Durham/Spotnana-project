require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const {input} = req.body;

    if (!input) {
      return res.status(400).json({ error: "Missing input" });
    }
    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input, 
      max_output_tokens: 80
    });
    
    return res.json({ output: response.output_text });
  } 
  catch (err) {
    console.error("OPENAI ERROR:", err);
    return res.status(500).json({
      error: "OpenAI request failed",
    });
  }
});

app.listen(8080, () => {
  console.log("Server running on 8080");
});
