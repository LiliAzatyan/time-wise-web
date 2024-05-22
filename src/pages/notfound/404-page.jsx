import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  `;
  
  const ContainerBox = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(256.59deg, #ffffff 21.55%, #7db2ac 108.93%);
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 40px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #7fc991;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  &:hover {
      background-color: #669571;
      text-decoration: none;
      color: #fff;
  }
`;

const Error404 = styled.div`
  font-size: 5rem;
  color: #2c889c;
  animation: ${bounce} 1s infinite;
`;

const PageNotFound = () => {
  return (
    <>
      <ContainerBox>
        <Container>
          <Logo src="text.png" alt="Logo" style={{marginTop: "30px"}}/>
          <Error404>404</Error404>
          <Title>Page Not Found</Title>
          <Subtitle>
            Sorry, the page you are looking for does not exist.
          </Subtitle>
          <LinkStyled to="/">Go to Home Page</LinkStyled>
        </Container>
        <img
          src="/error-img.png"
          alt="image"
          style={{
            width: "500px",
            marginLeft: "68%",
            marginTop: "-20%",
          }}
        />
      </ContainerBox>
    </>
  );
};

export default PageNotFound;
