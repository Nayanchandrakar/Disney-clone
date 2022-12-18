import React, { useEffect , useState } from "react";
import styled from "styled-components";
import { Link} from "react-router-dom";
import { useGlobalContext } from "../Context";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Responsive from "./Responsive";

const Header = () => {
  
  const navigate = useNavigate();
  const {login , myuser , setuser ,setlogicnav , logicnav , auth} = useGlobalContext()
  const [res, setres] = useState(false)

  
let a = 1
let reshidden = () => {
  if (a %2 == 0 ) {
    setres(true)
  } else {
    setres(false)
  }
  return(a++);
}


  const SignOut = () => {
    const auth = getAuth();
   signOut(auth).then(() => {
    setuser(null)
    navigate('/login')
   }).catch((error) => {
   });
   }

 
 useEffect(() => {
  auth.onAuthStateChanged((user) => {
        if (user) {
          setuser(user.providerData[0])
          navigate('/home')
          setlogicnav(false)
        }
      });
    }, []);  
   
   const logicFun = () => {
     navigate('/home')
     setlogicnav(false)
    }
    
    logicnav == true ? logicFun() : setlogicnav(false)
  return (
    <>
    <Nav>
      <Menu>
        <img src="/images/menu.png" alt="" onClick={() => reshidden()} />
      </Menu>
      <Logo src="/images/logo.svg" />
     
     { myuser == null ? <BUTTON>
      <LoginButton onClick={() => login()}>
       Login
      </LoginButton>
    </BUTTON> : <><Navmenu>
        <Linkrouter to="/home">
          <img src="/images/home-icon.svg"></img>
          <span>HOME</span>
        </Linkrouter>


        <Linkrouter to="/movies">
          <img src="/images/movie-icon.svg"></img>
          <span>MOVIES</span>
        </Linkrouter>

        <Linkrouter to="/watchlist">
          <img src="/images/watchlist-icon.svg"></img>
          <span>WATCHLIST</span>
        </Linkrouter>

        <Linkrouter to="/series">
          <img src="/images/series-icon.svg"></img>
          <span>SERIES</span>
        </Linkrouter>
      </Navmenu> 
      <USERimage onClick={() => SignOut()} src={myuser.photoURL}/></>}
    </Nav>
    {myuser == null ? "" : <Responsive logic={res}/>}
    </>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  justify-content: space-between;
  overflow-x: hidden;

`;

const Logo = styled.img`
  width: 80px;
`;

const Navmenu = styled.div`
  flex: 1;
  margin-left: 25px;
  align-items: center;
  display: none;
  @media(min-width:900px){
    display: flex;
  }
`;


const Linkrouter = styled(Link)`

    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: white;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &::after {
        content: "";
        background: white;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

`

const USERimage = styled.img`
  width: 40px;
  border-radius: 5rem;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 4rem;
  height: 2rem;
  border: 1px solid white;
  background: transparent;
  color: white;
  font-size: 0.9rem;
`

const GuestButton = styled(LoginButton)``

const BUTTON = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const Menu = styled.div`
  @media(min-width:900px){
  display: none;
  }
`