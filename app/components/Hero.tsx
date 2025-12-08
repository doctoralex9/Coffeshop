"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Coffee, Clock, MapPin } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

export default function CafeHero() {
  const [scrollY, setScrollY] = useState(0);

  // Image paths from photo-feed
  const carouselImages = [
    '/photo-feed/photos/1.png',
    '/photo-feed/photos/2.png',
    '/photo-feed/photos/3.png',
    '/photo-feed/photos/4.png',
    '/photo-feed/photos/5.png',
    '/photo-feed/photos/6.jpg',
    '/photo-feed/photos/7.jpg',
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 animate-fade-in">
      {/* Floating coffee beans decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-amber-800 rounded-full opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 4}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left content */}
        <div className="lg:w-1/2 z-10 space-y-8 text-center lg:text-left">
          <div className="inline-block">
            <span className="px-4 py-2 bg-amber-900 text-amber-50 rounded-full text-sm font-medium tracking-wide">
              ☕ Coffe Spot
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-amber-950 leading-tight animate-slide-in-left">
            Where Every
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 animate-text-shimmer">
              Sip Tells
            </span>
            a Story
          </h1>
          
          <p className="text-xl text-amber-800 max-w-lg mx-auto lg:mx-0">
            Handcrafted beverages, freshly baked goods, and a cozy atmosphere that feels like home. Start your day with us.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
            <Link href="/menu" className="group px-8 py-4 bg-amber-900 text-white rounded-full font-semibold text-lg hover:bg-amber-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-subtle text-center">
              View Menu
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <button className="px-8 py-4 bg-white text-amber-900 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300 border-2 border-amber-900 hover:scale-105">
              Visit Us
            </button>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Clock className="w-5 h-5 text-amber-700" />
              <div className="text-left">
                <p className="text-xs text-amber-600 font-medium">OPEN DAILY</p>
                <p className="text-sm text-amber-900 font-semibold">7AM - 8PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <MapPin className="w-5 h-5 text-amber-700" />
              <div className="text-left">
                <p className="text-xs text-amber-600 font-medium">LOCATION</p>
                <p className="text-sm text-amber-900 font-semibold">Downtown</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Coffee className="w-5 h-5 text-amber-700" />
              <div className="text-left">
                <p className="text-xs text-amber-600 font-medium">SPECIALTY</p>
                <p className="text-sm text-amber-900 font-semibold">Cold Brew</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          <div 
            className="relative transform transition-transform duration-300"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            {/* Main Image Carousel */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-scale-in ring-4 ring-white/50">
              <ImageCarousel
                images={carouselImages}
                interval={4000}
                imageClassName="rounded-3xl"
                transitionDuration={1000}
                showIndicators={true}
              />

              {/* Subtle overlay gradient for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.5"/>
        </svg>
      </div>
    </div>
  );
}