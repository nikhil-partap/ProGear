import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, whatsappUrl } from "../data";

export default function Product() {
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const [color, setColor] = useState(product?.colors[0] || "");

  useEffect(() => setColor(product?.colors[0] || ""), [product]);

  if (!product) return <main className="page grid min-h-screen place-items-center pt-20"><div className="text-center"><h1 className="title">Product not found.</h1><Link to="/shop" className="btn-red mt-6">Back to collections</Link></div></main>;

  const related = products.filter(item => item.id !== product.id).slice(0, 2);
  const selectedFinish = color ? ` in ${color}` : "";

  return (
    <main className="page min-h-screen py-32">
      <Link className="text-sm text-zinc-500 hover:text-white" to="/shop">← Back to collections</Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="product-visual"><img src={product.image} alt={product.name} className="aspect-square w-full object-cover" /><div className="image-tag">{product.imageLabel}</div></div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow">{product.category} collection</p>
          <h1 className="title mt-3">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-400">{product.description}</p>
          {product.colors.length > 0 && <div className="mt-8 border-y border-white/10 py-6"><p className="mb-4 text-sm font-semibold">Choose a finish</p><div className="flex flex-wrap gap-2">{product.colors.map(item => <button key={item} onClick={() => setColor(item)} className={`filter ${color === item ? "active" : ""}`} aria-pressed={color === item}>{item}</button>)}</div></div>}
          <ul className="my-7 grid gap-3 text-sm text-zinc-300">{product.highlights.map(item => <li key={item} className="flex gap-3"><span className="text-red-500">✓</span>{item}</li>)}</ul>
          <a className="btn-red w-full justify-center sm:w-fit" href={whatsappUrl(`Hi ProGear Mats, I'm interested in ${product.name}${selectedFinish}. My car is:`)} target="_blank" rel="noreferrer">Enquire on WhatsApp <span aria-hidden="true">↗</span></a>
          <p className="mt-4 text-xs text-zinc-600">We’ll confirm compatibility, availability and pricing before you order.</p>
        </div>
      </div>

      <section className="product-details">
        <div><p className="eyebrow">The details</p><h2 className="mt-4 text-3xl font-black tracking-tight">Built around your cabin.</h2><p className="mt-4 max-w-xl leading-7 text-zinc-500">Exact dimensions vary by car model. Share your vehicle year and variant so every contour can be confirmed before fitment.</p></div>
        <dl className="spec-grid"><div><dt>Material</dt><dd>{product.material}</dd></div><div><dt>Coverage</dt><dd>{product.coverage}</dd></div><div><dt>Construction</dt><dd>{product.thickness}</dd></div><div><dt>Care</dt><dd>{product.care}</dd></div><div><dt>Installation</dt><dd>{product.fitment}</dd></div><div><dt>Available finishes</dt><dd>{product.colors.length ? `${product.colors.length} options` : "Confirm on WhatsApp"}</dd></div></dl>
      </section>

      <section className="compatibility-panel">
        <div><p className="eyebrow">Confirmed fitments</p><h2 className="mt-4 text-3xl font-black tracking-tight">Currently available for.</h2><p className="mt-4 max-w-xl leading-7 text-zinc-500">These patterns are currently confirmed. The exact model year and transmission still need to be checked before ordering.</p></div>
        <ul>{product.compatibleModels.map(model => <li key={model}>{model}</li>)}</ul>
      </section>

      <section className="pt-24"><div className="section-head"><div><p className="eyebrow">You may also like</p><h2 className="mt-3 text-3xl font-black tracking-tight">Compare another collection.</h2></div><Link className="text-link" to="/shop">View all collections ↗</Link></div><div className="mt-8 grid gap-5 sm:grid-cols-2">{related.map(item => <ProductCard key={item.id} product={item} />)}</div></section>
    </main>
  );
}
