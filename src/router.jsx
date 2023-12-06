import { createBrowserRouter } from "react-router-dom";
import { App } from './components/App'
import { Movies } from "components/movies/Movies";
import { Home } from "components/movies/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/movies',
                element: <Movies />
            }
        ]
    }
])