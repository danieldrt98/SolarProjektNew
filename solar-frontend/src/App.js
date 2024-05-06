import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get("/api/weather");
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {weatherData && (
          <div>
            <h1>Weather in {weatherData.name}</h1>
            <h2>{weatherData.main.temp}°C</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>
              <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="weather icon" />
            </p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind: {weatherData.wind.speed} m/s</p>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
            <p>Forecast: </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
