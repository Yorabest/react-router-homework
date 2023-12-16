import { NavLink } from 'react-router-dom';
import { NavList } from 'styled/Navigation.styled'; 

export const Navigation = () => {
    return <nav>
        <NavList>
            <li>
                <NavLink to='/'>
                    Home 
                </NavLink>
            </li>
            <li>
                <NavLink to='/movies'>
                    Movies
                </NavLink>
            </li>
        </NavList>
    </nav>
}