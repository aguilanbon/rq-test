import axios from "axios";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

function App() {
  const getPokemon = async () => {
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return result.data.results;
  };

  const { data, isLoading } = useQuery("pokemons", getPokemon);

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div className="w-screen min-h-screen">
      <ul>
        {data.map((pokemon, i) => (
          <li key={i}>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
