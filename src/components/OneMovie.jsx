import { NavLink, Outlet, useLoaderData, useNavigate } from "react-router-dom"
import { MoreFunction, MovieContainer, GoBack, Poster } from "styled/Movie.styled"

export const OneMovie = () => {
    const movie = useLoaderData()
    const compas = useNavigate()

    return <MovieContainer>
        <GoBack type="button" onClick={()=>compas(-1)}>Go back</GoBack>
        <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width={300} />
        <div>
        <h3>{movie.title} ({movie.release_date.slice(0, 4)})</h3>
        <p>User Score: {movie.vote_average.toFixed(1)}</p>
        <p>Overwiew</p>
        <p>{movie.overview}</p>
        <p>Genres</p>
        <ul>
            {movie.genres.map((ganre) => {
                return <li key={ganre.id}>
                    <p>{ganre.name}</p>
                </li>
            })}
        </ul>
        </div>
        <MoreFunction>
            <p>Additional information</p>
            <ul>
                <li>
                    <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
                    
                </li>
                <li>
                     <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
                </li>
            </ul>
            <Outlet/>
        </MoreFunction>
        </MovieContainer>
}