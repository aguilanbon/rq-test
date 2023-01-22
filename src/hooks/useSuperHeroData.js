import axios from "axios"
import { useQuery } from "react-query"


const getSuperHero = async ({queryKey}) => {
    const heroId = queryKey[1]
    const result = await axios.get(`http://localhost:4000/superheroes/${heroId}`)
    return result.data
}

export const useSuperHeroData = (heroId) => {
    return useQuery(['superhero', heroId], getSuperHero)
}