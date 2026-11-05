import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';

interface CollectionPageProps {
  onOpenProduct: (productId: string) => void;
  onAddToBag: (product: Product, quantity: number, giftWrap: boolean) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ onOpenProduct, onAddToBag }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Cleansing Elixirs',
    'Intensive Masks',
    'Pressed Oils',
    'Scalp Balms',
    'Atelier Sets',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-surface min-h-screen py-12 md:py-20 animate-fade-in">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin space-y-12">
        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-primary/25">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.24em]">
              The Haute Dispensary
            </span>
          </div>

          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
            The Botanical Collection
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Formulations crafted without silicone, sulfates, or artificial fillers. Each flacon encapsulates sacred cold-pressed Nigella Sativa oil, rare damask petals, and clinical hair keratin bio-actives.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-label-caps text-label-caps uppercase tracking-[0.16em] transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-on-primary shadow-[0_0_16px_rgba(235,193,102,0.3)] font-semibold'
                    : 'bg-surface-container-low text-on-surface-variant border border-outline/20 hover:border-primary/40 hover:text-on-surface'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-surface-container-low/70 backdrop-blur-md border border-primary/15 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Product Image Frame */}
              <div
                className="relative aspect-[4/3] bg-surface-container-lowest flex items-center justify-center p-6 overflow-hidden cursor-pointer"
                onClick={() => onOpenProduct(product.id)}
              >
                <div className="absolute inset-0 bg-radial from-primary/15 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <img
                  alt={product.name}
                  className="w-full h-full object-contain max-h-[260px] z-10 transition-transform duration-700 ease-out group-hover:scale-105"
                  src={product.image}
                />

                {/* Floating Top Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-0.5 bg-surface-container-highest/90 backdrop-blur-md rounded-full border border-primary/30">
                    <span className="font-label-caps text-[10px] uppercase tracking-[0.18em] text-primary">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Volume tag */}
                <div className="absolute bottom-4 right-4 px-2.5 py-0.5 bg-surface-container-lowest/80 backdrop-blur-md rounded text-outline text-[11px] font-label-sm">
                  {product.volume}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-[10px] uppercase text-secondary tracking-[0.2em]">
                      {product.category}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-normal">
                      £{product.price}
                    </span>
                  </div>

                  <h3
                    onClick={() => onOpenProduct(product.id)}
                    className="font-headline-sm text-[22px] text-on-surface hover:text-primary transition-colors cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Botanical tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-surface-container-highest">
                  {product.botanicalActives.slice(0, 2).map((active) => (
                    <span
                      key={active}
                      className="text-[11px] font-label-sm text-outline px-2 py-0.5 bg-surface-container rounded-sm border border-outline/10"
                    >
                      {active}
                    </span>
                  ))}
                  {product.botanicalActives.length > 2 && (
                    <span className="text-[11px] font-label-sm text-primary/80 px-1 py-0.5">
                      +{product.botanicalActives.length - 2} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenProduct(product.id)}
                    className="flex-1 py-2.5 px-4 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-caps text-label-caps uppercase tracking-[0.16em] border border-outline/30 hover:text-primary hover:border-primary/50 transition-all text-center cursor-pointer"
                  >
                    Explore Formula
                  </button>

                  <button
                    type="button"
                    onClick={() => onAddToBag(product, 1, false)}
                    className="py-2.5 px-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.16em] shadow-[0_0_16px_rgba(235,193,102,0.25)] hover:bg-primary-fixed hover:shadow-[0_0_24px_rgba(235,193,102,0.45)] transition-all cursor-pointer flex items-center justify-center"
                    title="Add to Ceremony Bag"
                  >
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sensory Formulation Guarantee Footer */}
        <div className="p-8 rounded-xl bg-surface-container-low border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              Need Personal Formulation Guidance?
            </h4>
            <p className="font-body-sm text-on-surface-variant max-w-xl">
              Our London trichologists and master perfumers analyze your scalp microbiome, fiber porosity, and styling habits to prescribe your bespoke ritual.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenProduct('shampoo-01')}
            className="shrink-0 px-6 py-3 bg-surface-container-high border border-primary text-primary font-label-caps text-label-caps uppercase tracking-[0.18em] hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
          >
            Start Hair Diagnostic
          </button>
        </div>
      </div>
    </div>
  );
};
