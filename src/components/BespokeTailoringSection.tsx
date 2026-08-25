import React, { useState } from 'react';
import { Scissors, Check, Calendar, Clock, MapPin, Sparkles, Send, Award, ShieldCheck } from 'lucide-react';

interface BespokeTailoringSectionProps {
  onOpenBookingModal: () => void;
}

export const BespokeTailoringSection: React.FC<BespokeTailoringSectionProps> = ({
  onOpenBookingModal
}) => {
  const bespokeSteps = [
    {
      num: '01',
      title: 'Private Anatomical Silhouette Study',
      desc: 'Our master tailor conducts a 38-point anatomical measurement in our private salon, mapping posture, shoulder slope, and natural movement.'
    },
    {
      num: '02',
      title: 'Exclusive Archive Mill Sourcing',
      desc: 'Access rare private mills in Biella and Lake Como—including limited-run 100% Vicuña, Super 200s Tasmanian wool, and custom jacquard silks.'
    },
    {
      num: '03',
      title: 'Hand-Canvassed Master Construction',
      desc: 'Over 65 hours of meticulous hand-stitching with floating horsehair canvas that molds organically to your silhouette over time.'
    },
    {
      num: '04',
      title: 'White-Glove Fitting & Archive Seal',
      desc: 'Two personalized fittings accompanied by champagne, culminating in our signature hand-waxed Maison archive garment trunk.'
    }
  ];

  return (
    <section id="bespoke-atelier-section" className="w-full py-24 bg-[#F5F2ED] relative overflow-hidden">
      
      {/* Subtle bronze ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A68966]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & CTA */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <Scissors className="w-4 h-4 text-[#A68966]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A68966] font-bold">
                Sur-Mesure & Haute Couture
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] font-normal leading-tight mb-4">
              Bespoke Atelier Service
            </h3>

            <p className="font-display italic text-lg sm:text-xl text-[#A68966] mb-6">
              "True luxury is not made for everyone. It is crafted exclusively for one."
            </p>

            <p className="text-sm text-[#1A1A1A99] font-light leading-relaxed mb-8">
              Experience the pinnacle of individualized sartorial tailoring. Whether commissioning a one-of-a-kind evening gown for the Venice Biennale or a hand-canvassed double-breasted tuxedo, our master artisans bring your exact vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                id="book-bespoke-fitting-btn"
                onClick={onOpenBookingModal}
                className="bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] py-3.5 px-7 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#A68966]" />
                <span>Reserve Private Fitting</span>
              </button>

              <div className="flex items-center gap-3 px-4 py-2 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A]">
                <ShieldCheck className="w-5 h-5 text-[#A68966]" />
                <div className="text-[11px]">
                  <p className="text-[#1A1A1A] font-medium">By Appointment Only</p>
                  <p className="text-[#1A1A1A66]">Paris • Milano • Tokyo • NYC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Step Bespoke Process Bento */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bespokeSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 bg-[#EBE8E3] hover:bg-[#FFFFFF] border border-[#1A1A1A1A] hover:border-[#1A1A1A33] rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <span className="font-mono text-xs text-[#A68966] font-bold tracking-widest mb-3 block">
                  PHASE {step.num}
                </span>
                <h4 className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#A68966] transition-colors mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[#1A1A1A99] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface BespokeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BespokeModal: React.FC<BespokeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Paris - Rue du Faubourg Saint-Honoré',
    service: 'Haute Couture Evening Gown',
    date: '2026-09-15',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      id="bespoke-reservation-modal"
      className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#F5F2ED] border border-[#1A1A1A1A] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1A1A1A66] hover:text-[#1A1A1A] transition-colors"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#A68966]/20 border border-[#A68966] rounded-full flex items-center justify-center mx-auto mb-4 text-[#A68966]">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">Fitting Request Received</h3>
            <p className="text-xs text-[#1A1A1A99] max-w-sm mx-auto leading-relaxed mb-6">
              Our Head of Clienteling will contact you at <strong className="text-[#1A1A1A]">{formData.email}</strong> within 12 hours to confirm your private salon reservation in {formData.city}.
            </p>
            <button
              onClick={onClose}
              className="bg-[#1A1A1A] text-[#F5F2ED] font-semibold py-2.5 px-6 rounded-full text-xs uppercase tracking-wider"
            >
              Return to Maison
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A68966] font-bold block mb-1">
                Private Appointment
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal">
                Reserve Salon Fitting
              </h3>
              <p className="text-xs text-[#1A1A1A99] mt-1 font-light">
                Complimentary private session with our senior master draper.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider mb-1 font-medium">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Lady Vivienne Vance"
                  className="w-full bg-[#EBE8E3] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>
              <div>
                <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="vance@domain.com"
                  className="w-full bg-[#EBE8E3] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider mb-1 font-medium">Select Atelier Salon</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#EBE8E3] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                >
                  <option>Paris - Rue du Faubourg Saint-Honoré</option>
                  <option>Milano - Via Monte Napoleone</option>
                  <option>Tokyo - Ginza Atelier</option>
                  <option>London - Mayfair Salon</option>
                  <option>New York - Madison Avenue</option>
                  <option>Virtual Haute Stylist (Remote)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider mb-1 font-medium">Commission Type</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#EBE8E3] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                >
                  <option>Haute Couture Evening Gown</option>
                  <option>Bespoke Double-Breasted Suit / Tuxedo</option>
                  <option>Cashmere Overcoat Commission</option>
                  <option>Bridal Atelier Couture</option>
                  <option>Personal Wardrobe Curation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider mb-1 font-medium">Preferred Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-[#EBE8E3] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
              />
            </div>

            <div>
              <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider mb-1 font-medium">Special Preferences / Occasion</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention silhouette preferences, upcoming galas, or archive fabric requests..."
                className="w-full bg-[#EBE8E3] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] font-semibold rounded-2xl text-xs uppercase tracking-[0.18em] transition-all shadow-md mt-2 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-[#A68966]" />
              <span>Submit Fitting Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
