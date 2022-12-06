import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: auto;
  margin: 150px 0;
`;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: pink;
`;

const Birthday = () => {
  return (
    <Section>
      <Container>
        <Title>2017: Born</Title>
      </Container>
    </Section>
  );
};

export default Birthday;
