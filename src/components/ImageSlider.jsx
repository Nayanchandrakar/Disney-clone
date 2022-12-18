import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
// import { useGlobalContext } from "../Context";

const ImageSlider = () => {

  // let owndata =  useGlobalContext();
  // console.log({owndata});


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousal {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>

      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>

      <Wrap>
        <img src="/images/slider-scales.jpg" />
      </Wrap>

      <Wrap>
        <img src="/images/slider-scale.jpg" />
      </Wrap>
    </Carousal>
  );
};

export default ImageSlider;

const Carousal = styled(Slider)`
  margin-top: 20px;

  ul li button{
    &::before{
        font-size: 10px;
        color: rgb(150,150,171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button{
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 10rem;
    border: 4px solid transparent;
    border-radius: 4px;
    transition-duration:300ms;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      
      &:hover{
        border: 4px solid rgba(249,249,249,0.8);
      }
      
   @media(min-width:800px) {
        height: 100%;
  }
  }
`;
