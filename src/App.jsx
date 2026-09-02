import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import { benefits, carBrands, products, site, whatsappUrl } from "./data";

const Arrow = () => <span aria-hidden="true">↗</span>;

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["/", "Home"], ["/shop", "Collections"], ["/about", "About"], ["/contact", "Contact"]];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="page flex h-20 items-center justify-between">
        <Link to="/" className="logo-crop" aria-label="ProGear Mats home">
          <img src="/images/progear-logo.png" alt="ProGear Mats" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? "text-white" : "text-zinc-400"}`}>{label}</NavLink>)}
        </nav>
        <a className="btn-red hidden sm:inline-flex" href={whatsappUrl("Hi ProGear Mats, I want mats for my car.")} target="_blank" rel="noreferrer">Get a quote <Arrow /></a>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-xl md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? "×" : "☰"}</button>
      </div>
      {open && <nav className="page grid gap-1 border-t border-white/10 py-4 md:hidden">{links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/5">{label}</NavLink>)}</nav>}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><div className="text-2xl font-black italic">PRO<span className="text-red-600">GEAR</span></div><p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">Premium custom-fit mats for Indian roads and the cars that own them.</p></div>
        <div><p className="eyebrow">Explore</p><div className="mt-4 grid gap-2 text-sm text-zinc-400"><Link to="/shop">Collections</Link><Link to="/about">Our story</Link><Link to="/contact">Contact</Link></div></div>
        <div><p className="eyebrow">Contact</p><div className="mt-4 grid gap-2 text-sm text-zinc-400"><a href={`tel:${site.phone}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><span>{site.hours}</span></div></div>
      </div>
      <div className="page flex flex-wrap justify-between gap-3 border-t border-white/10 py-5 text-xs text-zinc-600"><span>© {new Date().getFullYear()} ProGear Mats</span><span>Made for the road ahead.</span></div>
    </footer>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card group">
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-zinc-900"><img src={product.image} alt={product.name} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" /></Link>
      <div className="p-5"><p className="eyebrow">{product.category}</p><div className="mt-2 flex items-start justify-between gap-4"><div><h3 className="text-xl font-bold">{product.name}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{product.material}</p></div><Link to={`/product/${product.id}`} className="round-link" aria-label={`View ${product.name}`}>↗</Link></div></div>
    </article>
  );
}

function Home() {
  const [brand, setBrand] = useState("");
  return (
    <>
      <section className="hero min-h-[820px] pt-20">
        <div className="page relative z-10 flex min-h-[740px] items-center py-20">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Engineered for every drive</p>
            <h1 className="display">Your car.<br /><span>Your fit.</span><br />No compromise.</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-300 sm:text-lg">Custom-fit premium mats that protect every curve of your cabin—and look like they were born there.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link className="btn-red" to="/shop">Explore collections <Arrow /></Link><a className="btn-dark" href={whatsappUrl("Hi ProGear Mats, help me find the right mat for my car.")} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div>
            <div className="hero-stats mt-12 flex flex-wrap gap-7 text-sm text-zinc-400"><span><b className="text-white">100%</b> model-specific</span><span><b className="text-white">3-layer</b> protection</span><span><b className="text-white">Easy</b> to clean</span></div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0c0c]">
        <div className="page grid md:grid-cols-3">{benefits.map(([number, title, copy]) => <div key={number} className="benefit"><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></div>)}</div>
      </section>

      <section className="section page">
        <div className="section-head"><div><p className="eyebrow">Our bestsellers</p><h2 className="title">Made to fit.<br />Styled to stand out.</h2></div><Link className="text-link" to="/shop">View all collections <Arrow /></Link></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{products.map(product => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="page pb-24">
        <div className="fit-panel">
          <div><p className="eyebrow">Find your fit</p><h2 className="title mt-4">Tell us what<br />you drive.</h2><p className="mt-5 max-w-lg text-zinc-400">Choose your car brand and continue on WhatsApp. We’ll confirm the model, year and perfect-fit options.</p></div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-5 sm:p-7"><label className="mb-3 block text-sm text-zinc-400" htmlFor="car-brand">Select car brand</label><select id="car-brand" value={brand} onChange={e => setBrand(e.target.value)} className="field"><option value="">Choose a brand</option>{carBrands.map(item => <option key={item}>{item}</option>)}</select><a className={`btn-red mt-4 w-full justify-center ${!brand ? "pointer-events-none opacity-40" : ""}`} href={whatsappUrl(`Hi ProGear Mats, I need mats for my ${brand}.`)} target="_blank" rel="noreferrer">Check availability <Arrow /></a><p className="mt-4 text-center text-xs text-zinc-600">No payment required. We’ll reply with suitable options.</p></div>
        </div>
      </section>
    </>
  );
}

function Shop() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(products.map(product => product.category))];
  const shown = filter === "All" ? products : products.filter(product => product.category === filter);
  return (
    <main className="page min-h-screen pb-24 pt-36"><p className="eyebrow">Shop the range</p><div className="section-head mt-3"><h1 className="title">Find your finish.</h1><p className="max-w-md text-zinc-500">Every ProGear collection can be tailored to compatible car models. Ask us for current colours and availability.</p></div><div className="mt-10 flex flex-wrap gap-2">{categories.map(category => <button key={category} onClick={() => setFilter(category)} className={`filter ${filter === category ? "active" : ""}`}>{category}</button>)}</div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{shown.map(product => <ProductCard key={product.id} product={product} />)}</div></main>
  );
}

function Product() {
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const [color, setColor] = useState(product?.colors[0] || "");
  if (!product) return <main className="page grid min-h-screen place-items-center pt-20"><div className="text-center"><h1 className="title">Product not found.</h1><Link to="/shop" className="btn-red mt-6">Back to collections</Link></div></main>;
  return (
    <main className="page min-h-screen py-32"><Link className="text-sm text-zinc-500 hover:text-white" to="/shop">← Back to collections</Link><div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16"><div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900"><img src={product.image} alt={product.name} className="aspect-square w-full object-cover" /></div><div className="flex flex-col justify-center"><p className="eyebrow">{product.category} collection</p><h1 className="title mt-3">{product.name}</h1><p className="mt-5 text-lg leading-8 text-zinc-400">{product.description}</p><div className="mt-8 border-y border-white/10 py-6"><p className="mb-4 text-sm font-semibold">Choose a finish</p><div className="flex flex-wrap gap-2">{product.colors.map(item => <button key={item} onClick={() => setColor(item)} className={`filter ${color === item ? "active" : ""}`}>{item}</button>)}</div></div><ul className="my-7 grid gap-3 text-sm text-zinc-300">{product.highlights.map(item => <li key={item} className="flex gap-3"><span className="text-red-500">✓</span>{item}</li>)}</ul><a className="btn-red w-full justify-center sm:w-fit" href={whatsappUrl(`Hi ProGear Mats, I'm interested in ${product.name} in ${color}. My car is:`)} target="_blank" rel="noreferrer">Enquire on WhatsApp <Arrow /></a></div></div>
    </main>
  );
}

function About() {
  return (
    <main className="pb-24 pt-20"><section className="page grid min-h-[650px] items-center gap-12 py-24 lg:grid-cols-2"><div><p className="eyebrow">About ProGear</p><h1 className="display mt-4 text-[clamp(3.5rem,7vw,7rem)]">Built below.<br /><span>Felt everywhere.</span></h1></div><div className="max-w-xl text-lg leading-8 text-zinc-400"><p>We believe the floor of your car deserves the same attention as every other detail. ProGear Mats combines tailored coverage, durable materials and a finish that elevates the whole cabin.</p><p className="mt-5">Our products are designed for real Indian driving—from everyday dust to monsoon spills—without sacrificing style.</p></div></section><section className="page"><div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] lg:grid-cols-2"><div className="p-8 sm:p-12"><p className="eyebrow">Visit us</p><h2 className="title mt-4">See the finish<br />in person.</h2><div className="mt-8 space-y-4 text-sm text-zinc-400"><p>{site.address}</p><p>{site.hours}</p><p>{site.phone}</p></div><Link to="/contact" className="btn-red mt-8">Plan your visit <Arrow /></Link></div><iframe title="ProGear Mats location" src={site.map} className="min-h-[420px] w-full grayscale invert-[.9]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section></main>
  );
}

function Contact() {
  const submit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.open(whatsappUrl(`Hi ProGear Mats!\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nCar: ${data.get("car")}\nMessage: ${data.get("message")}`), "_blank", "noopener,noreferrer");
  };
  return (
    <main className="page min-h-screen py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow">Let’s talk</p><h1 className="title mt-4">Your perfect fit<br />starts here.</h1><p className="mt-5 max-w-md leading-7 text-zinc-400">Share your car details. The form opens WhatsApp with everything filled in—just hit send.</p><div className="mt-10 space-y-6 text-sm"><div><p className="text-zinc-600">Call or WhatsApp</p><p className="mt-1 text-lg">{site.phone}</p></div><div><p className="text-zinc-600">Email</p><p className="mt-1 text-lg">{site.email}</p></div><div><p className="text-zinc-600">Showroom</p><p className="mt-1 max-w-xs text-lg">{site.address}</p></div></div></div><form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-6 sm:p-10"><div className="grid gap-5 sm:grid-cols-2"><label className="label">Your name<input className="field" name="name" required placeholder="Rahul Sharma" /></label><label className="label">Phone number<input className="field" name="phone" required type="tel" placeholder="+91 98765 43210" /></label></div><label className="label mt-5">Car brand, model and year<input className="field" name="car" required placeholder="Hyundai Creta, 2024" /></label><label className="label mt-5">What are you looking for?<textarea className="field min-h-32 resize-y" name="message" placeholder="Black 7D mats with red stitching..." /></label><button className="btn-red mt-6 w-full justify-center" type="submit">Continue on WhatsApp <Arrow /></button></form></div></main>
  );
}

export default function App() {
  return <><ScrollTop /><Header /><Routes><Route path="/" element={<Home />} /><Route path="/shop" element={<Shop />} /><Route path="/product/:id" element={<Product />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /></Routes><Footer /></>;
}
