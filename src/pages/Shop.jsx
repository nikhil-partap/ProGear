import { useState } from "react";
import CarFinder from "../components/CarFinder";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function Shop() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const categories = ["All", ...new Set(products.map(product => product.category))];
  const shown = products
    .filter(product => filter === "All" || product.category === filter)
    .filter(product => `${product.name} ${product.category} ${product.material}`.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : 0);

  return (
    <main className="min-h-screen pb-24 pt-20">
      <section className="shop-hero">
        <div className="page py-24">
          <p className="eyebrow">Compare the range</p>
          <div className="section-head mt-4"><h1 className="title">Choose 7D or 9D.</h1><p className="max-w-md leading-7 text-zinc-400">Browse the two confirmed ProGear collections, then select your vehicle to verify the exact pattern, finish and availability.</p></div>
        </div>
      </section>

      <section className="page py-14">
        <div className="shop-toolbar">
          <label className="search-field"><span aria-hidden="true">⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search collections" aria-label="Search collections" /></label>
          <select className="sort-field" value={sort} onChange={event => setSort(event.target.value)} aria-label="Sort products"><option value="featured">Featured first</option><option value="name">Name: A–Z</option></select>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">{categories.map(category => <button key={category} onClick={() => setFilter(category)} className={`filter ${filter === category ? "active" : ""}`} aria-pressed={filter === category}>{category}</button>)}</div>
        <div className="mt-8 flex items-center justify-between border-b border-white/10 pb-4 text-xs text-zinc-600"><span>{shown.length} {shown.length === 1 ? "collection" : "collections"}</span><span>Model-specific fit available</span></div>

        {shown.length ? <div className="mt-8 grid gap-5 sm:grid-cols-2">{shown.map(product => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><span>⌕</span><h2>No collections found</h2><p>Try another search or clear the active filter.</p><button className="btn-dark mt-5" onClick={() => { setQuery(""); setFilter("All"); }}>Clear filters</button></div>}
      </section>

      <section className="page pt-10"><div className="fit-panel compact-panel"><div><p className="eyebrow">Not sure where to start?</p><h2 className="text-3xl font-black tracking-tight sm:text-4xl">Check your car’s fit.</h2><p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">Select your exact car and we’ll recommend the right collection.</p></div><CarFinder compact /></div></section>
    </main>
  );
}
