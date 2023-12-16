import { NavLink, useLoaderData } from "react-router-dom";
import { HomeList } from "styled/Main.styled";

export const Home = () => {

    const popMovies = useLoaderData()
    return <HomeList > {popMovies.map((movie)=> {
        return <li  key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.original_title}</NavLink>
            </li>
    })} </HomeList>
}