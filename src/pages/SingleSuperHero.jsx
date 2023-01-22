import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

function SingleSuperHero() {
  const { id } = useParams();

  const { data, isLoading, isFetching, isError, error } = useSuperHeroData(
    parseInt(id)
  );

  if (isLoading) {
    return <p className="mt-40">Loading...</p>;
  }

  if (isError) {
    return <p className="mt-40">Something went wrong! {error.message}.</p>;
  }
  return (
    <div className="hero h-auto bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{data?.superhero}</h1>
          <div className="py-6">
            <h2 className="text-lg mb-2">{data?.alter_ego}</h2> aslo known as{" "}
            <div className="badge badge-warning">{data?.superhero}</div>. He/She
            is from the {data?.publisher} Universe. And has first appeared on{" "}
            <span className="italic">"{data?.first_appearance}"</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSuperHero;
