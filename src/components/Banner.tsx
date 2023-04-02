import styled from "styled-components";
import Image from "next/image";

const Banner = () => {
  return (
    <Section>
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

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 8rem;
  color: #506e62;
  background-color: #c9c6a5;
  width: 100%;
  height: calc(400px + 4rem);
  padding: 8rem;
  .Wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 50%;
    max-width: 500px;
  }
  p {
    width: 90%;
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
    width: 80%;
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
