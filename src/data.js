const carImage = (folder, files) => files.map(file => `/images/car%20wise%20images/${folder.split("/").map(encodeURIComponent).join("/")}/${file}`);

export const site = {
  name: "ProGear Mats",
  tagline: "Premium custom-fit car mats",
  whatsapp: "917530819890",
  phone: "+91 75308 19890",
  email: "progearmats@gmail.com",
  address: "Net Ram Market, Sector 7, Naharpur Village, Rohini, New Delhi, Delhi 110085",
  hours: "",
  map: "https://maps.google.com/maps?q=Net+Ram+Market,+Sector+7,+Naharpur+Village,+Rohini,+New+Delhi,+Delhi+110085&output=embed",
  mapLink: "https://maps.app.goo.gl/ZA1jkoFLoBcjtCaw8",
  instagram: "https://www.instagram.com/insta_pro.gear/",
  googlePage: "https://maps.app.goo.gl/ZA1jkoFLoBcjtCaw8",
  googleReviews: "https://maps.app.goo.gl/ZA1jkoFLoBcjtCaw8",
};

const fitment = (id, model, type, folder, files, confirmed = true, directImages = null) => ({
  id, model, type, folder, images: directImages ?? carImage(folder, files), confirmed,
});

export const fitments = [
  fitment("audi-a4", "Audi A4", "7D", "all 7D/Audi A4", ["0e9085eb-ea83-40b5-ad85-df44e5f9d7b0.jpg", "10ddf9a9-1f44-4e61-89db-8b2ec06c09b2.jpg", "e35ab3a1-6fc6-456e-a809-7e262afff02d.jpg"]),
  fitment("exter", "Hyundai Exter", "7D", "all 7D/Exter", ["412fffc0-332e-466c-8ccd-35d09189799a.jpg", "64d89c99-855f-4cd4-a933-c0b491ba716a.jpg", "dffca080-94f0-4f9f-ae7b-570c541466dc.jpg"]),
  fitment("gls-400d", "Mercedes GLS 400d", "7D", "all 7D/Gls 400 D 7D", ["363a5711-15c1-4f44-ab60-da85564ee96f.jpg", "d6d1f01f-ee7f-41b7-b541-f5ce4d027b3c.jpg", "dba7aae7-fd0f-4732-aa33-0e9d11bbdc2f.jpg"]),
  fitment("grand-vitara-victoris", "Grand Vitara / Victoris", "7D", "all 7D/Grand vitara & Victoris dono me same lagta h", [], true, ["/images/client/grand-vitara-victoris-7d.png"]),
  fitment("i10-nios", "Hyundai i10 Nios 2026", "7D", "all 7D/I-10 Nios 2026", ["6b81ae4a-6271-49b8-b848-fcc5fdc973d6.jpg", "964af54f-0039-4319-8b86-f1b3ddf6502b.jpg", "c45dfe5f-88dd-48a0-aa10-8ecc0e4cd07b.jpg"]),
  fitment("kia-carnival", "Kia Carnival 2021/2022", "7D", "all 7D/Kia Carnival 2122", ["0304ae3e-b086-411f-b27b-0cf595d14105.jpg", "ad8810b4-0c35-4bee-96b7-b7b27370df6b.jpg", "b57de30a-3e25-4cab-88d2-00eee2852e9d.jpg", "d0874326-7ebd-4e09-96ff-de7a062a1a3e.jpg"]),
  fitment("pajero-sfx", "Mitsubishi Pajero SFX", "7D", "all 7D/Pajero old (SFX)", ["2ddbfb8e-4879-45f4-83c2-10aa87505c05.jpg", "42053e6b-1b6c-4c25-a94b-071ed8610ed9.jpg", "832fcd8b-3ba0-4515-8434-d040406d3c0f.jpg"]),
  fitment("polo", "Volkswagen Polo", "7D", "all 7D/Polo", ["c1c54a1d-ddf9-4b2d-a232-a39008ba0c74.jpg", "d9214a62-5ac2-4d0e-b29b-5ae46d4636aa.jpg", "fcf4b8e9-ac11-4a61-a76c-d28f3af906bd.jpg"]),
  fitment("fortuner", "Toyota Fortuner Automatic", "9D", "Fortuner automatic 9D", ["0ef4d54c-c30c-43b7-8d56-7c2d2381da33.jpg", "96ae2f1f-0ee0-42ba-95f8-57afe6eef03e.jpg", "b6338d51-18c6-4565-8d6e-e16e11425ea9.jpg", "e108f711-6d21-4174-8417-6408f5292786.jpg"]),
  fitment("glc-300", "Mercedes GLC 300 Automatic", "9D", "GLC 300 Automatic 9D", ["1a3fa67e-10b4-4021-97d3-dbc135c46d7c.jpg", "36ac325e-1bef-41fc-a0ed-888914177034.jpg", "9de01429-8082-462a-b9d1-dc31dde754cf.jpg"]),
  fitment("grand-vitara-9d", "Maruti Grand Vitara", "9D", "Grand vitara 9D", ["4541b161-cd4f-498e-be31-1bed97af6338.jpg", "7af07e91-7421-447e-8f79-4f91bdda9f2d.jpg", "ebe4034d-448e-4c6a-a2ec-f0e6abdf12dd.jpg"], false),
  fitment("hector-plus", "MG Hector Plus", "9D", "Hector plus 9D Mat", ["06e39073-fb3f-4fed-8530-9433879ddaa2.jpg", "08ade6e6-a7f0-43f1-a6ce-cec3244507f6.jpg", "8158fe21-34a6-440b-84a4-14aeb089557e.jpg", "9ee5c175-377d-46d4-b09e-d6ec3f0f8b3c.jpg"], false),
  fitment("mercedes-gle", "Mercedes GLE 300D", "9D", "Mercedes GLE 300D 9D", ["0776a40e-20c2-4319-b631-2a67addff599.jpg", "0f167fdd-ecef-467b-9eea-27e2752ef3f9.jpg", "cb56dfe2-99bc-448b-b7a9-ff6db651246f.jpg"], false),
  fitment("safari", "Tata Safari New", "9D", "Safari New 9D Mat", ["0082407a-4074-4f9e-bf92-b0a11ba32490.jpg", "c9bc11f1-d175-4d82-b50b-211d7d62272a.jpg", "e4fb6c92-0c1a-4f60-9437-dd57a89f4aa8.jpg", "e68b08ac-0f0f-40be-a526-6cb3007477b3.jpg"], false),
  fitment("thar", "Mahindra Thar Manual", "9D", "Thar manual 9D", ["69ef60d5-7dbd-48a5-8238-3100053ae378.jpg", "b67c54b6-4938-4579-894f-ad5f4e59bec4.jpg", "c7c0b6fb-c4ae-4359-b526-b7de62f15ba9.jpg", "f360865f-0ca8-4160-8d85-70feeb4db534.jpg"]),
];

export const products = fitments.map(item => ({
  ...item,
  name: `ProGear ${item.type} Mats — ${item.model}`,
  image: item.images[0],
  description: item.confirmed
    ? `Real ${item.type} fitment photos for ${item.model}. Share your exact year and variant on WhatsApp so we can confirm the right floor pattern.`
    : `Real ${item.type} gallery fitment for ${item.model}. Please share your exact year and variant on WhatsApp so the team can confirm this pattern before ordering.`,
  material: "Premium layered car-mat construction",
  coverage: "Vehicle-specific cabin pattern",
  care: "Vacuum or wipe clean; care guidance shared with the selected finish",
  fitment: "Exact year and variant checked on WhatsApp",
  highlights: ["Car-wise floor pattern", "Full-cabin coverage", "Enquire directly on WhatsApp"],
}));

export const carModels = {
  "Maruti Suzuki": ["Grand Vitara", "Victoris"],
  Hyundai: ["Exter", "i10 Nios 2026"],
  Tata: ["Safari New"],
  Mahindra: ["Thar Manual"],
  Kia: ["Carnival 2021/2022"],
  Toyota: ["Fortuner Automatic"],
  "Mercedes-Benz": ["GLC 300 Automatic", "GLE 300D", "GLS 400d"],
  Volkswagen: ["Polo"],
  Audi: ["A4"],
  Mitsubishi: ["Pajero SFX"],
  MG: ["Hector Plus"],
  Other: ["Share model on WhatsApp"],
};

export const carBrands = Object.keys(carModels);

export const benefits = [
  ["01", "Made for your car", "Vehicle-specific floor patterns, not one-size-fits-all mats."],
  ["02", "Real fitment help", "Share your model, year and variant for a clear recommendation."],
  ["03", "Simple enquiry", "No checkout or payment page—talk directly on WhatsApp."],
];

export const processSteps = [
  ["01", "Share your car", "Send the brand, model, year and transmission on WhatsApp."],
  ["02", "Choose your style", "Compare the 7D or 9D fitment and finish with the team."],
  ["03", "Confirm the fit", "The exact pattern is checked before you place an order."],
];

export const testimonials = [
  { quote: "Good quality mat available across all variety. Good feel and soft texture mat at affordable price", name: "Sachin K.", source: "Google review" },
  { quote: "They are just Best in the business. Try once & thank me later.", name: "Ghoshit B.", source: "Google review" },
  { quote: "Superb quality and lots of variety, highly recommended.", name: "Poonam G.", source: "Google review" },
  { quote: "Good material and fitting.", name: "Rohit A.", source: "Google review" },
  { quote: "Quality products with reasonable price.", name: "Praveen P.", source: "Google review" },
  { quote: "Good quality super.", name: "Mahesh J.", source: "Google review" },
];

export const materials = [
  ["01", "Model-matched shape", "The floor pattern is checked against your exact car before confirmation."],
  ["02", "Protective coverage", "Layered construction helps keep daily dust, spills and road mess off the carpet."],
  ["03", "Easy-care surface", "Remove, vacuum or wipe the surface and get back on the road."],
  ["04", "Fitment guidance", "Send your vehicle details and get a direct recommendation from the team."],
];

export const whatsappUrl = message => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
