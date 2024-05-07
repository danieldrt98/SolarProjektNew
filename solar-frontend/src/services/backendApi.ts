import axios from "axios";
import { useEffect, useState } from "react";

interface WeatherApiResponse {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: MainWeatherData;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: SystemData;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Coordinates {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface SystemData {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export function useWeatherData() {
  console.log("services/backendApi.ts useWeatherData entered");
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/weather");
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, []);
  console.log("services/backendApi.ts useWeatherData exit with weatherData: ", weatherData);
  return weatherData;
}
