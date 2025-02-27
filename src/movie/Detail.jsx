import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setdata] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`
      );
      setdata(response.data);
      console.log(response);
    };
    fetchdata();
  }, [id]);

  console.log(data);

  return (
    <div className="min-h-screen select-none p-6 bg-slate-500 flex flex-col justify-center items-center bg-gradient-to-b from-purple-900 via-purple-800 to-gray-900 md:flex-row">
      <div className="flex justify-center items-center max-w-[700px] bg-gradient-to-b from-gray-50 to-cyan-200 p-4 rounded-xl">
        <div className="">
          <img
            src={data.Poster}
            alt="thumbnail"
            className="rounded-lg max-w-60"
          />
        </div>
        <div className="px-10 py-8 font-mono">
          <h1 className="font-bold text-3xl font-serif mb-2">Movie: {data.Title}</h1>
          <h1 className="mb-2">⭐⭐⭐⭐⭐</h1>
          <h1>{data.Plot}</h1>
          <h1 className="mt-6">Release Date: {data.Year}</h1>
          <h1>Director: {data.Director}</h1>
        </div>
      </div>
    </div>
  );
};

export default Detail;
