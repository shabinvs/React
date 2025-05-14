import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  const weatherData = async (e) => {
    e.preventDefault();
    if (!search) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0cf3d05c6cb443424f42856d18e090b3`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("City not found or network error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 text-white px-4">
      <h1 className="text-4xl font-bold mb-6">🌦️ Weather App</h1>

      <form
        onSubmit={weatherData}
        className="flex items-center space-x-4 mb-6 w-full max-w-md"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter city name"
          className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition"
        >
          Search
        </button>
      </form>

      {data && (
        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">
            {data.name}, {data.sys.country}
          </h2>
          <p className="text-xl">🌡️ Temp: {data.main.temp}°C</p>
          <p className="capitalize">🌤️ Weather: {data.weather[0].description}</p>
          <p>💧 Humidity: {data.main.humidity}%</p>
          <p>🌬️ Wind Speed: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
