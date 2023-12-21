import { useLoaderData } from "react-router-dom"
import { Poster } from "styled/Movie.styled"

export const Cast = () => {
    const cast = useLoaderData()
    // profile_path
    return <ul>
        {cast.map((actor) => {
            return <li key={actor.id}>
                <Poster src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt={actor.name} width={100}/>
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
            </li>

        })}
    </ul>
}