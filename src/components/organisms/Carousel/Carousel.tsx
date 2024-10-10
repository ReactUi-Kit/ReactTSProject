import React, { useEffect, useState } from "react";
import {
  CarouselContainer,
  CarouselItem,
  CarouselTrack,
  NextButton,
  PrevButton,
} from "./Carousel.style";
import { CarouselProps } from "./Carousel.props";

/**
 * Carousel renders a carousel with items that can be navigated using arrows or keyboard.
 *
 * @param {React.ReactNode[]} items - An array of items to be displayed in the carousel.
 * @param {CarouselOptions} options - An object with options to customize the carousel.
 */
export default function Carousel({ items, options }: CarouselProps) {
  const {
    showArrows = true,
    autoPlay = false,
    interval = 3000,
    fullWidth = false,
  } = options || {};
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrev();
    }
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(handleNext, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval]);

  return (
    <CarouselContainer
      role="region"
      aria-label="Image Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      fullWidth={fullWidth}
    >
      <CarouselTrack translateX={-currentIndex * 100}>
        {items.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselTrack>
      {showArrows && (
        <>
          <PrevButton onClick={handlePrev} aria-label="Previous Item">
            &#10094; {/* Left Arrow */}
          </PrevButton>
          <NextButton onClick={handleNext} aria-label="Next Item">
            &#10095; {/* Right Arrow */}
          </NextButton>
        </>
      )}
    </CarouselContainer>
  );
}
