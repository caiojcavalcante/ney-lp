import styled from "styled-components";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Section>
        <div className="wrapper">
          <h1>Contato</h1>
          <ul>
            <li>
              <Image
                src="/images/whatsapp.svg"
                alt="whatsapp"
                width={20}
                height={20}
              />
              <a>(11) 9 9999-9999</a>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  background-color: #1b2421;
  list-style-type: none;
  color: #c9c6a5;
  color: #506e62;
  .wrapper {
    max-width: 1000px;
  }
  a {
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
  }
`;

export default Contact;
