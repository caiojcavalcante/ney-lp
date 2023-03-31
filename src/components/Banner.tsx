import styled from "styled-components";
import Image from "next/image";

const Banner = () => {
  return (
    <Section>
      <div className="Wrapper">
        <div>
          <h1>Dr. Ney Simões</h1>
          <p>
            Ginecologista e Obstetra, especializado em endometriose e pós
            graduado em endoscopia ginecológica e cirurgia minimamente invasiva.
          </p>
          <button>Agende sua Consulta</button>
        </div>
        <Image
          priority
          src="/images/logo-dark.svg"
          alt="Ney Simões"
          width={400}
          height={400}
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
  padding: 1rem 12rem;
  color: #506e62;
  background-color: #c9c6a5;
  width: 100%;
  height: calc(400px + 4rem);
  padding: 2rem;
  .Wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 800px;
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
`;

export default Banner;
