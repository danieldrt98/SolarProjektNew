const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";


const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const SUNDURATION_API_URL = "https://api.open-meteo.com"
const WEATHER_API_KEY = "6762142114b974d16aa8d5a7e9a52a4b";
const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};


//const lat = 49.233333333;
//const lon = 7;

//das würde ich nicht nutzen weil ich es nicht kenne. #BinEinBauer
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

export async function fetchWeatherData(lat, lon){
  try {
    const response = await axios.get(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }

}


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export async function fetchCities(input) {
  try {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
      GEO_API_OPTIONS
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function fetchSunDurationOneWeek(lat, lon) {
  console.log("fetchSunDurationOneWeek entered with lat: ", lat);
  console.log("fetchSunDurationOneWeek entered with lon: ", lon);
  console.log("sunduration API URL: ", `${SUNDURATION_API_URL}/v1/forecast?latitude=${lat}&longitude=${lon}&daily=sunshine_duration`);

  try {
    const response = await fetch(`${SUNDURATION_API_URL}/v1/forecast?latitude=${lat}&longitude=${lon}&daily=sunshine_duration`);
    console.log("response: ", response);

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const sunDurationOneWeekResponse = await response.json();
    console.log("Parsed response.json(): ", sunDurationOneWeekResponse);

    return sunDurationOneWeekResponse;
  } catch (error) {
    console.log("Error in fetchSunDurationOneWeek: ", error);
    throw error; 
  }
}