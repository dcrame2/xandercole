import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height: 30%;
  background-color: black;
  padding: 150px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const InnerContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Li = styled.li`
  list-style-type: none;
  //   width: 30px;
  color: #fff;
  font-size: 1.4rem;

  :hover {
    font-size: 1.75rem;
  }
`;

const IconLinks = styled.a`
  color: #fff;

  :visited {
    color: #fff;
  }
`;

const FooterComp = () => {
  return (
    <Footer>
      <Container>
        <div>Created by Dylan Cramer &copy; 2023</div>
        <div>
          <InnerContainer>
            <Li>
              <IconLinks
                target="_blank"
                rel="noreferrer"
                href="https://www.dylancramer.dev"
                class="fb"
              >
                <i class="fa-sharp fa-solid fa-globe"></i>
              </IconLinks>
            </Li>
            <Li>
              <IconLinks
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/dylan.cramer.5"
                class="fb"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </IconLinks>
            </Li>

            <Li>
              <IconLinks
                target="_blank"
                rel="noreferrer"
                href="https://github.com/dcrame2/"
                class="fb"
              >
                <i class="fa-brands fa-github"></i>
              </IconLinks>
            </Li>
            <Li>
              <IconLinks
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/dylan-cramer/"
                class="fb"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </IconLinks>
            </Li>
          </InnerContainer>
        </div>
      </Container>
    </Footer>
  );
};

export default FooterComp;
