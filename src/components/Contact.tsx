import styled from "styled-components";
import Image from "next/image";
import Router from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";

const Contact = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <Section isNonMobileScreen={isNonMobile}>
      <div className="wrapper">
        <ul>
          <li>
            <h1>Contato</h1>
          </li>
          <li>
            <button className="whatsapp">Whatsapp</button>
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
              Rua. Presidente Castelo Branco, 60 B. Centro, Delmiro Gouveia - AL
            </p>
          </li>
        </ul>
      </div>
      <p>© 2023 Instituto Ney Simões. Todos os direitos reservados.</p>
    </Section>
  );
};

const Section = styled.section<{ isNonMobileScreen: boolean }>`
  font-family: "Manrope", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c9c6a5;
  color: #506e62;
  p {
    text-align: center;
  }
  width: 90vw;
  max-width: 1100px;
  border-radius: 2rem 2rem 0 0;
  gap: 2rem;
  font-weight: 600;
  background-color: #1b2421;
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
    background-color: #506e62;
    color: #203e32;
    border: 2px solid #203e32;
    &:hover {
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
      background-color: #1f2f3c;
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
      background-color: #1f2f3c;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
  }
`;

export default Contact;
