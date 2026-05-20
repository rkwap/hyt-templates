"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { cn } from "@/utils";
import { Button } from "./button";

const Carousel = React.forwardRef(({ className, children, ...props }, ref) => (
  <div className={cn("relative w-full", className)} ref={ref} {...props}>
    {children}
  </div>
));
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(
  ({ className, children, index = 0, ...props }, ref) => (
    <div className="flex items-center gap-2">
      <CarouselPrevButton onClick={props.onPrevClick} />
      <div
        className={cn("overflow-hidden rounded-lg", className)}
        ref={ref}
        {...props}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {children}
        </div>
      </div>
      <CarouselNextButton onClick={props.onNextClick} />
    </div>
  )
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div className={cn("w-full flex-shrink-0", className)} ref={ref} {...props}>
      {children}
    </div>
  )
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevButton = React.forwardRef(
  ({ className, onClick, ...props }, ref) => (
    <Button
      onClick={onClick}
      ref={ref}
      size="icon"
      variant="tertiary"
      {...props}
    >
      <ChevronLeft className="h-5 w-5" />
    </Button>
  )
);
CarouselPrevButton.displayName = "CarouselPrevButton";

const CarouselNextButton = React.forwardRef(
  ({ className, onClick, ...props }, ref) => (
    <Button
      onClick={onClick}
      ref={ref}
      size="icon"
      variant="tertiary"
      {...props}
    >
      <ChevronRight className="h-5 w-5" />
    </Button>
  )
);
CarouselNextButton.displayName = "CarouselNextButton";

const CarouselDots = React.forwardRef(
  ({ className, total, active, onDotClick, ...props }, ref) => (
    <div
      className={cn("mt-4 flex justify-center gap-2", className)}
      ref={ref}
      {...props}
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          className={cn(
            "h-2 w-2 rounded-full transition-colors",
            active === i ? "bg-primary" : "bg-primary/20"
          )}
          key={i}
          onClick={() => onDotClick?.(i)}
          type="button"
        />
      ))}
    </div>
  )
);
CarouselDots.displayName = "CarouselDots";

export { Carousel, CarouselContent, CarouselDots, CarouselItem };
