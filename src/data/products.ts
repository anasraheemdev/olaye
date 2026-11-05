export interface OlfactoryNotes {
  top: string[];
  heart: string[];
  base: string[];
  sensoryDescription: string;
}

export interface DosageRecommendation {
  hairType: string;
  dosage: string;
  measureType: 'pumps' | 'drops';
  value: number; // 1 to 6
  ritualNote: string;
}

export interface Product {
  id: string;
  name: string;
  subTitle: string;
  category: 'Cleansing Elixirs' | 'Intensive Masks' | 'Pressed Oils' | 'Scalp Balms' | 'Atelier Sets';
  price: number;
  volume: string;
  badge?: string;
  description: string;
  detailedStory: string;
  image: string;
  botanicalActives: string[];
  olfactoryPyramid: OlfactoryNotes;
  concentricDial: DosageRecommendation[];
  clinicalResults: { metric: string; label: string }[];
  ritualSteps: string[];
  isFeatured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'shampoo-01',
    name: 'Black Seed Nourish & Shine Shampoo',
    subTitle: 'The Couture Elixir — Master Formula 01',
    category: 'Cleansing Elixirs',
    price: 78,
    volume: '250ml e 8.4 fl. oz.',
    badge: 'Master Formula 01',
    description: 'An extraordinary daily elixir formulated to awaken vitality, restore density, and impart luminous silken movement.',
    detailedStory: 'Formulated with first-press cold-extracted Nigella Sativa oil from pristine arid plateaus, this signature shampoo gently clears follicle impurities while binding vital omegas (3, 6, 9) into the hair fiber. British cosmetic chemists balanced pH 5.2 to preserve cuticle integrity without stripping natural lipid coats.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwQRxV5ZO0txPKAOO0l8OHD57BGf2xXJuXRRhXPEO9PqlOYU3G68TKeU23rI4w4yWqURMGLQYVE39xybO2GwtkAC1fDN_t04Fdm4tozP2Eu8CFGZFm09six6m1zFKH36ype9iS4otegPQ-Z55EdWh55YEGzbQ_KZqDHh49oeuMyDee53zcXEdCBGmOsMaAJLOWdLjNApY20dzvHOk85jtgvCIBdhvAcOo4zISvRvXR',
    botanicalActives: ['Nigella Sativa (Black Seed) Oil', 'Camellia Oleifera Seed Extract', 'Damask Rose Hydrosol', 'Plant Keratin Peptides'],
    olfactoryPyramid: {
      top: ['Calabrian Bergamot', 'Green Violet Leaf', 'Crushed Neroli Blossom'],
      heart: ['Nigella Sativa Essence', 'Bulgarian Damascena Rose', 'Wild Herbaceous Geranium'],
      base: ['Smoked Vanilla Pod', 'Atlas Cedarwood', 'Warm White Ambergris'],
      sensoryDescription: 'An intoxicating botanical vapor that opens with crisp Mediterranean citrus before settling into warm ancient resins and velvety petals.'
    },
    concentricDial: [
      {
        hairType: 'Fine or Delicate Strands',
        dosage: '2 Dispenser Pumps',
        measureType: 'pumps',
        value: 2,
        ritualNote: 'Emulsify into palms with warm water before applying from mid-length upward to the crown.'
      },
      {
        hairType: 'Normal to Medium Density',
        dosage: '3 Dispenser Pumps',
        measureType: 'pumps',
        value: 3,
        ritualNote: 'Work through damp roots in slow circular motions to stimulate micro-circulation.'
      },
      {
        hairType: 'Thick, Coarse, or Chemically Treated',
        dosage: '4-5 Dispenser Pumps',
        measureType: 'pumps',
        value: 5,
        ritualNote: 'Perform a double ceremony: first cleanse lifts debris, second infuses lipid nutrition.'
      },
      {
        hairType: 'Pre-Wash Scalp Purification',
        dosage: '6 Drops Targeted Pipette',
        measureType: 'drops',
        value: 6,
        ritualNote: 'Apply directly onto dry scalp partings 10 minutes prior to warm shower cleansing.'
      }
    ],
    clinicalResults: [
      { metric: '98%', label: 'Demonstrated reduction in mechanical strand breakage' },
      { metric: '94%', label: 'Observed noticeable mirror brilliance and silk glide in 14 days' },
      { metric: '100%', label: 'Free of silicone, sulfates, parabens, and micro-plastics' }
    ],
    ritualSteps: [
      'Inhale: Dispense into palm, warm between hands, and breathe in the aromatherapeutic Damask-Nigella notes.',
      'Stimulate: Massage with fingertips along occipital ridge and crown for 90 seconds to activate circulation.',
      'Emulsify: Introduce a splash of warm water to create a creamy, low-foam micro-emulsion.',
      'Seal: Conclude with a cool water rinse to close cuticles and maximize light reflection.'
    ],
    isFeatured: true
  },
  {
    id: 'huile-sublime',
    name: "L'Huile Sublime Restoratrice",
    subTitle: 'Pure Cold-Pressed Nigella Elixir Flacon',
    category: 'Pressed Oils',
    price: 96,
    volume: '100ml e 3.4 fl. oz.',
    badge: 'Limited Harvest',
    description: 'An ultra-pure restorative golden nectar combining cold-pressed Nigella Sativa with Sicilian Prickly Pear seed oil.',
    detailedStory: 'Hand-harvested at sunrise when botanical thymoquinone concentrations are at their peak. This featherlight dry oil penetrates deep within porous hair shafts to seal split ends, tame flyaways, and safeguard against heat styling up to 230°C.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwQRxV5ZO0txPKAOO0l8OHD57BGf2xXJuXRRhXPEO9PqlOYU3G68TKeU23rI4w4yWqURMGLQYVE39xybO2GwtkAC1fDN_t04Fdm4tozP2Eu8CFGZFm09six6m1zFKH36ype9iS4otegPQ-Z55EdWh55YEGzbQ_KZqDHh49oeuMyDee53zcXEdCBGmOsMaAJLOWdLjNApY20dzvHOk85jtgvCIBdhvAcOo4zISvRvXR',
    botanicalActives: ['Pure Nigella Sativa Cold-Pressed', 'Opuntia Ficus-Indica Seed', 'Wild Meadowfoam Seed', 'Tocopherol Vitamin E'],
    olfactoryPyramid: {
      top: ['Cardamom Pod', 'Sunlit Lemon Zest'],
      heart: ['Nigella Sativa Oil', 'Orris Root Butter'],
      base: ['Aged Sandalwood', 'Smoky Frankincense'],
      sensoryDescription: 'Golden herbal warmth layered with noble woods and an earthy sacred resin whisper.'
    },
    concentricDial: [
      {
        hairType: 'Fine Ends & Daily Polish',
        dosage: '1-2 Pipette Drops',
        measureType: 'drops',
        value: 2,
        ritualNote: 'Distribute across palms and lightly skim over the outermost hair surface.'
      },
      {
        hairType: 'Mid-Length Hydration & Heat Shield',
        dosage: '3-4 Pipette Drops',
        measureType: 'drops',
        value: 4,
        ritualNote: 'Comb through damp lengths before blow-drying for weightless cashmere softness.'
      },
      {
        hairType: 'Overnight Intensive Scalp Bath',
        dosage: '6 Pipette Drops',
        measureType: 'drops',
        value: 6,
        ritualNote: 'Section hair into four quadrants and gently press into follicle roots overnight.'
      }
    ],
    clinicalResults: [
      { metric: '96%', label: 'Frizz reduction in high-humidity climate testing' },
      { metric: '3.2x', label: 'Increase in tensile elasticity measured on bleached strands' },
      { metric: '230°C', label: 'Clinically certified thermal defense barrier' }
    ],
    ritualSteps: [
      'Warm 2-3 drops on palms until oil reaches skin temperature.',
      'Finger-rake from chin level down to dry ends.',
      'Smooth remaining sheen over the hair crown for halo brilliance.'
    ]
  },
  {
    id: 'masque-celeste',
    name: 'Masque Céleste Regenerative',
    subTitle: 'Cellular Lipid Reconstruction Butter',
    category: 'Intensive Masks',
    price: 88,
    volume: '200ml e 6.7 fl. oz.',
    badge: 'Salon Exclusive',
    description: 'A decadent whipped botanical butter that reverses thermal and chemical trauma in a single 10-minute ceremony.',
    detailedStory: 'Formulated with raw Shea butter infused with Nigella Sativa oil and bio-identical phytosterols. It reconstitutes the intercellular cement of the hair cortex, returning stressed strands to a virgin-like supple state.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwQRxV5ZO0txPKAOO0l8OHD57BGf2xXJuXRRhXPEO9PqlOYU3G68TKeU23rI4w4yWqURMGLQYVE39xybO2GwtkAC1fDN_t04Fdm4tozP2Eu8CFGZFm09six6m1zFKH36ype9iS4otegPQ-Z55EdWh55YEGzbQ_KZqDHh49oeuMyDee53zcXEdCBGmOsMaAJLOWdLjNApY20dzvHOk85jtgvCIBdhvAcOo4zISvRvXR',
    botanicalActives: ['Nigella Sativa Lipid Complex', 'Nilotica Shea Butter', 'Fermented Rice Water Bio-ferment', 'Bamboo Silica'],
    olfactoryPyramid: {
      top: ['Sweet Almond Blossom', 'Grapefruit Skin'],
      heart: ['White Jasmine Sambac', 'Nigella Sprout'],
      base: ['Tonka Bean Absolute', 'Cashmere Musk'],
      sensoryDescription: 'Velvety, creamy white floral envelopment grounded by opulent nutty undertones.'
    },
    concentricDial: [
      {
        hairType: 'Weekly Restoration',
        dosage: '1 Generous Scoop',
        measureType: 'pumps',
        value: 3,
        ritualNote: 'Coat towel-dried lengths, wrap in warm silk or microfiber turban for 10 minutes.'
      },
      {
        hairType: 'Deep Porosity Rehabilitation',
        dosage: '2 Generous Scoops',
        measureType: 'pumps',
        value: 5,
        ritualNote: 'Allow active botanical lipids to absorb for 25 minutes prior to cold rinse.'
      }
    ],
    clinicalResults: [
      { metric: '89%', label: 'Reduction in surface roughness after a single treatment' },
      { metric: '97%', label: 'Subjects confirmed instant comb glide with zero tangling' }
    ],
    ritualSteps: [
      'Gently squeeze excess moisture from cleansed hair.',
      'Smooth mask evenly from ears down using wide-tooth horn comb.',
      'Leave for 8-12 minutes; rinse thoroughly until water runs pristine.'
    ]
  },
  {
    id: 'nectar-concentre',
    name: 'Nectar Concentré Botanical',
    subTitle: 'Follicle Stem Cell & Density Serum',
    category: 'Scalp Balms',
    price: 120,
    volume: '50ml e 1.7 fl. oz.',
    badge: 'Clinical Grade',
    description: 'High-potency cellular elixir calibrated to prolong the hair anagen growth cycle and fortify anchoring roots.',
    detailedStory: 'Concentrated with 12% pharmaceutical-grade Nigella Sativa thymoquinone alongside botanical peptide complexes. This aqueous, weightless nectar absorbs within seconds without any tacky residue.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwQRxV5ZO0txPKAOO0l8OHD57BGf2xXJuXRRhXPEO9PqlOYU3G68TKeU23rI4w4yWqURMGLQYVE39xybO2GwtkAC1fDN_t04Fdm4tozP2Eu8CFGZFm09six6m1zFKH36ype9iS4otegPQ-Z55EdWh55YEGzbQ_KZqDHh49oeuMyDee53zcXEdCBGmOsMaAJLOWdLjNApY20dzvHOk85jtgvCIBdhvAcOo4zISvRvXR',
    botanicalActives: ['12% Concentrated Thymoquinone', 'Red Clover Isoflavones', 'Larix Europaea Wood Extract', 'Zinc Gluconate'],
    olfactoryPyramid: {
      top: ['Cool Peppermint', 'Wild Rosemary Leaf'],
      heart: ['Eucalyptus Radiata', 'Nigella Botanical Infusion'],
      base: ['Clean Vetiver', 'White Cedar'],
      sensoryDescription: 'Crystalline and invigoratingly fresh with subtle herbal cooling sensations.'
    },
    concentricDial: [
      {
        hairType: 'Preventative Scalp Vitality',
        dosage: '3 Pipette Drops Daily',
        measureType: 'drops',
        value: 3,
        ritualNote: 'Apply along the central parting line once every morning.'
      },
      {
        hairType: 'Targeted Density Protocol',
        dosage: '6 Pipette Drops AM/PM',
        measureType: 'drops',
        value: 6,
        ritualNote: 'Distribute along temples and crown; press firmly with fingertips.'
      }
    ],
    clinicalResults: [
      { metric: '+2,400', label: 'Average active follicles retained over 90-day clinical trials' },
      { metric: '91%', label: 'Confirmed visible increase in strand density and scalp calm' }
    ],
    ritualSteps: [
      'Fill pipette to marked measurement line.',
      'Part dry or towel-damp hair and deposit drops along scalp pathways.',
      'Perform acupressure scalp massage for 60 seconds; do not rinse.'
    ]
  },
  {
    id: 'baume-de-soie',
    name: 'Baume de Soie Scalp Elixir',
    subTitle: 'Soothing Overnight Microbiome Balm',
    category: 'Scalp Balms',
    price: 82,
    volume: '60ml e 2.0 fl. oz.',
    description: 'A cooling apothecary balm formulated to soothe tight, irritated, or reactive scalps and rebalance microflora.',
    detailedStory: 'Blended with Nigella oil, calming Blue Tansy, and botanical squalane. Melted between fingertips, it dissolves from an opulent ointment into a soothing scalp serum.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwQRxV5ZO0txPKAOO0l8OHD57BGf2xXJuXRRhXPEO9PqlOYU3G68TKeU23rI4w4yWqURMGLQYVE39xybO2GwtkAC1fDN_t04Fdm4tozP2Eu8CFGZFm09six6m1zFKH36ype9iS4otegPQ-Z55EdWh55YEGzbQ_KZqDHh49oeuMyDee53zcXEdCBGmOsMaAJLOWdLjNApY20dzvHOk85jtgvCIBdhvAcOo4zISvRvXR',
    botanicalActives: ['Nigella Sativa Oil', 'Moroccan Blue Tansy', 'Olive Squalane', 'Centella Asiatica'],
    olfactoryPyramid: {
      top: ['Blue Chamomile', 'Lavender Maillette'],
      heart: ['Tansy Blossom', 'Nigella Floral Leaf'],
      base: ['Benzoin Siam', 'Precious Amyris Wood'],
      sensoryDescription: 'Gentle nocturnal serenity with herbaceous blue chamomile and sweet balsamic woods.'
    },
    concentricDial: [
      {
        hairType: 'Soothe Itch & Sensitivity',
        dosage: 'Pea-sized dab',
        measureType: 'drops',
        value: 2,
        ritualNote: 'Warm between pads of fingers and press directly onto dry or reactive patches.'
      },
      {
        hairType: 'Full Scalp Slumber Treatment',
        dosage: 'Almond-sized portion',
        measureType: 'drops',
        value: 4,
        ritualNote: 'Massage thoroughly before sleep. Follow with morning shampoo cleanse.'
      }
    ],
    clinicalResults: [
      { metric: '99%', label: 'Reported immediate scalp comfort and relief from tightness' },
      { metric: '100%', label: 'Non-comedogenic with zero pore or follicle congestion' }
    ],
    ritualSteps: [
      'Scoop a small measure with the gold atelier spatula.',
      'Melt between thumbs and index fingers.',
      'Part hair and press directly onto sensitive scalp zones.'
    ]
  },
  {
    id: 'complete-atelier-box',
    name: 'The Complete Atelier Box',
    subTitle: 'The Quintessential 5-Piece Ceremony',
    category: 'Atelier Sets',
    price: 395,
    volume: '5 Piece Collection + Solid Brass Applicator',
    badge: 'Atelier Signature',
    description: 'The definitive haute botanical wardrobe. Housed in a handcrafted matte obsidian keepsake chest with custom gold foil monogram.',
    detailedStory: 'Includes full sizes of Master Formula 01 Shampoo (250ml), L\'Huile Sublime (100ml), Masque Céleste (200ml), Nectar Concentré (50ml), and Baume de Soie (60ml), accompanied by our numbered solid brass dispensing spatula and hand-carved sandalwood comb.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwQRxV5ZO0txPKAOO0l8OHD57BGf2xXJuXRRhXPEO9PqlOYU3G68TKeU23rI4w4yWqURMGLQYVE39xybO2GwtkAC1fDN_t04Fdm4tozP2Eu8CFGZFm09six6m1zFKH36ype9iS4otegPQ-Z55EdWh55YEGzbQ_KZqDHh49oeuMyDee53zcXEdCBGmOsMaAJLOWdLjNApY20dzvHOk85jtgvCIBdhvAcOo4zISvRvXR',
    botanicalActives: ['Full Spectrum Cold-Pressed Nigella Sativa', 'Rare Damask Rose', 'Blue Tansy', 'Plant Peptides'],
    olfactoryPyramid: {
      top: ['Citrus Calabrese', 'Neroli Blossoms'],
      heart: ['Ancient Nigella', 'Velvet Rose Damascena'],
      base: ['Cedarwood Atlas', 'Smoked Ambergris'],
      sensoryDescription: 'The complete harmonic symphony of our botanical house in five layered ceremonial notes.'
    },
    concentricDial: [
      {
        hairType: 'Full Weekly Ritual Cycle',
        dosage: 'Custom Synergistic Program',
        measureType: 'pumps',
        value: 5,
        ritualNote: 'Follow the included gilded parchment protocol for daily and weekly cycles.'
      }
    ],
    clinicalResults: [
      { metric: '100%', label: 'Comprehensive restoration across scalp, cortex, and cuticle' },
      { metric: '£69', label: 'Curated box savings compared to individual allocations' }
    ],
    ritualSteps: [
      'Awaken with Nectar Concentré drops on dry scalp.',
      'Cleanse with Black Seed Nourish & Shine Shampoo.',
      'Nourish deeply with Masque Céleste butter.',
      'Seal ends with 2 drops of L\'Huile Sublime.',
      'Retire at night with Baume de Soie for tranquility.'
    ]
  }
];

export interface StockistLocation {
  city: string;
  name: string;
  address: string;
  district: string;
  region: 'Europe' | 'North America' | 'Middle East' | 'Asia-Pacific';
  services: string[];
  contact: string;
  hours: string;
}

export const STOCKISTS: StockistLocation[] = [
  {
    city: 'London',
    name: 'OLAYE Flagship Atelier Mayfair',
    address: '14 Mount Street, Mayfair, London W1K 2RF',
    district: 'United Kingdom',
    region: 'Europe',
    services: ['Private Scalp Trichology', 'Bespoke Custom Flacon Blending', 'VIP Ritual Suite'],
    contact: '+44 20 7946 0912',
    hours: 'Mon – Sat: 10:00 – 19:00'
  },
  {
    city: 'Paris',
    name: 'L’Atelier Botanique Saint-Honoré',
    address: '228 Rue Saint-Honoré, 75001 Paris',
    district: 'France',
    region: 'Europe',
    services: ['Sensory Olfactory Bar', 'Express Haircare Ceremonies', 'Bridal Couture Hair Prep'],
    contact: '+33 1 42 68 55 00',
    hours: 'Tue – Sat: 10:30 – 19:30'
  },
  {
    city: 'Milan',
    name: 'Boutique di Bellezza Montenapoleone',
    address: 'Via Monte Napoleone 8, 20121 Milano',
    district: 'Italy',
    region: 'Europe',
    services: ['Prestige Salon Bar', 'Microbiome Scalp Diagnostics'],
    contact: '+39 02 8765 4321',
    hours: 'Mon – Sat: 10:00 – 19:00'
  },
  {
    city: 'New York',
    name: 'OLAYE Haute Apothecary Madison',
    address: '782 Madison Avenue (at 66th St), New York, NY 10065',
    district: 'United States',
    region: 'North America',
    services: ['Private Styling Consultations', 'Same-Day Manhattan Courier', 'Refill Flacon Station'],
    contact: '+1 212 555 0198',
    hours: 'Mon – Sat: 10:00 – 18:30, Sun: 12:00 – 17:00'
  },
  {
    city: 'Dubai',
    name: 'The Olaye Pavilion DIFC',
    address: 'Gate Village Building 03, DIFC, Dubai',
    district: 'United Arab Emirates',
    region: 'Middle East',
    services: ['Private VIP Majlis Suite', 'Arid Climate Recovery Treatments', 'Gold Spatula Engraving'],
    contact: '+971 4 362 7000',
    hours: 'Daily: 11:00 – 21:00'
  },
  {
    city: 'Tokyo',
    name: 'OLAYE Ginza Salon & Gallery',
    address: 'Ginza Six 4F, 6-10-1 Ginza, Chuo-ku, Tokyo 104-0061',
    district: 'Japan',
    region: 'Asia-Pacific',
    services: ['Japanese Head Spa Ritual', 'Botanical Tea Ceremony Pairing', 'Quiet Sensory Room'],
    contact: '+81 3 5555 1234',
    hours: 'Daily: 10:30 – 20:30'
  },
  {
    city: 'Shanghai',
    name: 'Atelier Olaye Plaza 66',
    address: 'Plaza 66 Tower 1, 1266 Nanjing West Rd, Jing\'an, Shanghai',
    district: 'China',
    region: 'Asia-Pacific',
    services: ['Scalp Biomarker Analysis', 'International Dispatch Concierge', 'WeChat Private Salon'],
    contact: '+86 131 7202 1392',
    hours: 'Daily: 10:00 – 22:00'
  }
];
