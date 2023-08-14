import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import { RevealWrapper } from "next-reveal";

const FAQ = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <RevealWrapper>
      <Section isNonMobile={isNonMobile}>
        <p>
          Clique no saiba mais e agende sua consulta agora e dê esse presente
          especial para si mesma!
        </p>
        <Button
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=558287290045&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Ney.",
              "blank"
            )
          }
        >
          Agende agora
        </Button>
      </Section>
    </RevealWrapper>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-size: calc(0.3rem + 0.5vw);
  font-weight: 600;
  padding: 0.5rem 0.7rem;

  background-color: ${({ theme }) => theme.color.primary.main};
  color: ${({ theme }) => theme.color.primary.contrastText};
  border-radius: 2rem;

  margin-top: 1rem;
  border: 2px solid ${({ theme }) => theme.color.primary.dark};
  font-size: 1.2rem;
  padding: 0.5rem 4rem;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.primary.light};
    color: ${({ theme }) => theme.color.primary.dark};
  }
`;

const Section = styled.section<{ isNonMobile: boolean }>`
  color: ${({ theme }) => theme.color.faq};
  background-color: ${({ theme }) => theme.color.secundary.main};
  width: 90vw;
  margin: 3rem 0;
  box-shadow: 0 15px 20px 20px rgba(0, 0, 0, 0.1);
  user-select: none;
  max-width: 1000px;
  padding: 2rem 10%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  p {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 500;
  }
`;

export default FAQ;
