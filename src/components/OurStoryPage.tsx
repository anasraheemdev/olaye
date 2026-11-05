import React from 'react';

interface OurStoryPageProps {
  onNavigate: (path: string) => void;
  onOpenProduct: (productId?: string) => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = ({ onNavigate, onOpenProduct }) => {
  return (
    <div className="w-full bg-surface min-h-screen py-12 md:py-20 animate-fade-in">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin space-y-16 md:space-y-24">
        {/* Monograph Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-secondary/30">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.24em]">
              Heritage Monograph
            </span>
          </div>

          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
            The Botanical Alchemy of Olaye
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Where sacred Eastern herbalism converges with disciplined British cosmetic science. An unhurried pursuit of pure hair restoration.
          </p>
        </div>

        {/* Section 1: The Sacred Nigella Sativa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-surface-container-low border border-primary/20">
              <img
                alt="Brass scoop of glistening black Nigella seeds alongside botanical blue flower"
                className="w-full h-full object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCpkB0yqP2oYB-tjHzwVJkGRAQsyNTEZnjkjcUdZuXy2FAc1Nvnz6aVfJchYjekdIAjyTIEMPvI7SbeazaZ_hv6t8oHaigVzk25EXiLeF9ut4SXV60IN_2_ZETulE613KGanE5568ndBAcqtEJoNXW_fD7xKdAtgj97kwnkAxa3ZXAAJN5YZvWppy1Aqm_xt60WrexYFZPurfe9UKHS7-yvpHIl52Yp_mhQxaIiWby"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary block">
                  Provenance
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-normal">
                  Arid Plateau Sunrise Harvest
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full">
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em]">
                Sacred Origins
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              The Blessed Seed of Antiquity
            </h2>

            <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                For over three millennia, across the courts of Babylon and the Pharaohs of Egypt, the jet-black seed of <em className="text-on-surface font-display-hero">Nigella Sativa</em> was revered as a miraculous restorer of youth and stamina.
              </p>
              <p>
                Archaeologists unsealed intact flacons of black seed oil within the golden burial chambers of Tutankhamun—intended to preserve royal dignity and beauty into the afterlife.
              </p>
              <p className="text-on-surface">
                Today, modern pharmacology validates this ancient devotion: the seed holds exceptional concentrations of thymoquinone, carvacrol, and essential fatty acids that actively soothe the scalp and cement brittle hair shafts.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: British Cosmetic Couture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full">
              <span className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.2em]">
                Atelier London
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              British Cosmetic Engineering
            </h2>

            <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                While commercial haircare masks hair distress with temporary silicone coats and volatile alcohols, OLAYE formulations are synthesized in our London laboratory with uncompromising purity.
              </p>
              <p>
                We use custom low-temperature hydraulic expellers that extract black seed oil without exceeding 38°C. This protects fragile antioxidant bonds and keeps the natural lipid profile completely uncompromised.
              </p>
              <p className="text-primary font-medium">
                0% Silicones. 0% Sulfates. 0% Synthetic Dyes. 100% Bio-Active Integrity.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-surface-container-low border border-primary/20 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-radial from-primary/20 via-transparent to-transparent pointer-events-none" />
              <img
                alt="OLAYE Flacon Formulation"
                className="w-full h-full object-contain max-h-[380px] z-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwQRxV5ZO0txPKAOO0l8OHD57BGf2xXJuXRRhXPEO9PqlOYU3G68TKeU23rI4w4yWqURMGLQYVE39xybO2GwtkAC1fDN_t04Fdm4tozP2Eu8CFGZFm09six6m1zFKH36ype9iS4otegPQ-Z55EdWh55YEGzbQ_KZqDHh49oeuMyDee53zcXEdCBGmOsMaAJLOWdLjNApY20dzvHOk85jtgvCIBdhvAcOo4zISvRvXR"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded-full border border-primary/20">
                <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] text-primary">
                  London Formulation Lab
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: The Three Pillars of Purity */}
        <div className="bg-surface-container-low/80 p-8 md:p-12 rounded-xl border border-primary/20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em]">
              The Formulation Oath
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              Sensory Weightlessness &amp; Lasting Density
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface-container rounded-lg border border-outline/10 space-y-3">
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest px-2.5 py-1 bg-surface-container-highest rounded-full">
                I. First-Press Only
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Unadulterated Virgin Lipids
              </h4>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                We reject second and chemical hot solvent pressings. Only the initial amber nectar from single-origin harvest batches enters our apothecary flacons.
              </p>
            </div>

            <div className="p-6 bg-surface-container rounded-lg border border-outline/10 space-y-3">
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest px-2.5 py-1 bg-surface-container-highest rounded-full">
                II. Scalp Microbiome
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Living Follicle Harmony
              </h4>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Healthy hair cannot sprout from inflamed or suffocation-stressed scalp strata. Every formula maintains physiological pH 5.2 to safeguard natural dermal flora.
              </p>
            </div>

            <div className="p-6 bg-surface-container rounded-lg border border-outline/10 space-y-3">
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest px-2.5 py-1 bg-surface-container-highest rounded-full">
                III. Haute Parfumerie
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Three-Tier Olfactory Sillage
              </h4>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Rather than synthetic mask scents, our formulas are layered like fine niche fragrances with Bulgarian Damascena rose, Italian citrus, and warm ambergris.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Explore Products */}
        <div className="text-center space-y-4 pt-6">
          <h3 className="font-headline-md text-headline-md text-on-surface">
            Experience the Transformation
          </h3>
          <p className="font-body-md text-on-surface-variant max-w-lg mx-auto">
            Discover Master Formula 01 or explore the complete 5-piece apothecary ritual.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={() => onOpenProduct('shampoo-01')}
              className="px-8 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.2em] shadow-[0_0_24px_rgba(235,193,102,0.3)] hover:bg-primary-fixed transition-all cursor-pointer"
            >
              Explore Master Formula 01
            </button>
            <button
              type="button"
              onClick={() => onNavigate('collection')}
              className="px-8 py-3 bg-surface-container-high border border-outline/30 text-on-surface font-label-caps text-label-caps uppercase tracking-[0.2em] hover:text-primary hover:border-primary transition-all cursor-pointer"
            >
              View Full Dispensary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
