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

// Backend API route for Nasa picture of the day
// app.get("/api/pic", async (req, res) => {
//   const date = new Date();
//   date.setDate(date.getDate() - 1);

//   const result = date.toISOString().split("T")[0];
//   const haveDate = result ? result : "2026-04-13"; // "2026-04-13" is a beautiful image for default



//   try {
//     const response = await axios.get("https://api.nasa.gov/planetary/apod", {
//     params: {
//       api_key: nasaKey,
//       // date: haveDate
//       date: "2026-04-13"
//     }
//   }
// );
//     const pic = response.data;
//     res.json(pic) ;

//   } catch (err) {
//     console.error("ERROR:", err.message);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });


const getYesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() -1 );
  return date.toISOString().split("T")[0];
}

app.get("/api/pic", async (req, res) => {
  try {
    // check for nasa key
    if (!nasaKey) {
      // ******************* I should put up a dialog here *****************
      return res.status(500).json({ error: "NASA API key is missing" });
    }
    console.log("res!!!!!!!!!!!", res);

    const response = await axios.get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: nasaKey,
          // date: getYesterdayDate()
          date: "2026-04-13" // change this.. no hard code
        },
        timeout: 5000
      }
    );

    if (!response.data || !response.data.url) {
      // ******************* I should put up a dialog here *****************
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
