import { Product, LookbookScene } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'L’Atelier Double-Breasted Cashmere Trench',
    frenchName: 'Le Manteau Cachemire Impérial',
    subtitle: '100% Mongolian Grade-A Cashmere with horn buttons',
    category: 'tailoring',
    price: 3450,
    currency: 'USD',
    rating: 4.95,
    reviewsCount: 28,
    isNew: true,
    isLimited: true,
    isRunway: true,
    runwayLookNumber: 1,
    description: 'Sculpted in our Biella atelier from double-faced 680gsm Mongolian cashmere. Features structured dropped shoulders, architectural storm flaps, and hand-carved buffalo horn buttons with subtle 24k gold engraving.',
    fabricDetails: {
      composition: '100% Grade-A Mongolian Cashmere (Double-Faced)',
      millOrigin: 'Lanificio di Biella, Piedmont, Italy',
      weight: '680 gsm heavy winter drape',
      finish: 'Water-repellent lotus finish, natural brush lustre'
    },
    sustainability: 'Cruelty-free comb harvesting with certified regenerative grassland stewardship.',
    careInstructions: [
      'Specialist luxury dry clean only',
      'Store on provided cedar sculpted hanger',
      'Steam gently from reverse side'
    ],
    colors: [
      { name: 'Obsidian Noir', hex: '#121214', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85' },
      { name: 'Cashmere Camel', hex: '#b38b59', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85' },
      { name: 'Maison Chalk', hex: '#ebe7df', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: [
      { code: 'FR 36 / US 4', label: 'Small Atelier (FR 36)', stock: 3 },
      { code: 'FR 38 / US 6', label: 'Medium Atelier (FR 38)', stock: 5 },
      { code: 'FR 40 / US 8', label: 'Classic Atelier (FR 40)', stock: 2 },
      { code: 'FR 42 / US 10', label: 'Generous Atelier (FR 42)', stock: 1 }
    ],
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85'
    ],
    stylingNotes: 'Pair with the Como Silk Charmeuse Slip Gown and our signature Florentine Calfskin Tote for an effortless evening presence.',
    modelSpecs: 'Model is 179 cm (5 ft 10 in), wearing size FR 36. Silhouette is relaxed yet tailored.',
    pairedProductIds: ['prod-02', 'prod-04']
  },
  {
    id: 'prod-02',
    name: 'Como Midnight Silk Charmeuse Gown',
    frenchName: 'Robe du Soir en Satin de Soie',
    subtitle: '30 Momme Heavyweight Mulberry Silk with Bias Cut',
    category: 'silk-evening',
    price: 2150,
    currency: 'USD',
    rating: 5.0,
    reviewsCount: 19,
    isNew: true,
    isRunway: true,
    runwayLookNumber: 4,
    description: 'Engineered on the bias to fluidly sculpt the body without restraint. Handcrafted from 30 momme pure Como silk charmeuse with delicate French seams and an understated open cowl back.',
    fabricDetails: {
      composition: '100% Mulberry Silk Charmeuse (30 Momme)',
      millOrigin: 'Lake Como Historic Silk Mills, Lombardy, Italy',
      weight: 'Fluid heavyweight silk drape',
      finish: 'Double-lustre pearlized sheen'
    },
    sustainability: 'OEKO-TEX Class I certified eco-friendly plant dyes.',
    careInstructions: [
      'Delicate professional silk dry clean',
      'Iron on lowest silk setting inside out',
      'Keep away from direct perfume mist'
    ],
    colors: [
      { name: 'Nocturne Black', hex: '#0a0a0c', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85' },
      { name: 'Champagne Silk', hex: '#dfd3c3', image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=85' },
      { name: 'Imperial Emerald', hex: '#0f382a', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: [
      { code: 'XS / FR 34', label: 'Petite (FR 34)', stock: 4 },
      { code: 'S / FR 36', label: 'Standard S (FR 36)', stock: 6 },
      { code: 'M / FR 38', label: 'Standard M (FR 38)', stock: 3 },
      { code: 'L / FR 40', label: 'Standard L (FR 40)', stock: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85'
    ],
    stylingNotes: 'Worn best with minimal fine gold jewelry and an architectural tailored coat thrown over shoulders.',
    modelSpecs: 'Model is 181 cm wearing FR 36. Floor-grazing length with subtle sweep train.',
    pairedProductIds: ['prod-01', 'prod-05']
  },
  {
    id: 'prod-03',
    name: 'Sartorial Virgin Wool Structured Blazer',
    frenchName: 'La Veste Bar Tailleur',
    subtitle: 'Custom woven Super 150s wool with silk faille peak lapels',
    category: 'tailoring',
    price: 1890,
    currency: 'USD',
    rating: 4.88,
    reviewsCount: 34,
    isNew: false,
    isRunway: true,
    runwayLookNumber: 7,
    description: 'An homage to timeless bespoke tailoring. Fully canvassed construction with a hand-padded chest piece that molds to the wearer over time. Features sculpted hourglass waistlines and silk-bound interior seams.',
    fabricDetails: {
      composition: '98% Super 150s Virgin Wool, 2% Elastane for movement',
      millOrigin: 'Yorkshire Worsted Mill, United Kingdom',
      weight: '320 gsm all-season worsted',
      finish: 'Matte barathea weave'
    },
    sustainability: 'ZQRX certified regenerative merino wool from ethical ethical farms.',
    careInstructions: [
      'Professional tailor press and dry clean',
      'Brush with natural horsehair garment brush'
    ],
    colors: [
      { name: 'Shadow Black', hex: '#16161a', image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1200&q=85' },
      { name: 'Oatmeal Tweed', hex: '#cbbba0', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: [
      { code: '36', label: 'Size 36 (US 2-4)', stock: 4 },
      { code: '38', label: 'Size 38 (US 6)', stock: 7 },
      { code: '40', label: 'Size 40 (US 8)', stock: 5 },
      { code: '42', label: 'Size 42 (US 10)', stock: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=85'
    ],
    stylingNotes: 'Wear buttoned as a statement jacket over bare skin, or layered over fine cashmere knitwear.',
    modelSpecs: 'Model is 178 cm wearing size 38.',
    pairedProductIds: ['prod-04', 'prod-05']
  },
  {
    id: 'prod-04',
    name: 'Florentine Full-Grain Calfskin Hobo Bag',
    frenchName: 'Le Sac Atelier Florence',
    subtitle: 'Vegetable-tanned French calfskin with brushed brass hardware',
    category: 'leather-accessories',
    price: 1650,
    currency: 'USD',
    rating: 4.97,
    reviewsCount: 42,
    isNew: true,
    isLimited: true,
    description: 'Hand-stitched in Florence by master leather artisans. Cut from supple, full-grain French calfskin that develops an irreplaceable patina with age. Features an unlined suede interior and a magnetic solid brass clasp.',
    fabricDetails: {
      composition: '100% Full-Grain French Box Calfskin',
      millOrigin: 'Tannery d’Annonay, France & Florence, Italy',
      weight: 'Supple 1.4mm architectural leather',
      finish: 'Aniline hand-rubbed wax finish'
    },
    sustainability: '100% chrome-free vegetable tanning with oak and chestnut bark extracts.',
    careInstructions: [
      'Condition twice yearly with organic beeswax leather balm',
      'Store in included unbleached cotton dustbag',
      'Keep away from prolonged heavy rain'
    ],
    colors: [
      { name: 'Espresso Marron', hex: '#2c1e19', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85' },
      { name: 'Nero Black', hex: '#0f0f10', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85' },
      { name: 'Warm Terracotta', hex: '#8c4832', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: [
      { code: 'OS', label: 'Grand Format (38 x 30 x 14 cm)', stock: 8 }
    ],
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85'
    ],
    stylingNotes: 'Comes with optional complimentary 24k gold leaf hot-stamping for up to 3 custom monogram initials.',
    modelSpecs: 'Accommodates a 14” laptop, daily essentials, and personal atelier notebook.',
    pairedProductIds: ['prod-01', 'prod-03']
  },
  {
    id: 'prod-05',
    name: 'Aurelia 18K Yellow Gold Sculptural Torc',
    frenchName: 'Le Torque Sculpté en Or 18K',
    subtitle: 'Hand-hammered 18k solid gold with bezel-set emerald cabochon',
    category: 'jewelry',
    price: 4200,
    currency: 'USD',
    rating: 5.0,
    reviewsCount: 11,
    isLimited: true,
    isRunway: true,
    runwayLookNumber: 9,
    description: 'An architectural choker forged by master goldsmiths in Paris. Flowing brutalist lines catch light with high reflection, anchored by a rare 1.8ct untreated Colombian emerald cabochon.',
    fabricDetails: {
      composition: 'Solid 18K Fairmined Gold (750/1000)',
      millOrigin: 'Place Vendôme Atelier, Paris, France',
      weight: '44.8 grams solid gold weight',
      finish: 'Mirror polish with micro-hammered texture'
    },
    sustainability: 'Fairmined Certified ecological gold and conflict-free traceable gems.',
    careInstructions: [
      'Clean with provided microfiber suede polishing cloth',
      'Store individually in velvet lacquer jewelry case'
    ],
    colors: [
      { name: '18K Yellow Gold', hex: '#d4af37', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: [
      { code: 'Standard', label: 'Flex Fit (13.5 - 15.5 cm neck)', stock: 2 }
    ],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85'
    ],
    stylingNotes: 'The ultimate finishing piece for plunging necklines, tailored blazers, or minimalist turtleneck sweaters.',
    modelSpecs: 'Flexible inner titanium spring allows easy glide onto the neck.',
    pairedProductIds: ['prod-02', 'prod-03']
  },
  {
    id: 'prod-06',
    name: 'Kyoto Spun Seamless Cashmere Rollneck',
    frenchName: 'Le Col Roulé Sans Couture en Cachemire',
    subtitle: '100% 4-ply Mongolian cashmere woven on 3D WHOLEGARMENT® looms',
    category: 'cashmere-knit',
    price: 980,
    currency: 'USD',
    rating: 4.91,
    reviewsCount: 56,
    isNew: false,
    description: 'Engineered completely seamless in Kyoto, Japan. Eliminates all interior chafing while creating an ergonomic glove-like silhouette with second-skin comfort and thermal perfection.',
    fabricDetails: {
      composition: '100% 4-Ply Grade-A Organic Cashmere',
      millOrigin: 'Kyoto Precision Knit Atelier, Japan',
      weight: '280 gsm feather-soft knit',
      finish: 'Organic spring water wash for cloud touch'
    },
    sustainability: 'Zero knitwear waste via 3D computer knitting.',
    careInstructions: [
      'Hand wash in cold water with cashmere shampoo',
      'Dry flat on towel, do not wring or hang'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111113', image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85' },
      { name: 'Oatmeal Melange', hex: '#d3c5b4', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=85' }
    ],
    sizes: [
      { code: 'S', label: 'Small (FR 36)', stock: 6 },
      { code: 'M', label: 'Medium (FR 38)', stock: 8 },
      { code: 'L', label: 'Large (FR 40)', stock: 4 }
    ],
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=85'
    ],
    stylingNotes: 'Tuck into high-waisted wool trousers or layer under the Double-Breasted Trench.',
    modelSpecs: 'Model is 176 cm wearing size S.',
    pairedProductIds: ['prod-01', 'prod-03']
  }
];

export const LOOKBOOK_SCENES: LookbookScene[] = [
  {
    id: 'look-01',
    title: 'Act I: The Milanese Morning',
    season: 'Automne / Hiver 2026',
    location: 'Villa Necchi Campiglio, Milan',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
    description: 'A study in architectural restraint. Clean geometric tailoring against modernist Italian marble.',
    hotspots: [
      {
        id: 'hs-1',
        top: 38,
        left: 48,
        productId: 'prod-01',
        label: 'Double-Breasted Cashmere Trench',
        price: 3450
      },
      {
        id: 'hs-2',
        top: 68,
        left: 56,
        productId: 'prod-04',
        label: 'Florentine Calfskin Hobo Bag',
        price: 1650
      }
    ]
  },
  {
    id: 'look-02',
    title: 'Act II: Nocturne at Palais Royal',
    season: 'Couture Privée 2026',
    location: 'Palais-Royal Colonnade, Paris',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1600&q=85',
    description: 'Pure liquid silk catching the evening amber lamplight of Parisian arcades.',
    hotspots: [
      {
        id: 'hs-3',
        top: 42,
        left: 46,
        productId: 'prod-02',
        label: 'Como Midnight Silk Charmeuse Gown',
        price: 2150
      },
      {
        id: 'hs-4',
        top: 25,
        left: 52,
        productId: 'prod-05',
        label: '18K Yellow Gold Sculptural Torc',
        price: 4200
      }
    ]
  },
  {
    id: 'look-03',
    title: 'Act III: The Modern Atelier',
    season: 'Sartorial Tailoring 2026',
    location: 'Place Vendôme, Paris',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1600&q=85',
    description: 'Precision cut Super 150s worsted wool tailored to effortless empowerment.',
    hotspots: [
      {
        id: 'hs-5',
        top: 36,
        left: 50,
        productId: 'prod-03',
        label: 'Sartorial Virgin Wool Structured Blazer',
        price: 1890
      }
    ]
  }
];

export const FREELANCE_SERVICES = [
  {
    title: 'Luxury E-Commerce Flagship',
    desc: 'Bespoke high-converting store with 60fps micro-animations, multi-currency localization, and headless checkout speed.',
    timeline: '3–5 weeks',
    tags: ['React 19', 'Next.js / Vite', 'Shopify Plus / Stripe', 'Tailwind CSS']
  },
  {
    title: 'Native Mobile Shopping App (iOS/Android)',
    desc: 'Luxury retail app with native gesture fluidness, push drop alerts, Apple Pay 1-tap checkout, and VIP clienteling.',
    timeline: '4–6 weeks',
    tags: ['React Native / PWA', 'Haptic Touch', 'Offline Lookbook', 'VIP Stories']
  },
  {
    title: 'Interactive 3D / AR Lookbook & Fitting Room',
    desc: 'Interactive virtual tailoring, real-time monogramming preview, and visual fabric drape simulations.',
    timeline: '2–3 weeks',
    tags: ['WebGL / Three.js', 'Hotspot Pinning', 'Interactive Canvas']
  },
  {
    title: 'Bespoke Brand Identity & Design System',
    desc: 'Editorial typography rules, high-contrast color tokens, component UI libraries, and client CMS handoff.',
    timeline: '2 weeks',
    tags: ['Figma Tokens', 'Editorial Layout', 'Performance 100/100']
  }
];
