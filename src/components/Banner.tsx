import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const Banner = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  return (
    <Section isNonMobile={isNonMobile}>
      <div className="Wrapper">
        <h1>Dr. Ney Simões</h1>
        <p>
          Ginecologista e Obstetra, especializado em endometriose e pós graduado
          em endoscopia ginecológica e cirurgia minimamente invasiva.
        </p>
        <button>Agende sua Consulta</button>
      </div>
      <div className="img-wrapper">
        <Image
          priority
          src="/images/foto-ney.jpg"
          alt="Ney Simões"
          fill
          style={{
            objectFit: "contain",
          }}
          sizes="100%"
        />
      </div>
    </Section>
  );
};

const Section = styled.section<{ isNonMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isNonMobile }) => (isNonMobile ? "row" : "column-reverse")};
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #506e62;
  background-color: #c9c6a5;
  width: 100%;
  height: ${({ isNonMobile }) => (isNonMobile ? "calc(400px + 4rem)" : "750px")};
  padding: 1rem;
  gap: 2rem;
  .Wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 95%;
    max-width: 400px;
    min-width: 300px;
  }
  button {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    background-color: #506e62;
    color: #c9c6a5;
    border: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    margin-top: 1rem;
    border: 1px solid #506e62;
    width: 100%;
    :hover {
      background-color: #c9c6a5;
      color: #506e62;
    }
  }
  .img-wrapper {
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    width: 325px;
    height: 400px;
    padding: 0;
    border: 1px solid #506e62;
    box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1);
  }
`;

export default Banner;
