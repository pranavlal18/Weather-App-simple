import React from 'react';

const Weather = ({ data }) => {
  return (
    <div>
      <h2>Weather in {data.location.name}, {data.location.country}</h2>
      <p>Temperature: {data.current.temperature}°C</p>
      <p>Condition: {data.current.weather_descriptions[0]}</p>
      <p>Humidity: {data.current.humidity}%</p>
      <p>Wind Speed: {data.current.wind_speed} km/h</p>
    </div>
  );
};

export default Weather;