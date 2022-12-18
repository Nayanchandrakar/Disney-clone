import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Responsive = ({logic}) => {
    return(
        <Container logic={logic}>
            <li>
            <NavLink className="text" to="/home">HOME</NavLink>
            </li>

            <li>
            <NavLink className="text" to="/movies">Movies</NavLink>
            </li>

            <li>
            <NavLink className="text" to="/watchlist">Watchlist</NavLink>
            </li>

            <li>
            <NavLink className="text" to="/series">SERIES</NavLink>
            </li>
        </Container>
  )
}

const Container = styled.div`
display: ${props => (props.logic ? "flex" : "none")};
padding: 0 36px;
justify-content: space-around;
margin-bottom: 1.5rem;

li{
    list-style: none;
    text-decoration: none;
    margin: 1rem 0;
}

.text{
    text-decoration: none;
    color: white;
}

`

export default Responsive