import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Prestige Salon Wholesale Allocation',
    salonName: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `OLY-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(code);
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-surface min-h-screen py-12 md:py-20 animate-fade-in">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-primary/25">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.24em]">
              Atelier Concierge &amp; Salon Alliance
            </span>
          </div>

          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
            Initiate Contact
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Whether inquiring regarding global salon allocations, private client consultations, or editorial samples, our atelier concierge responds within 24 hours.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-low/80 border border-primary/20 rounded-xl p-6 md:p-10 shadow-xl backdrop-blur-md">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-surface-container-highest border border-primary/40 text-primary flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[32px]">mark_email_read</span>
                </div>

                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Dispatch Recorded
                </h3>

                <p className="font-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-primary font-medium">{formData.name}</span>. Your inquiry has been routed to the Senior Partner Concierge under protocol reference:
                </p>

                <div className="inline-block px-4 py-2 bg-surface-container-highest rounded border border-primary text-primary font-mono text-sm tracking-widest">
                  {referenceCode}
                </div>

                <p className="font-body-sm text-outline pt-2">
                  A personal transmission will arrive at <span className="text-on-surface">{formData.email}</span> shortly.
                </p>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Prestige Salon Wholesale Allocation',
                        salonName: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase tracking-wider hover:text-primary transition-colors border border-outline/30"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-primary/15 pb-4">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Private Inquiry Transmission
                  </h3>
                  <p className="font-body-sm text-on-surface-variant">
                    Please provide your details below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-[11px] uppercase text-outline tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline/30 rounded focus:border-primary text-on-surface text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[11px] uppercase text-outline tracking-wider block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@vance-atelier.com"
                      className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline/30 rounded focus:border-primary text-on-surface text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-[11px] uppercase text-outline tracking-wider block mb-1">
                      Telephone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 20 7000 0000"
                      className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline/30 rounded focus:border-primary text-on-surface text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[11px] uppercase text-outline tracking-wider block mb-1">
                      Nature of Inquiry *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline/30 rounded focus:border-primary text-on-surface text-sm outline-none transition-colors"
                    >
                      <option value="Prestige Salon Wholesale Allocation">
                        Prestige Salon Wholesale Allocation
                      </option>
                      <option value="Private Haircare Consultation">
                        Private Haircare Consultation
                      </option>
                      <option value="Press, Editorial &amp; Sample Loan">
                        Press, Editorial &amp; Sample Loan
                      </option>
                      <option value="Atelier Flacon Bespoke Order">
                        Atelier Flacon Bespoke Order
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-label-caps text-[11px] uppercase text-outline tracking-wider block mb-1">
                    Salon / Entity Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.salonName}
                    onChange={(e) => setFormData({ ...formData, salonName: e.target.value })}
                    placeholder="e.g. Atelier Mayfair London"
                    className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline/30 rounded focus:border-primary text-on-surface text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="font-label-caps text-[11px] uppercase text-outline tracking-wider block mb-1">
                    Message / Allocation Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your salon requirements, hair concerns, or projected distribution..."
                    className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline/30 rounded focus:border-primary text-on-surface text-sm outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.2em] shadow-[0_0_24px_rgba(235,193,102,0.3)] hover:bg-primary-fixed hover:shadow-[0_0_36px_rgba(235,193,102,0.5)] transition-all cursor-pointer"
                >
                  Transmit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right: Atelier Dispatch Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-low/80 border border-primary/20 rounded-xl p-6 md:p-8 space-y-6 backdrop-blur-md">
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em] block">
                Direct Communications
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                    mail
                  </span>
                  <div>
                    <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider block">
                      Client &amp; Wholesale Support
                    </span>
                    <a
                      href="mailto:support@olayeinternational.com"
                      className="font-body-md text-on-surface hover:text-primary transition-colors"
                    >
                      support@olayeinternational.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                    call
                  </span>
                  <div>
                    <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider block">
                      International Dispatch Line
                    </span>
                    <a
                      href="tel:+8613172021392"
                      className="font-body-md text-on-surface hover:text-primary transition-colors"
                    >
                      +86 131 7202 1392
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                    schedule
                  </span>
                  <div>
                    <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider block">
                      Concierge Hours
                    </span>
                    <p className="font-body-sm text-on-surface-variant">
                      Monday to Saturday: 09:00 – 19:00 GMT
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Atelier Locations */}
            <div className="bg-surface-container-lowest border border-primary/15 rounded-xl p-6 md:p-8 space-y-4">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Registered Global Ateliers
              </h4>

              <div className="space-y-3 pt-2 text-sm text-on-surface-variant font-body-sm border-t border-surface-container-highest">
                <div>
                  <span className="font-label-caps text-primary text-[11px] block uppercase tracking-wider">
                    London HQ &amp; Laboratory
                  </span>
                  <p>14 Mount Street, Mayfair, London W1K 2RF, United Kingdom</p>
                </div>

                <div>
                  <span className="font-label-caps text-primary text-[11px] block uppercase tracking-wider">
                    East Asia Dispatch Office
                  </span>
                  <p>Plaza 66 Tower 1, Jing'an, Shanghai, China</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
