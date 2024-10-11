import React from "react";
import { BreadcrumbProps } from "./Breadcrumb.props";

export default function Breadcrumb  ({ options, backgroundColor, textColor, barSize, textSize, ...BreadcrumbProps }: BreadcrumbProps) {
  return (
    <div
    className="breadcrumb-wrapper"
    style={{ backgroundColor, width: barSize }}
    {...BreadcrumbProps}
  >
    {options.map((item, index) => (
      <span
        key={index}
        className="breadcrumb-item"
        style={{ fontSize: textSize }}
      >
        <a
          href={item.link}
          className="breadcrumb-link"
          style={{ color: textColor }}
        >
          {item.label}
        </a>
      </span>
    ))}
  </div>
  );
};
