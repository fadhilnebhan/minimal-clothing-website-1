import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAddToBag: (product: Product) => void;
  currency: string;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onSelectProduct,
  onQuickAddToBag,
  currency
}) => {
  if (!isOpen) return null;

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
      id="wishlist-drawer-overlay"
      className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#F5F2ED] border-l border-[#1A1A1A1A] h-full flex flex-col justify-between p-6 shadow-2xl text-[#1A1A1A] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1A1A1A1A] pb-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#A68966] fill-[#A68966]" />
            <span className="font-serif text-2xl text-[#1A1A1A]">Saved Wardrobe</span>
            <span className="text-xs bg-[#EBE8E3] text-[#1A1A1A] px-2 py-0.5 rounded-full font-semibold border border-[#1A1A1A1A]">
              {wishlistProducts.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A66] hover:text-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        {wishlistProducts.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <Heart className="w-12 h-12 text-[#1A1A1A33] mb-3" />
            <h4 className="font-serif text-lg text-[#1A1A1A] mb-1 font-medium">No Saved Pieces Yet</h4>
            <p className="text-xs text-[#1A1A1A66] max-w-xs leading-relaxed mb-6 font-light">
              Tap the heart icon on any haute couture piece to save it to your private salon wishlist.
            </p>
            <button
              onClick={onClose}
              className="bg-[#1A1A1A] text-[#F5F2ED] hover:bg-[#333333] text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-colors"
            >
              Discover Pieces
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 p-3 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A] hover:border-[#1A1A1A33] transition-all cursor-pointer shadow-xs"
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-16 h-20 object-cover rounded-xl border border-[#1A1A1A1A]"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#A68966] font-bold">
                      {product.category}
                    </span>
                    <h5 className="font-serif text-xs text-[#1A1A1A] font-medium line-clamp-1">
                      {product.name}
                    </h5>
                    <span className="text-xs font-semibold text-[#1A1A1A] mt-0.5 block">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#1A1A1A1A]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAddToBag(product);
                      }}
                      className="bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] text-[10px] font-semibold uppercase py-1 px-3 rounded-lg flex items-center gap-1 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#A68966]" />
                      <span>Add to Bag</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveFromWishlist(product.id);
                      }}
                      className="text-[#1A1A1A66] hover:text-red-500 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {wishlistProducts.length > 0 && (
          <div className="pt-4 border-t border-[#1A1A1A1A]">
            <button
              onClick={() => {
                wishlistProducts.forEach(p => onQuickAddToBag(p));
                onClose();
              }}
              className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] font-semibold text-xs uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-[#A68966]" />
              <span>Transfer All To Haute Bag</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
