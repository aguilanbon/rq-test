import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function Superheroes() {
  const getSuperHeroes = async () => {
    const result = await axios.get("http://localhost:4000/superheroes");
    return result.data;
  };

  const {
    data: superHeroes,
    isLoading,
    isError,
  } = useQuery("superheroes", getSuperHeroes);

  if (isLoading) {
    <p>Fetching...</p>;
  }

  if (isError) {
    <p>Something went wriong!</p>;
  }

  console.log(superHeroes);

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <ul className="flex flex-wrap">
        {superHeroes?.map((supes, i) => (
          <div
            key={i}
            className="card bg-base-200 rounded-md m-2 cursor-pointer hover:-translate-y-2 ease-out delay-100"
          >
            <div className="card card-body">
              <div className="card card-title">
                <h2>{supes.superhero}</h2>
                <div className="badge badge-secondary">{supes.alter_ego}</div>
                <p className="text-xs text-opacity-10">{supes.publisher}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Superheroes;
