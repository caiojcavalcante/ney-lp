import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RevealWrapper } from "next-reveal";
import { useState, useEffect } from "react";

interface BannerTreatmentProps {
  image: string;
  title: string;
  desc: string;
}

const BannerTreatment = ({ image, title, desc }: BannerTreatmentProps) => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const [isPink, setIsPink] = useState(false);

  useEffect(() => {
    setIsPink(window.location.pathname === "/fraxx");
  }, []);

  const link = "https://api.whatsapp.com/send?phone=558287290045&text=";
  const url = `${link}Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Ney%20a%20respeito%20do%20%20tratamento%20${title}.`;
  
  return (
    <RevealWrapper>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          alignItems: "start",
          flexDirection: isNonMobile ? "row" : "column",
          // backgroundColor: "${({ theme }) => theme.color.background}",
        }}
      >
        <Section isNonMobile={isNonMobile} isPink={isPink}>
          {isNonMobile && (
            <div className="Wrapper">
              <h1>{title}</h1>
              <p>{desc}</p>
              <RevealWrapper>
                <button
                  onClick={() =>
                    window.open(
                      url,
                      "blank"
                    )
                  }
                >
                  Agende sua Consulta
                </button>
              </RevealWrapper>
            </div>
          )}
          <div className="image-wrapper">
            <Image
              priority
              src={image}
              alt="Ney Simões"
              fill={true}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={image}
            />
          </div>
        </Section>
        {!isNonMobile && (
          <TextContainer>
            <TextWrapper>
              <h1>{title}</h1>
              <p>{desc}</p>
            </TextWrapper>
            <RevealWrapper>
              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=558287290045&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Ney.",
                    "blank"
                  )
                }
              >
                Agende sua Consulta
              </button>
            </RevealWrapper>
          </TextContainer>
        )}
      </div>
    </RevealWrapper>
  );
};

const TextWrapper = styled.div`
  width: 90%;
  color: ${({ theme }) => theme.color.secundary.main};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 98vw;
  text-align: start;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 4rem;

    background-color: ${({ theme }) => theme.color.secundary.main};
    color: ${({ theme }) => theme.color.primary.light};
    border-radius: 2rem;

    margin-top: 1rem;
    border: 2px solid ${({ theme }) => theme.color.primary.dark};
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.color.primary.light};
      color: ${({ theme }) => theme.color.primary.dark};
    }
  }
`;

const Section = styled.section<{ isNonMobile: boolean; isPink: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.primary.main};
  background-color: ${({ theme }) => theme.color.primary.contrastText};
  aspect-ratio: 2.4;
  aspect-ratio: ${({ isNonMobile }) => (isNonMobile ? "2.4" : "1.8")};
  max-width: 1000px !important;
  width: 98vw;
  border-radius: calc(1vw + 1rem);
  overflow: hidden;

  h1 {
    font-size: calc(1rem + 1.8vw);
  }
  p {
    font-size: calc(0.6rem + 0.4vw);
    font-weight: 400;
    // font-size: 50%;
  }

  .Wrapper {
    box-sizing: border-box;
    /* background-color: red; */
    margin: 3rem 0 3rem 5%;
    // width: 90%;
  }
  button {
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
    width: 100%;
    height: 10%;
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.color.primary.light};
      color: ${({ theme }) => theme.color.primary.dark};
    }
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    aspect-ratio: calc(1040 / 731);
    height: 100%;
    width: fit-content;
    //translate
    ${({ isPink, isNonMobile }) =>
      !isPink && !isNonMobile && "transform: translateX(15%);"}
  }
`;

export default BannerTreatment;
