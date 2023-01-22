import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperheroesData";

function SingleSuperHero() {
  const { id } = useParams();

  const getSuperHero = async () => {
    const result = await axios.get("http://localhost:4000/superheroes");
    return result.data;
  };

  const {
    data: superHero,
    isLoading,
    isFetching,
  } = useQuery("superHero", getSuperHero, {
    select: (data) => {
      const hero = data.filter((sup) => sup.id === parseInt(id));
      return hero;
    },
  });

  if (isLoading || isFetching) {
    return <p>Fetching</p>;
  }
  return (
    <div className="hero h-auto bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{superHero[0]?.superhero}</h1>
          <div className="py-6">
            <h2 className="text-lg mb-2">{superHero[0]?.alter_ego}</h2> aslo
            known as{" "}
            <div className="badge badge-warning">{superHero[0]?.superhero}</div>
            . He/She is from the {superHero[0]?.publisher} Universe. And has
            first appeared on{" "}
            <span className="italic">"{superHero[0]?.first_appearance}"</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSuperHero;
