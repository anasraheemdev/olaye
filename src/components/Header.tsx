import React, { useState } from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenProduct: (productId?: string) => void;
  onOpenBag: () => void;
  onOpenProfile: () => void;
  bagCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenProduct,
  onOpenBag,
  onOpenProfile,
  bagCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: 'home' },
    { label: 'Collection', path: 'collection' },
    { label: 'Our Story', path: 'our-story' },
    { label: 'Stockists', path: 'stockists' },
    { label: 'Contact', path: 'contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_12px_32px_-4px_rgba(0,0,0,0.7)] border-b border-primary/10">
      <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin flex items-center justify-between">
        {/* Brand Emblem & Name */}
        <div className="flex items-center gap-space-sm cursor-pointer" onClick={() => handleNavClick('home')}>
          <img
            alt="OLAYE Emblem"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1X-mbIA1-vgXGgYi_NcRy6XIfwR6QNJeVFY43tNRBORKIWABXpfezelGhMdC3rhModqWe0zm34V-4JYbh1kLzAlyXNd4OODOHsHaxg5oWPBq2H-rQFEUT8u535euII8g4a5g2MN8ICLcE_o01QGcY9b2_FOdZJR4U83O-7thpcYvCArlWTvszcNFwV_nKETx9ugChFWQFeJuQOm1pxiDaf5ECSZ0s1KThSxuTkFpLuFdg"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm uppercase tracking-[0.14em] text-on-surface hover:text-primary transition-colors duration-300">
              OLAYE
            </span>
            <span className="font-label-caps text-label-caps uppercase text-outline tracking-[0.24em] -mt-1">
              International
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-space-lg">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNavClick(item.path)}
                className={`font-label-caps uppercase tracking-[0.18em] transition-colors duration-300 py-1 ${
                  isActive
                    ? 'text-primary border-b border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="flex items-center gap-space-md">
          {/* Explore the Product Button */}
          <button
            type="button"
            onClick={() => onOpenProduct('shampoo-01')}
            className="hidden lg:inline-flex items-center justify-center px-space-md py-space-xs bg-surface-container-lowest text-on-surface font-label-caps text-label-caps uppercase tracking-[0.16em] border border-primary hover:border-primary-fixed hover:text-primary hover:shadow-[0_0_16px_rgba(201,162,75,0.25)] transition-all duration-300"
          >
            Explore the Product
          </button>

          {/* Ceremony Bag / Cart Trigger */}
          <button
            type="button"
            onClick={onOpenBag}
            className="relative p-2 text-on-surface hover:text-primary transition-colors"
            title="Ceremony Bag"
            aria-label="Ceremony Bag"
          >
            <span className="material-symbols-outlined text-[22px]">local_mall</span>
            {bagCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-on-primary font-label-caps text-[10px] font-bold flex items-center justify-center shadow-sm">
                {bagCount}
              </span>
            )}
          </button>

          {/* User Profile / Hair Diagnostic Trigger */}
          <button
            type="button"
            onClick={onOpenProfile}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer shadow-sm hover:bg-primary-fixed transition-colors"
            title="Atelier Profile &amp; Prescription"
            aria-label="Atelier Profile &amp; Prescription"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-primary/20 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNavClick(item.path)}
                className={`text-left font-headline-sm text-[18px] uppercase tracking-widest ${
                  currentPath === item.path ? 'text-primary' : 'text-on-surface'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-outline/20 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                onOpenProduct('shampoo-01');
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.18em]"
            >
              Explore the Product
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenProfile();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase tracking-[0.18em] border border-outline/30"
            >
              Hair Diagnostic Prescription
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
