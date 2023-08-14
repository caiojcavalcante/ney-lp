import styled from "styled-components";
import Image from "next/image";
import Router from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import Map from "./Map";
import { RevealWrapper } from "next-reveal";

const Contact = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <RevealWrapper>
      <Section id={"contato"} isNonMobileScreen={isNonMobile}>
        <div className="wrapper">
          <ul>
            <li>
              <h1>Contato</h1>
            </li>
            <li>
              <button
                className="whatsapp"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=558287290045&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Ney.",
                    "blank"
                  )
                }
              >
                Whatsapp
              </button>
            </li>
            <li>
              <button
                className="instagram"
                onClick={() =>
                  window.open("https://www.instagram.com/drneysimoes/", "blank")
                }
              >
                Instagram
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <h1>Localização</h1>
            </li>
            <li>
              <div className="mapWrapper">
                <Map />
              </div>
            </li>
            <li>
              <button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/maps/search/Rua.%20Presidente%20Castelo%20Branco%2C%2060%20B.%20Centro/@-9.3832,-37.997,17z?hl=pt-BR",
                    "blank"
                  )
                }
              >
                Abrir no Google Maps
              </button>
            </li>
            <li>
              <p>
                Rua. Presidente Castelo Branco, 60 B. Centro, Delmiro Gouveia -
                AL
              </p>
            </li>
          </ul>
        </div>
        <p>© 2023 Instituto Ney Simões. Todos os direitos reservados.</p>
      </Section>
    </RevealWrapper>
  );
};

const Section = styled.section<{ isNonMobileScreen: boolean }>`
  font-family: "Manrope", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.primary.main};
  p {
    text-align: center;
  }
  width: 90vw;
  max-width: 1100px;
  border-radius: 2rem 2rem 0 0;
  gap: 2rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.secundary.dark};
  padding: ${({ isNonMobileScreen }) =>
    isNonMobileScreen ? "4rem 0" : "2rem 0"};
  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 10px;
    width: 100%;
  }
  li {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .wrapper {
    p {
      text-align: left;
    }
    display: flex;
    flex-direction: ${({ isNonMobileScreen }) =>
      isNonMobileScreen ? "row" : "column"};
    max-width: 1000px;
    width: 100%;
    gap: 2rem;
  }

  .mapWrapper {
    width: 90%;
    /* border-radius: 15px; */
    box-sizing: border-box;
    border: 2px solid ${({ theme }) => theme.color.primary.main};
    overflow: hidden;
  }
  p {
    font-family: "Manrope", sans-serif;
    font-size: 0.9rem;
    width: 90%;
  }
  button {
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    transition: all 0.4s ease-in-out;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 50px;
    width: 90%;
    border-radius: 10rem;
    border: none;
    background-color: ${({ theme }) => theme.color.primary.main};
    color: ${({ theme }) => theme.color.secundary.dark};
    border: 2px solid ${({ theme }) => theme.color.primary.main};
    &:hover {
      border: 2px solid ${({ theme }) => theme.color.primary.main};
      color: ${({ theme }) => theme.color.primary.main};
      background-color: ${({ theme }) => theme.color.secundary.dark};
    }
  }
  .whatsapp {
    &:hover:before {
      font-family: "Manrope", sans-serif;
      content: "(82) 8729-0045";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10rem;
      color: ${({ theme }) => theme.color.primary.main};
      background-color: ${({ theme }) => theme.color.secundary.dark};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
  }
  .instagram {
    &:hover:before {
      font-family: "Manrope", sans-serif;
      content: "@drneysimoes";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10rem;
      color: ${({ theme }) => theme.color.primary.main};
      background-color: ${({ theme }) => theme.color.secundary.dark};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
  }
`;

export default Contact;
