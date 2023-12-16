import { NavLink, Outlet, useLoaderData } from "react-router-dom"

export const OneMovie = () => {
    const movie = useLoaderData()

    return <>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} width={300} />
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
        <div>
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
        </div>
        </>
}