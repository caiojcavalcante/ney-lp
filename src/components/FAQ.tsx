import React from "react";
import Accordion from "./Accordion";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";

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

const FAQ: React.FC = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const [currentAccordion, setCurrentAccordion] = React.useState<number | null>(
    null
  );
  const handleAccordionClick = (index: number) => {
    if (currentAccordion === index) {
      setCurrentAccordion(null); // Close the accordion if it's already open
    } else {
      setCurrentAccordion(index); // Open the clicked accordion
    }
  };
  return (
    <Section isNonMobile={isNonMobile}>
      <h1>FAQ</h1>
      <div className="grid">
        {/* <VerticalBar /> */}
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isOpen={currentAccordion === index}
            onClickAccordion={() => handleAccordionClick(index)}
          />
        ))}
      </div>
    </Section>
  );
};
const VerticalBar = styled.div`
  position: absolute;
  top: 10%;
  bottom: 10%;
  left: 50%;
  width: 0.2rem;
  border-radius: 1rem;
  background-color: #506e62;
  /* transform: translateX(-50%); */
`;
const Section = styled.section<{ isNonMobile: boolean }>`
  position: relative;
  color: #506e62;
  background-color: #c9c6a5;
  width: 90vw;
  margin: 3rem 0;
  user-select: none;
  /* height: ${({ isNonMobile }) => (isNonMobile ? "380px" : "600px")}; */
  max-width: 1000px;
  padding: 2rem;
  border-radius: 2rem;
  .grid {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 1rem; */
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 0.9rem;
  }
`;

export default FAQ;
