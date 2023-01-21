import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link, useLoaderData, useParams } from "react-router-dom";

function Sport() {
  const params = useParams();

  const options = {
    method: "GET",
    url: `https://sportscore1.p.rapidapi.com/sports/${params?.sportId}/leagues`,
    params: { page: "1" },
    headers: {
      "X-RapidAPI-Key": "767f6c115fmsh6f1ae2a925427b4p15c0a5jsn9faa4a3cb3c9",
      "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
    },
  };
  const getSport = async () => {
    const response = await axios.request(options);
    return response.data.data;
  };

  const { data: sport, isLoading, isFetching } = useQuery("sport", getSport);

  console.log(sport);

  if (isFetching) {
    <p>loading..</p>;
  }

  return (
    <ul className="flex flex-wrap items-center justify-center">
      {sport?.map((sprt, i) => (
        <li
          key={i}
          className="card card-compact w-72 bg-base-300 shadow-xl m-2 p-4 cursor-pointer hover:-translate-y-2 transition-all ease-linear delay-100"
        >
          <figure>
            <img src={`${sprt.logo}`}></img>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{sprt?.name_translations?.en}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Sport;
