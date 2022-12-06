import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: auto;
  // background-color: ${(props) => props.bgColor};
  margin: 150px 0;
`;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: red;

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Box = styled.img`
  width: 20%;
  height: auto;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Timeline = (props) => {
  return (
    <Section>
      <Container>
        <Title>{props.title}</Title>
        <InnerContainer>
          <Box src={props.img1} />
          <Box src={props.img2} />
          <Box src={props.img3} />
          <Box src={props.img4} />
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Timeline;
