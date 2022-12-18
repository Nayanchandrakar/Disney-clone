import { CommentSharp } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";


 

const Details = () => {

const id = useParams()

const {getmovies} = useGlobalContext()

 let iddata = getmovies.filter(e => id.id == e.id)

  return (
    <Container>
      <Backgroundimage>
        <img src={iddata?.[0].backgroundImg} />
      </Backgroundimage>
      <Imagetitle>
        <img src={iddata?.[0].titleImg} />
      </Imagetitle>

      <Controls>
        <Playbutton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </Playbutton>


        <Trailerbutton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </Trailerbutton>

        <Addbutton>
          <span>+</span>
        </Addbutton>

        <Groupbutton>
          <img src="/images/group-icon.png" />
        </Groupbutton>
      </Controls>

      <Subtitle>{iddata?.[0]?.subTitle}</Subtitle>

      <Description>
      {iddata?.[0]?.description}
      </Description>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 0 calc(1.5vw + 5px);
`;

const Backgroundimage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100vw;
    height: 100%;
    object-fit: cover;
  }
`;

const Imagetitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const Playbutton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  display: flex;


  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const Trailerbutton = styled(Playbutton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const Addbutton = styled.button`
  width: 44px;
  height: 44px;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 30px;
    color: white;
  }

  @media(min-width:480px) {
    display: flex;
  }
`;

const Groupbutton = styled(Addbutton)`
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  width: 95%;
  text-align: justify;
  
  @media(min-width:750px) {
    width: 700px;
  }
`;
