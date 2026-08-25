import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShieldCheck, Gift, Truck, ArrowRight, Sparkles, Check, Lock } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  currency: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency
}) => {
  const [includeGiftWrap, setIncludeGiftWrap] = useState(false);
  const [giftNote, setGiftNote] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotalUSD = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

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

  const handleCheckoutSubmit = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsOrderPlaced(true);
      onClearCart();
    }, 1500);
  };

  return (
    <div
      id="cart-drawer-overlay"
      className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#F5F2ED] border-l border-[#1A1A1A1A] h-full flex flex-col justify-between p-6 shadow-2xl text-[#1A1A1A] overflow-y-auto animate-slideInRight"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1A1A1A1A] pb-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl text-[#1A1A1A]">Your Haute Bag</span>
            <span className="text-xs bg-[#EBE8E3] text-[#1A1A1A] px-2 py-0.5 rounded-full font-semibold border border-[#1A1A1A1A]">
              {cartItems.reduce((sum, i) => sum + i.quantity, 0)} Items
            </span>
          </div>
          <button
            id="close-cart-btn"
            onClick={onClose}
            className="p-2 text-[#1A1A1A66] hover:text-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        {isOrderPlaced ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 bg-[#A68966]/20 border border-[#A68966] rounded-full flex items-center justify-center mb-4 text-[#A68966]">
              <Sparkles className="w-8 h-8" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A68966] font-bold">
              Order Confirmed
            </span>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mt-1 mb-2">Acquisition Reserved</h3>
            <p className="text-xs text-[#1A1A1A99] leading-relaxed max-w-xs mb-6 font-light">
              Your garments have been assigned to our Paris atelier. An authenticated certificate of origin and tracking number will be delivered to your email.
            </p>
            <button
              onClick={() => {
                setIsOrderPlaced(false);
                onClose();
              }}
              className="bg-[#1A1A1A] text-[#F5F2ED] text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full"
            >
              Continue Exploring
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <div className="w-14 h-14 bg-[#EBE8E3] rounded-full flex items-center justify-center mb-3 text-[#1A1A1A66]">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-lg text-[#1A1A1A] mb-1 font-medium">Your Bag is Empty</h4>
            <p className="text-xs text-[#1A1A1A66] max-w-xs leading-relaxed mb-6 font-light">
              Explore our permanent collection to select bespoke coats, silk gowns, and fine leathergoods.
            </p>
            <button
              onClick={onClose}
              className="bg-[#1A1A1A] text-[#F5F2ED] hover:bg-[#333333] text-xs font-semibold uppercase tracking-[0.15em] py-3 px-6 rounded-full transition-colors"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3.5 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A] relative group"
              >
                <img
                  src={item.selectedColor.image}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover rounded-xl border border-[#1A1A1A1A]"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="font-serif text-sm text-[#1A1A1A] font-medium line-clamp-1">
                        {item.product.name}
                      </h5>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#1A1A1A66] hover:text-red-500 p-1 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#1A1A1A99] mt-1">
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full inline-block border border-[#1A1A1A33]"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        {item.selectedColor.name}
                      </span>
                      <span>•</span>
                      <span>Size {item.selectedSize}</span>
                    </div>

                    {item.monogram && (
                      <span className="inline-block text-[9px] uppercase tracking-wider text-[#A68966] bg-[#A68966]/10 px-2 py-0.5 rounded mt-1 border border-[#A68966]/20 font-bold">
                        24K Monogram: [{item.monogram}]
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#1A1A1A1A]">
                    <span className="text-xs font-semibold text-[#1A1A1A]">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>

                    <div className="flex items-center gap-2 bg-[#FFFFFF] px-2 py-1 rounded-lg border border-[#1A1A1A1A]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-[#1A1A1A99] hover:text-[#1A1A1A] p-0.5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-mono px-1 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-[#1A1A1A99] hover:text-[#1A1A1A] p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Gift Wrap & Calligraphy Note Toggle */}
            <div className="p-4 bg-[#EBE8E3] rounded-2xl border border-[#1A1A1A1A]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#A68966]" />
                  <span className="text-xs text-[#1A1A1A] font-semibold">
                    Complimentary Maison Gift Trunk
                  </span>
                </div>
                <button
                  onClick={() => setIncludeGiftWrap(!includeGiftWrap)}
                  className={`relative w-10 h-5 rounded-full transition-colors ${
                    includeGiftWrap ? 'bg-[#1A1A1A]' : 'bg-[#1A1A1A33]'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                      includeGiftWrap ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {includeGiftWrap && (
                <div className="mt-3 pt-3 border-t border-[#1A1A1A1A]">
                  <input
                    type="text"
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="Add handwritten calligraphy card message..."
                    className="w-full bg-[#FFFFFF] border border-[#1A1A1A1A] text-[#1A1A1A] px-3 py-1.5 rounded-xl text-xs placeholder-[#1A1A1A66] focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer with Totals and Checkout CTA */}
        {cartItems.length > 0 && !isOrderPlaced && (
          <div className="border-t border-[#1A1A1A1A] pt-4 mt-auto space-y-3">
            <div className="flex items-center justify-between text-xs text-[#1A1A1A99]">
              <span>Subtotal</span>
              <span className="text-[#1A1A1A] font-semibold">{formatPrice(subtotalUSD)}</span>
            </div>

            <div className="flex items-center justify-between text-xs text-[#1A1A1A99]">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#A68966]" />
                White-Glove Insured Courier
              </span>
              <span className="text-emerald-700 font-bold uppercase text-[10px]">Complimentary</span>
            </div>

            <div className="flex items-center justify-between text-sm text-[#1A1A1A] font-serif pt-2 border-t border-[#1A1A1A1A]">
              <span>Total Estimated</span>
              <span className="text-lg font-semibold text-[#1A1A1A]">
                {formatPrice(subtotalUSD)}
              </span>
            </div>

            <button
              id="checkout-proceed-btn"
              onClick={handleCheckoutSubmit}
              disabled={isCheckingOut}
              className="w-full py-4 bg-[#1A1A1A] hover:bg-[#333333] text-[#F5F2ED] font-semibold uppercase tracking-[0.2em] text-xs rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span>Securing Atelier Reservation...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-[#A68966]" />
                  <span>Proceed to VIP Checkout</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-[#1A1A1A66] font-light">
              30-day complimentary bespoke alterations & returns worldwide.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
