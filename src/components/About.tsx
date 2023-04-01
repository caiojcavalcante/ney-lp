import styled from "styled-components";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Section>
        <div>
          <h2>Sobre o Dr.</h2>
          <p>
            O Dr. Ney Simões é um médico obstetra com mais de 15 anos de
            experiência na área. Ele sempre soube que queria se dedicar à
            obstetrícia desde o início de sua carreira, pois acredita que ajudar
            as mulheres a trazerem seus filhos ao mundo é uma das coisas mais
            importantes que um médico pode fazer.
          </p>
        </div>
        <div className="img-wrapper">
          <Image
            src="/images/foto-ney2.jpg"
            alt="Ney Simões"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  color: #506e62;
  background-color: #c9c6a5;
  width: 100%;
  padding: 2rem 8rem 2rem 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .img-wrapper {
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    width: 320px;
    height: 320px;
  }
  div {
    width: 50%;
    height: 100%;
  }
`;

export default About;
