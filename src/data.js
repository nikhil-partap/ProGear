export const site = {
  name: "ProGear Mats",
  tagline: "Premium Car Mats",
  whatsapp: "917530819890",
  phone: "+91 75308 19890",
  email: "id-progearmats@gmail.com",
  address: "Net Ram Market, Sector 7, Naharpur Village, Rohini, New Delhi, Delhi 110085",
  hours: "Open 24 hours",
  map: "https://www.google.com/maps?q=Net+Ram+Market,+Sector+7,+Naharpur+Village,+Rohini,+New+Delhi,+Delhi+110085&output=embed",
  instagram: "https://www.instagram.com/insta_pro.gear/",
  googlePage: "https://share.google/Zzawbs9H3RDVgPkkK",
  googleReviews: "https://g.page/r/CZ1Ln-VGJowvEAE/review",
  rating: "5.0",
  reviewCount: 33,
};

export const fitments = {
  "9D": ["Safari (New)", "Hector Plus", "Mercedes GLE 300d", "Grand Vitara", "GLC 300 Automatic", "Fortuner Automatic", "Thar Manual"],
  "7D": ["GLS 400d", "Volkswagen Polo", "Hyundai Exter", "Pajero SFX", "i10 Nios 2026", "Grand Vitara / Victoris", "Audi A4", "Kia Carnival 2021/2022"],
};

export const fitmentGroups = [
  { type: "9D", title: "9D custom fittings", models: fitments["9D"] },
  { type: "7D", title: "7D custom fittings", models: fitments["7D"] },
];

export const products = [
  {
    id: "progear-7d",
    name: "ProGear 7D Custom-Fit Mats",
    category: "7D",
    image: "/images/client/exter-7d.png",
    imageLabel: "Real 7D fitment",
    description: `Our confirmed 7D range covers ${fitments["7D"].length} current vehicle patterns, with model-specific floor shapes and removable woven top layers shown in real fitment photos.`,
    material: "Quilted leatherette + woven top layer",
    coverage: "Vehicle-specific cabin pattern",
    thickness: "Varies by vehicle and selected finish",
    care: "Remove the top layer, vacuum or wipe clean",
    fitment: "Professional fitment recommended",
    colors: ["All Black", "Black / Beige", "Black / Red"],
    highlights: [`${fitments["7D"].length} confirmed vehicle patterns`, "Raised side coverage", "Removable easy-clean top layer"],
    compatibleModels: fitments["7D"],
  },
  {
    id: "progear-9d",
    name: "ProGear 9D Custom-Fit Mats",
    category: "9D",
    image: "/images/red-diamond-mats.png",
    imageLabel: "Representative collection visual",
    description: `Model-specific ProGear 9D fittings are confirmed for ${fitments["9D"].length} vehicles. Contact us with the exact year and variant to see the available pattern, construction and finishes.`,
    material: "Model-specific 9D construction",
    coverage: "Vehicle-specific cabin pattern",
    thickness: "Varies by vehicle and selected finish",
    care: "Care guidance supplied with the selected finish",
    fitment: "Professional fitment recommended",
    colors: [],
    highlights: [`${fitments["9D"].length} confirmed vehicle patterns`, "Vehicle-specific compatibility", "Finish check before ordering"],
    compatibleModels: fitments["9D"],
  },
];

export const benefits = [
  ["01", "Tailored fit", "Designed around your exact car model."],
  ["02", "Built for India", "Ready for dust, rain and daily driving."],
  ["03", "Premium finish", "Clean edges, rich texture and lasting form."],
];

export const carModels = {
  "Maruti Suzuki": ["Baleno", "Brezza", "Ertiga", "Fronx", "Grand Vitara", "Swift", "Victoris"],
  Hyundai: ["Creta", "Exter", "i10 Nios 2026", "i20", "Venue", "Verna"],
  Tata: ["Altroz", "Harrier", "Nexon", "Punch", "Safari (New)"],
  Mahindra: ["Scorpio-N", "Thar Manual", "XUV 3XO", "XUV700"],
  Kia: ["Carens", "Carnival 2021/2022", "Seltos", "Sonet"],
  Toyota: ["Fortuner", "Glanza", "Hyryder", "Innova Hycross"],
  "Mercedes-Benz": ["GLC 300 Automatic", "GLE 300d", "GLS 400d"],
  Volkswagen: ["Polo", "Taigun", "Tiguan", "Virtus"],
  Audi: ["A4"],
  Mitsubishi: ["Pajero SFX"],
  MG: ["Hector Plus"],
  Honda: ["Amaze", "City", "Elevate"],
  Skoda: ["Kodiaq", "Kushaq", "Slavia"],
  Other: ["Share model on WhatsApp"],
};

export const carBrands = Object.keys(carModels);

export const processSteps = [
  ["01", "Share your car", "Choose the brand and model so we can check the exact floor pattern."],
  ["02", "Pick your finish", "Compare materials, colours and stitching with help on WhatsApp."],
  ["03", "Confirm the fit", "We verify compatibility and guide you through ordering and fitment."],
];

export const testimonials = [
  {
    quote: "Good feel and soft texture mat at affordable price",
    name: "Sachin Khanna",
    car: "Google review",
  },
  {
    quote: "Decent quality with good customer service.",
    name: "Prateek Kalra",
    car: "Google review",
  },
  {
    quote: "Mat quality is very good. Thank you Pro Gear Mat for fast service.",
    name: "Ranjeet Negi",
    car: "Google review",
  },
];

export const fitmentGallery = [
  { type: "7D", model: "GLS 400d", image: "/images/client/gls-400d-7d.png" },
  { type: "7D", model: "Volkswagen Polo", image: "/images/client/polo-7d.png" },
  { type: "7D", model: "Hyundai Exter", image: "/images/client/exter-7d.png" },
  { type: "7D", model: "Pajero SFX", image: "/images/client/pajero-sfx-7d.png" },
  { type: "7D", model: "i10 Nios 2026", image: "/images/client/i10-nios-7d.png" },
  { type: "7D", model: "Grand Vitara / Victoris", image: "/images/client/grand-vitara-victoris-7d.png" },
  { type: "7D", model: "Audi A4", image: "/images/client/audi-a4-7d.png" },
  { type: "7D", model: "Kia Carnival 2021/2022", image: "/images/client/kia-carnival-7d-verified.png" },
];

export const materials = [
  ["01", "Water-resistant surface", "Spills stay above the protective layers for easier cleanup."],
  ["02", "Raised edge coverage", "Contoured walls help contain dust, debris and monsoon mess."],
  ["03", "Anti-slip foundation", "A stable underside helps the mat stay aligned while driving."],
  ["04", "Cabin-matched finish", "Choose tones and stitching that complement your interior."],
];

export const whatsappUrl = (message) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
