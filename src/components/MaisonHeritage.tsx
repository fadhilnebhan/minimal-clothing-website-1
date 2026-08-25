import React from 'react';
import { Sparkles, Award, Shield, Scissors, Globe } from 'lucide-react';

export const MaisonHeritage: React.FC = () => {
  return (
    <section id="heritage-section" className="w-full py-24 bg-[#F5F2ED] border-t border-[#1A1A1A1A] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-[1px] bg-[#A68966]"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#A68966] font-bold">
                L’Art et la Matière
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] font-normal leading-tight">
              An Obsession With Uncompromising Purity
            </h3>

            <p className="font-display italic text-lg sm:text-xl text-[#A68966] font-light">
              "We do not design for passing seasons. We sculpt architectural garments made to outlive us all."
            </p>

            <p className="text-sm text-[#1A1A1A99] font-light leading-relaxed">
              Founded at the intersection of Parisian haute couture and Italian sartorial craftsmanship, Aurelia & Noir exists to reject mass disposable fashion. Every seam is finished by hand, every button carved from natural horn or forged in solid gold, and every fabric sourced directly from historic European family-run mills.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1A1A1A1A]">
              <div>
                <span className="font-serif text-3xl text-[#1A1A1A] block mb-1 font-semibold">100%</span>
                <span className="text-[11px] text-[#1A1A1A66] uppercase tracking-wider font-medium">Traceable Mills</span>
              </div>
              <div>
                <span className="font-serif text-3xl text-[#1A1A1A] block mb-1 font-semibold">65+ hrs</span>
                <span className="text-[11px] text-[#1A1A1A66] uppercase tracking-wider font-medium">Hand-Stitching</span>
              </div>
              <div>
                <span className="font-serif text-3xl text-[#1A1A1A] block mb-1 font-semibold">0%</span>
                <span className="text-[11px] text-[#1A1A1A66] uppercase tracking-wider font-medium">Synthetics</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-[#1A1A1A1A] shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=85"
                  alt="Tailor at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A]">
                <span className="text-[10px] uppercase text-[#A68966] tracking-wider font-bold block mb-1">Lanificio di Biella</span>
                <p className="text-xs text-[#1A1A1A99] font-light">Double-faced 680gsm Mongolian Cashmere woven on historic shuttle looms.</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A]">
                <span className="text-[10px] uppercase text-[#A68966] tracking-wider font-bold block mb-1">Lake Como Mills</span>
                <p className="text-xs text-[#1A1A1A99] font-light">30 Momme Mulberry Silk Charmeuse dyed with organic Alpine mineral pigments.</p>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-[#1A1A1A1A] shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=85"
                  alt="Silk and Tailoring"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Global Ateliers Strip */}
        <div className="p-8 bg-[#EBE8E3] rounded-3xl border border-[#1A1A1A1A] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-xs">
          <div>
            <span className="text-xs text-[#A68966] uppercase tracking-widest font-mono font-bold">PARIS</span>
            <h5 className="font-serif text-lg text-[#1A1A1A] mt-1 font-medium">Place Vendôme</h5>
            <p className="text-xs text-[#1A1A1A66] mt-0.5">Haute Couture & Goldsmithing</p>
          </div>

          <div>
            <span className="text-xs text-[#A68966] uppercase tracking-widest font-mono font-bold">MILANO</span>
            <h5 className="font-serif text-lg text-[#1A1A1A] mt-1 font-medium">Via Monte Napoleone</h5>
            <p className="text-xs text-[#1A1A1A66] mt-0.5">Sartorial Tailoring & Cashmere</p>
          </div>

          <div>
            <span className="text-xs text-[#A68966] uppercase tracking-widest font-mono font-bold">FIRENZE</span>
            <h5 className="font-serif text-lg text-[#1A1A1A] mt-1 font-medium">Piazza della Signoria</h5>
            <p className="text-xs text-[#1A1A1A66] mt-0.5">Vegetable-Tanned Leathergoods</p>
          </div>

          <div>
            <span className="text-xs text-[#A68966] uppercase tracking-widest font-mono font-bold">TOKYO</span>
            <h5 className="font-serif text-lg text-[#1A1A1A] mt-1 font-medium">Ginza Atelier</h5>
            <p className="text-xs text-[#1A1A1A66] mt-0.5">3D Precision Seamless Knitwear</p>
          </div>
        </div>
      </div>
    </section>
  );
};
