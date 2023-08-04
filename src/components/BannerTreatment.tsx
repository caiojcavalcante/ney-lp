import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import Fade from 'react-reveal/Fade'; // Importing Zoom effect

interface BannerTreatmentProps {
  image: string;
  desc: string;
}

const BannerTreatment = ({ image, desc }: BannerTreatmentProps) => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "${({ theme }) => theme.color.background}",
      }}
    >
      <Section isNonMobile={isNonMobile}>
        <div className="Wrapper">
          <h1>Implanon</h1>
          <p>
            {desc}
          </p>
          <Fade>
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
          </Fade>
        </div>
        <Fade
          // bottom
          duration={1000}
          delay={500}
        >
          <div className="image-wrapper">
            <Image
              priority
              src={image}
              alt="Ney Simões"
              fill={true}
              sizes="100%"
              placeholder="blur"
              blurDataURL={image}
            />
          </div>
        </Fade>
      </Section>
    </div>
  );
};

const Section = styled.section<{ isNonMobile: boolean }>`
  display: flex;
  // flex-direction: ${({ isNonMobile }) => isNonMobile ? "row" : "column-reverse"};
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.primary.main};
  background-color: ${({ theme }) => theme.color.primary.contrastText};
  width: 95%;
  aspect-ratio: 2.4;
  max-width: 1000px;
  border-radius: 2rem;
  overflow: hidden;

  h1, p, button {
    border: 3px dashed red;
  }
  h1 {
    font-size: calc(1rem + 1vw);
  }
  p {
    font-size: calc(0.5rem + 0.5vw);
    // font-size: 50%;
  }
  
  // ${({ isNonMobile }) => !isNonMobile && ".img-wrapper {border: 2px solid #506e62;border-radius: 2rem;width:350px;height:245px;}"}
  .Wrapper {
    // background-color: red;
    padding: 1rem 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    // width: 90%;
    padding-left: ${({ isNonMobile }) => (isNonMobile ? "2rem" : "0")};
  }
  button {
    font-family: "Poppins", sans-serif;
    font-size: 70%;
    font-weight: 600;

    background-color: ${({ theme }) => theme.color.primary.main};
    color: ${({ theme }) => theme.color.primary.contrastText};
    border: none;
    padding: 1rem 10%;
    border-radius: 2rem;
    margin-top: 1rem;
    border: 3px solid ${({ theme }) => theme.color.primary.dark};
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
    aspect-ratio: calc(1666 / 1143);
    height: 100%;
  }
`;

export default BannerTreatment;
