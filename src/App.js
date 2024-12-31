import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import Weather from './Weather';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const API_KEY = 'YOUR API KEY HERE'; 
  const API_URL = `http://api.weatherstack.com/current`;

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          access_key: API_KEY,
          query: city,
        },
      });
      console.log('API Response:', response.data); // Debug: Log the API response

      if (response.data.success === false) {
        // Handle API errors (e.g., invalid city name)
        setError(response.data.error.info);
        setWeatherData(null);
      } else {
        // Success: Update weather data
        setWeatherData(response.data);
        setError('');
      }
    } catch (err) {
      console.error('API Error:', err); // Debug: Log the error
      setError('An error occurred. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather Now</h1>
      <Search onSearch={fetchWeather} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;