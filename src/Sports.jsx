import axios from "axios";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";

function Sports() {
  const options = {
    method: "GET",
    url: "https://sportscore1.p.rapidapi.com/sports",
    params: { page: "1" },
    headers: {
      "X-RapidAPI-Key": "767f6c115fmsh6f1ae2a925427b4p15c0a5jsn9faa4a3cb3c9",
      "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
    },
  };

  const getSportsList = async () => {
    const result = await axios.request(options);

    return result.data.data;
  };

  const { data: sportsList, isLoading } = useQuery("sports", getSportsList);

  if (isLoading) {
    return (
      <div className="radial-progress" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }

  console.log(sportsList);

  return (
    <ul className="flex flex-wrap items-center justify-center">
      {sportsList.map((sport, i) => (
        <li
          key={i}
          className="card card-compact w-72 bg-base-300 shadow-xl m-2 p-4 cursor-pointer hover:-translate-y-2 transition-all ease-linear delay-100"
        >
          <div className="card-body">
            <h2 className="card-title">{sport?.name}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Sports;
