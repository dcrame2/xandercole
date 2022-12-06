import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #00008b;
`;

const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  font-family: "Quattrocento Sans", sans-serif;
  letter-spacing: 2px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const TitleEyebrow = styled.p`
  font-family: "Oswald", sans-serif;
  letter-spacing: 2px;
  font-size: 1.7rem;
  color: #fff;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const Quote = styled.h3`
  font-size: 2rem;
  color: #fff;
  font-family: "Oswald", sans-serif;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 1rem;
    margin: 0 20px;

    letter-spacing: 1.3px;
  }
`;

const Img = styled.img`
  width: 180px;
  height: 150px;
`;

const Head = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Section>
      <Container>
        <Img
          data-aos="fade-down"
          data-aos-duration="3000"
          src="firetruck.png"
        />
        <TitleEyebrow data-aos="fade-right" data-aos-duration="1000">
          The Life of
        </TitleEyebrow>
        <Title data-aos="fade-right" data-aos-duration="1500">
          Xander Cole
        </Title>
        <Quote data-aos="fade-right" data-aos-duration="2000">
          "Even though you're growing up, you should never stop having fun."
        </Quote>
      </Container>
    </Section>
  );
};

export default Head;
