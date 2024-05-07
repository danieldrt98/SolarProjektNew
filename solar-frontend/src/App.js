import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search/Search";
import { fetchWeatherData, fetchSunDurationOneWeek } from "./api/weather";
import { transformDateFormat } from "./utils/transformDateFormat";
import { getTodayForecastWeather } from "./utils/getTodayForecastWeather";   
import { getWeekForecastWeather } from "./utils/getWeekForecastWeather";  
import { ALL_DESCRIPTIONS } from "./constants/descriptions";  
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const [sunDuration, setSunDurationData] = useState(null);
  const [error, setError] = useState(false);  

  const searchChangeHandler = async (enteredData) => {
    const [latitude, longitude] = enteredData.value.split(' ');

    setIsLoading(true);

    const currentDate = transformDateFormat();
    const date = new Date();
    let dt_now = Math.floor(date.getTime() / 1000);
    console.log("bla")
    try {
      const [todayWeatherResponse, weekForecastResponse] =
        await fetchWeatherData(latitude, longitude);
      const all_today_forecasts_list = getTodayForecastWeather(
        weekForecastResponse,
        currentDate,
        dt_now
      );
      const sunDurationOneWeek = await fetchSunDurationOneWeek(latitude, longitude)
      console.log("app.js sunDurationOneWeek: ",sunDurationOneWeek)

      const all_week_forecasts_list = getWeekForecastWeather(
        weekForecastResponse,
        ALL_DESCRIPTIONS
      );

      setSunDurationData(sunDurationOneWeek);
      setTodayForecast([...all_today_forecasts_list]);
      setTodayWeather({ city: enteredData.label, ...todayWeatherResponse });
      setWeekForecast({
        city: enteredData.label,
        list: all_week_forecasts_list,
      });
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get("/weather");
        setWeatherData(response.data);
        console.log("api return App.js: ",response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <Search onSearchChange={searchChangeHandler} />
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
