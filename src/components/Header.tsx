import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Smartphone, 
  Monitor, 
  Sparkles, 
  ChevronDown 
} from 'lucide-react';
import { ViewportMode, BrandThemeMode, Product } from '../types';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSelectProduct: (product: Product) => void;
  allProducts: Product[];
  viewportMode: ViewportMode;
  onToggleViewportMode: (mode: ViewportMode) => void;
  brandTheme: BrandThemeMode;
  onSelectBrandTheme: (theme: BrandThemeMode) => void;
  currency: string;
  onSelectCurrency: (curr: string) => void;
  onOpenPitchModal: () => void;
  onOpenBespokeModal: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSelectProduct,
  allProducts,
  viewportMode,
  onToggleViewportMode,
  currency,
  onSelectCurrency,
  onOpenPitchModal,
  activeSection,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchResults = searchQuery.trim() === ''
    ? []
    : allProducts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.fabricDetails.composition.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const currencies = [
    { code: 'USD', symbol: '$', name: 'USD ($)' },
    { code: 'EUR', symbol: '€', name: 'EUR (€)' },
    { code: 'GBP', symbol: '£', name: 'GBP (£)' },
    { code: 'JPY', symbol: '¥', name: 'JPY (¥)' },
    { code: 'AED', symbol: 'د.إ', name: 'AED (د.إ)' }
  ];

  // Clean, classic, intuitive navigation items
  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'collections', label: 'Products' },
    { id: 'runway', label: 'Lookbook' },
    { id: 'bespoke', label: 'Bespoke' },
    { id: 'heritage', label: 'Story' }
  ];

  return (
    <>
      {/* Top Announcement & Viewport Bar */}
      <div id="top-announcement-bar" className="w-full bg-[#EBE8E3] border-b border-[#1A1A1A1A] text-xs text-[#1A1A1A99] py-2 px-4 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A68966] animate-pulse"></span>
            <span className="text-[#1A1A1A] font-semibold tracking-wider uppercase text-[10px]">
              Complimentary Shipping
            </span>
            <span className="text-[#1A1A1A99] font-light hidden sm:inline">• Free worldwide courier & custom monogramming</span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            {/* Freelance Demo Callout */}
            <button
              id="freelance-demo-pill-btn"
              onClick={onOpenPitchModal}
              className="flex items-center gap-1.5 bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] px-3 py-1 rounded-full transition-all font-medium cursor-pointer shadow-xs"
              title="View Client Showcase Details"
            >
              <Sparkles className="w-3 h-3 text-[#A68966]" />
              <span className="text-[10px] tracking-wider uppercase font-semibold">Client Demo</span>
            </button>

            {/* Currency Selector */}
            <div className="relative">
              <button
                id="currency-selector-btn"
                onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
                className="flex items-center gap-1 text-[#1A1A1A] hover:text-[#A68966] transition-colors font-medium text-xs px-2 py-0.5 rounded-md hover:bg-[#E5E2DC]"
                aria-label="Select Currency"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-[#1A1A1A66]" />
              </button>

              {isCurrencyMenuOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-32 bg-[#FFFFFF] border border-[#1A1A1A1A] rounded-xl shadow-xl z-50 py-1 text-left animate-fadeIn">
                  {currencies.map(c => (
                    <button
                      key={c.code}
                      onClick={() => {
                        onSelectCurrency(c.code);
                        setIsCurrencyMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#F5F2ED] ${
                        currency === c.code ? 'text-[#A68966] font-bold bg-[#F5F2ED]' : 'text-[#1A1A1A]'
                      }`}
                    >
                      <span>{c.code}</span>
                      <span className="text-[10px] opacity-60">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Viewport Switcher */}
            <div className="hidden lg:flex items-center bg-[#DDD9D2] p-0.5 rounded-full border border-[#1A1A1A1A]">
              <button
                id="viewport-web-toggle-btn"
                onClick={() => onToggleViewportMode('web')}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider transition-all ${
                  viewportMode === 'web'
                    ? 'bg-[#1A1A1A] text-[#F5F2ED] font-bold shadow-xs'
                    : 'text-[#1A1A1A99] hover:text-[#1A1A1A]'
                }`}
              >
                <Monitor className="w-3 h-3" />
                <span>Web</span>
              </button>
              <button
                id="viewport-app-toggle-btn"
                onClick={() => onToggleViewportMode('mobile-app')}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider transition-all ${
                  viewportMode === 'mobile-app'
                    ? 'bg-[#1A1A1A] text-[#F5F2ED] font-bold shadow-xs'
                    : 'text-[#1A1A1A99] hover:text-[#1A1A1A]'
                }`}
              >
                <Smartphone className="w-3 h-3" />
                <span>App</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <header
        id="main-luxury-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F2ED]/95 backdrop-blur-md border-b border-[#1A1A1A1A] py-3.5 shadow-sm'
            : 'bg-[#F5F2ED] border-b border-[#1A1A1A1A] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-trigger-btn"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="p-2 text-[#1A1A1A] hover:bg-[#EBE8E3] rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Left Menu Items (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-[12px] tracking-[0.2em] uppercase font-medium text-[#1A1A1A99]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => onNavigate(link.id)}
                  className={`hover:text-[#1A1A1A] transition-colors relative py-1 ${
                    isActive ? 'text-[#1A1A1A] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1A1A1A]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Center High-Impact Brand Wordmark */}
          <div 
            id="brand-logo-center-container"
            className="flex flex-col items-center cursor-pointer select-none group" 
            onClick={() => onNavigate('hero')}
            title="Aurelia & Noir Haute Couture"
          >
            <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.28em] text-[#1A1A1A] font-normal uppercase transition-colors group-hover:text-[#A68966]">
              AURELIA & NOIR
            </h1>
            <span className="text-[9px] tracking-[0.38em] text-[#1A1A1A66] uppercase font-medium -mt-0.5 group-hover:text-[#1A1A1A99]">
              HAUTE COUTURE • PARIS • MILANO
            </span>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Button */}
            <button
              id="header-search-btn"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#1A1A1A] hover:text-[#A68966] transition-colors rounded-full"
              aria-label="Search Collection"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button with Badge */}
            <button
              id="header-wishlist-btn"
              onClick={onOpenWishlist}
              className="p-2 text-[#1A1A1A] hover:text-[#A68966] transition-colors relative rounded-full"
              aria-label="Saved Wishlist"
              title="Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-[#A68966] text-[#A68966]' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#1A1A1A] text-[#F5F2ED] text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] px-4 py-2 rounded-full border border-[#1A1A1A] transition-all group shadow-xs cursor-pointer"
              aria-label="View Shopping Bag"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#A68966] group-hover:scale-105 transition-transform" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium hidden sm:inline">Bag</span>
              <span className="text-xs font-semibold px-1.5 py-0.2 bg-[#A68966] text-white rounded-full min-w-[20px] text-center">
                {cartCount}
              </span>
            </button>

          </div>
        </div>
      </header>

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1A1A]/70 backdrop-blur-md flex flex-col items-center p-4 sm:p-8 animate-fadeIn">
          <div className="w-full max-w-3xl flex justify-end">
            <button
              id="close-search-modal-btn"
              onClick={() => setIsSearchOpen(false)}
              className="p-2 text-[#F5F2ED]/80 hover:text-[#F5F2ED] transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="w-full max-w-2xl mt-8 bg-[#F5F2ED] p-8 rounded-3xl border border-[#1A1A1A1A] shadow-2xl">
            <div className="relative border-b-2 border-[#1A1A1A] pb-3">
              <input
                id="search-collection-input"
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cashmere coats, silk gowns, calfskin leather..."
                className="w-full bg-transparent text-xl sm:text-2xl text-[#1A1A1A] placeholder-[#1A1A1A66] focus:outline-none font-serif tracking-wide"
              />
              <Search className="absolute right-2 top-2 text-[#A68966] w-6 h-6" />
            </div>

            {/* Search Suggestions or Results */}
            <div className="mt-8">
              {searchQuery.trim() === '' ? (
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-[#1A1A1A66] font-semibold mb-4">Curated Searches</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Double-Breasted Trench', 'Como Mulberry Silk', 'Super 150s Blazer', 'Florentine Leather', '18K Sculptural Gold'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="text-xs bg-[#EBE8E3] hover:bg-[#E5E2DC] text-[#1A1A1A] px-3.5 py-2 rounded-full border border-[#1A1A1A1A] transition-all font-medium"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-[#1A1A1A66] font-semibold mb-4">
                    {searchResults.length} {searchResults.length === 1 ? 'Piece Found' : 'Pieces Found'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-2">
                    {searchResults.map(product => (
                      <div
                        key={product.id}
                        onClick={() => {
                          onSelectProduct(product);
                          setIsSearchOpen(false);
                        }}
                        className="flex gap-4 p-3 bg-[#FFFFFF] hover:bg-[#EBE8E3] border border-[#1A1A1A1A] rounded-2xl cursor-pointer transition-all group"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-16 h-20 object-cover rounded-xl group-hover:scale-105 transition-transform"
                        />
                        <div className="flex flex-col justify-center">
                          <span className="text-[10px] text-[#A68966] uppercase tracking-wider font-semibold">{product.category}</span>
                          <h5 className="font-serif text-sm text-[#1A1A1A] line-clamp-1">{product.name}</h5>
                          <p className="text-xs text-[#1A1A1A99] line-clamp-1 font-light">{product.subtitle}</p>
                          <span className="text-xs font-semibold text-[#1A1A1A] mt-1">${product.price.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileNavOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] z-40 bg-[#F5F2ED] border-t border-[#1A1A1A1A] p-6 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-6 text-base tracking-[0.2em] uppercase font-light">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMobileNavOpen(false);
                }}
                className={`text-left hover:text-[#A68966] py-2 border-b border-[#1A1A1A1A] ${
                  activeSection === link.id ? 'text-[#1A1A1A] font-semibold' : 'text-[#1A1A1A99]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#1A1A1A1A] flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs text-[#1A1A1A99]">
              <span>Demo Viewport</span>
              <div className="flex gap-2">
                <button
                  onClick={() => onToggleViewportMode('web')}
                  className={`px-3 py-1 rounded text-xs ${viewportMode === 'web' ? 'bg-[#1A1A1A] text-[#F5F2ED] font-semibold' : 'bg-[#E5E2DC]'}`}
                >
                  Web
                </button>
                <button
                  onClick={() => onToggleViewportMode('mobile-app')}
                  className={`px-3 py-1 rounded text-xs ${viewportMode === 'mobile-app' ? 'bg-[#1A1A1A] text-[#F5F2ED] font-semibold' : 'bg-[#E5E2DC]'}`}
                >
                  App
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                onOpenPitchModal();
                setIsMobileNavOpen(false);
              }}
              className="w-full bg-[#1A1A1A] text-[#F5F2ED] font-medium py-3 rounded-full text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#A68966]" />
              <span>Customize This For Your Brand</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

