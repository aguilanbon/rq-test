import React from "react";
import { useSuperHeroesData } from "../hooks/useSuperheroesData";

function Superheroes() {
  const options = {
    enabled: true,
  };

  const {
    data: superHeroes,
    isLoading,
    isError,
    error,
  } = useSuperHeroesData(options);

  if (isLoading) {
    return <p className="mt-40">Fetching...</p>;
  }

  if (isError) {
    return <p className="mt-40">Something went wrong! {error.message}.</p>;
  }

  console.log(superHeroes);

  return (
    <div className="w-full h-auto flex items-center justify-center mb-10">
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
