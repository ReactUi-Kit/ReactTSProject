import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";
import "@testing-library/jest-dom";

const items = [
  { title: "Item 1", content: <div>Content 1</div> },
  { title: "Item 2", content: <div>Content 2</div> },
  { title: "Item 3", content: <div>Content 3</div> },
];

describe("Accordion Component", () => {
  it("renders all accordion items", () => {
    render(<Accordion items={items} />);
    items.forEach((item, index) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(`Content ${index + 1}`)).toBeInTheDocument();
    });
  });

  it("toggles accordion content on button click", () => {
    render(<Accordion items={items} />);

    const firstButton = screen.getByText("Item 1");
    const firstContent = screen.getByText("Content 1");

    expect(firstContent).not.toBeVisible();

    fireEvent.click(firstButton);
    expect(firstContent).toBeVisible();

    fireEvent.click(firstButton);
    expect(firstContent).not.toBeVisible();
  });

  it("allows multiple accordion items to be opened at the same time", () => {
    render(<Accordion items={items} />);

    const firstButton = screen.getByText("Item 1");
    const secondButton = screen.getByText("Item 2");
    const firstContent = screen.getByText("Content 1");
    const secondContent = screen.getByText("Content 2");

    fireEvent.click(firstButton);
    expect(firstContent).toBeVisible();

    fireEvent.click(secondButton);
    expect(firstContent).toBeVisible();
    expect(secondContent).toBeVisible();
  });

  it("handles closing all accordions properly", () => {
    render(<Accordion items={items} />);

    const firstButton = screen.getByText("Item 1");
    const secondButton = screen.getByText("Item 2");
    const firstContent = screen.getByText("Content 1");
    const secondContent = screen.getByText("Content 2");

    fireEvent.click(firstButton);
    fireEvent.click(secondButton);

    expect(firstContent).toBeVisible();
    expect(secondContent).toBeVisible();

    fireEvent.click(firstButton);
    fireEvent.click(secondButton);

    expect(firstContent).not.toBeVisible();
    expect(secondContent).not.toBeVisible();
  });
});
