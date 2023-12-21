import { createBrowserRouter } from "react-router-dom";
import { App } from './components/App'
import { Movies } from "./pages/Movies";
import { Home } from "./pages/Home"; 
import { fetchCast, fetchMoreInfo, fetchReviews, fetchTranding, searchMovies } from "loaders/movieFatch";
import { OneMovie } from "components/OneMovie";
import { Cast } from "components/Cast";
import { Reviews } from "components/Reviews";
import { SearchMovie } from "components/SearchMovies";
import { SearchedMovies } from "components/SearchedMovies";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: fetchTranding
            },
            {
                path: '/movies',
                element: <Movies />,
                children: [
                    {
                        path: '/movies',
                        element: <SearchMovie />,
                        children: [{
                            path: '/movies/search/:query',
                            element: <SearchedMovies />,
                            loader: searchMovies
                            }
                        ]
                        
                },
                    {
                        path: '/movies/:movieId',
                        element: <OneMovie />,
                        loader: fetchMoreInfo,
                        children: [
                            {
                                path: '/movies/:movieId/cast',
                                element: <Cast />,
                                loader: fetchCast
                            },
                            {
                                path: '/movies/:movieId/reviews',
                                element: <Reviews />,
                                loader: fetchReviews
                            }
                        ]
                    }
                ]
            }
        ]
    }
])