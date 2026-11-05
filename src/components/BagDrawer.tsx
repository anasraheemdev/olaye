import React, { useState } from 'react';
import type { Product } from '../data/products';

export interface BagItem {
  product: Product;
  quantity: number;
  giftBox: boolean;
}

interface BagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BagItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearBag: () => void;
}

export const BagDrawer: React.FC<BagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag,
}) => {
  const [selectedSample, setSelectedSample] = useState<string>('15ml Nectar Concentré Follicle Elixir');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity + (item.giftBox ? 15 : 0),
    0
  );

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderNumber(`OLY-HAUTE-${Math.floor(100000 + Math.random() * 900000)}`);
      setOrderConfirmed(true);
      onClearBag();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-md animate-fade-in flex justify-end">
      <div className="relative w-full max-w-md bg-surface-container-low border-l border-primary/20 shadow-2xl flex flex-col h-full text-on-surface">
        {/* Top Gold Foil Hairline */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary/15 bg-surface-container-lowest/90">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">local_mall</span>
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">
              Ceremony Bag
            </span>
            <span className="text-outline text-xs">({items.reduce((sum, i) => sum + i.quantity, 0)})</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-outline hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderConfirmed ? (
            <div className="py-12 text-center space-y-4">
              <span className="material-symbols-outlined text-primary text-[54px]">verified</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Ceremony Dispatched
              </h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Your bespoke formulations have entered hand-preparation in our London atelier.
              </p>
              <div className="p-3 bg-surface-container-highest rounded border border-primary text-primary font-mono text-sm tracking-wider">
                {orderNumber}
              </div>
              <p className="font-body-sm text-[12px] text-outline">
                Includes complimentary deluxe sample: <strong className="text-on-surface">{selectedSample}</strong>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setOrderConfirmed(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider"
              >
                Close &amp; Return to Atelier
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <span className="material-symbols-outlined text-outline text-[48px]">spa</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Your Ceremony Bag is Empty
              </h3>
              <p className="font-body-sm text-on-surface-variant max-w-xs mx-auto">
                Explore our cold-pressed Black Seed formulations to commence your haircare ceremony.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-surface-container-high border border-primary text-primary font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-4 bg-surface-container rounded-lg border border-outline/15 flex gap-4 items-start relative group"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-20 object-contain bg-surface-container-lowest rounded p-1 shrink-0"
                    />

                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-title-md text-sm text-on-surface">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-outline hover:text-primary transition-colors text-xs"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>

                      <p className="font-body-sm text-[12px] text-outline">
                        {item.product.volume}
                      </p>

                      {item.giftBox && (
                        <span className="inline-block text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded font-label-caps uppercase">
                          + Gilded Presentation Chest (£15)
                        </span>
                      )}

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-outline/30 rounded bg-surface-container-highest">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-on-surface hover:text-primary"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-title-md">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-on-surface hover:text-primary"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-title-md text-sm text-primary">
                          £{item.product.price * item.quantity + (item.giftBox ? 15 : 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Complimentary Deluxe Sample Selection */}
              <div className="p-4 bg-surface-container-lowest rounded-lg border border-secondary/25 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">redeem</span>
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider">
                    Select Complimentary Deluxe Sample
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {[
                    '15ml Nectar Concentré Follicle Elixir',
                    '25ml Masque Céleste Cellular Butter',
                    '10ml L\'Huile Sublime Cold-Pressed Dropper',
                  ].map((sample) => (
                    <label
                      key={sample}
                      className={`flex items-center gap-2.5 p-2 rounded border cursor-pointer transition-colors ${
                        selectedSample === sample
                          ? 'border-secondary bg-secondary-container/20 text-on-surface'
                          : 'border-outline/20 hover:border-outline/40 text-on-surface-variant'
                      }`}
                    >
                      <input
                        type="radio"
                        name="sampleChoice"
                        checked={selectedSample === sample}
                        onChange={() => setSelectedSample(sample)}
                        className="accent-secondary"
                      />
                      <span>{sample}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer (Checkout) */}
        {!orderConfirmed && items.length > 0 && (
          <div className="p-6 border-t border-primary/20 bg-surface-container-lowest space-y-4">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-on-surface-variant">
                <span>Subtotal</span>
                <span>£{subtotal}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Atelier Courier Delivery</span>
                <span className="text-secondary uppercase text-[11px] font-label-caps">
                  Complimentary
                </span>
              </div>
              <div className="flex justify-between text-on-surface font-title-md pt-2 border-t border-surface-container-highest text-base">
                <span>Total Ceremony Valuation</span>
                <span className="text-primary font-headline-sm text-lg">£{subtotal}</span>
              </div>
            </div>

            <button
              type="button"
              disabled={isCheckingOut}
              onClick={handleCheckout}
              className="w-full py-3.5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.2em] shadow-[0_0_24px_rgba(235,193,102,0.3)] hover:bg-primary-fixed hover:shadow-[0_0_36px_rgba(235,193,102,0.5)] transition-all cursor-pointer disabled:opacity-50"
            >
              {isCheckingOut ? 'Sealing Ceremony Order...' : 'Proceed to Checkout Ritual'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
