import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const Banner = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#c9c6a5",
      }}
    >
      <Section isNonMobile={isNonMobile}>
        <div className="Wrapper">
          <h1>Dr. Ney Simões</h1>
          <p>
            Ginecologista especializado em trazer a qualidade de vida,
            disposição e a fertilidade necessária para realizar seus sonhos com
            a qualidade que você merece.
          </p>
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
        </div>
        <div className="img-wrapper">
          <Image
            priority
            src="/images/foto-ney-sem-fundo.jpg"
            alt="Ney Simões"
            fill
            style={{
              objectFit: "contain",
            }}
            sizes="100%"
          />
        </div>
      </Section>
    </div>
  );
};

const Section = styled.section<{ isNonMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isNonMobile }) =>
    isNonMobile ? "row" : "column-reverse"};
  justify-content: space-between;
  align-items: center;
  color: #506e62;
  background-color: #c9c6a5;
  width: 100%;
  max-width: 1000px;
  padding: 0 0 3rem 0;
  height: ${({ isNonMobile }) =>
    isNonMobile ? "calc(400px + 4rem)" : "700px"};
  .Wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 90%;
    max-width: 400px;
    min-width: 300px;
  }
  button {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 600;

    background-color: #506e62;
    color: #203e32;
    color: #c9c6a5;
    border: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    margin-top: 1rem;
    border: 3px solid #203e32;
    width: 100%;
    :hover {
      background-color: #faf6f7;
      color: #203e32;
    }
  }
  .img-wrapper {
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    width: 325px;
    height: 400px;
    /* border: 1px solid #506e62; */
    /* box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1); */
  }
`;

export default Banner;
