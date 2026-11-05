import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenProduct: (productId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenProduct }) => {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant pt-space-xl pb-space-lg shadow-[0_-12px_32px_-4px_rgba(0,0,0,0.5)] border-t border-primary/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
          {/* Col 1: Atelier & Philosophy */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm uppercase tracking-wider">
              Atelier &amp; Philosophy
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm leading-relaxed">
              Devoted to the mastery of rare botanical alchemy, botanical couture, and restorative haircare rituals designed for the sensorial senses.
            </p>
            <p className="font-label-caps text-label-caps uppercase text-outline tracking-[0.2em]">
              Haute Botanical Haircare
            </p>
          </div>

          {/* Col 2: Signature Collection */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm uppercase tracking-wider">
              Signature Collection
            </h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm">
              <li className="py-1">
                <button
                  type="button"
                  onClick={() => onOpenProduct('huile-sublime')}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  L'Huile Sublime Restoratrice
                </button>
              </li>
              <li className="py-1">
                <button
                  type="button"
                  onClick={() => onOpenProduct('nectar-concentre')}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Nectar Concentré Botanical
                </button>
              </li>
              <li className="py-1">
                <button
                  type="button"
                  onClick={() => onOpenProduct('masque-celeste')}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Masque Céleste Regenerative
                </button>
              </li>
              <li className="py-1">
                <button
                  type="button"
                  onClick={() => onOpenProduct('baume-de-soie')}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Baume de Soie Scalp Elixir
                </button>
              </li>
              <li className="py-1">
                <button
                  type="button"
                  onClick={() => onOpenProduct('complete-atelier-box')}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  The Complete Atelier Box
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Client & Salon */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm uppercase tracking-wider">
              Client &amp; Salon
            </h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm">
              <li className="py-1">
                <button
                  type="button"
                  onClick={() => onNavigate('stockists')}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors"
                >
                  Global Salon Partnerships
                </button>
              </li>
              <li className="py-1">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors"
                >
                  Private Haircare Consultations
                </button>
              </li>
              <li className="py-1">
                <button
                  type="button"
                  onClick={() => onNavigate('stockists')}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors"
                >
                  Official Atelier Stockists
                </button>
              </li>
              <li className="py-1">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors"
                >
                  Bespoke Masterclasses
                </button>
              </li>
              <li className="py-1">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors"
                >
                  Press &amp; Editorial Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm uppercase tracking-wider">
              Newsletter &amp; Contact
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm leading-relaxed">
              Receive private dispatches regarding seasonal botanicals, harvest notes, and ritual launches.
            </p>
            <div className="flex flex-col gap-space-xs mb-space-sm font-body-sm text-body-sm text-on-surface">
              <a
                className="hover:text-primary transition-colors"
                href="mailto:support@olayeinternational.com"
              >
                support@olayeinternational.com
              </a>
              <a className="hover:text-primary transition-colors" href="tel:+8613172021392">
                +86 131 7202 1392
              </a>
            </div>
            <div className="flex items-center gap-space-md">
              <a
                className="font-label-caps text-label-caps uppercase text-outline hover:text-primary transition-colors"
                href="#instagram"
                onClick={(e) => e.preventDefault()}
              >
                Instagram
              </a>
              <a
                className="font-label-caps text-label-caps uppercase text-outline hover:text-primary transition-colors"
                href="#wechat"
                onClick={(e) => e.preventDefault()}
              >
                WeChat
              </a>
              <a
                className="font-label-caps text-label-caps uppercase text-outline hover:text-primary transition-colors"
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Terms */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-space-md font-label-caps text-label-caps uppercase tracking-[0.16em] text-outline border-t border-surface-container-highest">
          <p>© Olaye International. All rights reserved.</p>
          <div className="flex items-center gap-space-md mt-space-sm md:mt-0">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms of Ritual</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Formulation Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
