export const site = {
  name: "ProGear Mats",
  tagline: "Premium Car Mats",
  whatsapp: "919999999999",
  phone: "+91 99999 99999",
  email: "hello@progearmats.in",
  address: "Your showroom address, New Delhi, India",
  hours: "Mon–Sat · 10:00 AM–7:00 PM",
  map: "https://www.google.com/maps?q=New+Delhi,+India&output=embed",
};

export const products = [
  {
    id: "signature-7d",
    name: "Signature 7D Mats",
    category: "Luxury",
    image: "/images/red-diamond-mats.png",
    description: "A tailored, edge-to-edge cabin upgrade with quilted comfort and a bold red finish.",
    material: "Premium leatherette",
    colors: ["Black / Red", "All Black", "Black / Beige"],
    highlights: ["Custom-fit coverage", "Raised protective edges", "Easy-clean top layer"],
  },
  {
    id: "imperial-bucket",
    name: "Imperial Bucket Mats",
    category: "Premium",
    image: "/images/beige-luxury-mats.png",
    description: "Deep bucket protection shaped for a refined cabin and complete floor coverage.",
    material: "Quilted leatherette",
    colors: ["Beige / Black", "Coffee / Black", "All Black"],
    highlights: ["High side walls", "Full rear-row bridge", "Soft-touch finish"],
  },
  {
    id: "terrain-pro",
    name: "Terrain Pro Mats",
    category: "All Weather",
    image: "/images/all-weather-mats.png",
    description: "Durable all-weather mats built to trap dust, spills and monsoon mess.",
    material: "Heavy-duty TPE",
    colors: ["Graphite Black"],
    highlights: ["Deep liquid channels", "Anti-slip texture", "Hose-clean design"],
  },
];

export const benefits = [
  ["01", "Tailored fit", "Designed around your exact car model."],
  ["02", "Built for India", "Ready for dust, rain and daily driving."],
  ["03", "Premium finish", "Clean edges, rich texture and lasting form."],
];

export const carBrands = ["Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Kia", "Toyota", "Honda", "Skoda", "Volkswagen", "Other"];

export const whatsappUrl = (message) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
