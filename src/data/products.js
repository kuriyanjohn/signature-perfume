export const FRAGRANCES = [
  {
    id: 'oud',
    name: 'SIGNATURE OUD',
    subtitle: 'Mystic Allure & Royal Depth',
    category: 'Golden Reserve',
    gemstone: 'Precious Gold & Imperial Agarwood',
    featured: true,
    userProvided: true,
    price: 340,
    rating: 5.0,
    reviewsCount: 48,
    imageBottle: '/images/products/oud-set.png',
    imageBox: '/images/products/oud-set.png',
    badge: 'Imperial Edition',
    description: 'Signature Oud is an enchanting masterpiece born of precious agarwood, warm spices, and golden amber. Crafted for royalty, its intoxicating trail whispers secrets of ancient majesty and timeless refinement.',
    inspiration: 'Inspired by the sacred resin used by ancient emperors and sultans, transformed into Haute Parfumerie in Paris.',
    notes: {
      top: ['Italian Bergamot', 'Cardamom', 'Nutmeg'],
      heart: ['Royal Rose', 'Saffron', 'Atlas Cedarwood'],
      base: ['Precious Oud Accord', 'Golden Amber', 'Creamy Sandalwood', 'White Musk']
    },
    emotion: 'Mystic Allure',
    sillageRating: 'Extraordinary (12+ Hours)',
    season: 'Autumn / Winter / Evening'
  },
  {
    id: 'musk',
    name: 'SIGNATURE MUSK',
    subtitle: 'Sensual Elegance & Velvet Pureness',
    category: 'Gemstone Series',
    gemstone: 'Crystal Gold Dust',
    featured: true,
    userProvided: true,
    price: 310,
    rating: 4.9,
    reviewsCount: 62,
    imageBottle: '/images/products/musk-bottle.png',
    imageBox: '/images/products/musk-set.png',
    badge: 'Best Seller',
    description: 'Signature Musk is a sublime ode to warmth and velvet purity. Delicately woven with white florals, shimmering gold dust, and sheer amber, it envelopes the wearer in an intoxicating second-skin aura that endures through time.',
    inspiration: 'The pure light of dawn reflecting upon pristine gold flakes, capturing effortless elegance and warmth.',
    notes: {
      top: ['White Peach', 'Violet Leaf', 'Calabrian Bergamot'],
      heart: ['Pure White Musk', 'Jasmine Sambac', 'Lily of the Valley'],
      base: ['Golden Amber', 'Tonka Bean', 'Vanilla Orchid']
    },
    emotion: 'Sensual Elegance',
    sillageRating: 'Long-Lasting (10+ Hours)',
    season: 'All Seasons'
  },
  {
    id: 'rose',
    name: 'SIGNATURE ROSE',
    subtitle: 'Eternal Romance & Sublime Bloom',
    category: 'Gemstone Series',
    gemstone: 'Rose Gold Shimmer',
    featured: true,
    userProvided: true,
    price: 320,
    rating: 4.9,
    reviewsCount: 54,
    imageBottle: '/images/products/rose-bottle.png',
    imageBox: '/images/products/rose-set.png',
    badge: 'Haute Selection',
    description: 'Signature Rose captures the romance of a twilight French garden in full bloom. Infused with hand-picked Damask roses, golden spices, and velvet musk, it radiates passionate elegance and regal grace.',
    inspiration: 'The timeless allure of the royal rose gardens of Versailles under moonlight.',
    notes: {
      top: ['Pink Peppercorn', 'Juicy Mandarin', 'Fresh Rose Petals'],
      heart: ['Damask Rose Absolute', 'Patchouli Heart', 'Orris Butter'],
      base: ['Ambergris', 'Haitian Vetiver', 'Velvet Musk']
    },
    emotion: 'Eternal Romance',
    sillageRating: 'Intense (10+ Hours)',
    season: 'Spring / Summer / Romance'
  },
  {
    id: 'jade',
    name: 'SIGNATURE JADE',
    subtitle: 'Serene Majesty & Harmony',
    category: 'Gemstone Series',
    gemstone: 'Imperial Jade',
    featured: false,
    userProvided: false,
    price: 295,
    rating: 4.8,
    reviewsCount: 39,
    imageBottle: '/images/products/musk-bottle.png',
    imageBox: '/images/products/musk-set.png',
    badge: 'Gemstone Icon',
    description: 'Inspired by the sacred emperor stone, Jade blends luminous bergamot, fresh Mediterranean citrus, and rare warm amber for an aura of divine harmony.',
    inspiration: 'The balance of nature and royal serenity encapsulated in precious green jade.',
    notes: {
      top: ['Calabrian Bergamot', 'Lemon Zest', 'Sweet Orange'],
      heart: ['Mediterranean Fruits', 'Sheer Floral Accord'],
      base: ['Amber', 'Bourbon Vanilla', 'White Musk']
    },
    emotion: 'Serene Majesty',
    sillageRating: 'Radiant (8+ Hours)',
    season: 'Spring / Summer'
  },
  {
    id: 'diamond',
    name: 'SIGNATURE DIAMOND',
    subtitle: 'Brilliant Perfection & Pure Light',
    category: 'Gemstone Series',
    gemstone: 'Rare Diamond',
    featured: false,
    userProvided: false,
    price: 350,
    rating: 5.0,
    reviewsCount: 29,
    imageBottle: '/images/products/musk-bottle.png',
    imageBox: '/images/products/musk-set.png',
    badge: 'Precious Reserve',
    description: 'Radiant, clear, and unyielding. Diamond reflects pristine clarity through sparkling bergamot, crisp white cedar, and a shimmering crystal amber finish.',
    inspiration: 'The eternal brilliance and indestructible purity of flawless diamonds.',
    notes: {
      top: ['Sparkling Grapefruit', 'Bergamot', 'Marine Breeze'],
      heart: ['White Cedarwood', 'Ylang-Ylang', 'Magnolia'],
      base: ['Crystal Amber', 'Cashmere Musk', 'Dry Woods']
    },
    emotion: 'Brilliant Perfection',
    sillageRating: 'Sublime (12+ Hours)',
    season: 'All Seasons'
  },
  {
    id: 'ambre',
    name: 'SIGNATURE AMBRE',
    subtitle: 'Warm Radiance & Liquid Sun',
    category: 'Golden Reserve',
    gemstone: 'Baltic Amber',
    featured: false,
    userProvided: false,
    price: 330,
    rating: 4.9,
    reviewsCount: 42,
    imageBottle: '/images/products/oud-set.png',
    imageBox: '/images/products/oud-set.png',
    badge: 'Warm Glow',
    description: 'An opulent embrace of golden amber, warm spices, and sweet vanilla, glowing like liquid sun on velvet skin.',
    inspiration: 'Fossilized sunlight captured over millennia in precious Baltic amber.',
    notes: {
      top: ['Ceylon Cinnamon', 'Oman Incense'],
      heart: ['Golden Amber Accord', 'Benzoin Resin', 'Myrrh'],
      base: ['Madagascar Vanilla Bean', 'Labdanum', 'Patchouli']
    },
    emotion: 'Warm Radiance',
    sillageRating: 'Deep & Enveloping (10+ Hours)',
    season: 'Autumn / Winter'
  },
  {
    id: 'opal',
    name: 'SIGNATURE OPAL',
    subtitle: 'Luminous Mystery & Iridescent Glow',
    category: 'Gemstone Series',
    gemstone: 'Australian Opal',
    featured: false,
    userProvided: false,
    price: 295,
    rating: 4.8,
    reviewsCount: 31,
    imageBottle: '/images/products/rose-bottle.png',
    imageBox: '/images/products/rose-set.png',
    badge: 'Iridescent',
    description: 'Multi-faceted and mesmerizing. Opal glimmers with iridescent jasmine, sweet star anise, sheer white musk, and soft cashmere woods.',
    inspiration: 'The spectral dance of colors found within an ethereal opal gemstone.',
    notes: {
      top: ['Star Anise', 'Juicy Pear', 'Mandarin'],
      heart: ['Night Jasmine', 'Orange Blossom', 'Gardenia'],
      base: ['Cashmere Wood', 'White Amber', 'Fluffy Musk']
    },
    emotion: 'Luminous Mystery',
    sillageRating: 'Soft & Ethereal (8+ Hours)',
    season: 'Spring / Daytime'
  },
  {
    id: 'sapphire',
    name: 'SIGNATURE SAPPHIRE',
    subtitle: 'Royal Depth & Midnight Sophistication',
    category: 'Gemstone Series',
    gemstone: 'Royal Blue Sapphire',
    featured: false,
    userProvided: false,
    price: 340,
    rating: 4.9,
    reviewsCount: 36,
    imageBottle: '/images/products/oud-set.png',
    imageBox: '/images/products/oud-set.png',
    badge: 'Nocturnal Elegance',
    description: 'Cool sophistication meeting deep oriental warmth. Sapphire captures nocturnal elegance with Florentine iris, smooth leather, and deep wood tones.',
    inspiration: 'The mysterious blue depths of royal sapphire worn by monarchs through history.',
    notes: {
      top: ['Blue Chamomile', 'Clary Sage', 'Bergamot'],
      heart: ['Florentine Iris', 'Smooth Leather Accord', 'Violet'],
      base: ['Mysore Sandalwood', 'Tonka Bean', 'Cedarwood']
    },
    emotion: 'Royal Depth',
    sillageRating: 'Intense (12+ Hours)',
    season: 'Evening / Formal'
  },
  {
    id: 'onyx',
    name: 'SIGNATURE ONYX',
    subtitle: 'Midnight Intensity & Bold Power',
    category: 'Golden Reserve',
    gemstone: 'Black Onyx',
    featured: false,
    userProvided: false,
    price: 350,
    rating: 5.0,
    reviewsCount: 25,
    imageBottle: '/images/products/oud-set.png',
    imageBox: '/images/products/oud-set.png',
    badge: 'Bold Intensity',
    description: 'Dark, mysterious, and deeply captivating. Onyx commands attention with smoky incenses, dark woods, and intense black amber.',
    inspiration: 'The protective strength and shadowy intrigue of polished black onyx stone.',
    notes: {
      top: ['Black Peppercorn', 'Cypress', 'Cardamom'],
      heart: ['Smoked Birch', 'Incense', 'Gaiac Wood'],
      base: ['Black Amber', 'Dark Patchouli', 'Vetiver']
    },
    emotion: 'Midnight Intensity',
    sillageRating: 'Commanding (12+ Hours)',
    season: 'Winter / Night'
  }
];

export const BRAND_PILLARS = [
  {
    id: 'france',
    title: 'MADE IN FRANCE',
    subtitle: 'By masters of perfumery',
    description: 'Crafted in the historical heart of French perfumery by world-renowned master noses using centuries of savoir-faire.',
    icon: 'FlaskConical'
  },
  {
    id: 'ingredients',
    title: 'PRECIOUS INGREDIENTS',
    subtitle: 'Sourced around the world',
    description: 'Extracted from the rarest botanicals, precious resins, and natural oils sourced ethically across the globe.',
    icon: 'Gem'
  },
  {
    id: 'presentation',
    title: 'EXCEPTIONAL PRESENTATION',
    subtitle: 'A luxury experience',
    description: 'Enclosed in heavy gold-gilded crystal flacons and hand-stitched leather luxury presentation boxes.',
    icon: 'Gift'
  },
  {
    id: 'power',
    title: 'THE POWER OF SCENT',
    subtitle: 'Emotions beyond words',
    description: 'Unlocking hidden memories, invoking royal presence, and echoing the eternal beauty of precious stones.',
    icon: 'Sparkles'
  }
];

export const QUADRANT_EMBLEMS = [
  {
    id: 'power',
    title: 'ENDURING POWER',
    subtitle: 'Crafted for a lasting impression',
    description: 'A lasting olfactory footprint engineered for high concentration and extraordinary longevity.'
  },
  {
    id: 'passion',
    title: 'PASSION & SEDUCTION',
    subtitle: 'Sensual blends of pure artistry',
    description: 'Intoxicating harmonies of warm roses, spiced ambers, and velvet musks that awaken desire.'
  },
  {
    id: 'regal',
    title: 'REGAL HERITAGE',
    subtitle: 'Inspired by royal distinction',
    description: 'Drawing upon royal perfume rituals of ancient French courts and opulent Oriental palaces.'
  },
  {
    id: 'purity',
    title: 'PERFECT PURITY',
    subtitle: 'The truest expression of luxury',
    description: 'Uncompromising quality, pure crystal clarity, and golden craftsmanship in every single bottle.'
  }
];
