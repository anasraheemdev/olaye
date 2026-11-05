import React, { useState } from 'react';
import { STOCKISTS, StockistLocation } from '../data/products';

interface StockistsPageProps {
  onNavigate: (path: string) => void;
}

export const StockistsPage: React.FC<StockistsPageProps> = ({ onNavigate }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [bookingModalLocation, setBookingModalLocation] = useState<StockistLocation | null>(null);
  const [bookedSuccess, setBookedSuccess] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('14:00');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const regions = ['All', 'Europe', 'North America', 'Middle East', 'Asia-Pacific'];

  const filteredStockists =
    selectedRegion === 'All'
      ? STOCKISTS
      : STOCKISTS.filter((s) => s.region === selectedRegion);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookedSuccess(true);
    setTimeout(() => {
      setBookedSuccess(false);
      setBookingModalLocation(null);
      setClientName('');
      setClientEmail('');
      setBookingDate('');
    }, 2800);
  };

  return (
    <div className="w-full bg-surface min-h-screen py-12 md:py-20 animate-fade-in">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-margin space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-primary/25">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.24em]">
              Global Salon &amp; Atelier Network
            </span>
          </div>

          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
            Official Stockists &amp; Salons
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Experience bespoke in-person trichological diagnoses and customized flacon ceremonies at our flagship ateliers and premier worldwide salon partners.
          </p>
        </div>

        {/* Region Filters */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {regions.map((reg) => {
            const isSelected = selectedRegion === reg;
            return (
              <button
                key={reg}
                type="button"
                onClick={() => setSelectedRegion(reg)}
                className={`px-4 py-2 rounded-full font-label-caps text-label-caps uppercase tracking-[0.16em] transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-on-primary shadow-[0_0_16px_rgba(235,193,102,0.3)] font-semibold'
                    : 'bg-surface-container-low text-on-surface-variant border border-outline/20 hover:border-primary/40 hover:text-on-surface'
                }`}
              >
                {reg}
              </button>
            );
          })}
        </div>

        {/* Stockist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStockists.map((salon) => (
            <div
              key={salon.name}
              className="bg-surface-container-low/80 border border-primary/20 rounded-xl p-6 md:p-8 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-primary/50 transition-all duration-300 shadow-lg group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-primary px-2.5 py-1 bg-surface-container-highest rounded">
                    {salon.city}
                  </span>
                  <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider">
                    {salon.region}
                  </span>
                </div>

                <h3 className="font-headline-sm text-[22px] text-on-surface group-hover:text-primary transition-colors">
                  {salon.name}
                </h3>

                <p className="font-body-sm text-on-surface-variant flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-outline shrink-0 mt-0.5">
                    location_on
                  </span>
                  <span>{salon.address}</span>
                </p>

                <div className="pt-2 border-t border-surface-container-highest space-y-1">
                  <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider block">
                    Bespoke In-Atelier Services
                  </span>
                  <ul className="space-y-1">
                    {salon.services.map((svc) => (
                      <li key={svc} className="text-[13px] font-body-sm text-secondary flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-secondary" />
                        {svc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-primary/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-outline font-label-sm">
                  <span>{salon.hours}</span>
                  <a href={`tel:${salon.contact}`} className="hover:text-primary transition-colors">
                    {salon.contact}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setBookingModalLocation(salon)}
                  className="w-full py-2.5 px-4 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-caps text-label-caps uppercase tracking-[0.16em] border border-primary/30 transition-all text-center cursor-pointer"
                >
                  Book Private Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale Alliance Card */}
        <div className="p-8 md:p-12 rounded-xl bg-surface-container-lowest border border-primary/30 relative overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.2em] block">
              Luxury Salon &amp; Spa Curation
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              Become an Authorized Atelier Partner
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              We extend curated allocations and ceremonial backbar dispensers to discerning luxury salons and five-star spa sanctuaries worldwide.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-8 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.2em] shadow-[0_0_24px_rgba(235,193,102,0.3)] hover:bg-primary-fixed transition-all cursor-pointer"
              >
                Inquire for Wholesale Allocation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {bookingModalLocation && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-surface-container-low border border-primary/40 rounded-xl p-6 md:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-primary/20 pb-4">
              <div>
                <span className="font-label-caps text-[10px] uppercase text-primary tracking-widest block">
                  Private Scalp &amp; Hair Consultation
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {bookingModalLocation.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setBookingModalLocation(null)}
                className="text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {bookedSuccess ? (
              <div className="py-8 text-center space-y-3">
                <span className="material-symbols-outlined text-primary text-[48px]">check_circle</span>
                <h4 className="font-headline-sm text-headline-sm text-primary">
                  Ceremony Appointment Requested
                </h4>
                <p className="font-body-sm text-on-surface-variant max-w-sm mx-auto">
                  Our concierge at {bookingModalLocation.city} has recorded your request for {bookingDate || 'upcoming dispatch'} at {bookingTime}. A private confirmation email is arriving shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="font-label-caps text-[11px] uppercase text-outline tracking-wider block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Lady / Sir / Your Name"
                    className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline/30 rounded focus:border-primary text-on-surface text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="font-label-caps text-[11px] uppercase text-outline tracking-wider block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 bg-surface-container-lowest border border-outline/30 rounded focus:border-primary text-on-surface text-sm outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-[11px] uppercase text-outline tracking-wider block mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-4 py-2 bg-surface-container-lowest border border-outline/30 rounded focus:border-primary text-on-surface text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-[11px] uppercase text-outline tracking-wider block mb-1">
                      Preferred Time
                    </label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full px-4 py-2 bg-surface-container-lowest border border-outline/30 rounded focus:border-primary text-on-surface text-sm outline-none"
                    >
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:30">04:30 PM</option>
                      <option value="18:00">06:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-[0.2em] shadow-md hover:bg-primary-fixed transition-all cursor-pointer"
                  >
                    Confirm Private Consultation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
