import {NavLink} from 'react-router-dom'

export const Navigation = () => {
    return <nav>
        <ul>
            <li>
                <NavLink to='/react-homework-template'>
                    Home 
                </NavLink>
            </li>
            <li>
                <NavLink to='/react-homework-template/movies'>
                    Movies
                </NavLink>
            </li>
        </ul>
    </nav>
}