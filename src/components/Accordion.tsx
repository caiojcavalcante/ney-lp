// components/Accordion.tsx
import React, { useState } from "react";
import styled from "styled-components";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClickAccordion: () => void;
}

const AccordionItem = styled.div`
  border-bottom: 3px solid ${({ theme }) => theme.color.primary.main};
  border-right: 3px solid ${({ theme }) => theme.color.primary.main};
  margin-bottom: 10px;
  cursor: pointer;
`;

const AccordionTitle = styled.h3`
  margin: 0;
  padding: 15px;
`;

const AccordionContent = styled.div<{ open: boolean }>`
  padding: 15px;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isOpen,
  onClickAccordion,
}) => {

  return (
    <AccordionItem onClick={onClickAccordion}>
      <AccordionTitle>{title}</AccordionTitle>
      <AccordionContent open={isOpen}>{content}</AccordionContent>
    </AccordionItem>
  );
};

export default Accordion;
