import React,{useEffect , useState} from 'react'
import { useGlobalContext } from '../Context'
import styled from 'styled-components'

const MovieSlice = () => {

const {movieslice , MovieSlice} = useGlobalContext()
const [search, setsearch] = useState('')
useEffect(() => {MovieSlice()}, [])

  return (
    <Container>

       <Search>
           <input type="text" placeholder='Search...' onChangeCapture={e => setsearch(e.target.value)}/>
       </Search>

        <Grid>
       {movieslice.filter(e => {
        if(search == ''){return e}else if (e.name.toLowerCase().includes(search.toLowerCase())){return e}
       }).map(e => <Card><img src={e.imgAnimated} alt="" /><span>{e.name}</span></Card>)}
        </Grid>
    </Container>
  )
}


const Container = styled.div`
    /* margin: 2rem 4rem; */
    overflow:hidden;
    height:auto;
`
const Grid = styled.div`
    display: grid;
    gap: 3rem;
   margin: 0 7rem;
   padding-top: 5rem;
  justify-content: center;
    @media(min-width:800px) {
      grid-template-columns: repeat(3, 1fr);
  }
`
const Card = styled.div`
    width: 18rem;
    height: 24rem;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    border-radius: 5px;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img{
        width: 80%;
        object-fit: cover;
    }

    &:hover{
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`

const Search = styled.div`
 display: flex;
 justify-content: center;

 input{
    width: 23vw;
    height: 2rem;
    background: transparent;
    border: 1px solid rgba(249, 249, 249, 0.8);
    color: white;

    &:focus{
     outline: none;
    }

    &::placeholder{
    font-size: 1rem;
    color: white;
 }
 }


`

export default MovieSlice