import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const About = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <>
      <div
        className="wrapper"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "3rem 0",
        }}
      >
        <Section id={"sobre"} isNonMobile={isNonMobile}>
          <div>
            <h2>Sobre o Dr.</h2>
            <p>
              O Dr. Ney Simões é um médico ginecologista com mais de 20 anos de
              experiência. Seu principal objetivo é trazer de volta a
              fertilidade, saúde íntima, libído e empoderamento feminino com
              alta tecnologia e humanização.
            </p>
          </div>
          <div className="img-wrapper">
            <Image
              src="/images/foto-ney2-sem-fundo.jpg"
              alt="Ney Simões"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </Section>
      </div>
    </>
  );
};

const Section = styled.section<{ isNonMobile: boolean }>`
  color: #506e62;
  background-color: #c9c6a5;
  width: 90vw;
  height: ${({ isNonMobile }) => (isNonMobile ? "380px" : "600px")};
  max-width: 1000px;
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  flex-direction: ${({ isNonMobile }) => (isNonMobile ? "row" : "column")};
  justify-content: space-evenly;
  align-items: center;
  p {
    font-size: 0.9rem;
  }
  .img-wrapper {
    position: relative;
    /* border-radius: 2rem;
    border: 1px solid #506e62; */
    overflow: hidden;
    width: 263px;
    height: 320px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${({ isNonMobile }) => (isNonMobile ? "50%" : "80vw")};
    max-width: 500px;
    height: 40%;
  }
`;

export default About;
