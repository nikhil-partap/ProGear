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
  fitment("citroen-c3", "Citroen C3", "7D", "", [], true, [
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Citron%20C3-1.jpeg",
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Citron%20C3-2.jpeg",
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Citron%20C3-3.jpeg",
  ]),
  fitment("exter", "Hyundai Exter", "7D", "", [], true, [
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Exter-1.jpeg",
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Exter-2.jpeg",
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Exter-3.jpeg",
  ]),
  fitment("fortuner", "Toyota Fortuner", "9D", "", [], true, [
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Fortuner-1.jpeg",
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Fortuner-2.jpeg",
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Fortuner-3.jpeg",
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Fortuner-4.jpeg",
  ]),
  fitment("glc-300", "Mercedes GLC 300", "9D", "", [], true, [
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Mercedes%20GLC300-1.jpeg",
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Mercedes%20GLC300-2.jpeg",
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Mercedes%20GLC300-3.jpeg",
  ]),
  fitment("skoda-slavia", "Skoda Slavia", "7D", "", [], true, [
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Skoda%20Slavia-1.jpeg",
    "/images/ProGear%20pics%203/Customer%20Original%20Fitting%20Pics/Skoda%20Slavia-2.jpeg",
  ]),
  fitment("audi-a4", "Audi A4", "7D", "all 7D/Audi A4", ["10ddf9a9-1f44-4e61-89db-8b2ec06c09b2.jpg", "e35ab3a1-6fc6-456e-a809-7e262afff02d.jpg", "0e9085eb-ea83-40b5-ad85-df44e5f9d7b0.jpg"]),
  fitment("gls-400d", "Mercedes GLS 400d", "7D", "all 7D/Gls 400 D 7D", ["dba7aae7-fd0f-4732-aa33-0e9d11bbdc2f.jpg", "d6d1f01f-ee7f-41b7-b541-f5ce4d027b3c.jpg", "363a5711-15c1-4f44-ab60-da85564ee96f.jpg"]),
  fitment("grand-vitara-victoris", "Grand Vitara / Victoris", "7D", "all 7D/Grand vitara & Victoris dono me same lagta h", ["1a77ce86-ac49-401b-8bd2-c322efa403ae.jpg", "f9e34d5f-cb46-4aec-b268-c813174441cc.jpg", "4aedecdd-d91b-4c8c-8f84-c46d3bbed5a4.jpg"]),
  fitment("i10-nios", "Hyundai i10 Nios 2026", "7D", "all 7D/I-10 Nios 2026", ["6b81ae4a-6271-49b8-b848-fcc5fdc973d6.jpg", "c45dfe5f-88dd-48a0-aa10-8ecc0e4cd07b.jpg", "964af54f-0039-4319-8b86-f1b3ddf6502b.jpg"]),
  fitment("kia-carnival", "Kia Carnival 2021/2022", "7D", "all 7D/Kia Carnival 2122", ["b57de30a-3e25-4cab-88d2-00eee2852e9d.jpg", "ad8810b4-0c35-4bee-96b7-b7b27370df6b.jpg", "0304ae3e-b086-411f-b27b-0cf595d14105.jpg", "d0874326-7ebd-4e09-96ff-de7a062a1a3e.jpg"]),
  fitment("pajero-sfx", "Mitsubishi Pajero SFX", "7D", "all 7D/Pajero old (SFX)", ["832fcd8b-3ba0-4515-8434-d040406d3c0f.jpg", "2ddbfb8e-4879-45f4-83c2-10aa87505c05.jpg", "42053e6b-1b6c-4c25-a94b-071ed8610ed9.jpg"]),
  fitment("polo", "Volkswagen Polo", "7D", "all 7D/Polo", ["fcf4b8e9-ac11-4a61-a76c-d28f3af906bd.jpg", "c1c54a1d-ddf9-4b2d-a232-a39008ba0c74.jpg", "d9214a62-5ac2-4d0e-b29b-5ae46d4636aa.jpg"]),
  fitment("grand-vitara-9d", "Maruti Grand Vitara", "9D", "Grand vitara 9D", ["ebe4034d-448e-4c6a-a2ec-f0e6abdf12dd.jpg", "7af07e91-7421-447e-8f79-4f91bdda9f2d.jpg", "4541b161-cd4f-498e-be31-1bed97af6338.jpg"], false),
  fitment("hector-plus", "MG Hector Plus", "9D", "Hector plus 9D Mat", ["06e39073-fb3f-4fed-8530-9433879ddaa2.jpg", "9ee5c175-377d-46d4-b09e-d6ec3f0f8b3c.jpg", "08ade6e6-a7f0-43f1-a6ce-cec3244507f6.jpg", "8158fe21-34a6-440b-84a4-14aeb089557e.jpg"], false),
  fitment("mercedes-gle", "Mercedes GLE 300D", "9D", "Mercedes GLE 300D 9D", ["0f167fdd-ecef-467b-9eea-27e2752ef3f9.jpg", "cb56dfe2-99bc-448b-b7a9-ff6db651246f.jpg", "0776a40e-20c2-4319-b631-2a67addff599.jpg"], false),
  fitment("safari", "Tata Safari New", "9D", "Safari New 9D Mat", ["e4fb6c92-0c1a-4f60-9437-dd57a89f4aa8.jpg", "0082407a-4074-4f9e-bf92-b0a11ba32490.jpg", "c9bc11f1-d175-4d82-b50b-211d7d62272a.jpg", "e68b08ac-0f0f-40be-a526-6cb3007477b3.jpg"], false),
  fitment("thar", "Mahindra Thar Manual", "9D", "Thar manual 9D", ["b67c54b6-4938-4579-894f-ad5f4e59bec4.jpg", "69ef60d5-7dbd-48a5-8238-3100053ae378.jpg", "c7c0b6fb-c4ae-4359-b526-b7de62f15ba9.jpg", "f360865f-0ca8-4160-8d85-70feeb4db534.jpg"]),
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
  Citroen: ["C3"],
  "Maruti Suzuki": ["Grand Vitara", "Victoris"],
  Hyundai: ["Exter", "i10 Nios 2026"],
  Tata: ["Safari New"],
  Mahindra: ["Thar Manual"],
  Kia: ["Carnival 2021/2022"],
  Toyota: ["Fortuner", "Fortuner Automatic"],
  "Mercedes-Benz": ["GLC 300", "GLC 300 Automatic", "GLE 300D", "GLS 400d"],
  Skoda: ["Slavia"],
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

export const aboutReviews = [
  { name: "Ishit Rider", initials: "IR", when: "a year ago", quote: "I’ve bought a lot of accessories over the years, but these mats stand out. The fit is exact, the quality feels built to last, and the whole experience felt honest. Feels good when someone delivers more than expected.", link: "https://maps.app.goo.gl/Ga2sVnMpEV1Dnd2s8", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWvP4DanEb2N5JoYZTCNH3REMAn0L2osJs2kVs8Fi_EttYNG1n_=w45-h45-p-rp-mo-ba12-br100" },
  { name: "Vivek Pandey", initials: "VP", when: "a year ago", quote: "Mat quality is good and customer nature and service is very good pls guys please visit at once", link: "https://maps.app.goo.gl/WpfPkR86M9BjGGUG8", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWbMCdwAzOq5rkxhfwF9kz-JDYZl5xFPl8oomvshPvKnOvyuvrkeA=w45-h45-p-rp-mo-br100" },
  { name: "Sachin Khanna", initials: "SK", when: "a year ago", quote: "Good quality mat available across all variety. Good feel and soft texture mat at affordable price", link: "https://maps.app.goo.gl/X7suk3PdBEKTpwTE6", avatar: "https://lh3.googleusercontent.com/a/ACg8ocIgW0t_DI_99cxXVn3H3WWgZ8lU0sjweYgHJyXydJG8LGXkLQ=w45-h45-p-rp-mo-br100" },
  { name: "Ghoshit Bhagat", initials: "GB", when: "10 months ago", quote: "They are just Best in the business. Try once & thank me later. 🫶", link: "https://maps.app.goo.gl/MW9mRo13mmq9kUQY7", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW0vlWTRonXDFCPOqdWHh2rDUrLju5lxuVZnMmhit7WdxqDYDcj=w45-h45-p-rp-mo-br100" },
  { name: "Aditya Chaturvedi", initials: "AC", when: "a year ago", quote: "Best product,quality is really good, timely delivered..", link: "https://maps.app.goo.gl/P7iw4Mw5zhcT8duDA", avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXU6GRDij6TgjfZJUGnXZ-bmxmQDSlmeVvy49ilug2LZjeu_Isa=w45-h45-p-rp-mo-br100" },
  { name: "Poonam Gaur", initials: "PG", when: "a year ago", quote: "Superb quality and lots of variety, highly recommended 😇", link: "https://maps.app.goo.gl/R7Mq9VQVth1LCzMs6", avatar: "https://lh3.googleusercontent.com/a/ACg8ocLH23Afrdv_rCeNdoq-6yuIdFHa7t-XyspxHbTC0zFf8TuyUQ=w45-h45-p-rp-mo-br100" },
  { name: "Hari Priyan", initials: "HP", when: "a year ago", quote: "Good quality 7D mats you can trust and well designed.", link: "https://maps.app.goo.gl/jG8Gc17q79CaWagj8", avatar: "https://lh3.googleusercontent.com/a/ACg8ocJcWVHki-oR-XJ2vEVyAUAgJqIyy8nrJlOsEig08cJQWorpDw=w45-h45-p-rp-mo-br100" },
  { name: "Chanchal Rathore", initials: "CR", when: "3 months ago", quote: "Product quality is good and proper feeting", link: "https://maps.app.goo.gl/tgBUFmGtudb8Fsoj7" },
];

export const materials = [
  ["01", "Model-matched shape", "The floor pattern is checked against your exact car before confirmation."],
  ["02", "Protective coverage", "Layered construction helps keep daily dust, spills and road mess off the carpet."],
  ["03", "Easy-care surface", "Remove, vacuum or wipe the surface and get back on the road."],
  ["04", "Fitment guidance", "Send your vehicle details and get a direct recommendation from the team."],
];

export const whatsappUrl = message => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
