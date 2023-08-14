import Head from "next/head";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import BannerTreatment from "@/components/BannerTreatment";
import Specialties from "@/components/Specialties";
import styled, { ThemeProvider } from "styled-components";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Theme from "@/components/Theme";
import CTA from "@/components/CTA";

interface FAQData {
  title: string;
  content: string;
}

const faqData: FAQData[] = [
  {
    title: "O que é o Implanon e como funciona?",
    content:
      "O Implanon é um método contraceptivo implantável que libera continuamente o hormônio progestagênio, evitando a gravidez por até três anos.",
  },
  {
    title: "Quais são os principais benefícios do Implanon?",
    content:
      "O Implanon oferece uma contracepção altamente eficaz, com menos chances de erro humano, além de não exigir a lembrança diária de pílulas.",
  },
  {
    title: "Existe risco de infertilidade após a remoção do Implanon?",
    content:
      "Não, a fertilidade normalmente retorna rapidamente após a remoção do implante, permitindo a possibilidade de engravidar novamente.",
  },
  {
    title: "Como é realizado o procedimento de inserção do Implanon?",
    content:
      "O implante é colocado sob a pele, na parte interna do braço, através de um procedimento rápido e relativamente indolor.",
  },
  {
    title: "O Implanon é adequado para todas as mulheres?",
    content:
      "O Implanon pode ser uma opção adequada para muitas mulheres, mas algumas condições de saúde podem torná-lo inapropriado. O ginecologista pode ajudar a determinar a melhor escolha contraceptiva individualmente.",
  },
];

export default function Home() {
  const title = "Implanon";
  const desc =
    "Com o Implanon, você poderá desfrutar da sua intimidade plenamente, sem interrupções.";
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
          <BannerTreatment
            image="/images/implanon.jpg"
            title={title}
            desc={desc}
          />
          <Specialties />
          {/* <About /> */}
          {/* <Statements /> */}
          <FAQ faqData={faqData} />
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
