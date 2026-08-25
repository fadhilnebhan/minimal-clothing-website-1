import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPitchModal: () => void;
  onOpenBespokeModal: () => void;
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPitchModal,
  onOpenBespokeModal,
  onNavigate
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer id="main-luxury-footer" className="w-full bg-[#EBE8E3] border-t border-[#1A1A1A1A] text-[#1A1A1A] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter & VIP Club Signup */}
        <div className="p-8 sm:p-12 bg-[#F5F2ED] border border-[#1A1A1A1A] rounded-3xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A68966] font-bold block mb-2">
              L'Archive Privée
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal">
              Subscribe to Private Salon Invitations
            </h4>
            <p className="text-xs text-[#1A1A1A99] mt-2 font-light leading-relaxed">
              Receive private preview access to limited seasonal drops, runway livestreams, and bespoke atelier appointments.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-[#1A1A1A] bg-[#A68966]/20 px-5 py-3 rounded-full border border-[#A68966]/40 text-xs font-medium">
                <Sparkles className="w-4 h-4 text-[#A68966]" />
                <span>You have been added to the Maison private guestbook.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-[#FFFFFF] border border-[#1A1A1A1A] text-[#1A1A1A] px-4 py-3 rounded-full text-xs placeholder-[#1A1A1A66] focus:outline-none focus:border-[#1A1A1A] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-xs"
                >
                  <span>Join Club</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs font-light">
          <div>
            <h5 className="font-serif text-[#1A1A1A] text-sm mb-4 uppercase tracking-widest font-semibold">Collections</h5>
            <ul className="space-y-2.5 text-[#1A1A1A99]">
              <li><button onClick={() => onNavigate('collections')} className="hover:text-[#1A1A1A] transition-colors">Haute Tailoring</button></li>
              <li><button onClick={() => onNavigate('collections')} className="hover:text-[#1A1A1A] transition-colors">Como Silk Gowns</button></li>
              <li><button onClick={() => onNavigate('collections')} className="hover:text-[#1A1A1A] transition-colors">Biella Cashmere</button></li>
              <li><button onClick={() => onNavigate('collections')} className="hover:text-[#1A1A1A] transition-colors">Florentine Leather</button></li>
              <li><button onClick={() => onNavigate('collections')} className="hover:text-[#1A1A1A] transition-colors">18K Solid Jewelry</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-[#1A1A1A] text-sm mb-4 uppercase tracking-widest font-semibold">Maison Services</h5>
            <ul className="space-y-2.5 text-[#1A1A1A99]">
              <li><button onClick={onOpenBespokeModal} className="hover:text-[#1A1A1A] transition-colors">Bespoke Sur-Mesure</button></li>
              <li><button onClick={onOpenBespokeModal} className="hover:text-[#1A1A1A] transition-colors">Virtual Salon Fitting</button></li>
              <li><button onClick={() => onNavigate('heritage')} className="hover:text-[#1A1A1A] transition-colors">Artisan Mills Archive</button></li>
              <li><span className="text-[#1A1A1A66]">Complimentary Alterations</span></li>
              <li><span className="text-[#1A1A1A66]">Archival Garment Care</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-[#1A1A1A] text-sm mb-4 uppercase tracking-widest font-semibold">Client Care</h5>
            <ul className="space-y-2.5 text-[#1A1A1A99]">
              <li><span className="text-[#1A1A1A99]">White-Glove Insured Courier</span></li>
              <li><span className="text-[#1A1A1A99]">Bespoke 24K Monogramming</span></li>
              <li><span className="text-[#1A1A1A99]">Certificate of Provenance</span></li>
              <li><span className="text-[#1A1A1A99]">30-Day Maison Returns</span></li>
              <li><span className="text-[#1A1A1A99]">VIP Concierge Desk</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-[#1A1A1A] text-sm mb-4 uppercase tracking-widest font-semibold">Freelancer Demo</h5>
            <p className="text-xs text-[#1A1A1A99] leading-relaxed mb-3">
              This flagship application was engineered as a high-fashion client showcase demo.
            </p>
            <button
              onClick={onOpenPitchModal}
              className="inline-flex items-center gap-1.5 text-xs text-[#A68966] font-semibold hover:underline"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me For Your Brand</span>
            </button>
          </div>
        </div>

        {/* Bottom Wordmark & Copyright */}
        <div className="pt-8 border-t border-[#1A1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1A1A1A66]">
          <div className="flex items-center gap-3">
            <span className="font-serif text-[#1A1A1A] tracking-[0.2em] font-normal uppercase text-sm">
              AURELIA & NOIR
            </span>
            <span>© 2026 Maison Aurelia & Noir. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Crafted by Fadhil Nebhan</span>
            <span>•</span>
            <button onClick={onOpenPitchModal} className="text-[#A68966] font-medium hover:underline">
              Client Freelance Showcase
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
