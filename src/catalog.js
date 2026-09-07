// Product names, specifications and prices supplied in the client's website.xlsx.
const photo = (folder, file) => `/images/ProGear%20pics/${encodeURIComponent(folder)}/${encodeURIComponent(file)}.jpeg`;
const premium = file => photo('Premium or 9D', `WhatsApp Image 2026-09-06 at ${file}`);
const pro = file => photo('Premium Pro or 9D Pro', `WhatsApp Image 2026-09-06 at ${file}`);
const value = file => photo('TrueValue or 7D', file);
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
    // Confirmed by the user: 2099 is the sale price; 2499 is MRP.
    prices: { Normal: { 5: [2099, 2499], 7: [2099, 2499] }, Luxury: { 5: [2099, 2499], 7: [2099, 2499] } }, colours: [], images: [],
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
    colours: [colour('Full Black', '#242426', value('Full Black')), colour('Black & Red', '#a52a30', value('Black n Red')), colour('Black & Blue', '#345887', value('Black n Blue')), colour('Coffee', '#665144', value('Coffee'))],
    images: [value('Full Black'), value('Black n Red'), value('Black n Blue'), value('Coffee'), value('all colours'), value('WhatsApp Image 2026-09-06 at 3.46.34 PM (2)')],
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
    colours: [colour('Black', '#252628', premium('3.20.24 PM')), colour('Coffee', '#ad6b37', premium('5.08.11 PM')), colour('Burgundy', '#79253b', premium('5.08.10 PM')), colour('Beige', '#c9b582', premium('3.20.24 PM (2)')), colour('Ivory', '#e3dfd3', premium('3.20.22 PM (1)')), colour('Olive', '#85885b', premium('3.20.23 PM (1)')), colour('Teal', '#397980', premium('3.20.24 PM (1)'))],
    images: ['3.20.23 PM', '5.08.11 PM', '5.08.10 PM', '3.20.24 PM', '3.20.22 PM (1)', '3.20.22 PM', '3.20.23 PM (1)', '3.20.23 PM (2)', '3.20.24 PM (1)', '3.20.24 PM (2)', '3.20.25 PM (1)', '3.20.25 PM (2)', '3.20.25 PM', '3.20.26 PM (1)', '3.20.26 PM (2)', '3.20.26 PM'].map(premium),
    features: ['Edge-to-edge coverage', 'Detachable dual layer', 'Waterproof surface'], specs: premiumSpecs,
  },
  {
    id: 'premium-pro', name: 'Premium Pro', type: '9D Pro', label: 'The statement upgrade',
    description: 'Distinctive dual tones meet full-cabin protection. Made for a cabin with a character of its own.',
    prices: { Normal: { 5: [7499, 9499], 7: [8499, 10499] }, Luxury: { 5: [7499, 9499], 7: [8999, 10999] } },
    colours: [colour('Black & Red', '#b52d35', pro('5.08.11 PM (1)')), colour('Black & Coffee', '#695048', pro('5.08.11 PM (2)')), colour('Black & Ivory', '#d6d2c8', pro('5.08.12 PM (2)'))],
    images: ['5.08.11 PM (1)', '5.08.11 PM (2)', '5.08.12 PM (2)', '3.20.21 PM', '5.08.12 PM (1)', '5.08.12 PM', '5.08.13 PM (1)', '5.08.13 PM (2)', '5.08.13 PM (3)', '5.08.14 PM'].map(pro),
    features: ['Signature dual tones', 'Full sill coverage', 'Customisable finish'],
    specs: [['Dual-tone colour combinations', 'Contrasting panels give your mats a distinctive finish.'], ...premiumSpecs],
  },
];
export const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
export const priceFor = (product, category = 'Normal', seats = '5') => product?.prices?.[category]?.[seats] ?? null;
export const startingPrice = product => priceFor(product)?.[0] ?? product.startingPrice;
export const heroSlides = [
  { image: premium('3.20.23 PM'), name: 'Premium', type: '9D · Coffee finish', id: 'premium' },
  { image: value('Full Black'), name: 'TrueValue', type: '7D · Full Black', id: 'truevalue' },
  { image: pro('5.08.11 PM (1)'), name: 'Premium Pro', type: '9D Pro · Black & Red', id: 'premium-pro' },
];
export const care = [
  ['01', 'Unclip & rinse', 'Remove the upper grass layer, shake out the dirt and rinse with water.'],
  ['02', 'Wipe the base', 'Clean the leatherette base with a damp microfibre cloth or foam cleaner.'],
  ['03', 'Dry & reattach', 'Let the upper layer air-dry completely before clipping it back in.'],
];
