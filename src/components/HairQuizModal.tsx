import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';

interface HairQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPrescriptionToBag: (products: Product[]) => void;
  onOpenProduct: (productId: string) => void;
}

export const HairQuizModal: React.FC<HairQuizModalProps> = ({
  isOpen,
  onClose,
  onAddPrescriptionToBag,
  onOpenProduct,
}) => {
  const [step, setStep] = useState(1);
  const [texture, setTexture] = useState('Fine & Delicate');
  const [scalp, setScalp] = useState('Prone to Dryness & Tightness');
  const [goal, setGoal] = useState('Glass-Like Mirror Brilliance');
  const [isPrescriptionReady, setIsPrescriptionReady] = useState(false);

  if (!isOpen) return null;

  const handleComplete = () => {
    setIsPrescriptionReady(true);
  };

  // Determine prescribed products based on quiz
  const prescribedProducts = [
    PRODUCTS[0], // Black Seed Shampoo
    goal.includes('Density') ? PRODUCTS[3] : PRODUCTS[1], // Nectar or Huile
    scalp.includes('Sensitive') ? PRODUCTS[4] : PRODUCTS[2], // Baume or Masque
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-surface-container-low border border-primary/30 rounded-xl p-6 md:p-10 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-primary/20 pb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">science</span>
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em]">
              The Atelier Trichological Diagnostic
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-outline hover:text-on-surface"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {!isPrescriptionReady ? (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                Step 0{step} of 03
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                {step === 1 && 'Describe your primary hair fiber structure:'}
                {step === 2 && 'What is the current condition of your scalp?'}
                {step === 3 && 'What is your paramount haircare aspiration?'}
              </h3>
            </div>

            {/* Step 1: Fiber Structure */}
            {step === 1 && (
              <div className="space-y-2.5">
                {[
                  'Fine & Delicate (Lacks volume, easily weighed down)',
                  'Normal to Medium Density (Needs moisture balance)',
                  'Coarse, Textured or Curly (Thirsty for rich lipids)',
                  'Chemically Lightened or Thermally Stressed',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTexture(item)}
                    className={`w-full p-4 rounded text-left border transition-all ${
                      texture === item
                        ? 'bg-surface-container-high border-primary text-primary font-semibold'
                        : 'bg-surface-container-lowest border-outline/20 text-on-surface hover:border-outline/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Scalp Condition */}
            {step === 2 && (
              <div className="space-y-2.5">
                {[
                  'Prone to Dryness & Tightness (Flaking or dehydration)',
                  'Excess Sebum & Oiliness (Suffocated roots)',
                  'Sensitive & Reactive (Itchiness, redness)',
                  'Balanced & Comfortable (Preventative maintenance)',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setScalp(item)}
                    className={`w-full p-4 rounded text-left border transition-all ${
                      scalp === item
                        ? 'bg-surface-container-high border-primary text-primary font-semibold'
                        : 'bg-surface-container-lowest border-outline/20 text-on-surface hover:border-outline/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Paramount Goal */}
            {step === 3 && (
              <div className="space-y-2.5">
                {[
                  'Glass-Like Mirror Brilliance & Silken Movement',
                  'Follicle Root Anchoring & Tensile Density',
                  'Deep Intercellular Lipid Replenishment',
                  'Microbiome Calming & Long-term Scalp Health',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setGoal(item)}
                    className={`w-full p-4 rounded text-left border transition-all ${
                      goal === item
                        ? 'bg-surface-container-high border-primary text-primary font-semibold'
                        : 'bg-surface-container-lowest border-outline/20 text-on-surface hover:border-outline/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-surface-container-highest">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-outline hover:text-on-surface font-label-caps text-xs uppercase tracking-wider"
                >
                  ← Previous
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2.5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary-fixed transition-all"
                >
                  Next Stage →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleComplete}
                  className="px-6 py-2.5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary-fixed shadow-[0_0_16px_rgba(235,193,102,0.3)] transition-all"
                >
                  Generate Bespoke Prescription
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Prescription Result */
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest px-3 py-1 bg-secondary-container/20 rounded-full border border-secondary/30">
                Diagnostic Complete
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                Your Bespoke Botanical Protocol
              </h3>
              <p className="font-body-sm text-on-surface-variant max-w-md mx-auto">
                Calibrated for <strong className="text-on-surface">{texture.split('(')[0]}</strong> with focus on <strong className="text-on-surface">{goal}</strong>.
              </p>
            </div>

            {/* Recommended triad */}
            <div className="space-y-3">
              {prescribedProducts.map((p, i) => (
                <div
                  key={p.id}
                  className="p-4 bg-surface-container rounded-lg border border-primary/20 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-label-caps text-xs text-primary font-bold">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-title-md text-sm text-on-surface">{p.name}</h4>
                      <p className="font-body-sm text-xs text-on-surface-variant">{p.subTitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-primary font-title-md text-sm">£{p.price}</span>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenProduct(p.id);
                      }}
                      className="px-3 py-1 text-xs bg-surface-container-high border border-outline/30 hover:border-primary text-on-surface rounded font-label-caps uppercase tracking-wider"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onAddPrescriptionToBag(prescribedProducts);
                  onClose();
                }}
                className="flex-1 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.2em] shadow-lg hover:bg-primary-fixed transition-all"
              >
                Add Complete Protocol to Bag
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsPrescriptionReady(false);
                  setStep(1);
                }}
                className="px-4 py-3 bg-surface-container-high border border-outline/30 text-outline hover:text-on-surface font-label-caps text-xs uppercase tracking-wider"
              >
                Retake Diagnostic
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
