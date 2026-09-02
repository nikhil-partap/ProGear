import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products, whatsappUrl } from "../data";

export default function Product() {
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const [color, setColor] = useState(product?.colors[0] || "");

  if (!product) return <main className="page grid min-h-screen place-items-center pt-20"><div className="text-center"><h1 className="title">Product not found.</h1><Link to="/shop" className="btn-red mt-6">Back to collections</Link></div></main>;

  return <main className="page min-h-screen py-32"><Link className="text-sm text-zinc-500 hover:text-white" to="/shop">← Back to collections</Link><div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16"><div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900"><img src={product.image} alt={product.name} className="aspect-square w-full object-cover" /></div><div className="flex flex-col justify-center"><p className="eyebrow">{product.category} collection</p><h1 className="title mt-3">{product.name}</h1><p className="mt-5 text-lg leading-8 text-zinc-400">{product.description}</p><div className="mt-8 border-y border-white/10 py-6"><p className="mb-4 text-sm font-semibold">Choose a finish</p><div className="flex flex-wrap gap-2">{product.colors.map(item => <button key={item} onClick={() => setColor(item)} className={`filter ${color === item ? "active" : ""}`}>{item}</button>)}</div></div><ul className="my-7 grid gap-3 text-sm text-zinc-300">{product.highlights.map(item => <li key={item} className="flex gap-3"><span className="text-red-500">✓</span>{item}</li>)}</ul><a className="btn-red w-full justify-center sm:w-fit" href={whatsappUrl(`Hi ProGear Mats, I'm interested in ${product.name} in ${color}. My car is:`)} target="_blank" rel="noreferrer">Enquire on WhatsApp <span aria-hidden="true">↗</span></a></div></div></main>;
}
