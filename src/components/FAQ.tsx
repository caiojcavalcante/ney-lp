import React from "react";
import Accordion from "./Accordion";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import { RevealWrapper } from "next-reveal";

interface FAQData {
  title: string;
  content: string;
}
interface FAQProps {
  faqData: FAQData[];
}

const FAQ = ({ faqData }: FAQProps) => {
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
    <RevealWrapper>
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
    </RevealWrapper>
  );
};

const Section = styled.section<{ isNonMobile: boolean }>`
  position: relative;
  color: ${({ theme }) => theme.color.faq};
  background-color: ${({ theme }) => theme.color.secundary.main};
  width: 90vw;
  margin: 3rem 0;
  box-shadow: 0 15px 20px 20px rgba(0, 0, 0, 0.1);
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
