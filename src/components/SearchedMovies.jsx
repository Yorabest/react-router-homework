import { NavLink, useLoaderData } from "react-router-dom"

export const SearchedMovies = () => {
   const movies = useLoaderData()
   return <>
      <ul>
         {movies.map(({ title, id }) => {
            return <li key={id}>
               <NavLink to={`/movies/${id}`}>{title}</NavLink>
            </li>
         }
         )}</ul></>
}