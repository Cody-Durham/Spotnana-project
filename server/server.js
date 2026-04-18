const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"]
};
const axios = require("axios");
const nasaKey = "A2duc4qlrKHp7ptCSu8KYAG6148GE7jgzNvM7Xcj"

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
);1``
    const pic = response.data;
    res.json(pic) ;

  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Backend API route for test asteriod data
// app.get("/api/close", async (req, res) => {
//   try {
//     // const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${nasaKey}`);
//     const response = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${nasaKey}`);
//     console.log("hit data!!!!!!!!!", response);
    
//     const data = response.data;
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({error: "Faild to fetch data"});
//   }
// });


app.listen(8080, () => {
  console.log("Server running on 8080");
});
