import axios from "axios";
import { useEffect, useState } from "react";

interface Weather {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

export function useWeatherData() {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

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

  return weatherData;
}
