import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = () => {
  const isNonMobile = useMediaQuery('(min-width:1000px)');
  return (
    <Nav>
      <div className="wrapper">
        <Image src="/images/logo.svg" alt="Ney Simões" width={80} height={80} />
        {isNonMobile && (
          <ul>
            <li>Especialidades</li>
            <li>Sobre o dr.</li>
            <li>Depoimentos</li>
            <li>Contato</li>
          </ul>
        )}
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* background-color: #506e62; */
  background: linear-gradient(
    20deg,
    rgba(80, 110, 98, 1) 0%,
    rgba(80, 110, 98, 1) 30%,
    rgba(27, 36, 33, 1) 100%
  );
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
    justify-content: center;
    align-items: center;
    gap: 30%;
  }
`;

export default NavBar;
