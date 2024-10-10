export type CarouselOptions = {
  showArrows?: boolean;
  autoPlay?: boolean;
  interval?: number;
  fullWidth?: boolean;
  freeMode?: boolean;
  showPagination?: boolean;
  loop?: boolean;
};

export type CarouselProps = {
  items: React.ReactNode[];
  options?: CarouselOptions;
};
