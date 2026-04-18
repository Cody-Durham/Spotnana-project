require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

const corsOptions = {
    origin: ["http://localhost:5173"]
};

const nasaKey = process.env.NASA_API_KEY;
console.log("nasaKey!!!!!!!!!!!!!!!", nasaKey);


app.use(cors(corsOptions));


// Backend API route for Nasa picture of the day
app.get("/api/pic", async (req, res) => {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  const result = date.toISOString().split("T")[0];
  const haveDate = result ? result : "2026-04-13"; // "2026-04-13" is a beautiful image for default

  try {
    const response = await axios.get(
    "https://api.nasa.gov/planetary/apod",
  {
    params: {
      api_key: nasaKey,
      // date: haveDate
      date: "2026-04-13"
    }
  }
);
    const pic = response.data;
    res.json(pic) ;

  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(8080, () => {
  console.log("Server running on 8080");
});
