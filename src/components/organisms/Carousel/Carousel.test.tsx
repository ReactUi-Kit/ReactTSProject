import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import { CarouselProps } from "./Carousel.props";

const carouselItems = [
  <img
    src="https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Image+1"
    alt="Description 1"
  />,
  <img
    src="https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Image+2"
    alt="Description 2"
  />,
  <img
    src="https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Image+3"
    alt="Description 3"
  />,
];

const defaultProps: CarouselProps = {
  items: carouselItems,
  options: { showArrows: true, autoPlay: false, fullWidth: false },
};

describe("Carousel Component", () => {
  test("renders carousel with provided items", () => {
    render(<Carousel {...defaultProps} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAccessibleName("Description 1");
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

    const images = screen.getAllByRole("img");
    expect(images[1]).toBeInTheDocument();
  });

  test("moves to previous slide when previous arrow is clicked", () => {
    render(<Carousel {...defaultProps} />);

    const prevButton = screen.getByLabelText("Previous Item");
    fireEvent.click(prevButton);

    const images = screen.getAllByRole("img");
    expect(images[2]).toBeInTheDocument();
  });

  test("keyboard navigation works with arrow keys", () => {
    render(<Carousel {...defaultProps} />);

    const carouselContainer = screen.getByRole("region", {
      name: "Image Carousel",
    });
    fireEvent.keyDown(carouselContainer, { key: "ArrowRight" });

    const images = screen.getAllByRole("img");
    expect(images[1]).toBeInTheDocument();

    fireEvent.keyDown(carouselContainer, { key: "ArrowLeft" });
    expect(images[0]).toBeInTheDocument();
  });

  test("auto play moves to the next slide after interval", () => {
    jest.useFakeTimers();
    render(
      <Carousel
        {...defaultProps}
        options={{ ...defaultProps.options, autoPlay: true, interval: 2000 }}
      />
    );

    const images = screen.getAllByRole("img");
    expect(images[0]).toBeInTheDocument();

    jest.advanceTimersByTime(2000);

    expect(images[1]).toBeInTheDocument();

    jest.advanceTimersByTime(2000);
    expect(images[2]).toBeInTheDocument();

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
