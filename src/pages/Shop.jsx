import { useMemo, useState } from "react";
import CarFinder from "../components/CarFinder";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function Shop() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => products.filter(product => (filter === "All" || product.type === filter) && product.model.toLowerCase().includes(query.toLowerCase())), [filter, query]);
  return <main className="page page-top"><section className="page-intro"><p className="eyebrow">Car-wise catalogue</p><h1 className="page-title">Find mats for<br /><span>your car.</span></h1><p className="page-lede">Browse real ProGear fitment photos. Select a model to see the gallery and enquire directly on WhatsApp.</p></section><section className="catalogue-tools"><label className="search-field"><span aria-hidden="true">⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search your car model" aria-label="Search car models" /></label><div className="filter-row" aria-label="Filter by fitment type">{["All", "7D", "9D"].map(type => <button key={type} type="button" className={`filter-pill ${filter === type ? "active" : ""}`} onClick={() => setFilter(type)} aria-pressed={filter === type}>{type === "All" ? "All fitments" : `${type} mats`}</button>)}</div></section><div className="catalogue-count"><span>{filtered.length} vehicle fitments</span><span>Real client gallery images</span></div>{filtered.length ? <div className="catalog-grid">{filtered.map(product => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><span>⌕</span><h2>No vehicle found</h2><p>Try another model or clear the search.</p><button className="btn-secondary" type="button" onClick={() => { setQuery(""); setFilter("All"); }}>Clear search</button></div>}<section className="finder-section shop-finder"><div className="finder-panel compact"><div><p className="eyebrow">Need a recommendation?</p><h2>Check your exact fit.</h2><p>Share your brand and model for a direct WhatsApp conversation.</p></div><CarFinder compact /></div></section></main>;
}
