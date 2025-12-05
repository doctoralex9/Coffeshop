"use client";

import Image from "next/image";
import Link from "next/link";
import wondersImages from "../photo-feed/photos";
import "./styles.css";
import { Coffee, Snowflake } from 'lucide-react';

export default function MenuPreview() {
  return (
      <section className="menu-preview-section">
      {/* Section Header */}
      <div className="menu-header animate-fade-in-down">
        <span className="menu-subtitle">Discover Our Collection</span>
        <h1 className="menu-preview-heading">
          Handcrafted Beverages
        </h1>
        <p className="menu-description">
          From classic espresso to innovative cold brews, each drink is crafted with passion and precision
        </p>
      </div>

      {/* Featured Categories - Hero Cards */}
      <div className="menu-category-hero">
        {/* Hot Coffee Featured Card */}
        <div className="menu-hero-card animate-slide-in-left">
          <div className="menu-hero-image-wrapper">
            <Image
              src={wondersImages[3].src}
              alt={wondersImages[3].name}
              className="menu-hero-image"
              placeholder="blur"
            />
            <div className="menu-hero-overlay">
              <div className="menu-hero-badge">
                <Coffee className="w-5 h-5" />
                <span>Hot Beverages</span>
              </div>
            </div>
          </div>
          <div className="menu-hero-content">
            <h2 className="menu-hero-title">Hot Coffee Collection</h2>
            <p className="menu-hero-description">
              Explore our selection of freshly brewed hot coffees, from bold espressos to smooth lattes
            </p>
            <Link href="/menu" className="menu-cta-btn">
              View Menu
              <span className="menu-cta-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Cold Coffee Featured Card */}
        <div className="menu-hero-card animate-slide-in-right">
          <div className="menu-hero-image-wrapper">
            <Image
              src={wondersImages[4].src}
              alt={wondersImages[4].name}
              className="menu-hero-image"
              placeholder="blur"
            />
            <div className="menu-hero-overlay">
              <div className="menu-hero-badge">
                <Snowflake className="w-5 h-5" />
                <span>Cold Beverages</span>
              </div>
            </div>
          </div>
          <div className="menu-hero-content">
            <h2 className="menu-hero-title">Cold Brew & Refreshments</h2>
            <p className="menu-hero-description">
              Refresh yourself with our signature cold brews and iced specialties
            </p>
            <Link href="/menu" className="menu-cta-btn">
              View Menu
              <span className="menu-cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Signature Drinks Grid */}
      <div className="menu-signature-section">
        <h3 className="menu-section-title animate-fade-in-up">Signature Creations</h3>

        <div className="menu-options-grid">
          <div className="menu-signature-card animate-fade-in-up stagger-1">
            <div className="menu-signature-image-wrapper">
              <Image
                src={wondersImages[0].src}
                alt={wondersImages[0].name}
                className="menu-signature-image"
                placeholder="blur"
              />
              <div className="menu-signature-overlay">
                <span className="menu-signature-tag">Popular</span>
              </div>
            </div>
            <div className="menu-signature-content">
              <h4 className="menu-signature-title">{wondersImages[0].name}</h4>
              <p className="menu-signature-description">
                Enjoy the timeless taste of our rich, foamy cappuccino with perfectly steamed milk
              </p>
            </div>
          </div>

          <div className="menu-signature-card animate-fade-in-up stagger-2">
            <div className="menu-signature-image-wrapper">
              <Image
                src={wondersImages[5].src}
                alt={wondersImages[5].name}
                className="menu-signature-image"
                placeholder="blur"
              />
              <div className="menu-signature-overlay">
                <span className="menu-signature-tag">Chef's Pick</span>
              </div>
            </div>
            <div className="menu-signature-content">
              <h4 className="menu-signature-title">{wondersImages[5].name}</h4>
              <p className="menu-signature-description">
                Savor the smooth harmony of espresso blended with creamy steamed milk
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>

  );
}