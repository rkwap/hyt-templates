"use client";
import Image from "next/image";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../../carousel";

export default function ImagesCarousel({ images, className }) {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <Carousel className={className}>
      <CarouselContent
        index={currentIndex}
        onNextClick={handleNext}
        onPrevClick={handlePrev}
      >
        {images.map((src, i) => (
          <CarouselItem key={i}>
            <Image
              alt={`Slide ${i}`}
              className="aspect-video w-full object-cover"
              height={85}
              loading="eager"
              priority={true}
              src={src}
              unoptimized
              width={150}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots
        active={currentIndex}
        onDotClick={setCurrentIndex}
        total={images.length}
      />
    </Carousel>
  );
}
