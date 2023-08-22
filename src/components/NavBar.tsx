import styled from "styled-components";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import Router from "next/router";
import Logo from "./Logo";

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
        <Logo />
        {isNonMobile && !hidden && (
          <ul>
            <li onClick={() => Router.push("/#especialidades")}>
              Especialidades
            </li>
            <li onClick={() => Router.push("/#sobre")}>Sobre o dr.</li>
            {/* <li onClick={() => Router.push("/#depoimentos")}>Depoimentos</li> */}
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
  //fill logo with pink
  img {
    //make logo pink except for the transparent
    filter: saturate(100%) hue-rotate(-594deg);
  }
  svg {
    /* stroke: ${({ theme }) => theme.color.background}; */
    stroke: ${({ theme }) => theme.color.logo};
    stroke-width: 0.5rem;
    fill: none;
  }
`;

const StyledImage = styled(Image)``;

export default NavBar;
