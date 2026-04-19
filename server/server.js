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
const nasaKey = process.env.NASA_API_KEY;

app.use(cors(corsOptions));
app.use(express.json());

let safetyCounter = 0;
const MAX_TEST_CALLS = 2; 

const getYesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() -1 );
  return date.toISOString().split("T")[0];
};

// ----------------  KEEP ---------------------------------------------------------------
// Backend API route from NASA picture of the day
// app.get("/api/pic", async (req, res) => {
//   try {
//     if (!nasaKey) {
//       // ******************* I should put up a dialog here *****************
//       return res.status(500).json({ error: "NASA API key is missing" });
//     }
    

//     const response = await axios.get("https://api.nasa.gov/planetary/apod", {
//         params: {
//           api_key: nasaKey,
//           // date: getYesterdayDate()
//           // date: "2026-04-13" // change this.. no hard code
//         },
//         timeout: 5000
//       }
//     );

//     if (!response.data || !response.data.url) {
//       // ******************* I shoul`d put up a dialog here *****************
//       return res.status(502).json({
//         error: "Invalid response from NASA API"
//       });
//     }

//     res.json(response.data);

//   } catch (err) {
//     console.error("NASA API ERROR:", err.message);

//     res.status(500).json({
//       error: "Failed to fetch NASA image"
//     });
//   }
// });
// ----------------  KEEP ---------------------------------------------------------------

app.post("/api/chat", async (req, res) => {
  try {
    const { input } = req.body;

    if (!input) {
      return res.status(400).json({ error: "Missing input" });
    }

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: input,
    });

    return res.json({
      output: response.output_text
    });
  } 
  catch (err) {
    console.error("OPENAI ERROR:", err);

    return res.status(500).json({
      error: "OpenAI request failed",
    });
  }
});

app.get("/test-ai", async (req, res) => {
  try {
    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: "Spell dog"
    });

    console.log(response.output_text);

    res.json({ output: response.output_text });

  } 
  // catch (err) {
  //   console.error(err);
  //   res.status(500).json({ error: "AI request failed" });
  // }
  catch (err) {
  console.error("OPENAI FULL ERROR:", err);

  res.status(500).json({
    error: err.message,
    details: err
  });
}
});



app.get("/api/models", async (req, res) => {
  try {
    const models = await openai.models.list();
    console.log(models);

    res.json(models);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch models" });
  }
});


app.listen(8080, () => {
  console.log("Server running on 8080");
});
