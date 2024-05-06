const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const apiKey = "6762142114b974d16aa8d5a7e9a52a4b";
const lat = 49.233333333;
const lon = 7;

app.get("/api/weather", async (req, res) => {
  try {
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    res.send(weatherResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching weather data");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
