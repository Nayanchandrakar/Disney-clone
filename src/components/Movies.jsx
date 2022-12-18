import React  from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { NavLink } from "react-router-dom";

const Movies = () => {

const {getmovies} = useGlobalContext()

let recommend = getmovies.filter(e => e.type == "recommend")
let trending = getmovies.filter(e => e.type == "trending")
let newmovies = getmovies.filter(e => e.type == "new")

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {recommend.map(e =>  <NavLink to={`/details/${e.id}`} ><Wrap><img src={e.cardImg} /></Wrap></NavLink>)}
      </Content>

      <h4>Trending Now</h4>
      <Content>
        {trending.map(e =>  <NavLink to={`/details/${e.id}`} ><Wrap><img src={e.cardImg} /></Wrap></NavLink>)}
      </Content>

      <h4>New for You</h4>
      <Content>
        {newmovies.map(e =>  <NavLink to={`/details/${e.id}`} ><Wrap><img src={e.cardImg} /></Wrap></NavLink>)}
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
 h4{
  font-size: 2vw;
  font-weight: 900;
  margin:3rem 0;
  text-align: center;

   @media(max-width:800px){
    font-size: 1.8rem;
 }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(1fr, 1fr));
  @media(min-width:800px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
   border-radius: 10px;
   cursor: pointer;
   overflow: hidden;
   border: 3px solid rgba(249,249,249,0.1);
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }

`;
