require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

const corsOptions = {
    origin: ["http://localhost:5173"]
};

const nasaKey = process.env.NASA_API_KEY;

app.use(cors(corsOptions));

const getYesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() -1 );
  return date.toISOString().split("T")[0];
};

// Backend API route from NASA picture of the day
app.get("/api/pic", async (req, res) => {
  try {
    // check for nasa key. if no key send 500 (server error)
    if (!nasaKey) {
      // ******************* I should put up a dialog here *****************
      return res.status(500).json({ error: "NASA API key is missing" });
    }
    

    const response = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: nasaKey,
          // date: getYesterdayDate()
          // date: "2026-04-13" // change this.. no hard code
        },
        timeout: 5000
      }
    );

    // if the upstream server sends a invalid response
    if (!response.data || !response.data.url) {
      // ******************* I shoul`d put up a dialog here *****************
      return res.status(502).json({
        error: "Invalid response from NASA API"
      });
    }

    res.json(response.data);

  } catch (err) {
    console.error("NASA API ERROR:", err.message);

    res.status(500).json({
      error: "Failed to fetch NASA image"
    });
  }
});

app.listen(8080, () => {
  console.log("Server running on 8080");
});
