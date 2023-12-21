import { NavLink, useSearchParams, Outlet } from "react-router-dom";
import { Container, Button } from "styled/Search.styled";

export const SearchMovie = () => {
    const [searchParam, setSearchParam] = useSearchParams()
    const param = searchParam.get('query') ?? '';

    const onInputChange = (query) => {
        const param = query !== '' ? { query } : {}
        setSearchParam(param)

    }

    const handleSearching = () => {
        setSearchParam({})
    }

    return <><Container>
        <input type="text" onChange={(e) => onInputChange(e.target.value)} value={param}/>
        <Button to={ `/movies/search/${ searchParam.get('query')}`} onClick={handleSearching}>Search</Button>

    </Container>
         <Outlet/>
        </>
}