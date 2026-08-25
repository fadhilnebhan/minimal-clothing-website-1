import React, { useState } from 'react';
import { Sparkles, Check, Send, Code, Smartphone, Globe, Shield, MessageSquare, Mail, Copy, CheckCircle2, ChevronRight } from 'lucide-react';
import { FREELANCE_SERVICES } from '../data/products';
import { BrandThemeMode } from '../types';

interface FreelanceClientPitchModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandTheme: BrandThemeMode;
  onSelectBrandTheme: (theme: BrandThemeMode) => void;
}

export const FreelanceClientPitchModal: React.FC<FreelanceClientPitchModalProps> = ({
  isOpen,
  onClose,
  brandTheme,
  onSelectBrandTheme
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'pitch' | 'services' | 'inquire' | 'theme'>('pitch');
  const [formData, setFormData] = useState({
    clientName: '',
    brandName: '',
    email: '',
    serviceType: 'E-commerce Flagship + Mobile App',
    timeline: '3–4 weeks',
    budget: '$5,000 – $15,000+',
    message: ''
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyScope = () => {
    const scopeText = `Fashion Brand Project Inquiry:
Brand: ${formData.brandName || '[Your Brand Name]'}
Target Scope: ${formData.serviceType}
Timeline: ${formData.timeline}
Budget: ${formData.budget}
Notes: ${formData.message || 'We love the Aurelia & Noir interactive demo and want to build our brand experience with you.'}`;
    navigator.clipboard.writeText(scopeText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      id="freelance-client-pitch-modal"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F5F2ED] border border-[#1A1A1A1A] rounded-3xl overflow-hidden shadow-2xl my-auto text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#EBE8E3] border-b border-[#1A1A1A1A] relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F5F2ED] hover:bg-[#FFFFFF] text-[#1A1A1A] flex items-center justify-center transition-colors border border-[#1A1A1A1A]"
          >
            ✕
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] bg-[#1A1A1A] text-[#F5F2ED] px-2.5 py-0.5 rounded-full">
              Freelancer Client Demo
            </span>
            <span className="text-xs text-[#1A1A1A99] font-medium">• Built by Fadhil Nebhan</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl text-[#1A1A1A] font-normal leading-tight">
            "This is built for your clothing brand, as a demonstration."
          </h3>
          <p className="text-xs sm:text-sm text-[#1A1A1A99] mt-2 font-light max-w-2xl leading-relaxed">
            If you are a fashion label, boutique, or luxury brand founder seeking a tailored digital flagship and native mobile app, this demo showcases the level of craftsmanship, speed, and conversion precision we can build for you.
          </p>

          {/* Navigation Sub-tabs */}
          <div className="flex items-center gap-3 mt-6 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('pitch')}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all font-medium whitespace-nowrap ${
                activeTab === 'pitch' ? 'bg-[#1A1A1A] text-[#F5F2ED] shadow-xs' : 'bg-[#F5F2ED] text-[#1A1A1A99] hover:text-[#1A1A1A] border border-[#1A1A1A1A]'
              }`}
            >
              Why Choose This Build
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all font-medium whitespace-nowrap ${
                activeTab === 'services' ? 'bg-[#1A1A1A] text-[#F5F2ED] shadow-xs' : 'bg-[#F5F2ED] text-[#1A1A1A99] hover:text-[#1A1A1A] border border-[#1A1A1A1A]'
              }`}
            >
              Services & Timelines
            </button>
            <button
              onClick={() => setActiveTab('theme')}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all font-medium whitespace-nowrap ${
                activeTab === 'theme' ? 'bg-[#1A1A1A] text-[#F5F2ED] shadow-xs' : 'bg-[#F5F2ED] text-[#1A1A1A99] hover:text-[#1A1A1A] border border-[#1A1A1A1A]'
              }`}
            >
              Live Brand Customizer
            </button>
            <button
              onClick={() => setActiveTab('inquire')}
              className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all font-semibold whitespace-nowrap ${
                activeTab === 'inquire' ? 'bg-[#A68966] text-[#F5F2ED]' : 'bg-[#F5F2ED] text-[#A68966] border border-[#A68966]/40'
              }`}
            >
              Start Project Inquiry
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto bg-[#F5F2ED]">
          
          {/* TAB 1: Pitch & Quality Overview */}
          {activeTab === 'pitch' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A]">
                  <Globe className="w-6 h-6 text-[#A68966] mb-3" />
                  <h4 className="font-serif text-base text-[#1A1A1A] font-semibold mb-1">Tailored for Web & App</h4>
                  <p className="text-xs text-[#1A1A1A99] font-light leading-relaxed">
                    Zero template compromises. Custom typography, fluid 60fps animations, and mobile touch micro-interactions.
                  </p>
                </div>

                <div className="p-5 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A]">
                  <Code className="w-6 h-6 text-[#A68966] mb-3" />
                  <h4 className="font-serif text-base text-[#1A1A1A] font-semibold mb-1">Modern Headless Stack</h4>
                  <p className="text-xs text-[#1A1A1A99] font-light leading-relaxed">
                    Connect seamlessly with Shopify Plus, Stripe, Medusa, Supabase, or custom headless CMS solutions.
                  </p>
                </div>

                <div className="p-5 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A]">
                  <Sparkles className="w-6 h-6 text-[#A68966] mb-3" />
                  <h4 className="font-serif text-base text-[#1A1A1A] font-semibold mb-1">Luxury Conversion UX</h4>
                  <p className="text-xs text-[#1A1A1A99] font-light leading-relaxed">
                    Hotspot runway lookbooks, real-time monogram stamp previews, and bespoke size/fit concierges.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-serif text-lg text-[#1A1A1A] font-medium">"Interested in building this for your label?"</h5>
                  <p className="text-xs text-[#1A1A1A99] mt-1 font-light">
                    Let's collaborate to bring your brand's unique seasonal collections and identity to life.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('inquire')}
                  className="bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] font-semibold px-6 py-3 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-colors"
                >
                  Book Kickoff Consultation
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Services & Timelines */}
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FREELANCE_SERVICES.map((s, idx) => (
                <div key={idx} className="p-5 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-base text-[#1A1A1A] font-semibold">{s.title}</h4>
                      <span className="text-[10px] text-[#A68966] font-mono font-bold bg-[#A68966]/15 px-2 py-0.5 rounded border border-[#A68966]/30">
                        {s.timeline}
                      </span>
                    </div>
                    <p className="text-xs text-[#1A1A1A99] font-light leading-relaxed mb-4">{s.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1A1A1A1A]">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] bg-[#F5F2ED] text-[#1A1A1A] border border-[#1A1A1A1A] px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Live Brand Customizer */}
          {activeTab === 'theme' && (
            <div className="space-y-6">
              <p className="text-xs text-[#1A1A1A99] leading-relaxed">
                Experience how flexibly this design architecture adapts to your brand's specific creative direction and color atmosphere:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => onSelectBrandTheme('editorial-aesthetic')}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    brandTheme === 'editorial-aesthetic'
                      ? 'bg-[#EBE8E3] border-[#1A1A1A] shadow-md'
                      : 'bg-[#F5F2ED] border-[#1A1A1A1A] hover:border-[#1A1A1A66]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-4 rounded-full bg-[#F5F2ED] border border-[#1A1A1A]/30"></span>
                    <span className="w-4 h-4 rounded-full bg-[#A68966]"></span>
                  </div>
                  <h5 className="font-serif text-sm text-[#1A1A1A] font-semibold">Editorial Aesthetic</h5>
                  <p className="text-[11px] text-[#1A1A1A99] mt-1">Light linen canvas, high contrast serif typography, and bronze gold accents.</p>
                </button>

                <button
                  onClick={() => onSelectBrandTheme('noir-obsidian')}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    brandTheme === 'noir-obsidian'
                      ? 'bg-[#EBE8E3] border-[#1A1A1A] shadow-md'
                      : 'bg-[#F5F2ED] border-[#1A1A1A1A] hover:border-[#1A1A1A66]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-4 rounded-full bg-[#0c0c0e] border border-white/20"></span>
                    <span className="w-4 h-4 rounded-full bg-[#d4af37]"></span>
                  </div>
                  <h5 className="font-serif text-sm text-[#1A1A1A] font-semibold">Obsidian Noir</h5>
                  <p className="text-[11px] text-[#1A1A1A99] mt-1">Midnight editorial minimalism with 24k gold accents.</p>
                </button>

                <button
                  onClick={() => onSelectBrandTheme('emerald-couture')}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    brandTheme === 'emerald-couture'
                      ? 'bg-[#EBE8E3] border-[#1A1A1A] shadow-md'
                      : 'bg-[#F5F2ED] border-[#1A1A1A1A] hover:border-[#1A1A1A66]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-4 rounded-full bg-[#0f382a]"></span>
                    <span className="w-4 h-4 rounded-full bg-[#dfd3c3]"></span>
                  </div>
                  <h5 className="font-serif text-sm text-[#1A1A1A] font-semibold">Emerald Atelier</h5>
                  <p className="text-[11px] text-[#1A1A1A99] mt-1">Regal botanical tones inspired by Lake Como villas.</p>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: Inquire / Contact Form */}
          {activeTab === 'inquire' && (
            <div>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-700 border border-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#1A1A1A] mb-1 font-semibold">Inquiry Sent Successfully</h4>
                  <p className="text-xs text-[#1A1A1A99] max-w-md mx-auto leading-relaxed mb-6">
                    Thank you! I will review your clothing brand requirements and reply via email within 24 hours with a project proposal and timeline outline.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-[#1A1A1A] text-[#F5F2ED] font-semibold text-xs uppercase px-6 py-2.5 rounded-full"
                  >
                    Close Demo Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider font-semibold mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        placeholder="e.g. Fadhil / Brand Founder"
                        className="w-full bg-[#FFFFFF] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider font-semibold mb-1">Brand Name / Label</label>
                      <input
                        type="text"
                        required
                        value={formData.brandName}
                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                        placeholder="e.g. Maison Atelier"
                        className="w-full bg-[#FFFFFF] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider font-semibold mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@brand.com"
                        className="w-full bg-[#FFFFFF] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider font-semibold mb-1">Target Scope</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                      >
                        <option>E-commerce Flagship + Mobile App</option>
                        <option>Web E-Commerce Store Only</option>
                        <option>Native iOS/Android App Only</option>
                        <option>Interactive Lookbook & 3D Fitting Room</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider font-semibold mb-1">Target Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-[#FFFFFF] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                      >
                        <option>2–3 weeks (Fast Launch)</option>
                        <option>3–5 weeks (Full Flagship)</option>
                        <option>6+ weeks (Custom Headless & App)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#1A1A1A99] uppercase tracking-wider font-semibold mb-1">Project Details / Requirements</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your brand, product categories, or specific design preferences..."
                      className="w-full bg-[#FFFFFF] border border-[#1A1A1A1A] rounded-xl px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-[#1A1A1A] text-[#F5F2ED] font-semibold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#333333] transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Request</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyScope}
                      className="py-3.5 px-5 bg-[#EBE8E3] hover:bg-[#DDD9D2] text-[#1A1A1A] rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-[#1A1A1A1A] font-medium"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                      <span>{isCopied ? 'Scope Copied!' : 'Copy Scope Brief'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
