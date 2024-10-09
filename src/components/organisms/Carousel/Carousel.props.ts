export type CarouselOptions = {
  showArrows?: boolean;
  autoPlay?: boolean;
  interval?: number;
  fullWidth?: boolean;
};

export type CarouselProps = {
  items: React.ReactNode[];
  options?: CarouselOptions;
};
