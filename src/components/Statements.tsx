import styled from "styled-components";
import Image from "next/image";

const Statements = () => {
  return (
    <Section>
      <h2>Depoimentos</h2>
      <div>
        <Card>
          <div className="img-wrapper">
            <Image
              src="/images/foto-ney2.jpg"
              alt="Ney Simões"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="baloon">
            <h1>Maria das dores</h1>
            <a>
              Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada com
              minha saúde, mas ele foi muito atencioso e me fez sentir à vontade
              durante todo o atendimento.
            </a>
          </div>
        </Card>
        <Card>
          <div className="img-wrapper">
            <Image
              src="/images/foto-ney2.jpg"
              alt="Ney Simões"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="baloon">
            <h1>Maria das dores</h1>
            <a>
              Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada com
              minha saúde, mas ele foi muito atencioso e me fez sentir à vontade
              durante todo o atendimento.
            </a>
          </div>
        </Card>
      </div>
      <div>
        <Card>
          <div className="img-wrapper">
            <Image
              src="/images/foto-ney2.jpg"
              alt="Ney Simões"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="baloon">
            <h1>Maria das dores</h1>
            <a>
              Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada com
              minha saúde, mas ele foi muito atencioso e me fez sentir à vontade
              durante todo o atendimento.
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
};
/*
<Card>
<div className="img-wrapper">
  <Image
    src="/images/foto-ney2.jpg"
    alt="Ney Simões"
    fill
    style={{
      objectFit: "cover",
    }}
  />
</div>
<div className="baloon">
  <h1>Maria das dores</h1>
  <a>
    Recentemente fui atendida pelo Dr. Ney. Eu estava preocupada com
    minha saúde, mas ele foi muito atencioso e me fez sentir à vontade
    durante todo o atendimento.
  </a>
</div>
</Card>
*/
const Section = styled.section`
  background-color: #506e62;
  z-index: 0;
  color: #c9c6a5;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  div {
    display: flex;
    flex-direction: row;
    gap: 2rem;
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
    font-weight: 600;
  }
  h1 {
    font-size: 1rem;
  }
  .baloon {
    display: flex;
    flex-direction: column;
    position: relative;
    /* background-color: #c9c6a5; */
    background: linear-gradient(
        140deg,
        rgba(201, 198, 165, 1) 0%,
        rgba(201, 198, 165, 0.5) 100%
        );
    box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1);
    width: 380px;
    padding: 1rem;
    border-radius: 1.5rem;
    gap: 0;
    :before {
      content: "";
      position: absolute;
      top: 62px;
      left: -59px;
      z-index: 1;
      width: 0;
      height: 0;
      border-top: 30px solid transparent;
      border-right: 30px solid #b4b193;
      border-left: 30px solid transparent;
    }
  }
  .img-wrapper {
    position: relative;
    border-radius: 20rem;
    overflow: hidden;
    width: 100px;
    height: 100px;
    padding: 0;
    border: 4px solid #1b2421;
    box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1);
  }
`;

export default Statements;
