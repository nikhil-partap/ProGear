import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card group">
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-zinc-900"><img src={product.image} alt={product.name} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" /></Link>
      <div className="p-5"><p className="eyebrow">{product.category}</p><div className="mt-2 flex items-start justify-between gap-4"><div><h3 className="text-xl font-bold">{product.name}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{product.material}</p></div><Link to={`/product/${product.id}`} className="round-link" aria-label={`View ${product.name}`}>↗</Link></div></div>
    </article>
  );
}
