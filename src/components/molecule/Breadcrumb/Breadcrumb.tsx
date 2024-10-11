import React from "react";
import { BreadcrumbProps } from "./Breadcrumb.props";
import { SlArrowRight } from "react-icons/sl";
import * as Styled from "./Breadcrumb.style"

export default function Breadcrumb  ({ options, backgroundColor, textColor, barSize, textSize, ...BreadcrumbProps }: BreadcrumbProps) {
  return (
    <Styled.Wrapper
    backgroundColor={backgroundColor}
    barSize={barSize}
  >
    {options.map((item, index) => (
      <>
      <Styled.Item
        key={index}
        textSize= {textSize}
        backgroundColor={backgroundColor}
      >
        <Styled.CustomLink 
          href={item.link}
          textColor={textColor}
        >
          {item.label}
        </Styled.CustomLink>
      </Styled.Item>
      { options.length-1 !== index && 
        <SlArrowRight />
      
      }
      </>
      
    ))}
  </Styled.Wrapper>
  );
};
