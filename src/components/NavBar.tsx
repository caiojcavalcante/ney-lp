import styled from "styled-components";
import Image from "next/image";

const NavBar = () => {
  return (
    <Nav>
      <div className="wrapper">
        <Image src="/images/logo.svg" alt="Ney Simões" width={80} height={80} />
        <ul>
          <li>Especialidades</li>
          <li>Sobre o dr.</li>
          <li>Depoimentos</li>
          <li>Contato</li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 6rem;
  background-color: #506e62;
  color: #c9c6a5;
  width: 100%;
  height: calc(80px + 2rem);
  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .wrapper {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default NavBar;
