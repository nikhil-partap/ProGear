// Product names, specifications and prices supplied in the client's website.xlsx.
const pic3 = (folder, file) => `/images/ProGear%20pics%203/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
const prem = file => pic3('Premium or 9D', file);
const pro = file => pic3('Premium Pro or 9D Pro', file);
const val = file => pic3('TrueValue or 7D', file);
const colour = (name, hex, image) => ({ name, hex, image });
export const brandGroups = {
  Normal: ['Citroen', 'Maruti Suzuki', 'Tata', 'Mahindra', 'Hyundai', 'Toyota', 'Kia', 'Honda', 'Ford', 'Isuzu', 'Jeep', 'MG', 'Nissan', 'Renault', 'Skoda', 'Volkswagen', 'Mitsubishi'],
  Luxury: ['Mercedes-Benz', 'BMW', 'Audi', 'Land Rover', 'Volvo', 'Lexus'],
};
export const brandCategory = brand => Object.keys(brandGroups).find(group => brandGroups[group].includes(brand));
const premiumSpecs = [
  ['Dual-layer detachable design', 'The upper grass-loop mat clips onto the leatherette base. Dirt and water collect in the removable upper layer for easy cleaning.'],
  ['Edge-to-edge coverage', 'Raised sides extend along the console tunnel, side walls and rear footwells to protect more of your original carpet.'],
  ['Waterproof & dustproof', 'A non-porous synthetic leather surface and sealed seams help keep spills away from the factory carpet.'],
  ['A considered finish', 'Heavy-duty PU / leatherette with geometric or diamond stitching.'],
  ['Stays where it belongs', 'Anti-skid Magic Velcro / Gecko Grip backing helps keep the mat in place.'],
  ['Make it yours', 'Customisable colours and a vehicle-specific floor pattern.'],
];
export const collections = [
  {
    id: 'universal', name: 'Universal', type: 'All-weather', label: 'The everyday essential',
    description: 'Practical, all-weather protection. Trim-to-fit mats that make everyday upkeep simple.',
    prices: { Normal: { 5: [2099, 2499], 7: [2499, 2499] }, Luxury: { 5: [2099, 2499], 7: [2499, 2499] } },
    colours: [colour('Diamond Black & Grey', '#1f2022', '/images/ProGear%20pics%203/Add%20this%20to%20Universal%20image.jpg')],
    images: ['/images/ProGear%20pics%203/Add%20this%20to%20Universal%20image.jpg'],
    features: ['Trim-to-fit design', 'Deep spill channels', 'All-weather protection'],
    specs: [
      ['Trim-to-fit design', 'Pre-moulded trim lines allow the mats to be trimmed for a closer fit around foot pedals and seat rails. Check pedal clearance before driving.'],
      ['Anti-slip backing', 'Small rubberised nibs grip the factory carpet to help prevent movement.'],
      ['Deep spill channels', 'Raised borders and grooves hold dirt, water, sand and mud until cleaning.'],
      ['All-weather resilience', 'Non-porous, flexible PVC or NBR construction resists cracking, curling and hardening in changing temperatures.'],
    ],
  },
  {
    id: 'truevalue', name: 'TrueValue', type: '7D', label: 'Everyday, upgraded',
    description: 'A tailored fit. A softer finish. Layered protection for the drives you take every day.',
    prices: { Normal: { 5: [4999, 6999], 7: [5999, 7999] }, Luxury: { 5: [5999, 7999], 7: [7499, 9999] } },
    colours: [
      colour('Full Black', '#1f2022', val('4.Full Black.jpeg')),
      colour('Black & Red', '#9e262c', val('2.Black n Red.jpeg')),
      colour('Black & Blue', '#223c68', val('1.Black n Blue.jpeg')),
      colour('Black & Silver', '#555b62', val('3.Black n Silver.jpeg')),
      colour('Coffee', '#5c4235', val('5.Coffee.jpeg')),
      colour('Beige', '#d7cbb5', val('6.Beige.jpeg')),
      colour('Tan', '#a35a42', val('7.Tan.png')),
    ],
    images: [
      val('4.Full Black.jpeg'),
      val('2.Black n Red.jpeg'),
      val('1.Black n Blue.jpeg'),
      val('3.Black n Silver.jpeg'),
      val('5.Coffee.jpeg'),
      val('6.Beige.jpeg'),
      val('7.Tan.png'),
      val('8.multi color availability.png'),
    ],
    features: ['Detachable grass layer', 'Diamond-stitched finish', 'Anti-skid backing'],
    specs: [
      ['Detachable grass mat', 'Traps dirt, mud and debris. Clips on and off for straightforward cleaning.'],
      ['PU / leatherette surface', 'A water-resistant, scratch-resistant surface layer.'],
      ['High-density foam core', 'Semi-rigid foam helps retain the shape and provides thermal insulation.'],
      ['EVA base layer', 'A secondary moisture barrier adds structural rigidity.'],
      ['Anti-skid backing', 'Wire-loop or hook-and-loop backing helps secure the mat to the factory carpet.'],
      ['Your choice of colour', 'Choose a finish that complements your cabin.'],
    ],
  },
  {
    id: 'premium', name: 'Premium', type: '9D', label: 'A little more luxury',
    description: 'Rich leatherette. Deeper coverage. A beautifully finished cabin, right down to the last detail.',
    prices: { Normal: { 5: [6999, 8999], 7: [7999, 9999] }, Luxury: { 5: [6999, 8999], 7: [8499, 10499] } },
    colours: [
      colour('Black', '#222325', prem('Premium-2.png')),
      colour('Tan / Coffee', '#9e5d36', prem('Premium-11.png')),
      colour('Burgundy', '#8a2536', prem('Premium-4.png')),
      colour('Beige', '#c8b37a', prem('Premium-9.png')),
      colour('Ivory', '#dedcd3', prem('Premium-3.png')),
      colour('Olive', '#6b704d', prem('Premium-1.png')),
      colour('Teal', '#326b75', prem('Premium-6.png')),
      colour('Black & Silver', '#33373d', prem('Premium-7.png')),
    ],
    images: [
      prem('Premium-2.png'),
      prem('Premium-11.png'),
      prem('Premium-4.png'),
      prem('Premium-9.png'),
      prem('Premium-3.png'),
      prem('Premium-1.png'),
      prem('Premium-6.png'),
      prem('Premium-7.png'),
      prem('Premium-5.png'),
      prem('Premium-8.png'),
      prem('Premium-10.png'),
    ],
    features: ['Edge-to-edge coverage', 'Detachable dual layer', 'Waterproof surface'], specs: premiumSpecs,
  },
  {
    id: 'premium-pro', name: 'Premium Pro', type: '9D Pro', label: 'The statement upgrade',
    description: 'Distinctive dual tones meet full-cabin protection. Made for a cabin with a character of its own.',
    prices: { Normal: { 5: [7499, 9499], 7: [8499, 10499] }, Luxury: { 5: [7499, 9499], 7: [8999, 10999] } },
    colours: [
      colour('Black & Red', '#a8262e', pro('Prem Pro-Black n Red.png')),
      colour('Black & Coffee', '#5a3e33', pro('Prem Pro-Black n Coffee.png')),
      colour('Black & Ice Grey', '#c7c9cb', pro('Prem Pro-Black n Ice Grey.png')),
      colour('Red & Black', '#bf2b35', pro('Prem Pro-Red n Black.png')),
      colour('Pink & Black', '#d94862', pro('Prem Pro-Pink n Black.png')),
    ],
    images: [
      pro('Prem Pro-Black n Red.png'),
      pro('Prem Pro-Black n Coffee.png'),
      pro('Prem Pro-Black n Ice Grey.png'),
      pro('Prem Pro-Red n Black.png'),
      pro('Prem Pro-Pink n Black.png'),
      pro('Prem Pro-Black n Coffee1.png'),
      pro('Prem Pro-Black n Ice Grey1.png'),
    ],
    features: ['Signature dual tones', 'Full sill coverage', 'Customisable finish'],
    specs: [['Dual-tone colour combinations', 'Contrasting panels give your mats a distinctive finish.'], ...premiumSpecs],
  },
];
export const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
export const priceFor = (product, category = 'Normal', seats = '5') => product?.prices?.[category]?.[seats] ?? null;
export const startingPrice = product => priceFor(product)?.[0] ?? product.startingPrice;
export const heroSlides = [
  { image: '/images/hero-interior.png', name: 'Signature Cabin', type: 'AI-Rendered Luxury Fitment', id: 'premium' },
  { image: '/images/hero-9d-wide.webp', mobileImage: '/images/hero-9d-mobile.webp', name: 'Premium', type: '9D · Ivory finish', id: 'premium' },
  { image: val('4.Full Black.jpeg'), name: 'TrueValue', type: '7D · Full Black', id: 'truevalue' },
  { image: pro('Prem Pro-Black n Red.png'), name: 'Premium Pro', type: '9D Pro · Black & Red', id: 'premium-pro' },
  {
    image: '/images/ProGear%20pics%203/hero-ai-luxury-banner.jpg',
    name: 'Experience Luxury Underfoot',
    type: 'Tailor-Made Diamond Mats',
    id: 'premium',
    isBanner: true,
  },
];
export const care = [
  ['01', 'Unclip & rinse', 'Remove the upper grass layer, shake out the dirt and rinse with water.'],
  ['02', 'Wipe the base', 'Clean the leatherette base with a damp microfibre cloth or foam cleaner.'],
  ['03', 'Dry & reattach', 'Let the upper layer air-dry completely before clipping it back in.'],
];
