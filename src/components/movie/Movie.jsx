import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movie = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const movieSearch = async (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please enter a movie name");
      return;
    }

    try {
      setError(null);
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${name}&apikey=a5ef1268`
      );

      if (response.data.Response === "False") {
        setData(null);
        setError("Movie not found! Try another name.");
        return;
      }

      setData(response.data.Search);
    } catch (error) {
      console.error("There was an error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  const resetSearch = () => {
    setName("");
    setData(null);
    setError(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-gray-900 text-white p-8">
      <form
        onSubmit={movieSearch}
        className="flex flex-col items-center gap-6 bg-purple-800 p-10 rounded-3xl shadow-2xl w-full max-w-lg border border-purple-600 backdrop-blur-md"
      >
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter movie name..."
          className="w-full p-4 rounded-full border border-purple-500 bg-purple-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-center text-lg text-white placeholder-gray-300"
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-yellow-500/50"
          >
            🔍 Search
          </button>
          <button
            type="button"
            onClick={resetSearch}
            className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-red-500/50"
          >
            ⏪ Reset
          </button>
        </div>
      </form>

      {error && (
        <p className="text-red-400 mt-6 text-lg font-semibold bg-red-900 p-3 rounded-xl shadow-md">
          {error}
        </p>
      )}

      {data && (
        <div className="mt-10 w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center border-b border-purple-500 pb-3 uppercase tracking-wide">
            Search Results
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((movie) => (
              <li
                key={movie.imdbID}
                className="bg-purple-700 p-6 rounded-3xl shadow-xl flex flex-col items-center transform transition duration-300 hover:scale-105"
              >
              <Link to={`/movies/${movie.imdbID}`}> <img
                  className="rounded-xl w-full h-64 object-cover"
                  src={movie.Poster}
                  alt={movie.Title}
                /></Link> 
                <h5 className="mt-4 text-lg font-semibold text-yellow-400 text-center">
                  {movie.Title}
                </h5>
                <h5 className="text-gray-300 text-center">
                  Year: {movie.Year}
                </h5>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movie;
