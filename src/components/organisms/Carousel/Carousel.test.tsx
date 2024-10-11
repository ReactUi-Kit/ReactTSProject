import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import { CarouselProps } from "./Carousel.props";

const carouselItems = [
  <div
    key="1"
    data-testid="carousel-item"
    style={{ backgroundColor: "red", height: "200px" }}
  />,
  <div
    key="2"
    data-testid="carousel-item"
    style={{ backgroundColor: "blue", height: "200px" }}
  />,
  <div
    key="3"
    data-testid="carousel-item"
    style={{ backgroundColor: "green", height: "200px" }}
  />,
];

const defaultProps: CarouselProps = {
  items: carouselItems,
  options: { showArrows: true, autoPlay: false, fullWidth: false },
};

describe("Carousel Component", () => {
  test("renders carousel with provided items", () => {
    render(<Carousel {...defaultProps} />);

    const items = screen.getAllByTestId("carousel-item");
    expect(items).toHaveLength(3);
  });

  test("arrows are displayed when showArrows is true", () => {
    render(<Carousel {...defaultProps} />);

    const prevButton = screen.getByLabelText("Previous Item");
    const nextButton = screen.getByLabelText("Next Item");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test("arrows are hidden when showArrows is false", () => {
    render(
      <Carousel
        {...defaultProps}
        options={{ ...defaultProps.options, showArrows: false }}
      />
    );

    const prevButton = screen.queryByLabelText("Previous Item");
    const nextButton = screen.queryByLabelText("Next Item");

    expect(prevButton).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });

  test("moves to next slide when next arrow is clicked", () => {
    render(<Carousel {...defaultProps} />);

    const nextButton = screen.getByLabelText("Next Item");
    fireEvent.click(nextButton);

    const items = screen.getAllByTestId("carousel-item");
    expect(items[1]).toBeInTheDocument();
  });

  test("moves to previous slide when previous arrow is clicked", () => {
    render(<Carousel {...defaultProps} />);

    const prevButton = screen.getByLabelText("Previous Item");
    fireEvent.click(prevButton);

    const items = screen.getAllByTestId("carousel-item");
    expect(items[2]).toBeInTheDocument();
  });

  test("keyboard navigation works with arrow keys", () => {
    render(<Carousel {...defaultProps} />);

    const carouselContainer = screen.getByRole("region", {
      name: "Image Carousel",
    });
    fireEvent.keyDown(carouselContainer, { key: "ArrowRight" });

    const items = screen.getAllByTestId("carousel-item");
    expect(items[1]).toBeInTheDocument();

    fireEvent.keyDown(carouselContainer, { key: "ArrowLeft" });
    expect(items[0]).toBeInTheDocument();
  });

  test("auto play moves to the next slide after interval", () => {
    jest.useFakeTimers();
    render(
      <Carousel
        {...defaultProps}
        options={{ ...defaultProps.options, autoPlay: true, interval: 2000 }}
      />
    );

    const items = screen.getAllByTestId("carousel-item");
    expect(items[0]).toBeInTheDocument();

    jest.advanceTimersByTime(2000);
    expect(items[1]).toBeInTheDocument();

    jest.advanceTimersByTime(2000);
    expect(items[2]).toBeInTheDocument();

    jest.useRealTimers();
  });

  test("carousel takes full width when fullWidth is true", () => {
    render(
      <Carousel
        {...defaultProps}
        options={{ ...defaultProps.options, fullWidth: true }}
      />
    );

    const carouselContainer = screen.getByRole("region", {
      name: "Image Carousel",
    });
    expect(carouselContainer).toHaveStyle("width: 100%");
  });
});
