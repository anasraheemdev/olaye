import React from 'react';
import type { OlfactoryNotes } from '../data/products';

interface OlfactoryPyramidProps {
  olfactoryNotes: OlfactoryNotes;
  compact?: boolean;
}

export const OlfactoryPyramid: React.FC<OlfactoryPyramidProps> = ({ olfactoryNotes, compact = false }) => {
  return (
    <div className="w-full bg-surface-container-lowest/80 border border-primary/20 rounded-lg p-space-md md:p-space-lg relative overflow-hidden backdrop-blur-xl">
      {/* Subtle gold radiance ambient glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-sm border-b border-primary/15 mb-space-md gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.24em]">
            Olfactory Pyramid Architecture
          </span>
        </div>
        <span className="font-label-caps text-label-caps uppercase text-outline tracking-widest">
          Haute Parfumerie Formulation
        </span>
      </div>

      {/* Pyramid Tier Container */}
      <div className="space-y-space-md relative">
        {/* TOP NOTES (Crowning notes, 15 minutes) */}
        <div className="group relative">
          <div className="flex items-baseline justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-[10px] uppercase text-primary/80 tracking-[0.2em] px-2 py-0.5 bg-primary/10 rounded-sm">
                01 / Top Notes
              </span>
              <span className="text-body-sm text-outline italic">The Awakening Aura • 0–15 mins</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 py-1">
            {olfactoryNotes.top.map((note, index) => (
              <React.Fragment key={note}>
                <span className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-default">
                  {note}
                </span>
                {index < olfactoryNotes.top.length - 1 && (
                  <span className="text-primary/40 text-xs">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Hairline dividing rule */}
          <div className="w-full h-px bg-gradient-to-r from-primary/30 via-outline/20 to-transparent mt-3" />
        </div>

        {/* HEART NOTES (The Core Spirit, 2-4 hours) */}
        <div className="group relative">
          <div className="flex items-baseline justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-[10px] uppercase text-secondary tracking-[0.2em] px-2 py-0.5 bg-secondary-container/30 rounded-sm">
                02 / Heart Notes
              </span>
              <span className="text-body-sm text-outline italic">The Botanical Soul • 2–4 hours</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 py-1">
            {olfactoryNotes.heart.map((note, index) => (
              <React.Fragment key={note}>
                <span className="font-headline-sm text-headline-sm text-on-surface hover:text-secondary transition-colors cursor-default">
                  {note}
                </span>
                {index < olfactoryNotes.heart.length - 1 && (
                  <span className="text-secondary/40 text-xs">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Hairline dividing rule */}
          <div className="w-full h-px bg-gradient-to-r from-secondary/30 via-outline/20 to-transparent mt-3" />
        </div>

        {/* BASE NOTES (The Obsidian Foundation, 8+ hours) */}
        <div className="group relative">
          <div className="flex items-baseline justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-[10px] uppercase text-outline tracking-[0.2em] px-2 py-0.5 bg-surface-container-highest rounded-sm">
                03 / Base Notes
              </span>
              <span className="text-body-sm text-outline italic">The Lingering Sillage • 8+ hours</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 py-1">
            {olfactoryNotes.base.map((note, index) => (
              <React.Fragment key={note}>
                <span className="font-headline-sm text-headline-sm text-on-surface/90 hover:text-primary-fixed transition-colors cursor-default">
                  {note}
                </span>
                {index < olfactoryNotes.base.length - 1 && (
                  <span className="text-outline/40 text-xs">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Sensory narrative statement */}
      {!compact && olfactoryNotes.sensoryDescription && (
        <div className="mt-space-md pt-space-sm border-t border-primary/10 bg-surface-container-low/40 p-3 rounded">
          <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
            "{olfactoryNotes.sensoryDescription}"
          </p>
        </div>
      )}
    </div>
  );
};
