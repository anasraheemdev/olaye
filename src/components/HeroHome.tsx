import React from 'react';

interface HeroHomeProps {
  onNavigate: (path: string) => void;
  onOpenProduct: (productId?: string) => void;
}

export const HeroHome: React.FC<HeroHomeProps> = ({ onNavigate, onOpenProduct }) => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest -mt-20 pt-28 pb-space-xl">
        {/* Ambient gold and botanical glow backdrops */}
        <div className="pointer-events-none absolute top-12 right-1/4 w-[540px] h-[540px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-16 left-10 w-[420px] h-[420px] bg-secondary-container/20 rounded-full blur-[120px]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center min-h-[760px]">
            {/* Left: Editorial Content */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-space-md z-10">
              <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container/70 rounded-full shadow-sm border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.22em]">
                  Botanical Hair Therapy
                </span>
              </div>

              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight max-w-[620px]">
                Black Seed Power for <span className="italic text-primary font-normal">Stronger</span>, Shinier Hair
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[540px] leading-relaxed">
                Where sacred Eastern botanical alchemy converges with disciplined British cosmetic couture. An artisanal restorative ritual crafted to elevate everyday cleansing into an elevated sensory ceremony.
              </p>

              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <button
                  type="button"
                  onClick={() => onOpenProduct('shampoo-01')}
                  className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.18em] shadow-[0_0_24px_rgba(235,193,102,0.32)] hover:shadow-[0_0_36px_rgba(235,193,102,0.5)] hover:bg-primary-fixed transition-all duration-300 cursor-pointer"
                >
                  Explore the Product
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center px-space-lg py-space-sm bg-surface-container-high/60 backdrop-blur-md text-on-surface font-label-caps text-label-caps uppercase tracking-[0.18em] shadow-sm hover:text-primary hover:bg-surface-container-highest transition-all duration-300 border border-outline/20 cursor-pointer"
                >
                  Contact Us
                </button>
              </div>

              {/* Formulation Sub-metric */}
              <div className="pt-space-md flex items-center gap-space-lg flex-wrap">
                <div>
                  <span className="block font-headline-sm text-headline-sm text-primary">100%</span>
                  <span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">
                    Cold-Pressed Essence
                  </span>
                </div>
                <div className="w-px h-8 bg-surface-container-highest" />
                <div>
                  <span className="block font-headline-sm text-headline-sm text-on-surface">Nigella</span>
                  <span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">
                    Active Sativa Seed
                  </span>
                </div>
                <div className="w-px h-8 bg-surface-container-highest" />
                <div>
                  <span className="block font-headline-sm text-headline-sm text-secondary">0%</span>
                  <span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">
                    Silicone &amp; Sulfates
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Hero Visual Bottle Showcase */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div
                className="relative w-full max-w-[560px] aspect-[4/5] bg-surface-container-low/40 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center border border-primary/20 group cursor-pointer"
                onClick={() => onOpenProduct('shampoo-01')}
              >
                {/* Ambient Radiance Disc */}
                <div className="absolute inset-0 bg-radial from-primary/20 via-transparent to-transparent opacity-80 pointer-events-none" />
                <img
                  alt="OLAYE International Haute Black Seed Hair Bottle with Golden Swirl"
                  className="w-full h-full object-contain object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out select-none"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwQRxV5ZO0txPKAOO0l8OHD57BGf2xXJuXRRhXPEO9PqlOYU3G68TKeU23rI4w4yWqURMGLQYVE39xybO2GwtkAC1fDN_t04Fdm4tozP2Eu8CFGZFm09six6m1zFKH36ype9iS4otegPQ-Z55EdWh55YEGzbQ_KZqDHh49oeuMyDee53zcXEdCBGmOsMaAJLOWdLjNApY20dzvHOk85jtgvCIBdhvAcOo4zISvRvXR"
                />
                {/* Floating Micro-Badge */}
                <div className="absolute bottom-6 right-6 px-space-md py-space-xs bg-surface-container-lowest/80 backdrop-blur-xl shadow-xl flex items-center gap-space-xs border border-primary/30 rounded">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-widest">
                    Haute Couture 250ml
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Ceremony Scroll Guide */}
          <div className="pt-space-lg flex items-center justify-between border-t border-surface-container-high/60">
            <div className="flex items-center gap-space-sm">
              <span className="w-12 h-px bg-primary/40" />
              <span className="font-label-caps text-label-caps uppercase tracking-[0.26em] text-outline">
                Discover Ceremony
              </span>
            </div>
            <div className="flex items-center gap-space-xs text-outline">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                Batch 01
              </span>
              <span className="text-xs">•</span>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                Atelier London
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE HIGHLIGHTS (Horizontal Glass Triad) */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.24em] block mb-2">
                Cellular Regeneration
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                The Three Botanical Pillars
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mt-3 md:mt-0 leading-relaxed">
              Rooted in pharmaceutical-grade extraction to nurture follicles, reinforce shaft architecture, and reflect pure ambient light.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {/* Card 1: Nourishes */}
            <div className="group relative bg-surface-container-low/70 backdrop-blur-md p-space-lg rounded-xl shadow-md hover:bg-surface-container-high/70 hover:shadow-2xl transition-all duration-500 border border-primary/10 hover:border-primary/30">
              <div className="flex items-center justify-between mb-space-md">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary px-2.5 py-1 bg-surface-container-highest rounded-full">
                  01 / Lipid Base
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Nourishes</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                Deep lipid replenishment infused with cold-pressed Nigella Sativa oil to soothe stressed scalps and fortify dehydrated cuticles against environmental depletion.
              </p>
              <div className="inline-flex items-center gap-2 text-secondary font-label-caps text-label-caps uppercase tracking-[0.16em]">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Nigella Sativa Extract
              </div>
            </div>

            {/* Card 2: Strengthens */}
            <div className="group relative bg-surface-container-low/70 backdrop-blur-md p-space-lg rounded-xl shadow-md hover:bg-surface-container-high/70 hover:shadow-2xl transition-all duration-500 border border-primary/10 hover:border-primary/30">
              <div className="flex items-center justify-between mb-space-md">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary px-2.5 py-1 bg-surface-container-highest rounded-full">
                  02 / Keratin Core
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Strengthens</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                Cements keratin micro-fibers from follicle to tip, reducing breakage and restoring structural density while safeguarding virgin hair integrity.
              </p>
              <div className="inline-flex items-center gap-2 text-secondary font-label-caps text-label-caps uppercase tracking-[0.16em]">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Nigella Sativa Extract
              </div>
            </div>

            {/* Card 3: Adds Shine */}
            <div className="group relative bg-surface-container-low/70 backdrop-blur-md p-space-lg rounded-xl shadow-md hover:bg-surface-container-high/70 hover:shadow-2xl transition-all duration-500 border border-primary/10 hover:border-primary/30">
              <div className="flex items-center justify-between mb-space-md">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary px-2.5 py-1 bg-surface-container-highest rounded-full">
                  03 / Mirror Surface
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Adds Shine</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                Delivers glass-like mirror luminescence and silken fluidity without greasy heaviness, leaving hair buoyant and naturally conditioned.
              </p>
              <div className="inline-flex items-center gap-2 text-secondary font-label-caps text-label-caps uppercase tracking-[0.16em]">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Nigella Sativa Extract
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCT TEASER */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin">
          <div className="bg-surface-container/60 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left: High-resolution Bottle Showcase */}
              <div className="lg:col-span-6 relative aspect-square lg:aspect-[5/4] bg-surface-container-low flex items-center justify-center p-space-lg overflow-hidden">
                <div className="absolute inset-0 bg-radial from-primary/25 via-transparent to-transparent pointer-events-none" />
                <img
                  alt="OLAYE Black Seed Nourish &amp; Shine Shampoo Master Bottle"
                  className="w-full h-full object-contain max-h-[500px] z-10 transition-transform duration-500 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwQRxV5ZO0txPKAOO0l8OHD57BGf2xXJuXRRhXPEO9PqlOYU3G68TKeU23rI4w4yWqURMGLQYVE39xybO2GwtkAC1fDN_t04Fdm4tozP2Eu8CFGZFm09six6m1zFKH36ype9iS4otegPQ-Z55EdWh55YEGzbQ_KZqDHh49oeuMyDee53zcXEdCBGmOsMaAJLOWdLjNApY20dzvHOk85jtgvCIBdhvAcOo4zISvRvXR"
                />
                <div className="absolute top-6 left-6 px-3 py-1 bg-surface-container-highest/80 backdrop-blur-md rounded-full border border-primary/20">
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary">
                    Master Formula 01
                  </span>
                </div>
              </div>

              {/* Right: Curated Editorial Copy */}
              <div className="lg:col-span-6 p-space-lg lg:p-space-xl flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-space-sm py-1 bg-surface-container-highest rounded-full self-start mb-space-sm border border-outline/20">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-[0.2em]">
                    The Couture Elixir
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-sm">
                  Black Seed Nourish &amp; Shine Shampoo
                </h2>

                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-space-lg">
                  An extraordinary daily elixir formulated to awaken vitality, restore density, and impart luminous silken movement.
                </p>

                <div className="flex items-center gap-space-md flex-wrap">
                  <button
                    type="button"
                    onClick={() => onOpenProduct('shampoo-01')}
                    className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.18em] shadow-[0_0_24px_rgba(235,193,102,0.3)] hover:shadow-[0_0_36px_rgba(235,193,102,0.5)] hover:bg-primary-fixed transition-all duration-300 cursor-pointer"
                  >
                    View Details
                  </button>
                  <span className="font-body-sm text-body-sm text-outline tracking-wider uppercase">
                    Volume: 250ml e 8.4 fl. oz.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRAND PROMISE STRIP */}
      <section className="w-full bg-surface-container-low py-space-md shadow-inner border-y border-primary/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md items-center">
            {/* Promise 1 */}
            <div className="flex items-center justify-center gap-space-xs py-2">
              <span className="material-symbols-outlined text-primary text-[22px]">check_circle</span>
              <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-[0.2em]">
                Silicone Free
              </span>
            </div>
            {/* Promise 2 */}
            <div className="flex items-center justify-center gap-space-xs py-2">
              <span className="material-symbols-outlined text-primary text-[22px]">check_circle</span>
              <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-[0.2em]">
                Paraben Free
              </span>
            </div>
            {/* Promise 3 */}
            <div className="flex items-center justify-center gap-space-xs py-2">
              <span className="material-symbols-outlined text-primary text-[22px]">check_circle</span>
              <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-[0.2em]">
                Cruelty Free
              </span>
            </div>
            {/* Promise 4 */}
            <div className="flex items-center justify-center gap-space-xs py-2">
              <span className="material-symbols-outlined text-primary text-[22px]">check_circle</span>
              <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-[0.2em]">
                For All Hair Types
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SHORT BRAND STORY (Editorial Split Section) */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Left Column: Botanical Macro Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-surface-container-low border border-primary/20">
                <img
                  alt="Brass scoop of glistening black Nigella seeds alongside botanical blue flower"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCpkB0yqP2oYB-tjHzwVJkGRAQsyNTEZnjkjcUdZuXy2FAc1Nvnz6aVfJchYjekdIAjyTIEMPvI7SbeazaZ_hv6t8oHaigVzk25EXiLeF9ut4SXV60IN_2_ZETulE613KGanE5568ndBAcqtEJoNXW_fD7xKdAtgj97kwnkAxa3ZXAAJN5YZvWppy1Aqm_xt60WrexYFZPurfe9UKHS7-yvpHIl52Yp_mhQxaIiWby"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary block">
                    Source &amp; Provenance
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-normal">
                    Nigella Sativa Harvest
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Poetic Apothecary Narrative */}
            <div className="lg:col-span-6 lg:pl-space-md flex flex-col justify-center space-y-space-md">
              <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 bg-surface-container-high rounded-full border border-secondary/30">
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.22em]">
                  Apothecary Roots
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                The Sacred Nigella Seed
              </h2>

              <div className="space-y-space-xs font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                <p>
                  Revered for millennia across Eastern dynasties as the blessed seed of vitality.
                </p>
                <p>
                  We distill cold-pressed botanical oils through British formulation science to create an incomparable haircare ceremony.
                </p>
                <p className="text-on-surface font-normal">
                  Sensorial richness meets uncompromised purity for lasting strength and glass-like radiance.
                </p>
              </div>

              <div className="pt-space-xs">
                <button
                  type="button"
                  onClick={() => onNavigate('our-story')}
                  className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary hover:text-primary-fixed group transition-colors cursor-pointer"
                >
                  <span>Read Our Heritage</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENT & PARTNER CTA BANNER */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-high p-space-lg md:p-space-xl shadow-2xl border border-primary/20">
            {/* Radial gold spotlight accent */}
            <div className="pointer-events-none absolute -top-24 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-2xl flex flex-col space-y-space-sm">
              <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 bg-surface-container-highest rounded-full border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.22em]">
                  Prestige Salon &amp; Retail Alliance
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Partner with Olaye
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Bespoke wholesale allocations, exclusive atelier curation, and priority worldwide salon partner accounts.
              </p>

              <div className="pt-space-sm">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.2em] shadow-[0_0_28px_rgba(235,193,102,0.35)] hover:bg-primary-fixed hover:shadow-[0_0_40px_rgba(235,193,102,0.55)] transition-all duration-300 cursor-pointer"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
