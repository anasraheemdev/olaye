import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroHome } from './components/HeroHome';
import { CollectionPage } from './components/CollectionPage';
import { OurStoryPage } from './components/OurStoryPage';
import { StockistsPage } from './components/StockistsPage';
import { ContactPage } from './components/ContactPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BagDrawer, BagItem } from './components/BagDrawer';
import { HairQuizModal } from './components/HairQuizModal';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [bagItems, setBagItems] = useState<BagItem[]>([
    {
      product: PRODUCTS[0], // Preload Master Formula 01 in the bag for immediate exploration
      quantity: 1,
      giftBox: false,
    },
  ]);

  // Sync route changes to scroll top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  const handleOpenProduct = (productId?: string) => {
    setSelectedProductId(productId || 'shampoo-01');
  };

  const handleAddToBag = (product: Product, quantity: number, giftBox: boolean) => {
    setBagItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, giftBox: giftBox || item.giftBox }
            : item
        );
      }
      return [...prev, { product, quantity, giftBox }];
    });
    setIsBagOpen(true);
  };

  const handleAddPrescriptionToBag = (prescription: Product[]) => {
    setBagItems((prev) => {
      const updated = [...prev];
      prescription.forEach((prod) => {
        const found = updated.find((i) => i.product.id === prod.id);
        if (found) {
          found.quantity += 1;
        } else {
          updated.push({ product: prod, quantity: 1, giftBox: false });
        }
      });
      return updated;
    });
    setIsBagOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setBagItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setBagItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearBag = () => {
    setBagItems([]);
  };

  const activeProduct = PRODUCTS.find((p) => p.id === selectedProductId);
  const totalItemsCount = bagItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md antialiased selection:bg-primary selection:text-on-primary">
      {/* Global Header */}
      <Header
        currentPath={currentPath}
        onNavigate={setCurrentPath}
        onOpenProduct={handleOpenProduct}
        onOpenBag={() => setIsBagOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        bagCount={totalItemsCount}
      />

      {/* Main Routed Content */}
      <main className="w-full pt-20 bg-surface min-h-screen flex-1">
        {currentPath === 'home' && (
          <HeroHome
            onNavigate={setCurrentPath}
            onOpenProduct={handleOpenProduct}
          />
        )}

        {currentPath === 'collection' && (
          <CollectionPage
            onOpenProduct={handleOpenProduct}
            onAddToBag={handleAddToBag}
          />
        )}

        {currentPath === 'our-story' && (
          <OurStoryPage
            onNavigate={setCurrentPath}
            onOpenProduct={handleOpenProduct}
          />
        )}

        {currentPath === 'stockists' && (
          <StockistsPage onNavigate={setCurrentPath} />
        )}

        {currentPath === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={setCurrentPath}
        onOpenProduct={handleOpenProduct}
      />

      {/* Product Detail Modal */}
      {activeProduct && (
        <ProductDetailModal
          product={activeProduct}
          onClose={() => setSelectedProductId(null)}
          onAddToBag={handleAddToBag}
        />
      )}

      {/* Ceremony Bag Drawer */}
      <BagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={bagItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
      />

      {/* Hair Diagnosis & Prescription Modal */}
      <HairQuizModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onAddPrescriptionToBag={handleAddPrescriptionToBag}
        onOpenProduct={handleOpenProduct}
      />
    </div>
  );
}
