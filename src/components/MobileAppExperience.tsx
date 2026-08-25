import React, { useState } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  Heart, 
  Search, 
  Compass, 
  User, 
  Scissors, 
  Bell, 
  ArrowRight, 
  Check, 
  Play, 
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  QrCode
} from 'lucide-react';
import { Product, LookbookScene } from '../types';

interface MobileAppExperienceProps {
  products: Product[];
  lookbooks: LookbookScene[];
  onSelectProduct: (product: Product) => void;
  onQuickAddToBag: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenPitchModal: () => void;
}

export const MobileAppExperience: React.FC<MobileAppExperienceProps> = ({
  products,
  lookbooks,
  onSelectProduct,
  onQuickAddToBag,
  wishlistIds,
  onToggleWishlist,
  cartCount,
  onOpenCart,
  onOpenPitchModal
}) => {
  const [appTab, setAppTab] = useState<'feed' | 'lookbook' | 'bespoke' | 'saved' | 'vip'>('feed');
  const [activeStoryIdx, setActiveStoryIdx] = useState<number | null>(null);
  const [selectedAppCategory, setSelectedAppCategory] = useState<string>('all');
  const [applePaySuccess, setApplePaySuccess] = useState(false);

  const stories = [
    { id: 1, title: 'Runway SS26', author: 'Paris Live', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80', isLive: true },
    { id: 2, title: 'Como Silk', author: 'Mill Story', img: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'Atelier Biella', author: 'Crafting', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80' },
    { id: 4, title: '18K Gold', author: 'Vendôme', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80' }
  ];

  const filteredAppProducts = selectedAppCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedAppCategory);

  const triggerApplePay = () => {
    setApplePaySuccess(true);
    setTimeout(() => setApplePaySuccess(false), 2500);
  };

  return (
    <section id="mobile-app-showcase-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Editorial Header introducing the App Mode */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#EBE8E3] border border-[#1A1A1A1A] px-3.5 py-1 rounded-full text-xs text-[#A68966] font-semibold mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Luxury App Preview</span>
        </div>
        <h3 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] font-normal">
          Designed for Web & Native Mobile
        </h3>
        <p className="text-sm text-[#1A1A1A99] mt-2 font-light">
          Interact with this responsive iPhone frame below to test the dedicated mobile app experience featuring 60fps micro-animations, story reels, and 1-tap checkout.
        </p>
      </div>

      {/* Centered Device Showcase Frame */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Left Pitch Highlights for Fashion Brands */}
        <div className="w-full lg:w-1/3 space-y-6 order-2 lg:order-1">
          <div className="p-6 bg-[#EBE8E3] rounded-3xl border border-[#1A1A1A1A] shadow-xs">
            <h4 className="font-serif text-xl text-[#1A1A1A] mb-2 font-medium">Native App Architecture</h4>
            <p className="text-xs text-[#1A1A1A99] leading-relaxed">
              Delivering high-fashion boutique aesthetics with ultra-smooth gesture scrolling, push drop notifications, and private VIP member privileges.
            </p>
          </div>

          <div className="p-6 bg-[#EBE8E3] rounded-3xl border border-[#1A1A1A1A] shadow-xs">
            <h4 className="font-serif text-xl text-[#1A1A1A] mb-2 font-medium">Omnichannel Clienteling</h4>
            <p className="text-xs text-[#1A1A1A99] leading-relaxed">
              Seamlessly connects in-boutique styling consultations in Milan/Paris with real-time digital bag sync and bespoke sizing profiles.
            </p>
          </div>

          <div className="p-6 bg-[#F5F2ED] rounded-3xl border border-[#1A1A1A] shadow-md">
            <span className="text-[10px] uppercase tracking-widest text-[#A68966] font-bold block mb-1">
              Freelancer Client Note
            </span>
            <h4 className="font-serif text-base text-[#1A1A1A] mb-2 font-semibold">
              Ready to ship this for your label?
            </h4>
            <p className="text-xs text-[#1A1A1A99] mb-4 font-light leading-relaxed">
              I can customize branding, colors, CMS integrations, and deploy this for your brand on iOS, Android, and Web.
            </p>
            <button
              onClick={onOpenPitchModal}
              className="w-full py-2.5 bg-[#1A1A1A] text-[#F5F2ED] font-semibold text-xs rounded-xl uppercase tracking-wider hover:bg-[#333333] transition-colors"
            >
              Discuss Your Project
            </button>
          </div>
        </div>

        {/* Center Realistic iPhone Frame */}
        <div className="relative w-full max-w-[390px] h-[780px] bg-[#1A1A1A] rounded-[52px] p-3.5 shadow-[0_25px_70px_rgba(0,0,0,0.25)] border-[6px] border-[#333333] ring-1 ring-black/10 order-1 lg:order-2 flex flex-col justify-between overflow-hidden select-none">
          
          {/* iOS Dynamic Island & Status Bar */}
          <div className="relative w-full pt-1 pb-2 px-6 flex items-center justify-between z-30 bg-[#F5F2ED] text-[#1A1A1A]">
            <span className="text-[11px] font-semibold font-mono text-[#1A1A1A]">9:41</span>
            
            {/* Dynamic Island Pill */}
            <div className="w-24 h-5 bg-[#1A1A1A] rounded-full flex items-center justify-end px-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            {/* Battery / Wifi / Cellular Icons */}
            <div className="flex items-center gap-1.5 text-[#1A1A1A] text-[10px] font-medium">
              <span>5G</span>
              <span className="font-mono">100%</span>
            </div>
          </div>

          {/* App Top Bar */}
          <div className="px-4 py-2 border-b border-[#1A1A1A1A] flex items-center justify-between bg-[#F5F2ED]/95 backdrop-blur-md z-20">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-sm font-medium tracking-[0.2em] uppercase text-[#1A1A1A]">
                AURELIA & NOIR
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onOpenCart} className="relative p-1.5 text-[#1A1A1A]">
                <ShoppingBag className="w-4 h-4 text-[#A68966]" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#1A1A1A] text-[#F5F2ED] text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* App Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-5 bg-[#F5F2ED] scrollbar-none text-[#1A1A1A]">
            
            {/* Tab: Feed */}
            {appTab === 'feed' && (
              <>
                {/* Haute Stories Reel */}
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#1A1A1A99] mb-2 px-1">
                    <span className="uppercase tracking-wider font-bold text-[#A68966]">Atelier Live Stories</span>
                    <span className="font-medium">View All</span>
                  </div>
                  <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                    {stories.map((story) => (
                      <div
                        key={story.id}
                        className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
                      >
                        <div className={`p-0.5 rounded-full ${story.isLive ? 'bg-gradient-to-tr from-[#A68966] to-amber-700' : 'bg-[#1A1A1A33]'}`}>
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#F5F2ED]">
                            <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <span className="text-[10px] text-[#1A1A1A] mt-1 font-medium tracking-wide">{story.author}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hero App Banner */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#1A1A1A1A] shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
                    alt="Collection SS26"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[9px] uppercase tracking-widest text-[#F5F2ED] font-bold">Drop 01</span>
                    <h5 className="font-serif text-base text-white leading-tight">L'Atelier Cashmere</h5>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-[#F5F2ED] font-semibold">$3,450</span>
                      <button
                        onClick={() => onSelectProduct(products[0])}
                        className="bg-[#FFFFFF] text-black text-[10px] uppercase font-bold py-1 px-3 rounded-full shadow-xs"
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                </div>

                {/* App Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {['all', 'tailoring', 'silk-evening', 'cashmere-knit', 'leather-accessories'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedAppCategory(cat)}
                      className={`whitespace-nowrap px-3 py-1 rounded-full text-[10px] uppercase tracking-wider ${
                        selectedAppCategory === cat
                          ? 'bg-[#1A1A1A] text-[#F5F2ED] font-semibold'
                          : 'bg-[#EBE8E3] text-[#1A1A1A99] border border-[#1A1A1A1A]'
                      }`}
                    >
                      {cat.replace('-', ' ')}
                    </button>
                  ))}
                </div>

                {/* Vertical App Cards */}
                <div className="space-y-4">
                  {filteredAppProducts.map((p) => {
                    const isFav = wishlistIds.includes(p.id);
                    return (
                      <div
                        key={p.id}
                        onClick={() => onSelectProduct(p)}
                        className="p-3 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A] flex gap-3 cursor-pointer hover:border-[#1A1A1A33] transition-all shadow-xs"
                      >
                        <img src={p.images[0]} alt={p.name} className="w-20 h-24 object-cover rounded-xl border border-[#1A1A1A1A]" />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between">
                              <span className="text-[9px] uppercase tracking-wider text-[#A68966] font-bold">
                                {p.category}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onToggleWishlist(p.id);
                                }}
                                className="text-[#1A1A1A66] p-0.5"
                              >
                                <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-[#A68966] text-[#A68966]' : ''}`} />
                              </button>
                            </div>
                            <h6 className="font-serif text-xs text-[#1A1A1A] font-medium leading-snug line-clamp-1">{p.name}</h6>
                            <p className="text-[10px] text-[#1A1A1A99] line-clamp-1">{p.subtitle}</p>
                          </div>

                          <div className="flex items-center justify-between pt-1 border-t border-[#1A1A1A1A]">
                            <span className="text-xs font-semibold text-[#1A1A1A]">${p.price.toLocaleString()}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onQuickAddToBag(p);
                              }}
                              className="bg-[#1A1A1A] text-[#F5F2ED] text-[10px] font-semibold uppercase px-2.5 py-1 rounded-lg flex items-center gap-1 hover:bg-[#333333]"
                            >
                              <ShoppingBag className="w-3 h-3 text-[#A68966]" />
                              <span>Bag</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* Tab: Lookbook */}
            {appTab === 'lookbook' && (
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#A68966] font-bold block">
                  Runway Lookbook SS26
                </span>
                {lookbooks.map((lb) => (
                  <div key={lb.id} className="relative rounded-2xl overflow-hidden border border-[#1A1A1A1A] shadow-xs">
                    <img src={lb.image} alt={lb.title} className="w-full aspect-[4/3] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                      <span className="text-[9px] uppercase tracking-widest text-[#F5F2ED] font-semibold">{lb.season}</span>
                      <h5 className="font-serif text-sm text-white">{lb.title}</h5>
                      <span className="text-[10px] text-[#F5F2ED]/80">{lb.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Bespoke */}
            {appTab === 'bespoke' && (
              <div className="p-4 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A] space-y-3 text-center">
                <Scissors className="w-8 h-8 text-[#A68966] mx-auto" />
                <h5 className="font-serif text-base text-[#1A1A1A] font-medium">VIP Mobile Concierge</h5>
                <p className="text-xs text-[#1A1A1A99] leading-relaxed">
                  Book instant salon appointments in Paris or Milano directly through the mobile VIP clienteling pass.
                </p>
                <div className="pt-2">
                  <button
                    onClick={triggerApplePay}
                    className="w-full py-2.5 bg-[#1A1A1A] text-[#F5F2ED] font-semibold rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-[#333333]"
                  >
                    <span>Instant Apple Pay Atelier Pass</span>
                  </button>
                  {applePaySuccess && (
                    <p className="text-[11px] text-emerald-700 font-semibold mt-2 flex items-center justify-center gap-1">
                      <Check className="w-3.5 h-3.5" /> VIP Pass Added to Apple Wallet
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Tab: Saved / Wishlist */}
            {appTab === 'saved' && (
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#A68966] font-bold block">
                  Saved Pieces ({wishlistIds.length})
                </span>
                {wishlistIds.length === 0 ? (
                  <p className="text-xs text-[#1A1A1A66] text-center py-8">No pieces saved yet.</p>
                ) : (
                  products.filter(p => wishlistIds.includes(p.id)).map(p => (
                    <div key={p.id} className="flex gap-3 p-2 bg-[#EBE8E3] rounded-xl border border-[#1A1A1A1A]">
                      <img src={p.images[0]} alt={p.name} className="w-12 h-14 object-cover rounded-lg border border-[#1A1A1A1A]" />
                      <div className="flex-1 flex flex-col justify-center">
                        <h6 className="font-serif text-xs text-[#1A1A1A] font-medium truncate">{p.name}</h6>
                        <span className="text-xs font-semibold text-[#1A1A1A]">${p.price.toLocaleString()}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* iOS Native Style Bottom Navigation Bar */}
          <div className="px-3 py-2.5 border-t border-[#1A1A1A1A] bg-[#F5F2ED] flex items-center justify-around z-30">
            <button
              onClick={() => setAppTab('feed')}
              className={`flex flex-col items-center gap-0.5 text-[9px] uppercase tracking-wider transition-colors ${
                appTab === 'feed' ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A66]'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Explore</span>
            </button>

            <button
              onClick={() => setAppTab('lookbook')}
              className={`flex flex-col items-center gap-0.5 text-[9px] uppercase tracking-wider transition-colors ${
                appTab === 'lookbook' ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A66]'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>Runway</span>
            </button>

            <button
              onClick={() => setAppTab('bespoke')}
              className={`flex flex-col items-center gap-0.5 text-[9px] uppercase tracking-wider transition-colors ${
                appTab === 'bespoke' ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A66]'
              }`}
            >
              <Scissors className="w-4 h-4" />
              <span>Atelier</span>
            </button>

            <button
              onClick={() => setAppTab('saved')}
              className={`flex flex-col items-center gap-0.5 text-[9px] uppercase tracking-wider transition-colors ${
                appTab === 'saved' ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A66]'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Saved</span>
            </button>
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="w-32 h-1 bg-[#1A1A1A]/40 rounded-full mx-auto mb-1"></div>
        </div>

        {/* Right Feature Highlights */}
        <div className="w-full lg:w-1/3 space-y-6 order-3">
          <div className="p-6 bg-[#EBE8E3] rounded-3xl border border-[#1A1A1A1A] shadow-xs">
            <h4 className="font-serif text-xl text-[#1A1A1A] mb-2 font-medium">Conversion Engineered UX</h4>
            <p className="text-xs text-[#1A1A1A99] leading-relaxed">
              Tested with high-ticket luxury shoppers: sticky buy bars, instant monogram visualizers, and minimal friction single-page checkout flows.
            </p>
          </div>

          <div className="p-6 bg-[#EBE8E3] rounded-3xl border border-[#1A1A1A1A] shadow-xs">
            <h4 className="font-serif text-xl text-[#1A1A1A] mb-2 font-medium">Modern Technology Stack</h4>
            <p className="text-xs text-[#1A1A1A99] leading-relaxed">
              Built with React 19, TypeScript, Tailwind CSS, and Motion physics engine. Ready for headless Shopify Plus, Stripe, Medusa, or Supabase.
            </p>
          </div>

          <div className="p-6 bg-[#EBE8E3] rounded-3xl border border-[#1A1A1A1A] flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#A68966]/20 border border-[#A68966] flex items-center justify-center text-[#A68966] flex-shrink-0">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-serif text-sm text-[#1A1A1A] font-semibold">Live Client Presentation Ready</h5>
              <p className="text-[11px] text-[#1A1A1A99]">Designed specifically for presenting to founders, creative directors, and luxury fashion labels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
