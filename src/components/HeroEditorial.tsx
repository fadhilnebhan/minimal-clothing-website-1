import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Sparkles, Volume2, VolumeX, ShieldCheck, Compass } from 'lucide-react';
import { Product } from '../types';

interface HeroEditorialProps {
  onExploreCollections: () => void;
  onOpenRunway: () => void;
  onSelectFeaturedProduct: (product: Product) => void;
  featuredProduct: Product;
  onOpenBespokeModal: () => void;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({
  onExploreCollections,
  onOpenRunway,
  onSelectFeaturedProduct,
  featuredProduct,
  onOpenBespokeModal
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroCampaigns = [
    {
      season: 'ISSUE 04 // SS26',
      plate: 'PLATE 001',
      title: 'Ethereal',
      titleHighlight: 'Forms',
      frenchSubtitle: 'L’Architecture du Corps et de la Matière',
      tagline: 'Hand-sculpted double-faced cashmere and fluid Como mulberry silk. Cut without compromise in our Biella and Paris ateliers.',
      fabric: 'Raw Silk & Tussar Blend',
      origin: 'Como, Italy & Biella Mills',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=90',
      badge: 'Editorial Lead',
      featuredProductName: 'L’Atelier Double-Breasted Cashmere Trench',
      featuredPrice: '$3,450'
    },
    {
      season: 'ISSUE 04 // NOCTURNE',
      plate: 'PLATE 002',
      title: 'Sculptural',
      titleHighlight: 'Grace',
      frenchSubtitle: 'Éclats Nocturnes & Or Sculpté 18K',
      tagline: 'Heavyweight 30 momme Mulberry silk cut on the bias, catching the dusk hour of Place Vendôme.',
      fabric: 'Mulberry Charmeuse 30mm',
      origin: 'Place Vendôme, Paris',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=2000&q=90',
      badge: 'Runway Specimen',
      featuredProductName: 'Como Midnight Silk Charmeuse Gown',
      featuredPrice: '$2,150'
    },
    {
      season: 'ISSUE 04 // SARTORIAL',
      plate: 'PLATE 003',
      title: 'Architectural',
      titleHighlight: 'Lines',
      frenchSubtitle: 'L’Élégance Pure et Intemporelle',
      tagline: 'Precision hourglass tailoring hand-canvassed in Italy. Engineered for sovereign presence and quiet luxury.',
      fabric: 'Super 150s Virgin Wool',
      origin: 'Milanese Tailoring House',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=2000&q=90',
      badge: 'Bespoke Specimen',
      featuredProductName: 'Sartorial Virgin Wool Structured Blazer',
      featuredPrice: '$1,890'
    }
  ];

  // Auto advance slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroCampaigns.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroCampaigns.length]);

  const current = heroCampaigns[activeSlide];

  return (
    <div id="hero-editorial-section" className="relative w-full bg-[#F5F2ED] text-[#1A1A1A] border-b border-[#1A1A1A1A] overflow-hidden">
      
      {/* Magazine Editorial Top Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
        
        {/* Editorial Subheader Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1A1A1A1A] pb-4 mb-8 text-[10px] tracking-[0.25em] uppercase font-medium text-[#1A1A1A99]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#1A1A1A]">{current.season}</span>
            <span>•</span>
            <span className="text-[#A68966] font-semibold">{current.plate}</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[#1A1A1A66]">
            <span>Material: {current.fabric}</span>
            <span>Origin: {current.origin}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A68966]"></span>
            <span>Parisian Atelier Specimen</span>
          </div>
        </div>

        {/* Hero Magazine Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Super Header Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#1A1A1A] px-2.5 py-1 bg-[#EBE8E3] rounded-sm border border-[#1A1A1A1A]">
                {current.badge}
              </span>
              <span className="text-[11px] font-serif italic text-[#A68966]">
                {current.frenchSubtitle}
              </span>
            </div>

            {/* Giant Editorial Heading */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-tight font-normal text-[#1A1A1A] mb-6">
              {current.title}<br />
              <span className="italic font-serif font-light text-[#A68966]">{current.titleHighlight}</span>
            </h1>

            {/* Editorial Body Text */}
            <p className="text-sm sm:text-base text-[#1A1A1A99] font-light leading-relaxed max-w-xl mb-8">
              {current.tagline}
            </p>

            {/* Actions: Direct Specimen Acquisition & Lookbook */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-explore-collection-btn"
                onClick={onExploreCollections}
                className="bg-[#1A1A1A] text-[#F5F2ED] px-8 py-3.5 text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[#333333] transition-colors rounded-none shadow-sm cursor-pointer"
              >
                Acquire Piece
              </button>

              <button
                id="hero-runway-lookbook-btn"
                onClick={onOpenRunway}
                className="flex items-center gap-3 group cursor-pointer px-3 py-2"
              >
                <div className="w-10 h-10 rounded-full border border-[#1A1A1A33] flex items-center justify-center group-hover:border-[#1A1A1A] group-hover:bg-[#EBE8E3] transition-all">
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]">
                  View Lookbook
                </span>
              </button>

              <button
                id="hero-bespoke-concierge-btn"
                onClick={onOpenBespokeModal}
                className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A66] hover:text-[#A68966] py-2 px-2 underline-offset-4 hover:underline transition-colors"
              >
                Atelier Fitting
              </button>
            </div>

            {/* Technical Specification Bento Card */}
            <div className="mt-10 pt-6 border-t border-[#1A1A1A1A] grid grid-cols-3 gap-4">
              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A66]">Couture Cut</span>
                <span className="text-xs font-serif font-medium text-[#1A1A1A] mt-0.5">Biella Hand-Craft</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A66]">Silk Weight</span>
                <span className="text-xs font-serif font-medium text-[#1A1A1A] mt-0.5">30 Momme Bias</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A66]">Edition</span>
                <span className="text-xs font-serif font-medium text-[#A68966] mt-0.5">Limited to 15 Ex.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photography Canvas & Featured Specimen Plate */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#EBE8E3] border border-[#1A1A1A1A] shadow-md group">
              
              {/* Campaign Image Carousel */}
              {heroCampaigns.map((camp, idx) => (
                <div
                  key={camp.title}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  />
                  {/* Subtle contrast gradient for editorial elegance */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                </div>
              ))}

              {/* Floating Specimen Badge (Top Left of image) */}
              <div className="absolute top-4 left-4 z-20 bg-[#F5F2ED]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#1A1A1A1A] text-[#1A1A1A]">
                <span className="text-[9px] uppercase tracking-[0.25em] font-bold">{current.plate}</span>
              </div>

              {/* Floating Clickable Garment Tag (Bottom of image) */}
              <div
                onClick={() => onSelectFeaturedProduct(featuredProduct)}
                className="absolute bottom-4 left-4 right-4 z-20 bg-[#F5F2ED]/95 hover:bg-[#FFFFFF] border border-[#1A1A1A1A] rounded-xl p-3 backdrop-blur-md shadow-lg transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={featuredProduct.images[0]}
                    alt={featuredProduct.name}
                    className="w-12 h-14 object-cover rounded-lg border border-[#1A1A1A1A]"
                  />
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#A68966] font-bold block">Featured Piece</span>
                    <h5 className="font-serif text-sm text-[#1A1A1A] font-medium">{featuredProduct.name}</h5>
                    <span className="text-xs text-[#1A1A1A99] font-sans font-semibold">${featuredProduct.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#F5F2ED] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#1A1A1A66]">
                0{activeSlide + 1} / 0{heroCampaigns.length}
              </div>

              <div className="flex items-center gap-2">
                {heroCampaigns.map((_, idx) => (
                  <button
                    key={idx}
                    id={`hero-slide-dot-${idx}`}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1 transition-all ${
                      idx === activeSlide ? 'w-8 bg-[#1A1A1A]' : 'w-3 bg-[#1A1A1A33] hover:bg-[#1A1A1A66]'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
