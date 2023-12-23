import { NavLink } from 'react-router-dom'
import { styled} from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`

export const Button = styled(NavLink)`

padding: 5px;
border: 2px solid black;
border-radius: 20px;
font-weight: normal;
font-size: 15px;
`