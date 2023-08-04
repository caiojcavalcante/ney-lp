import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import BannerTreatment from "@/components/BannerTreatment";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Statements from "@/components/Statements";
import styled, { ThemeProvider } from "styled-components";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Theme from "@/components/Theme";

export default function Home() {
    const desc = "Com o Implanon, você poderá desfrutar da sua intimidade plenamente, sem interrupções, além de aproveitar todos os outros benefícios que ele oferece.";
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
                    <NavBar hidden />
                    <BannerTreatment image="/images/implanon.jpg" desc={desc} />
                    <Specialties />
                    <About />
                    <Statements />
                    <FAQ />
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
