import React, { useState } from 'react';
import type { Product } from '../data/products';
import { OlfactoryPyramid } from './OlfactoryPyramid';
import { FormulaConcentricDial } from './FormulaConcentricDial';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToBag: (product: Product, quantity: number, giftWrap: boolean) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToBag,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [includeGiftBox, setIncludeGiftBox] = useState(false);
  const [activeTab, setActiveTab] = useState<'formula' | 'olfactory' | 'dosage' | 'ritual'>('formula');
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAdd = () => {
    onAddToBag(product, quantity, includeGiftBox);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-surface-container-low border border-primary/30 rounded-xl shadow-[0_24px_64px_rgba(0,0,0,0.9)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Gold Foil Bevel Effect */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary/15 bg-surface-container-lowest/80 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em]">
              {product.badge || 'Haute Botanical Formulation'}
            </span>
            <span className="text-outline text-xs">•</span>
            <span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">
              {product.volume}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-outline hover:text-primary hover:bg-surface-container-highest transition-colors"
            aria-label="Close details"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 flex-1">
          {/* Main Showcase Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Product Visual */}
            <div className="lg:col-span-5 relative aspect-square bg-surface-container-lowest rounded-xl flex items-center justify-center p-6 border border-primary/20 overflow-hidden group">
              <div className="absolute inset-0 bg-radial from-primary/20 via-transparent to-transparent pointer-events-none" />
              <img
                alt={product.name}
                className="w-full h-full object-contain max-h-[380px] z-10 transition-transform duration-500 group-hover:scale-105"
                src={product.image}
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-surface-container-highest/80 backdrop-blur-md rounded-full border border-primary/20">
                <span className="font-label-caps text-[10px] uppercase tracking-[0.18em] text-primary">
                  100% Cold-Pressed Active
                </span>
              </div>
            </div>

            {/* Right: Formulation Identity & Purchase Action */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              <div className="space-y-1">
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.22em] block">
                  {product.category}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  {product.name}
                </h2>
                <p className="font-body-md text-on-surface-variant italic">
                  {product.subTitle}
                </p>
              </div>

              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {product.detailedStory}
              </p>

              {/* Botanical Actives Tags */}
              <div>
                <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider block mb-2">
                  Key Phytochemical Actives
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.botanicalActives.map((active) => (
                    <span
                      key={active}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full border border-secondary-container/60 text-[12px] font-label-sm text-on-surface-variant"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {active}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Add to Bag Interface */}
              <div className="pt-4 border-t border-primary/15 space-y-4">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-md text-headline-md text-primary font-normal">
                      £{product.price * quantity}
                    </span>
                    <span className="font-body-sm text-outline">
                      (£{product.price} each)
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">
                    Complimentary Atelier Dispatch
                  </span>
                </div>

                {/* Gift Chest Option */}
                <label className="flex items-center gap-3 p-3 bg-surface-container-high/60 rounded border border-outline/20 cursor-pointer hover:border-primary/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={includeGiftBox}
                    onChange={(e) => setIncludeGiftBox(e.target.checked)}
                    className="w-4 h-4 accent-primary rounded cursor-pointer"
                  />
                  <div className="text-left text-xs">
                    <span className="text-on-surface font-title-md block">
                      Enclose in Gilded Atelier Presentation Chest
                    </span>
                    <span className="text-on-surface-variant">
                      Hand-tied ribbon with custom calligraphy wax-sealed card (+£15)
                    </span>
                  </div>
                </label>

                {/* Quantity and Action Buttons */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-outline/30 rounded bg-surface-container-highest">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-on-surface hover:text-primary transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 font-title-md text-sm">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-on-surface hover:text-primary transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAdd}
                    className="flex-1 py-3 px-6 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.2em] shadow-[0_0_24px_rgba(235,193,102,0.3)] hover:bg-primary-fixed hover:shadow-[0_0_36px_rgba(235,193,102,0.5)] transition-all cursor-pointer text-center"
                  >
                    {addedNotice ? 'Added to Ceremony Bag ✓' : 'Add to Ceremony Bag'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Results Strip */}
          <div className="p-space-md bg-surface-container rounded-lg border border-primary/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {product.clinicalResults.map((result) => (
              <div key={result.label} className="space-y-1">
                <span className="font-headline-md text-headline-md text-primary font-normal block">
                  {result.metric}
                </span>
                <span className="font-body-sm text-[12px] text-on-surface-variant leading-snug block">
                  {result.label}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Formulation Exploration Tabs */}
          <div className="space-y-4">
            <div className="flex border-b border-primary/20 gap-2 sm:gap-6 overflow-x-auto pb-2">
              <button
                type="button"
                onClick={() => setActiveTab('dosage')}
                className={`font-label-caps text-label-caps uppercase tracking-[0.16em] pb-2 transition-colors whitespace-nowrap ${
                  activeTab === 'dosage'
                    ? 'text-primary border-b-2 border-primary font-semibold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Concentric Dosage Dial
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('olfactory')}
                className={`font-label-caps text-label-caps uppercase tracking-[0.16em] pb-2 transition-colors whitespace-nowrap ${
                  activeTab === 'olfactory'
                    ? 'text-primary border-b-2 border-primary font-semibold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Olfactory Architecture
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('ritual')}
                className={`font-label-caps text-label-caps uppercase tracking-[0.16em] pb-2 transition-colors whitespace-nowrap ${
                  activeTab === 'ritual'
                    ? 'text-primary border-b-2 border-primary font-semibold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                Ceremony Guide (4 Steps)
              </button>
            </div>

            {/* Tab Contents */}
            <div>
              {activeTab === 'dosage' && (
                <FormulaConcentricDial dosages={product.concentricDial} />
              )}

              {activeTab === 'olfactory' && (
                <OlfactoryPyramid olfactoryNotes={product.olfactoryPyramid} />
              )}

              {activeTab === 'ritual' && (
                <div className="bg-surface-container-lowest/80 border border-primary/20 rounded-lg p-space-md md:p-space-lg backdrop-blur-xl space-y-4">
                  <div className="flex items-center justify-between pb-space-sm border-b border-primary/15">
                    <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.24em]">
                      The 4-Stage Salon Ritual
                    </span>
                    <span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">
                      Atelier Protocol
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.ritualSteps.map((step, idx) => (
                      <div
                        key={step}
                        className="p-4 bg-surface-container rounded border border-outline/15 space-y-2"
                      >
                        <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest px-2 py-0.5 bg-surface-container-highest rounded">
                          Phase 0{idx + 1}
                        </span>
                        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                          {step}
                        </p>
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
