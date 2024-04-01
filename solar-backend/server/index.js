const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/weather", async (req, res) => {
  try {
    const weatherResponse = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=49.233333333&lon=7&appid=6762142114b974d16aa8d5a7e9a52a4b&units=metric"
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
