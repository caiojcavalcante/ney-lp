import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import BannerTreatment from "@/components/BannerTreatment";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Statements from "@/components/Statements";
import styled, { ThemeProvider } from "styled-components";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import PinkTheme from "@/components/PinkTheme";

interface FAQData {
  title: string;
  content: string;
}

const faqData: FAQData[] = [
  {
    title: "O que é o Fraxx e como funciona?",
    content:
      "O Fraxx é um procedimento estético não cirúrgico que utiliza tecnologia de radiofrequência fracionada para estimular a produção de colágeno na pele. Isso resulta em uma melhoria da textura, firmeza e aparência geral da pele.",
  },
  {
    title: "Quais são os principais benefícios do Fraxx?",
    content:
      "Os principais benefícios do Fraxx incluem o rejuvenescimento da pele, redução de rugas e linhas finas, melhoria da textura e do tom da pele, além de estimular a produção de colágeno para uma pele mais firme e saudável.",
  },
  {
    title: "Existe riscos de saúde após a realização do Fraxx?",
    content:
      "O Fraxx é considerado seguro quando realizado por profissionais qualificados. No entanto, como qualquer procedimento estético, pode haver alguns riscos e efeitos colaterais leves, como vermelhidão temporária, inchaço ou sensibilidade na pele. É importante seguir todas as orientações pós-tratamento para minimizar esses efeitos.",
  },
  {
    title: "Como é realizado o procedimento do Fraxx?",
    content:
      "O procedimento do Fraxx é realizado através da aplicação de uma ponteira especial na pele, que emite ondas de radiofrequência fracionada. Essas ondas aquecem as camadas profundas da pele, estimulando a produção de colágeno e promovendo a renovação celular. O tratamento é realizado com anestesia local e pode levar de 30 minutos a 1 hora, dependendo da área tratada.",
  },
  {
    title: "O Fraxx é adequado para todas as mulheres?",
    content:
      "O Fraxx é adequado para a maioria das mulheres que desejam melhorar a aparência da pele e combater os sinais de envelhecimento. No entanto, é importante agendar uma consulta com um profissional qualificado para avaliar a sua pele e determinar se você é uma candidata adequada para o procedimento.",
  },
];

export default function Home() {
  const title = "Fraxx";
  const desc =
    "Com o Fraxx, você pode ter uma pepeca mais jovem, saudável e bonita.";
  return (
    <>
      <ThemeProvider theme={PinkTheme}>
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
        <Main>
          <NavBar hidden />
          <BannerTreatment
            image="/images/fraxx.jpg"
            title={title}
            desc={desc}
          />
          <Specialties />
          <Statements />
          <FAQ faqData={faqData} />
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
  background-color: ${({ theme }) => theme.color.background};
`;
