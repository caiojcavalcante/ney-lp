import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import Router from "next/router";

interface NavBarProps {
  hidden?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ hidden = false }) => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <Nav
      style={{
        height: isNonMobile ? "calc(80px + 2rem)" : "calc(60px + 2rem)",
      }}
    >
      <div className="wrapper">
        <Image
          src="/images/logo.svg"
          alt="Ney Simões"
          width={isNonMobile ? 80 : 60}
          height={isNonMobile ? 80 : 60}
        />
        {isNonMobile && !hidden && (
          <ul>
            <li onClick={() => Router.push("/#especialidades")}>
              Especialidades
            </li>
            <li onClick={() => Router.push("/#sobre")}>Sobre o dr.</li>
            <li onClick={() => Router.push("/#depoimentos")}>Depoimentos</li>
            <li onClick={() => Router.push("/#contato")}>Contato</li>
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
    /* rgba(80, 110, 98, 1) 30%,
    rgba(27, 36, 33, 1) 100% */
  );
  color: #c9c6a5;
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
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
