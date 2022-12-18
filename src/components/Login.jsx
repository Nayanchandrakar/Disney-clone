import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";

const Login = () => {
  const {login} = useGlobalContext()
  return (
    <Container>
      <CTA>
        <CTAlogoOne src="/images/cta-logo-one.svg" />
        <Signup onClick={() => login()}>GET ALL THERE</Signup>

        <Description>
          Get premier Access to Raya and the Lasyt Dragon for With a Disney+
          Subscription . As o f08/10/2022, the price and The Disney Bundle will
          increase by 5$
        </Description>

        <CTAlogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
    height: calc(100vh - 70px);
    position:relative;
    display: flex;
    align-items: center;
    justify-content:center;
    
    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    background-image: url(/images/login-background.jpg);
    content: "";
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
    `;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  /* margin-top: 100px; */
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTAlogoOne = styled.img``;

const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const CTAlogoTwo = styled(CTAlogoOne)`
  padding-top: 12px;
  width:90%;
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
