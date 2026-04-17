const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"]
};
const axios = require("axios");
const nasaKey = "A2duc4qlrKHp7ptCSu8KYAG6148GE7jgzNvM7Xcj"

app.use(cors(corsOptions));

// // Backend API route
app.get("/api/people", async (req, res) => {
  try {
    // const response = await axios.get("https://swapi.dev/api/people/?page=1");

    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`);

    // const people = response.data.results;
    const people = response.data;
    console.log("people", people);
    
    
    

    console.log("🔥 Backend fetched data");

    // res.json(people);
    res.json(people) ;
  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(8080, () => {
  console.log("Server running on 8080");
});
