export type MenuCategory =
  | 'Starters'
  | 'Pho & Noodle Soups'
  | 'Rice & Vermicelli'
  | 'Grilled & Stir-Fried'
  | 'Vegetarian & Vegan'
  | 'Desserts'
  | 'Beverages';

export type MenuItem = {
  name: string;
  category: MenuCategory;
  description: string;
  price: string;
  spice: 0 | 1 | 2 | 3;
  allergens: string[];
  chef?: boolean;
  image: string;
  prompt: string;
};

export const navItems = [
  ['Home', 'home'], ['Menu', 'menu'], ['Story', 'story'], ['Gallery', 'gallery'], ['Reservations', 'reservations'], ['Visit', 'contact']
] as const;

export const heroImages = {
  pho: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1800&q=85',
  garden: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85',
  herbs: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=1400&q=85'
};

export const menu: MenuItem[] = [
  { name: 'Lotus Summer Rolls', category: 'Starters', description: 'Rice paper rolls with poached shrimp, vermicelli, mint, Thai basil, cilantro, pickled daikon, and gold peanut-hoisin sauce.', price: '$12', spice: 0, allergens: ['peanut', 'shellfish'], chef: true, image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1100&q=85', prompt: 'Ultra-premium Vietnamese fresh spring rolls on ceramic plate, lotus petals, emerald herbs, gold chopsticks, soft morning window light, high-end restaurant photography.' },
  { name: 'Crisp Hanoi Imperial Rolls', category: 'Starters', description: 'Golden rice-paper rolls filled with pork, glass noodles, mushroom, and taro; served with nuoc cham and butter lettuce.', price: '$13', spice: 1, allergens: ['fish sauce'], image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1100&q=85', prompt: 'Crispy Vietnamese imperial rolls, lettuce cups, nuoc cham, luxury Hanoi table setting, green and gold palette.' },
  { name: 'Garden Papaya Salad', category: 'Starters', description: 'Green papaya, carrot ribbons, rau ram, roasted peanuts, lime, crispy shallot, and chile-fish sauce vinaigrette.', price: '$14', spice: 2, allergens: ['peanut', 'fish sauce'], image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1100&q=85', prompt: 'Vietnamese green papaya salad in a shallow stone bowl, fresh herbs, lime, chili, premium editorial food photo.' },
  { name: 'Pho Garden Special', category: 'Pho & Noodle Soups', description: 'Slow-simmered bone broth, rare steak, brisket, tendon, meatball, rice noodles, sweet onion, herbs, lime, and jalapeño.', price: '$18', spice: 1, allergens: ['fish sauce'], chef: true, image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&q=90', prompt: 'Steaming bowl of premium pho with rare beef, herbs, lime, star anise, floating steam, lotus pond background, luxury Vietnamese restaurant.' },
  { name: 'Hanoi Chicken Pho', category: 'Pho & Noodle Soups', description: 'Clear aromatic chicken broth, hand-pulled chicken, ginger, scallion, sawtooth herb, and silky rice noodles.', price: '$16', spice: 0, allergens: ['fish sauce'], image: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1100&q=85', prompt: 'Elegant bowl of chicken pho, clear broth, scallion, ginger, steam, rice paper beige background, high-end food photography.' },
  { name: 'Spicy Hue Lemongrass Noodle Soup', category: 'Pho & Noodle Soups', description: 'Deep red lemongrass broth, beef shank, pork, rice noodles, banana blossom, mint, and chile oil.', price: '$19', spice: 3, allergens: ['fish sauce'], chef: true, image: 'https://images.unsplash.com/photo-1631709497146-a239ef373cf1?auto=format&fit=crop&w=1100&q=85', prompt: 'Bun bo Hue inspired noodle soup with deep red broth, lemongrass, herbs, dramatic lantern lighting, luxury Vietnamese cuisine.' },
  { name: 'Mekong Shaking Beef', category: 'Rice & Vermicelli', description: 'Wok-seared filet tips, watercress, charred cherry tomato, jasmine rice, lime-pepper dipping salt.', price: '$24', spice: 1, allergens: ['soy'], chef: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1100&q=85', prompt: 'Vietnamese shaking beef filet tips, jasmine rice, watercress, lime salt, high-end restaurant plating, emerald and gold.' },
  { name: 'Lemongrass Chicken Vermicelli Bowl', category: 'Rice & Vermicelli', description: 'Chargrilled chicken, vermicelli, cucumber, pickled carrot, herbs, crushed peanut, and nuoc cham.', price: '$17', spice: 1, allergens: ['peanut', 'fish sauce'], image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1100&q=85', prompt: 'Vietnamese vermicelli bowl with lemongrass chicken, fresh herbs, cucumber, gold-rimmed bowl, bright natural light.' },
  { name: 'Rio Grande Grilled Pork Rice Plate', category: 'Rice & Vermicelli', description: 'Caramelized pork shoulder, broken rice, egg cake, cucumber, scallion oil, and crisp vegetables.', price: '$18', spice: 1, allergens: ['egg', 'fish sauce'], image: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=1100&q=85', prompt: 'Vietnamese grilled pork broken rice plate with egg cake, cucumber, herbs, New Mexico warm sunlight, premium plating.' },
  { name: 'Saigon Basil Wok Noodles', category: 'Grilled & Stir-Fried', description: 'Wide rice noodles, seasonal vegetables, Thai basil, garlic, chile, and choice of chicken, beef, shrimp, or tofu.', price: '$19', spice: 2, allergens: ['soy', 'shellfish optional'], image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1100&q=85', prompt: 'Vietnamese stir-fried rice noodles with Thai basil and vegetables, copper wok energy, modern luxury restaurant photography.' },
  { name: 'Turmeric Dill Market Fish', category: 'Grilled & Stir-Fried', description: 'Cha ca-inspired turmeric fish with dill, scallion, rice noodles, herbs, roasted peanuts, and mam nem-lime dressing.', price: '$28', spice: 1, allergens: ['fish', 'peanut'], chef: true, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1100&q=85', prompt: 'Cha ca turmeric dill fish, sizzling herbs, rice noodles, peanuts, refined Vietnamese fine dining, gold and emerald accents.' },
  { name: 'Lotus Root Vegan Pho', category: 'Vegetarian & Vegan', description: 'Roasted mushroom and charred onion broth, lotus root, tofu, bok choy, herbs, rice noodles, and lime.', price: '$17', spice: 0, allergens: ['soy'], chef: true, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=1100&q=85', prompt: 'Vegan Vietnamese pho with lotus root, mushrooms, tofu, bok choy, lush garden background, premium food photography.' },
  { name: 'Coconut Curry Garden Bowl', category: 'Vegetarian & Vegan', description: 'Golden coconut curry, sweet potato, eggplant, peppers, herbs, jasmine rice, and toasted sesame.', price: '$18', spice: 2, allergens: ['sesame'], image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1100&q=85', prompt: 'Vietnamese coconut curry vegetable bowl, jasmine rice, emerald herbs, ceramic bowl, resort restaurant style.' },
  { name: 'Vietnamese Coffee Crème Caramel', category: 'Desserts', description: 'Silky flan infused with dark Vietnamese coffee, condensed milk caramel, and cocoa nib crunch.', price: '$10', spice: 0, allergens: ['egg', 'dairy'], chef: true, image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1100&q=85', prompt: 'Vietnamese coffee creme caramel dessert, condensed milk caramel, espresso glaze, luxury dessert plate, moody green-gold lighting.' },
  { name: 'Mango Sticky Rice Lotus', category: 'Desserts', description: 'Coconut sticky rice, ripe mango, toasted sesame, pandan cream, and edible lotus petals.', price: '$11', spice: 0, allergens: ['sesame'], image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1100&q=85', prompt: 'Mango sticky rice with lotus petals and pandan cream, elegant Vietnamese dessert plating, fresh garden setting.' },
  { name: 'Slow-Drip Vietnamese Coffee', category: 'Beverages', description: 'Robusta phin coffee served hot or iced with condensed milk; bold, creamy, and aromatic.', price: '$6', spice: 0, allergens: ['dairy optional'], chef: true, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1100&q=85', prompt: 'Vietnamese phin coffee dripping over condensed milk, emerald ceramic, morning mist, luxury cafe photography.' },
  { name: 'Fresh Coconut & Pandan Cooler', category: 'Beverages', description: 'Young coconut water, pandan, lime leaf, crushed ice, and tender coconut ribbons.', price: '$8', spice: 0, allergens: [], image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=1100&q=85', prompt: 'Fresh coconut pandan cooler with crushed ice, bamboo straw, lotus pond, premium resort beverage photography.' },
  { name: 'Dragonfruit Bubble Tea', category: 'Beverages', description: 'Dragonfruit, jasmine tea, oat milk, brown sugar pearls, and a whisper of lime.', price: '$8', spice: 0, allergens: [], image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=1100&q=85', prompt: 'Dragonfruit bubble tea with tapioca pearls, modern Vietnamese restaurant, lush green plants, premium product photo.' },
  { name: 'Curated Wine & Sake List', category: 'Beverages', description: 'A rotating selection of aromatic whites, chilled reds, sparkling rosé, and sake chosen for Vietnamese herbs and broth.', price: '$11+', spice: 0, allergens: ['sulfites'], image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1100&q=85', prompt: 'Elegant wine glasses with Vietnamese herbs and gold lantern light, premium restaurant beverage photography.' }
];

export const testimonials = [
  { quote: 'The most serene dining room in Rio Rancho — the pho tasted like it had been simmering with intention all day.', name: 'Marisol R.', detail: 'Rio Rancho' },
  { quote: 'Every herb was bright, every bowl was balanced, and the room felt like a Vietnamese garden resort.', name: 'Evan T.', detail: 'Albuquerque' },
  { quote: 'Our new special occasion spot. Luxurious without being stiff, authentic without being predictable.', name: 'Laney M.', detail: 'Corrales' }
];

export const gallery = [
  ['Food', 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&q=85'],
  ['Interior & Atmosphere', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85'],
  ['Events', 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85'],
  ['Behind the Scenes', 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85'],
  ['Food', 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1200&q=85'],
  ['Interior & Atmosphere', 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=85'],
  ['Behind the Scenes', 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=85'],
  ['Events', 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85']
] as const;

export const imagePrompts = [
  'Hero video/background: cinematic slow dolly through a lush Vietnamese garden in morning mist, lotus pond, bamboo, emerald rice paddies, steaming pho bowl in foreground, subtle New Mexico desert light on horizon, luxury resort mood, 4K.',
  'Logo: elegant Pho Garden wordmark, modern serif lettering, lotus blossom and bamboo leaf monogram, deep emerald #0A6B3E and subtle Vietnamese gold #D4AF77, minimal luxury restaurant identity.',
  'Interior: high-end Vietnamese garden dining room in Rio Rancho, live plants, warm wood, stone, rice-paper lanterns, emerald banquettes, gold accents, serene upscale hospitality photography.',
  'Menu items: each dish plated in handmade ceramic bowls, herbs visibly fresh, steam and morning light, emerald/gold palette, high-end editorial Vietnamese restaurant photography.'
];

export const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Pho Garden',
  servesCuisine: ['Vietnamese', 'Pho', 'Noodles'],
  priceRange: '$$-$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[INSERT ACTUAL ADDRESS WHEN AVAILABLE]',
    addressLocality: 'Rio Rancho',
    addressRegion: 'NM',
    addressCountry: 'US'
  },
  slogan: 'Where the Mekong meets the Rio Grande',
  url: 'https://pho-garden-rio-rancho.netlify.app',
  telephone: '[INSERT PHONE]',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Sunday'], opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday','Saturday'], opens: '11:00', closes: '22:00' }
  ]
};
