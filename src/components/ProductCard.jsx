import { Link } from "react-router-dom";
import { whatsappUrl } from "../data";

export default function ProductCard({ product }) {
  const message = `Hi ProGear Mats, I want to enquire about ${product.model} ${product.type} mats.`;
  return (
    <article className="catalog-card">
      <Link to={`/product/${product.id}`} className="catalog-image-link" aria-label={`View ${product.model} fitment`}>
        <img src={product.image} alt={`${product.model} ${product.type} car mat fitment`} loading="lazy" />
        <span className="fitment-badge">{product.type}</span>
      </Link>
      <div className="catalog-card-body">
        <p className="card-kicker">{product.confirmed ? "Fitment available to confirm" : "Gallery fitment · confirm details"}</p>
        <h3><Link to={`/product/${product.id}`}>{product.model}</Link></h3>
        <p className="card-meta">Custom-fit {product.type} mat pattern</p>
        <a className="card-whatsapp" href={whatsappUrl(message)} target="_blank" rel="noreferrer">Enquire on WhatsApp <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}
