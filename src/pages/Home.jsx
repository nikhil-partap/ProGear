import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { benefits, carBrands, products, whatsappUrl } from "../data";

export default function Home() {
  const [brand, setBrand] = useState("");

  return (
    <>
      <section className="hero min-h-[820px] pt-20">
        <div className="page relative z-10 flex min-h-[740px] items-center py-20">
          <div className="max-w-2xl"><p className="eyebrow mb-5">Engineered for every drive</p><h1 className="display">Your car.<br /><span>Your fit.</span><br />No compromise.</h1><p className="mt-6 max-w-lg text-base leading-7 text-zinc-300 sm:text-lg">Custom-fit premium mats that protect every curve of your cabin—and look like they were born there.</p><div className="mt-9 flex flex-wrap gap-3"><Link className="btn-red" to="/shop">Explore collections <span aria-hidden="true">↗</span></Link><a className="btn-dark" href={whatsappUrl("Hi ProGear Mats, help me find the right mat for my car.")} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div><div className="hero-stats mt-12 flex flex-wrap gap-7 text-sm text-zinc-400"><span><b className="text-white">100%</b> model-specific</span><span><b className="text-white">3-layer</b> protection</span><span><b className="text-white">Easy</b> to clean</span></div></div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-[#0c0c0c]"><div className="page grid md:grid-cols-3">{benefits.map(([number, title, copy]) => <div key={number} className="benefit"><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></div>)}</div></section>
      <section className="section page"><div className="section-head"><div><p className="eyebrow">Our bestsellers</p><h2 className="title">Made to fit.<br />Styled to stand out.</h2></div><Link className="text-link" to="/shop">View all collections <span aria-hidden="true">↗</span></Link></div><div className="mt-12 grid gap-5 md:grid-cols-3">{products.map(product => <ProductCard key={product.id} product={product} />)}</div></section>
      <section className="page pb-24"><div className="fit-panel"><div><p className="eyebrow">Find your fit</p><h2 className="title mt-4">Tell us what<br />you drive.</h2><p className="mt-5 max-w-lg text-zinc-400">Choose your car brand and continue on WhatsApp. We’ll confirm the model, year and perfect-fit options.</p></div><div className="rounded-3xl border border-white/10 bg-black/40 p-5 sm:p-7"><label className="mb-3 block text-sm text-zinc-400" htmlFor="car-brand">Select car brand</label><select id="car-brand" value={brand} onChange={event => setBrand(event.target.value)} className="field"><option value="">Choose a brand</option>{carBrands.map(item => <option key={item}>{item}</option>)}</select><a className={`btn-red mt-4 w-full justify-center ${!brand ? "pointer-events-none opacity-40" : ""}`} href={whatsappUrl(`Hi ProGear Mats, I need mats for my ${brand}.`)} target="_blank" rel="noreferrer">Check availability <span aria-hidden="true">↗</span></a><p className="mt-4 text-center text-xs text-zinc-600">No payment required. We’ll reply with suitable options.</p></div></div></section>
    </>
  );
}
