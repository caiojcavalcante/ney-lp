import styled from "styled-components";
import Image from "next/image";

const Statements = () => {
  return (
    <Section>
      <h2>Depoimentos</h2>
      <Card>
        <div className="imagewrapper">
          <Image
            src="/images/foto-ney.jpeg"
            alt="Ney Simões"
            width={160}
            height={160}
          />
        </div>
        <div className="baloon">
          <h1>Filipe Raposo</h1>
          <a>
            Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada com
            minha saúde, mas ele foi muito atencioso e me fez sentir à vontade
            durante todo o atendimento.
          </a>
        </div>
      </Card>
    </Section>
  );
};

const Section = styled.section`
  background-color: #506e62;
  color: #c9c6a5;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .imagewrapper {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    overflow: hidden;
  }
`;

const Card = styled.div`
  display: flex;
  color: #506e62;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  div {
    width: 50%;
  }
  a {
    font-size: 0.8rem;
    font-weight: 500;
  }
  h1 {
    font-size: 1rem;
  }
  .baloon {
    position: relative;
    background-color: #c9c6a5;
    width: 380px;
    padding: 1rem;
    border-radius: 1.5rem;
    z-index: 2;
    :before {
      content: "";
      position: absolute;
      top: 62px;
      left: -150px;
      z-index: 0;
      width: 0;
      height: 0;
      border-top: 30px solid transparent;
      border-right: 30px solid red;
      border-left: 30px solid transparent;
    }
  }
`;

export default Statements;
