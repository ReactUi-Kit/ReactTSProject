import React, { useEffect, useState, useRef } from "react";
import {
  CarouselContainer,
  CarouselItem,
  CarouselTrack,
  NextButton,
  PrevButton,
  PaginationDot,
  PaginationContainer,
} from "./Carousel.style";
import { CarouselProps } from "./Carousel.props";

/**
 * Carousel renders a list of items that can be navigated through.
 *
 * @param {React.ReactNode} items - An array of React nodes to render as carousel items.
 * @param {CarouselOptions} options - An object containing options for the carousel.
 */
export default function Carousel({ items, options }: CarouselProps) {
  const {
    showArrows = true,
    autoPlay = false,
    interval = 3000,
    fullWidth = false,
    freeMode = false,
    showPagination = true,
    loop = false, // New loop option
  } = options || {};

  const totalItems = items.length;
  const extendedItems = loop
    ? [...items.slice(totalItems - 1), ...items, items[0]] // Create loopable items
    : items;

  const [currentIndex, setCurrentIndex] = useState(loop ? 1 : 0); // Start at the first real item
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return loop && nextIndex >= extendedItems.length ? 1 : nextIndex; // Loop to first item
      });
    }
  };

  const handlePrev = () => {
    if (!isTransitioning && !dragging) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => {
        const prevIndexCalc = prevIndex - 1;
        return loop && prevIndexCalc < 1
          ? extendedItems.length - 2
          : prevIndexCalc; // Loop to last item
      });
    }
  };

  // Adjust the index after transitioning if we're at a clone
  useEffect(() => {
    if (currentIndex === extendedItems.length - 1 && loop) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Jump to the real first item
      }, 500); // Match transition duration
    } else if (currentIndex === 0 && loop) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(extendedItems.length - 2); // Jump to the real last item
      }, 500);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentIndex, extendedItems.length]);

  // Handle drag start
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (freeMode) {
      setDragging(true);
      setStartX("touches" in e ? e.touches[0].clientX : e.clientX);
    }
  };

  // Handle dragging
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragging && freeMode) {
      const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
      setDeltaX(currentX - startX); // Calculate the drag distance
    }
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (dragging && freeMode) {
      setDragging(false);
      const threshold = 50; // Minimum drag distance to move slides

      if (deltaX < -threshold) {
        handleNext(); // Swipe left to go to the next slide
      } else if (deltaX > threshold) {
        handlePrev(); // Swipe right to go to the previous slide
      }
      setDeltaX(0); // Reset drag difference
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      handleNext();
    } else if (event.key === "ArrowLeft") {
      handlePrev();
    }
  };

  const handlePaginationClick = (index: number) => {
    setCurrentIndex(loop ? index + 1 : index); // Adjust for loop
  };

  // Autoplay functionality
  useEffect(() => {
    if (autoPlay && !dragging) {
      const timer = setInterval(handleNext, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, dragging]);

  return (
    <CarouselContainer
      role="region"
      aria-label="Image Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd} // Handle when the user drags out of the container
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      fullWidth={fullWidth}
    >
      <CarouselTrack
        ref={trackRef}
        translateX={
          -currentIndex * 100 + (deltaX / window.innerWidth) * 100 // Adjust translateX based on drag
        }
        freeMode={freeMode}
        transitioning={isTransitioning}
        dragging={dragging}
      >
        {extendedItems.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselTrack>
      {showArrows && (
        <>
          <PrevButton onClick={handlePrev} aria-label="Previous Item">
            &#10094;
          </PrevButton>
          <NextButton onClick={handleNext} aria-label="Next Item">
            &#10095;
          </NextButton>
        </>
      )}
      {showPagination && (
        <PaginationContainer>
          {items.map((_, index) => (
            <PaginationDot
              key={index}
              active={currentIndex === (loop ? index + 1 : index)}
              onClick={() => handlePaginationClick(index)}
            />
          ))}
        </PaginationContainer>
      )}
    </CarouselContainer>
  );
}
