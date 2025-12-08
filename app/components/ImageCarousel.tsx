"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  imageClassName?: string;
  showIndicators?: boolean;
  transitionDuration?: number;
}

export default function ImageCarousel({
  images,
  interval = 3000,
  className = '',
  imageClassName = '',
  showIndicators = false,
  transitionDuration = 500
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [images.length, isTransitioning, transitionDuration]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [currentIndex, isTransitioning, transitionDuration]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [goToNext, interval, images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Image container with fade transition */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-${transitionDuration} ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className={`object-cover ${imageClassName}`}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
