import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || 'f7a8d6962b494216a8153851252404';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
        aqi: 'no'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}; 