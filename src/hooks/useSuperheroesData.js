import axios from "axios";
import { useQuery } from "react-query";

    const getSuperHeroes = async () => {
        const result = await axios.get("http://localhost:4000/superheroes");
        return result.data;
    };

    export const useSuperHeroesData = (options) => {
        return useQuery("superheroes", getSuperHeroes, {enabled: options.enabled});
        
    }