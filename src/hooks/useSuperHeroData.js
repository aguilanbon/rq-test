import axios from "axios"
import { useQuery } from "react-query"


const getSuperHero = async (id) => {
    const result = await axios.get(`http://localhost:4000/superheroes/${id}`)
    return result.data
}

export const useSuperHeroData = (heroId) => {
    return useQuery(['superhero', heroId], () => getSuperHero(heroId))
}