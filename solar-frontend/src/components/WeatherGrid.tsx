import { useWeatherData } from "../services/backendApi";

function WeatherGrid() {
  const weatherData = useWeatherData();

  if (!weatherData || !weatherData.main || !weatherData.wind) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Temperature: {weatherData.temp}°C</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.speed} m/s</p>
    </div>
  );
}

export default WeatherGrid;
