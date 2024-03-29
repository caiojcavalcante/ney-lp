import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Statements from "@/components/Statements";
import styled, { ThemeProvider } from "styled-components";
import Contact from "@/components/Contact";
import Theme from "@/components/Theme";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ney Simões</title>
        <meta
          name="description"
          content="Ginecologista especializado em trazer a qualidade de vida,
          disposição e a fertilidade necessária para realizar seus sonhos com
          a qualidade que você merece."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
      </Head>
      <ThemeProvider theme={Theme}>
        <Main>
          <NavBar />
          <RevealWrapper>
            <Banner />
          </RevealWrapper>
          <RevealWrapper>
            <Specialties />
          </RevealWrapper>
          <RevealWrapper>
            <About />
          </RevealWrapper>
          {/* <RevealWrapper>
            <Statements />
          </RevealWrapper> */}
          <CTA />
          <Contact />
        </Main>
        <footer className={styles.footer}></footer>
      </ThemeProvider>
    </>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: Poppins, sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  user-select: none;
`;
