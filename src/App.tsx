import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroEditorial } from './components/HeroEditorial';
import { CollectionsGrid } from './components/CollectionsGrid';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { LookbookHotspots } from './components/LookbookHotspots';
import { BespokeTailoringSection, BespokeModal } from './components/BespokeTailoringSection';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { MobileAppExperience } from './components/MobileAppExperience';
import { FreelanceClientPitchModal } from './components/FreelanceClientPitchModal';
import { MaisonHeritage } from './components/MaisonHeritage';
import { Footer } from './components/Footer';
import { PRODUCTS, LOOKBOOK_SCENES } from './data/products';
import { Product, CartItem, BrandThemeMode, ViewportMode } from './types';
import { Sparkles, MessageSquare, ChevronUp, Smartphone, Monitor } from 'lucide-react';

export default function App() {
  // State
  const [viewportMode, setViewportMode] = useState<ViewportMode>('web');
  const [brandTheme, setBrandTheme] = useState<BrandThemeMode>('editorial-aesthetic');
  const [currency, setCurrency] = useState<string>('USD');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['prod-01', 'prod-04']);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isBespokeModalOpen, setIsBespokeModalOpen] = useState<boolean>(false);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState<boolean>(false);
  
  // Active Navigation Section
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart operations
  const handleAddToBag = (
    product: Product,
    selectedColor: { name: string; hex: string; image: string },
    selectedSize: string,
    monogram?: string
  ) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        item =>
          item.productId === product.id &&
          item.selectedColor.name === selectedColor.name &&
          item.selectedSize === selectedSize &&
          item.monogram === monogram
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        const newItem: CartItem = {
          id: `${product.id}-${Date.now()}`,
          productId: product.id,
          product,
          selectedColor,
          selectedSize,
          quantity: 1,
          monogram
        };
        return [...prev, newItem];
      }
    });

    showToast(`Added ${product.name} (${selectedSize}) to your Haute Bag`);
  };

  const handleQuickAddToBag = (product: Product) => {
    handleAddToBag(
      product,
      product.colors[0],
      product.sizes[0]?.code || 'FR 36'
    );
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds(prev => {
      if (prev.includes(productId)) {
        showToast('Removed from Saved Wardrobe');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to your Private Salon Wishlist');
        return [...prev, productId];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistIds(prev => prev.filter(id => id !== productId));
  };

  // Navigation scrolling
  const scrollToSection = (section: string) => {
    setActiveSection(section);
    if (section === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(
      section === 'collections'
        ? 'collections-section'
        : section === 'runway'
        ? 'runway-lookbook-section'
        : section === 'bespoke'
        ? 'bespoke-atelier-section'
        : section === 'heritage'
        ? 'heritage-section'
        : 'hero-editorial-section'
    );
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Compute theme styles
  const getThemeClass = () => {
    switch (brandTheme) {
      case 'editorial-aesthetic':
        return 'bg-[#F5F2ED] text-[#1A1A1A]';
      case 'champagne-ivory':
        return 'bg-[#141210] text-[#f4efe6]';
      case 'emerald-couture':
        return 'bg-[#0a120f] text-[#f4f2ee]';
      case 'noir-obsidian':
        return 'bg-[#0c0c0e] text-[#f4f2ee]';
      default:
        return 'bg-[#F5F2ED] text-[#1A1A1A]';
    }
  };

  const wishlistProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  return (
    <div className={`min-h-screen ${getThemeClass()} transition-colors duration-500 font-sans selection:bg-[#1A1A1A] selection:text-[#F5F2ED]`}>
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#1A1A1A] text-[#F5F2ED] border border-[#A68966]/40 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-lg animate-fadeIn">
          <Sparkles className="w-4 h-4 text-[#A68966]" />
          <span className="text-xs font-light tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Global Header */}
      <Header
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectProduct={(product) => setSelectedProduct(product)}
        allProducts={PRODUCTS}
        viewportMode={viewportMode}
        onToggleViewportMode={setViewportMode}
        brandTheme={brandTheme}
        onSelectBrandTheme={setBrandTheme}
        currency={currency}
        onSelectCurrency={setCurrency}
        onOpenPitchModal={() => setIsPitchModalOpen(true)}
        onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content: Switch between Web Flagship and Interactive Mobile App Emulator */}
      <main>
        {viewportMode === 'mobile-app' ? (
          <div className="py-8 bg-[#EBE8E3]/60">
            <MobileAppExperience
              products={PRODUCTS}
              lookbooks={LOOKBOOK_SCENES}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onQuickAddToBag={handleQuickAddToBag}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenPitchModal={() => setIsPitchModalOpen(true)}
            />
          </div>
        ) : (
          <>
            {/* 1. Haute Couture Hero Campaign */}
            <HeroEditorial
              onExploreCollections={() => scrollToSection('collections')}
              onOpenRunway={() => scrollToSection('runway')}
              onSelectFeaturedProduct={(p) => setSelectedProduct(p)}
              featuredProduct={PRODUCTS[0]}
              onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
            />

            {/* 2. Permanent Collection Catalog Grid */}
            <CollectionsGrid
              products={PRODUCTS}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onQuickAddToBag={handleQuickAddToBag}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              currency={currency}
            />

            {/* 3. Interactive Runway & Lookbook Hotspots */}
            <LookbookHotspots
              scenes={LOOKBOOK_SCENES}
              allProducts={PRODUCTS}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onQuickAddToBag={handleQuickAddToBag}
            />

            {/* 4. Bespoke Made-to-Measure Section */}
            <BespokeTailoringSection
              onOpenBookingModal={() => setIsBespokeModalOpen(true)}
            />

            {/* 5. Mobile App Embedded Showcase Callout inside Web view */}
            <section className="py-20 bg-[#EBE8E3] border-t border-[#1A1A1A1A]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-8 sm:p-12 bg-[#F5F2ED] rounded-3xl border border-[#1A1A1A1A] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 text-[#A68966] text-xs uppercase tracking-widest font-semibold mb-2">
                      <Smartphone className="w-4 h-4" />
                      <span>Cross-Platform Ready</span>
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-normal">
                      Native iOS & Android App Experience Included
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1A1A1A99] mt-2 font-light leading-relaxed">
                      Experience how the clothing brand seamlessly translates into a native mobile app with tactile swipe gestures, VIP story feeds, and 1-tap Apple Pay.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      id="launch-mobile-app-mode-btn"
                      onClick={() => {
                        setViewportMode('mobile-app');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] font-medium px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] transition-all shadow-md flex items-center gap-2"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Launch Mobile App Emulator</span>
                    </button>

                    <button
                      onClick={() => setIsPitchModalOpen(true)}
                      className="bg-transparent hover:bg-[#1A1A1A]/5 text-[#1A1A1A] px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] transition-all border border-[#1A1A1A33] font-medium"
                    >
                      Freelance Demo Specs
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Maison Story & Atelier Heritage */}
            <MaisonHeritage />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onOpenPitchModal={() => setIsPitchModalOpen(true)}
        onOpenBespokeModal={() => setIsBespokeModalOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Modals and Drawers */}
      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToBag={handleAddToBag}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        allProducts={PRODUCTS}
        onSelectProduct={(p) => setSelectedProduct(p)}
        currency={currency}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currency={currency}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onQuickAddToBag={handleQuickAddToBag}
        currency={currency}
      />

      <BespokeModal
        isOpen={isBespokeModalOpen}
        onClose={() => setIsBespokeModalOpen(false)}
      />

      <FreelanceClientPitchModal
        isOpen={isPitchModalOpen}
        onClose={() => setIsPitchModalOpen(false)}
        brandTheme={brandTheme}
        onSelectBrandTheme={setBrandTheme}
      />

      {/* Floating Freelance Demo Callout Button (Bottom Right) */}
      <aside
        id="floating-freelance-pitch-pill"
        aria-label="Freelance Project Demo Pitch"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#F5F2ED]/95 hover:bg-[#FFFFFF] border border-[#1A1A1A33] text-[#1A1A1A] pl-4 pr-3 py-2.5 rounded-full shadow-xl backdrop-blur-xl transition-all group"
      >
        <button
          onClick={() => setIsPitchModalOpen(true)}
          className="flex items-center gap-2.5 text-left cursor-pointer"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A68966] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A68966]"></span>
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] text-[#A68966] uppercase font-bold tracking-wider leading-none">
              Client Demo Mode
            </span>
            <span className="text-xs text-[#1A1A1A] font-medium leading-tight">
              Hire Me For Your Brand
            </span>
          </div>
        </button>

        <button
          onClick={() => setIsPitchModalOpen(true)}
          className="ml-1 w-7 h-7 rounded-full bg-[#1A1A1A] text-[#F5F2ED] flex items-center justify-center group-hover:scale-105 transition-transform"
          aria-label="Open Freelance Project Pitch"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#A68966]" />
        </button>
      </aside>
    </div>
  );
}
