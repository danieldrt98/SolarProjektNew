import { useWeatherData } from "../services/backendApi";

function WeatherGrid() {
  const weatherData = useWeatherData();

  if (!weatherData || !weatherData.main || !weatherData.wind) {
    console.log('weatherData PRE:', weatherData); // Log the current weatherData
    return <div>Loading...</div>;
  }
  console.log('weatherData AFTER:', weatherData); // Log the weatherData when it's available

  return (
    <div>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherGrid;
