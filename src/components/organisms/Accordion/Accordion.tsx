import { useState, useRef, useEffect } from "react";
import { AccordionProps } from "./Accordion.props";
import {
  AccordionWrapper,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionContent,
} from "./Accordion.style";

export default function Accordion({ items }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [maxHeights, setMaxHeights] = useState<number[]>([]);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const heights = panelsRef.current.map((panel) => panel.scrollHeight);
    setMaxHeights(heights);
  }, []);

  const handleAccordionToggle = (index: number) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <AccordionWrapper>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <AccordionItem key={index}>
            <AccordionButton
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}
              id={`accordion-button-${index}`}
              isOpen={isOpen}
              onClick={() => handleAccordionToggle(index)}
            >
              {item.title}
            </AccordionButton>
            <AccordionPanel
              id={`accordion-content-${index}`}
              aria-labelledby={`accordion-button-${index}`}
              isOpen={isOpen}
              maxHeight={maxHeights[index] || 0}
              role="region"
              ref={(el) => (panelsRef.current[index] = el!)}
            >
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </AccordionWrapper>
  );
}
