import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Sparkles, Check, Ruler, Shield, Truck, RefreshCw, Scissors, Award } from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToBag: (
    product: Product,
    selectedColor: { name: string; hex: string; image: string },
    selectedSize: string,
    monogram?: string
  ) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  currency: string;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToBag,
  isWishlisted,
  onToggleWishlist,
  allProducts,
  onSelectProduct,
  currency
}) => {
  if (!product) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.code || 'FR 36');
  const [enableMonogram, setEnableMonogram] = useState(false);
  const [monogramText, setMonogramText] = useState('A.N.');
  const [activeTab, setActiveTab] = useState<'details' | 'fabric' | 'sustainability' | 'care'>('details');
  const [isAddedAnimation, setIsAddedAnimation] = useState(false);
  const [showFitAdvisor, setShowFitAdvisor] = useState(false);
  const [userHeight, setUserHeight] = useState('175');

  const pairedProducts = allProducts.filter(p => product.pairedProductIds?.includes(p.id));

  const handleAdd = () => {
    onAddToBag(
      product,
      selectedColor,
      selectedSize,
      enableMonogram ? monogramText.toUpperCase() : undefined
    );
    setIsAddedAnimation(true);
    setTimeout(() => setIsAddedAnimation(false), 2000);
  };

  const getCurrencySymbol = (code: string) => {
    switch (code) {
      case 'EUR': return '€';
      case 'GBP': return '£';
      case 'JPY': return '¥';
      case 'AED': return 'د.إ ';
      default: return '$';
    }
  };

  const formatPrice = (priceInUSD: number) => {
    let multiplier = 1;
    if (currency === 'EUR') multiplier = 0.92;
    if (currency === 'GBP') multiplier = 0.79;
    if (currency === 'JPY') multiplier = 152;
    if (currency === 'AED') multiplier = 3.67;
    return `${getCurrencySymbol(currency)}${Math.round(priceInUSD * multiplier).toLocaleString()}`;
  };

  return (
    <div
      id="product-quickview-modal"
      className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#F5F2ED] border border-[#1A1A1A1A] rounded-3xl overflow-hidden shadow-2xl my-auto text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-quickview-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#EBE8E3]/90 hover:bg-[#FFFFFF] text-[#1A1A1A] flex items-center justify-center border border-[#1A1A1A1A] transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 bg-[#EBE8E3] p-4 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1A1A1A1A]">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#F5F2ED] border border-[#1A1A1A1A]">
              <img
                src={product.images[activeImageIdx] || selectedColor.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              {/* Monogram Live Preview Stamp on Image */}
              {enableMonogram && monogramText && (
                <div className="absolute bottom-6 right-6 bg-[#F5F2ED]/95 border border-[#1A1A1A] px-3.5 py-1.5 rounded-lg backdrop-blur-md shadow-lg flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#A68966]" />
                  <span className="font-serif tracking-[0.3em] text-[#1A1A1A] text-xs uppercase font-bold">
                    [ {monogramText.toUpperCase()} ]
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[#1A1A1A99]">24K Stamped</span>
                </div>
              )}

              {/* Wishlist Floating Button */}
              <button
                onClick={() => onToggleWishlist(product.id)}
                className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                  isWishlisted ? 'bg-[#1A1A1A] text-[#F5F2ED]' : 'bg-[#F5F2ED]/80 text-[#1A1A1A] hover:bg-[#FFFFFF]'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Selectors */}
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-16 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    activeImageIdx === idx ? 'border-[#1A1A1A] scale-105 shadow-xs' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Config & Atelier Details */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A68966] font-bold">
                  {product.frenchName || product.category.toUpperCase()}
                </span>
                <span className="text-xs text-[#1A1A1A66]">Ref: ATELIER-{product.id.toUpperCase()}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal leading-tight mb-2">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-serif text-2xl text-[#1A1A1A] font-semibold">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs text-[#1A1A1A99] font-light">
                  Includes import duties & insured express delivery
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#1A1A1A99] font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[#1A1A1A99] uppercase tracking-wider text-[11px] font-medium">Selected Hue</span>
                  <span className="text-[#1A1A1A] font-semibold">{selectedColor.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`group relative p-1 rounded-full border-2 transition-all ${
                        selectedColor.name === color.name ? 'border-[#1A1A1A]' : 'border-transparent'
                      }`}
                    >
                      <span
                        className="block w-6 h-6 rounded-full border border-[#1A1A1A33] shadow-inner"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[#1A1A1A99] uppercase tracking-wider text-[11px] font-medium">Atelier Sizing</span>
                  <button
                    onClick={() => setShowFitAdvisor(!showFitAdvisor)}
                    className="text-[#A68966] hover:underline flex items-center gap-1 text-xs font-medium"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Fit & Measurement Concierge</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s.code}
                      onClick={() => setSelectedSize(s.code)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all text-center ${
                        selectedSize === s.code
                          ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A] shadow-xs font-semibold'
                          : 'bg-[#EBE8E3] text-[#1A1A1A] border-[#1A1A1A1A] hover:border-[#1A1A1A33]'
                      }`}
                    >
                      {s.code}
                    </button>
                  ))}
                </div>

                {/* Fit Advisor Expandable */}
                {showFitAdvisor && (
                  <div className="mt-3 p-3.5 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A] text-xs text-[#1A1A1A99] animate-fadeIn">
                    <p className="font-serif text-[#1A1A1A] text-sm mb-1 font-medium">Tailor’s Recommendation</p>
                    <p className="text-[11px] mb-2">{product.modelSpecs}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider font-medium">Your Height:</span>
                      <input
                        type="range"
                        min="155"
                        max="195"
                        value={userHeight}
                        onChange={(e) => setUserHeight(e.target.value)}
                        className="flex-1 accent-[#1A1A1A]"
                      />
                      <span className="text-[#1A1A1A] font-semibold text-xs">{userHeight} cm</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bespoke 24K Gold Monogramming Option */}
              <div className="p-4 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A] mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-[#A68966]" />
                    <span className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider">
                      Bespoke Monogram Stamping
                    </span>
                  </div>
                  <button
                    onClick={() => setEnableMonogram(!enableMonogram)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${
                      enableMonogram ? 'bg-[#1A1A1A]' : 'bg-[#1A1A1A33]'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        enableMonogram ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {enableMonogram && (
                  <div className="mt-3 pt-3 border-t border-[#1A1A1A1A] flex items-center gap-3">
                    <input
                      type="text"
                      maxLength={4}
                      value={monogramText}
                      onChange={(e) => setMonogramText(e.target.value)}
                      placeholder="e.g. F.N."
                      className="bg-[#FFFFFF] border border-[#1A1A1A1A] text-[#1A1A1A] px-3 py-1.5 rounded-lg text-xs font-serif tracking-widest uppercase focus:outline-none focus:border-[#1A1A1A] w-28 text-center"
                    />
                    <span className="text-[11px] text-[#1A1A1A99] font-light">
                      Hand-embossed with pure 24K gold foil by master atelier in Paris (Complimentary).
                    </span>
                  </div>
                )}
              </div>

              {/* Accordion Tabs for Craft / Fabric / Sustainability */}
              <div className="border-t border-[#1A1A1A1A] pt-4 mb-6">
                <div className="flex items-center gap-4 text-xs uppercase tracking-wider mb-3">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-1 font-semibold transition-colors ${activeTab === 'details' ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]' : 'text-[#1A1A1A66]'}`}
                  >
                    Craftsmanship
                  </button>
                  <button
                    onClick={() => setActiveTab('fabric')}
                    className={`pb-1 font-semibold transition-colors ${activeTab === 'fabric' ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]' : 'text-[#1A1A1A66]'}`}
                  >
                    Mill Origin
                  </button>
                  <button
                    onClick={() => setActiveTab('care')}
                    className={`pb-1 font-semibold transition-colors ${activeTab === 'care' ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]' : 'text-[#1A1A1A66]'}`}
                  >
                    Care & Archive
                  </button>
                </div>

                <div className="text-xs text-[#1A1A1A99] leading-relaxed">
                  {activeTab === 'details' && (
                    <p>{product.stylingNotes}</p>
                  )}
                  {activeTab === 'fabric' && (
                    <div>
                      <p className="text-[#1A1A1A] font-semibold mb-1">{product.fabricDetails.composition}</p>
                      <p>Milled in: {product.fabricDetails.millOrigin}</p>
                      <p>Finish: {product.fabricDetails.finish}</p>
                    </div>
                  )}
                  {activeTab === 'care' && (
                    <ul className="list-disc pl-4 space-y-1">
                      {product.careInstructions.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Actions: Add to Bag & Complete Look */}
            <div className="pt-4 border-t border-[#1A1A1A1A] flex flex-col gap-3">
              <button
                id="modal-add-to-bag-btn"
                onClick={handleAdd}
                className={`w-full py-4 rounded-2xl font-semibold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all duration-300 ${
                  isAddedAnimation
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] shadow-md'
                }`}
              >
                {isAddedAnimation ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Haute Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#A68966]" />
                    <span>Acquire Piece • {formatPrice(product.price)}</span>
                  </>
                )}
              </button>

              {/* Complete the Look Cross-sell */}
              {pairedProducts.length > 0 && (
                <div className="mt-2 pt-3 border-t border-[#1A1A1A1A]">
                  <span className="text-[10px] uppercase tracking-wider text-[#A68966] font-bold block mb-2">
                    Complete The Atelier Look
                  </span>
                  <div className="flex gap-3">
                    {pairedProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => onSelectProduct(p)}
                        className="flex-1 flex items-center gap-2 p-2 rounded-xl bg-[#EBE8E3] hover:bg-[#E5E2DC] border border-[#1A1A1A1A] cursor-pointer transition-all"
                      >
                        <img src={p.images[0]} alt={p.name} className="w-10 h-12 object-cover rounded-lg" />
                        <div className="overflow-hidden">
                          <h6 className="text-[11px] text-[#1A1A1A] font-serif font-medium truncate">{p.name}</h6>
                          <span className="text-[10px] text-[#1A1A1A99] font-medium">{formatPrice(p.price)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
