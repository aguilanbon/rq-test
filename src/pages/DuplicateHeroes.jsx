import React from "react";
import { useSuperHeroesData } from "../hooks/useSuperheroesData";

function DuplicateHeroes() {
  const options = {
    enabled: false,
  };

  const { data: superHeroes, refetch } = useSuperHeroesData(options);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mb-10">
      <button className="btn btn-accent mb-5" onClick={refetch}>
        Fetch heroes
      </button>
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

export default DuplicateHeroes;
