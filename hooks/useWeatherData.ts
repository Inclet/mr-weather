/* eslint-disable react-hooks/exhaustive-deps */
// Dependencies
import {useEffect, useState} from 'react';

type WeatherData = {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  name: string;
  weather: {
    main: string;
  }[];
};

type WeatherHookResult = {
  loading: boolean;
  temp?: number;
  region?: string;
  type?: string;
  feels_like?: number;
  humidity?: number;
};

const useWeatherData = (): WeatherHookResult => {
  const API_KEY = 'eb1747038204ee0ee9f088da48385d71';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setLoading(false);
        console.log('Data ==>', data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    temp: weatherData?.main?.temp,
    region: weatherData?.name,
    type: weatherData?.weather[0].main,
    feels_like: weatherData?.main?.feels_like,
    humidity: weatherData?.main?.humidity,
  };
};

export default useWeatherData;
