import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Sparkles, Filter, SlidersHorizontal, Check } from 'lucide-react';
import { Product } from '../types';

interface CollectionsGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickAddToBag: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  currency: string;
}

export const CollectionsGrid: React.FC<CollectionsGridProps> = ({
  products,
  onSelectProduct,
  onQuickAddToBag,
  wishlistIds,
  onToggleWishlist,
  currency
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [gridCols, setGridCols] = useState<2 | 3>(3);
  const [hoveredProductColor, setHoveredProductColor] = useState<Record<string, string>>({});

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'tailoring', label: 'Haute Tailoring' },
    { id: 'silk-evening', label: 'Silk & Eveningwear' },
    { id: 'cashmere-knit', label: 'Cashmere Knits' },
    { id: 'leather-accessories', label: 'Fine Leathergoods' },
    { id: 'jewelry', label: 'High Jewelry' }
  ];

  const materials = [
    { id: 'all', label: 'All Materials' },
    { id: 'cashmere', label: 'Grade-A Cashmere' },
    { id: 'silk', label: 'Mulberry Silk' },
    { id: 'wool', label: 'Virgin Wool 150s' },
    { id: 'leather', label: 'French Calfskin' }
  ];

  // Filtering
  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    const materialMatch = selectedMaterial === 'all' || product.fabricDetails.composition.toLowerCase().includes(selectedMaterial);
    return categoryMatch && materialMatch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured
  });

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

    const converted = Math.round(priceInUSD * multiplier);
    return `${getCurrencySymbol(currency)}${converted.toLocaleString()}`;
  };

  return (
    <section id="collections-section" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1A1A1A1A] pb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-[1px] bg-[#A68966]"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A68966] font-bold">Curated Catalog</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] tracking-[0.02em] font-normal">
            The Permanent Collection
          </h3>
          <p className="text-sm text-[#1A1A1A99] mt-2 font-light max-w-xl">
            Timeless silhouettes crafted with rare artisanal fibers from Lake Como, Biella, and Place Vendôme.
          </p>
        </div>

        {/* View Layout Switcher & Sort */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          
          {/* Sorting Dropdown */}
          <div className="flex items-center gap-2 bg-[#EBE8E3] border border-[#1A1A1A1A] rounded-full px-4 py-2 text-[#1A1A1A]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#A68966]" />
            <span className="text-[11px] text-[#1A1A1A66] uppercase font-semibold">Sort:</span>
            <select
              id="product-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-[#1A1A1A] focus:outline-none cursor-pointer text-xs font-medium"
            >
              <option value="featured" className="bg-[#F5F2ED]">Maison Featured</option>
              <option value="price-desc" className="bg-[#F5F2ED]">Price: High to Low</option>
              <option value="price-asc" className="bg-[#F5F2ED]">Price: Low to High</option>
              <option value="rating" className="bg-[#F5F2ED]">Highest Rated</option>
            </select>
          </div>

          {/* Grid View Columns Toggle (Desktop) */}
          <div className="hidden sm:flex items-center bg-[#EBE8E3] border border-[#1A1A1A1A] rounded-full p-1">
            <button
              onClick={() => setGridCols(2)}
              className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                gridCols === 2 ? 'bg-[#1A1A1A] text-[#F5F2ED] font-semibold' : 'text-[#1A1A1A99] hover:text-[#1A1A1A]'
              }`}
            >
              2 Columns
            </button>
            <button
              onClick={() => setGridCols(3)}
              className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                gridCols === 3 ? 'bg-[#1A1A1A] text-[#F5F2ED] font-semibold' : 'text-[#1A1A1A99] hover:text-[#1A1A1A]'
              }`}
            >
              3 Columns
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`filter-category-${cat.id}`}
            onClick={() => setActiveCategory(cat.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] transition-all font-medium ${
              activeCategory === cat.id
                ? 'bg-[#1A1A1A] text-[#F5F2ED] font-semibold shadow-xs'
                : 'bg-[#EBE8E3] text-[#1A1A1A99] hover:text-[#1A1A1A] border border-[#1A1A1A1A]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div
        className={`grid gap-x-6 gap-y-12 ${
          gridCols === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {sortedProducts.map((product) => {
          const isWishlisted = wishlistIds.includes(product.id);
          const activeImage = hoveredProductColor[product.id] || product.images[0];

          return (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group flex flex-col cursor-pointer transition-all duration-300"
            >
              {/* Product Image Container with Badges and Overlay Actions */}
              <div
                className="relative w-full aspect-[3/4] bg-[#EBE8E3] rounded-2xl overflow-hidden mb-4 border border-[#1A1A1A1A] group-hover:border-[#1A1A1A33] transition-all"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Badges */}
                <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
                  {product.isRunway && (
                    <span className="bg-[#F5F2ED]/90 backdrop-blur-md text-[#1A1A1A] border border-[#1A1A1A1A] text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm">
                      Runway #{product.runwayLookNumber}
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-[#1A1A1A] text-[#F5F2ED] text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-sm">
                      Issue 04 Drop
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button
                  id={`wishlist-toggle-${product.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product.id);
                  }}
                  className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all z-10 ${
                    isWishlisted
                      ? 'bg-[#1A1A1A] text-[#F5F2ED]'
                      : 'bg-[#F5F2ED]/80 text-[#1A1A1A] hover:bg-[#FFFFFF]'
                  }`}
                  aria-label="Toggle Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>

                {/* Hover Action Bar */}
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickAddToBag(product);
                    }}
                    className="flex-1 bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#A68966]" />
                    <span>Quick Add</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="bg-[#F5F2ED]/95 hover:bg-[#FFFFFF] text-[#1A1A1A] p-2.5 rounded-xl border border-[#1A1A1A1A] backdrop-blur-md transition-colors"
                    title="Quick Details"
                  >
                    <Eye className="w-4 h-4 text-[#A68966]" />
                  </button>
                </div>

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1" onClick={() => onSelectProduct(product)}>
                
                {/* Color Swatches */}
                {product.colors.length > 1 && (
                  <div className="flex items-center gap-1.5 mb-2.5">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          setHoveredProductColor({
                            ...hoveredProductColor,
                            [product.id]: c.image
                          });
                        }}
                        className="w-3.5 h-3.5 rounded-full border border-[#1A1A1A33] transition-transform hover:scale-125 focus:ring-1 focus:ring-[#1A1A1A]"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                    <span className="text-[10px] text-[#1A1A1A66] ml-1 font-medium">
                      {product.colors.length} shades
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-serif text-lg text-[#1A1A1A] font-normal group-hover:text-[#A68966] transition-colors leading-snug">
                    {product.name}
                  </h4>
                  <span className="text-sm font-semibold text-[#1A1A1A] whitespace-nowrap">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <p className="text-xs text-[#1A1A1A99] font-light mt-1 line-clamp-1">
                  {product.subtitle}
                </p>

                <div className="mt-3 pt-2.5 border-t border-[#1A1A1A1A] flex items-center justify-between text-[11px] text-[#1A1A1A66]">
                  <span className="tracking-wider uppercase text-[10px] text-[#A68966] font-bold">
                    {product.fabricDetails.millOrigin.split(',')[0]}
                  </span>
                  <span>{product.sizes.length} atelier sizes</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
