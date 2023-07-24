import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const BannerTreatment = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "#c9c6a5",
      }}
    >
      <Section isNonMobile={isNonMobile}>
        <div className="Wrapper">
          <h1>Implanon</h1>
          <p>
            Com o Implanon, você poderá desfrutar da sua intimidade plenamente,
            sem interrupções, além de aproveitar todos os outros benefícios que
            ele oferece.
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
        <Image
          priority
          src="/images/implanon.jpg"
          alt="Ney Simões"
          width={500}
          height={350}
          sizes="100%"
        />
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
  border-radius: 2rem;
  overflow: hidden;
  height: ${({ isNonMobile }) => (isNonMobile ? "350px" : "700px")};
  padding-bottom: ${({ isNonMobile }) => (isNonMobile ? "0" : "5rem")};
  .Wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 90%;
    max-width: 400px;
    min-width: 300px;
    padding-left: ${({ isNonMobile }) => (isNonMobile ? "2rem" : "0")};
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
    display: flex;
    justify-content: center;
    align-items: center;

    /* border: 1px solid #506e62; */
    /* box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1); */
  }
`;

export default BannerTreatment;
