import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const getItem = async () => {
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon");
    if (result.status === 200) {
      const json = result.data;
      console.log(json);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="w-screen min-h-screen">
      <button className="btn btn-warning">Click me</button>
    </div>
  );
}

export default App;
