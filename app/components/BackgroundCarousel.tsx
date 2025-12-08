"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface BackgroundCarouselProps {
  images: string[];
  interval?: number;
  transitionDuration?: number;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  className?: string;
  priority?: boolean;
}

export default function BackgroundCarousel({
  images,
  interval = 5000,
  transitionDuration = 1500,
  overlay = true,
  overlayColor = 'black',
  overlayOpacity = 0.3,
  className = '',
  priority = false
}: BackgroundCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (isTransitioning || images.length <= 1) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [images.length, isTransitioning, transitionDuration]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [goToNext, interval, images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Image layers */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity ease-in-out`}
          style={{
            transitionDuration: `${transitionDuration}ms`,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0
          }}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover"
            priority={priority && index === 0}
            quality={90}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Optional overlay for better text readability */}
      {overlay && (
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity
          }}
        />
      )}
    </div>
  );
}
