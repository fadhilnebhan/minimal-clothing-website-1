import React, { useState } from 'react';
import { Sparkles, ChevronRight, ChevronLeft, ShoppingBag, Eye, MapPin } from 'lucide-react';
import { LookbookScene, Product } from '../types';

interface LookbookHotspotsProps {
  scenes: LookbookScene[];
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickAddToBag: (product: Product) => void;
}

export const LookbookHotspots: React.FC<LookbookHotspotsProps> = ({
  scenes,
  allProducts,
  onSelectProduct,
  onQuickAddToBag
}) => {
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const currentScene = scenes[activeSceneIdx];

  const handlePrev = () => {
    setActiveSceneIdx((prev) => (prev === 0 ? scenes.length - 1 : prev - 1));
    setActiveHotspotId(null);
  };

  const handleNext = () => {
    setActiveSceneIdx((prev) => (prev === scenes.length - 1 ? 0 : prev + 1));
    setActiveHotspotId(null);
  };

  return (
    <section id="runway-lookbook-section" className="w-full py-24 bg-[#EBE8E3] border-y border-[#1A1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-[1px] bg-[#A68966]"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A68966] font-bold">Editorial Runway Experience</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] font-normal tracking-[0.02em]">
              The Seasonal Lookbook
            </h3>
            <p className="text-sm text-[#1A1A1A99] mt-2 font-light max-w-xl">
              Tap the interactive markers on each runway look to inspect garments, provenance, and acquisition options.
            </p>
          </div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-[#1A1A1A66] font-mono">
              0{activeSceneIdx + 1} / 0{scenes.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                id="lookbook-prev-btn"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#F5F2ED] hover:bg-[#FFFFFF] border border-[#1A1A1A1A] text-[#1A1A1A] flex items-center justify-center transition-colors shadow-xs"
                aria-label="Previous Look"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="lookbook-next-btn"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#F5F2ED] hover:bg-[#FFFFFF] border border-[#1A1A1A1A] text-[#1A1A1A] flex items-center justify-center transition-colors shadow-xs"
                aria-label="Next Look"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Main Canvas */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/10] rounded-3xl overflow-hidden border border-[#1A1A1A1A] bg-[#F5F2ED] shadow-lg">
          <img
            src={currentScene.image}
            alt={currentScene.title}
            className="w-full h-full object-cover object-center brightness-[0.9] contrast-[1.03] transition-all duration-700"
          />

          {/* Scene Vignette and Metadata Box */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none"></div>

          <div className="absolute bottom-6 left-6 max-w-md z-10 p-6 bg-[#F5F2ED]/95 backdrop-blur-md rounded-2xl border border-[#1A1A1A1A] shadow-md">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A68966] font-bold block mb-1">
              {currentScene.season}
            </span>
            <h4 className="font-serif text-2xl text-[#1A1A1A] font-normal mb-1">
              {currentScene.title}
            </h4>
            <div className="flex items-center gap-2 text-xs text-[#1A1A1A99] mb-2 font-light">
              <MapPin className="w-3.5 h-3.5 text-[#A68966]" />
              <span>{currentScene.location}</span>
            </div>
            <p className="text-xs text-[#1A1A1A99] font-light leading-relaxed">
              {currentScene.description}
            </p>
          </div>

          {/* Interactive Hotspot Pins */}
          {currentScene.hotspots.map((hs) => {
            const product = allProducts.find((p) => p.id === hs.productId);
            const isOpen = activeHotspotId === hs.id;

            return (
              <div
                key={hs.id}
                style={{ top: `${hs.top}%`, left: `${hs.left}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                {/* Pulsing Pin Button */}
                <button
                  id={`hotspot-pin-${hs.id}`}
                  onClick={() => setActiveHotspotId(isOpen ? null : hs.id)}
                  className="relative group focus:outline-none"
                  aria-label={`Inspect ${hs.label}`}
                >
                  <span className="absolute -inset-2 rounded-full bg-[#A68966]/40 animate-ping"></span>
                  <div className="relative w-8 h-8 rounded-full bg-[#F5F2ED] border-2 border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] shadow-xl group-hover:scale-110 transition-transform">
                    <Sparkles className="w-3.5 h-3.5 text-[#A68966]" />
                  </div>
                </button>

                {/* Floating Product Popover Card */}
                {isOpen && product && (
                  <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 w-64 bg-[#F5F2ED]/98 backdrop-blur-xl border border-[#1A1A1A1A] rounded-2xl p-4 shadow-2xl z-30 animate-fadeIn text-[#1A1A1A]">
                    <div className="flex gap-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-16 h-20 object-cover rounded-xl border border-[#1A1A1A1A]"
                      />
                      <div className="flex flex-col justify-between overflow-hidden">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-[#A68966] font-bold block">
                            Runway Piece
                          </span>
                          <h5 className="font-serif text-xs text-[#1A1A1A] truncate font-medium">
                            {product.name}
                          </h5>
                          <span className="text-xs font-semibold text-[#1A1A1A] mt-1 block">
                            ${product.price.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onSelectProduct(product)}
                            className="flex-1 bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] text-[10px] uppercase font-semibold py-1.5 px-2 rounded-lg text-center transition-colors"
                          >
                            Inspect
                          </button>
                          <button
                            onClick={() => onQuickAddToBag(product)}
                            className="bg-[#EBE8E3] hover:bg-[#E5E2DC] text-[#1A1A1A] p-1.5 rounded-lg border border-[#1A1A1A1A] transition-colors"
                            title="Add to Bag"
                          >
                            <ShoppingBag className="w-3.5 h-3.5 text-[#A68966]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Lookbook Seasonal Strip Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {scenes.map((scene, idx) => (
            <div
              key={scene.id}
              onClick={() => {
                setActiveSceneIdx(idx);
                setActiveHotspotId(null);
              }}
              className={`flex items-center gap-4 p-3 rounded-2xl border cursor-pointer transition-all ${
                activeSceneIdx === idx
                  ? 'bg-[#F5F2ED] border-[#1A1A1A] shadow-xs'
                  : 'bg-[#F5F2ED]/60 border-[#1A1A1A1A] hover:bg-[#F5F2ED]'
              }`}
            >
              <img src={scene.image} alt={scene.title} className="w-14 h-14 object-cover rounded-xl" />
              <div>
                <span className="text-[10px] text-[#A68966] uppercase tracking-widest font-mono font-bold">0{idx + 1}</span>
                <h5 className="font-serif text-sm text-[#1A1A1A] font-medium">{scene.title}</h5>
                <span className="text-[11px] text-[#1A1A1A99] font-light">{scene.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
