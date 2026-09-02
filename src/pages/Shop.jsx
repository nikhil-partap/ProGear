import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function Shop() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(products.map(product => product.category))];
  const shown = filter === "All" ? products : products.filter(product => product.category === filter);

  return <main className="page min-h-screen pb-24 pt-36"><p className="eyebrow">Shop the range</p><div className="section-head mt-3"><h1 className="title">Find your finish.</h1><p className="max-w-md text-zinc-500">Every ProGear collection can be tailored to compatible car models. Ask us for current colours and availability.</p></div><div className="mt-10 flex flex-wrap gap-2">{categories.map(category => <button key={category} onClick={() => setFilter(category)} className={`filter ${filter === category ? "active" : ""}`}>{category}</button>)}</div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{shown.map(product => <ProductCard key={product.id} product={product} />)}</div></main>;
}
