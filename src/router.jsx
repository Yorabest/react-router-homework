import { createBrowserRouter } from "react-router-dom";
import { App } from './components/App'
import { Movies } from "components/movies/Movies";
import { Home } from "components/movies/Home";

export const router = createBrowserRouter([
    {
        path: '/react-homework-template',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/react-homework-template/movies',
                element: <Movies />
            }
        ]
    }
])